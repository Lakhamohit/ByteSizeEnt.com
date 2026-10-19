const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:3000" }));
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "..", "public")));

const titles = [
  { id: 1, slug: "the-quiet-between", title: "The Quiet Between", category: "FILMAKA", genre: "Drama", year: 2025, runtime: "18 min", country: "United Kingdom", director: "Elena Brooks", language: "English", mood: "Reflective", rating: "13+", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", synopsis: "Two estranged siblings return to the place they once called home, and discover what silence has been hiding.", format: "Short film", publication_status: "published" },
  { id: 2, slug: "after-the-signal", title: "After the Signal", category: "FILMAIKA", genre: "Science Fiction", year: 2026, runtime: "12 min", country: "India", director: "Arjun Mehta", language: "Hindi", mood: "Mysterious", rating: "13+", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85", synopsis: "A lone radio operator receives a message that seems to arrive from a future that no longer exists.", format: "AI film", publication_status: "published" },
  { id: 3, slug: "small-hours", title: "Small Hours", category: "FILMAKA", genre: "Thriller", year: 2024, runtime: "21 min", country: "United States", director: "Marcus Reed", language: "English", mood: "Tense", rating: "16+", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85", synopsis: "A night-shift worker notices a pattern in the empty building next door — and someone notices him noticing.", format: "Short film", publication_status: "published" },
  { id: 4, slug: "a-garden-of-echoes", title: "A Garden of Echoes", category: "FILMAIKA", genre: "Drama", year: 2026, runtime: "9 min", country: "Portugal", director: "Inês Duarte", language: "Portuguese", mood: "Hopeful", rating: "All ages", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85", synopsis: "In a city where memories grow as plants, one gardener tries to save the last memory of her mother.", format: "AI film", publication_status: "published" },
  { id: 5, slug: "the-last-stop", title: "The Last Stop", category: "FILMAKA", genre: "Documentary", year: 2025, runtime: "26 min", country: "Kenya", director: "Nia Okafor", language: "English, Swahili", mood: "Human", rating: "All ages", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85", synopsis: "At a rural bus stop, travellers share the small hopes and unexpected kindnesses that connect their journeys.", format: "Documentary", publication_status: "published" },
  { id: 6, slug: "good-company", title: "Good Company", category: "FILMAIKA", genre: "Comedy", year: 2025, runtime: "7 min", country: "Canada", director: "Sam Chen", language: "English", mood: "Playful", rating: "All ages", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85", synopsis: "An introvert trains an AI assistant to make small talk. The assistant gets very, very good at it.", format: "AI short", publication_status: "published" }
];

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "ByteSizeEnt API" }));

app.get("/api/titles", (req, res) => {
  const { category, genre, q } = req.query;
  let results = titles.filter(t => t.publication_status === "published");
  if (category && ["FILMAKA", "FILMAIKA"].includes(String(category).toUpperCase())) {
    results = results.filter(t => t.category === String(category).toUpperCase());
  }
  if (genre && genre !== "ALL") {
    results = results.filter(t => t.genre.toLowerCase() === String(genre).toLowerCase());
  }
  if (q) {
    const query = String(q).toLowerCase();
    results = results.filter(t => [t.title, t.director, t.genre, t.synopsis].join(" ").toLowerCase().includes(query));
  }
  res.json({ data: results, count: results.length });
});

app.get("/api/titles/:slug", (req, res) => {
  const title = titles.find(t => t.slug === req.params.slug && t.publication_status === "published");
  if (!title) return res.status(404).json({ error: "Title not found" });
  res.json({ data: title });
});

app.post("/api/newsletter", (req, res) => {
  const email = String(req.body.email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  res.status(202).json({ message: "Signup accepted for prototype." });
});

app.listen(PORT, () => console.log(`ByteSizeEnt API listening on http://localhost:${PORT}`));
