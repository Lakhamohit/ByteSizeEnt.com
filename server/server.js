// Minimal Express API starter. Demo records are in-memory; replace with PostgreSQL queries.
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
  { id: 1, slug: "the-quiet-between", title: "The Quiet Between", category: "FILMAKA", genre: "Drama", year: 2025, runtime_seconds: 1080, language: "English", country: "United Kingdom", director: "Elena Brooks", synopsis: "Two estranged siblings return to the place they once called home.", status: "published" },
  { id: 2, slug: "after-the-signal", title: "After the Signal", category: "FILMAIKA", genre: "Science Fiction", year: 2026, runtime_seconds: 720, language: "Hindi", country: "India", director: "Arjun Mehta", synopsis: "A radio operator receives a message from a future that no longer exists.", status: "published" }
];

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "ByteSizeEnt API" }));
app.get("/api/titles", (req, res) => {
  const { category, genre, q } = req.query;
  let results = titles.filter(t => t.status === "published");
  if (category && ["FILMAKA", "FILMAIKA"].includes(String(category).toUpperCase())) {
    results = results.filter(t => t.category === String(category).toUpperCase());
  }
  if (genre) results = results.filter(t => t.genre.toLowerCase() === String(genre).toLowerCase());
  if (q) {
    const query = String(q).toLowerCase();
    results = results.filter(t => [t.title, t.director, t.genre, t.synopsis].join(" ").toLowerCase().includes(query));
  }
  res.json({ data: results, count: results.length });
});
app.get("/api/titles/:slug", (req, res) => {
  const title = titles.find(t => t.slug === req.params.slug && t.status === "published");
  if (!title) return res.status(404).json({ error: "Title not found" });
  res.json({ data: title });
});
app.post("/api/newsletter", (req, res) => {
  const email = String(req.body.email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: "A valid email is required." });
  // TODO: store a consent timestamp and subscribe via a mailing-list provider.
  res.status(202).json({ message: "Signup accepted for prototype. Connect mailing list storage to persist it." });
});
app.listen(PORT, () => console.log(`ByteSizeEnt API listening on http://localhost:${PORT}`));
