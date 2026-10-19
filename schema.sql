-- PostgreSQL starter schema for ByteSizeEnt
CREATE TYPE title_category AS ENUM ('FILMAKA', 'FILMAIKA');
CREATE TYPE publication_status AS ENUM ('draft', 'review', 'published', 'archived');

CREATE TABLE people (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name TEXT NOT NULL,
  profile_slug TEXT UNIQUE,
  bio TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE titles (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  series_name TEXT,
  episode_number INTEGER CHECK (episode_number IS NULL OR episode_number > 0),
  runtime_seconds INTEGER CHECK (runtime_seconds IS NULL OR runtime_seconds >= 0),
  genre TEXT,
  subgenre TEXT,
  mood TEXT,
  language TEXT,
  country TEXT,
  release_year SMALLINT CHECK (release_year IS NULL OR release_year BETWEEN 1888 AND 2200),
  format TEXT,
  age_rating TEXT,
  category title_category NOT NULL,
  rights_status TEXT NOT NULL DEFAULT 'pending',
  transcript TEXT,
  synopsis TEXT,
  thumbnail_url TEXT,
  poster_url TEXT,
  video_asset_key TEXT,
  publication_status publication_status NOT NULL DEFAULT 'draft',
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE title_credits (
  title_id BIGINT NOT NULL REFERENCES titles(id) ON DELETE CASCADE,
  person_id BIGINT NOT NULL REFERENCES people(id) ON DELETE CASCADE,
  credit_role TEXT NOT NULL, -- cast, director, writer, producer, cinematographer, etc.
  billing_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (title_id, person_id, credit_role)
);

CREATE TABLE title_keywords (
  title_id BIGINT NOT NULL REFERENCES titles(id) ON DELETE CASCADE,
  keyword TEXT NOT NULL,
  PRIMARY KEY (title_id, keyword)
);

CREATE TABLE collections (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE collection_titles (
  collection_id BIGINT NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  title_id BIGINT NOT NULL REFERENCES titles(id) ON DELETE CASCADE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (collection_id, title_id)
);

CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  auth_provider TEXT,
  auth_subject TEXT,
  role TEXT NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

CREATE TABLE watchlist (
  user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title_id BIGINT NOT NULL REFERENCES titles(id) ON DELETE CASCADE,
  added_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, title_id)
);

CREATE TABLE newsletter_subscribers (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  consented_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ
);

CREATE INDEX titles_category_status_idx ON titles(category, publication_status);
CREATE INDEX titles_genre_year_idx ON titles(genre, release_year DESC);
CREATE INDEX titles_featured_idx ON titles(featured) WHERE featured = TRUE;
CREATE INDEX title_keywords_keyword_idx ON title_keywords(keyword);
CREATE INDEX titles_transcript_fts_idx ON titles USING GIN (to_tsvector('english', coalesce(title,'') || ' ' || coalesce(synopsis,'') || ' ' || coalesce(transcript,'')));