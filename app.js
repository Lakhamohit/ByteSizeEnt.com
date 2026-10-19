const films = [
  {id:1,title:"The Quiet Between",type:"FILMAKA",genre:"Drama",year:2025,runtime:"18 min",country:"United Kingdom",director:"Elena Brooks",language:"English",mood:"Reflective",rating:"13+",image:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",summary:"Two estranged siblings return to the place they once called home, and discover what silence has been hiding.",format:"Short film"},
  {id:2,title:"After the Signal",type:"FILMKA",genre:"Science Fiction",year:2026,runtime:"12 min",country:"India",director:"Arjun Mehta",language:"Hindi",mood:"Mysterious",rating:"13+",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",summary:"A lone radio operator receives a message that seems to arrive from a future that no longer exists.",format:"AI film"},
  {id:3,title:"Small Hours",type:"FILMKA",genre:"Thriller",year:2024,runtime:"21 min",country:"United States",director:"Marcus Reed",language:"English",mood:"Tense",rating:"16+",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",summary:"A night-shift worker notices a pattern in the empty building next door — and someone notices him noticing.",format:"Short film"},
  {id:4,title:"A Garden of Echoes",type:"FILMKA",genre:"Drama",year:2026,runtime:"9 min",country:"Portugal",director:"Inês Duarte",language:"Portuguese",mood:"Hopeful",rating:"All ages",image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",summary:"In a city where memories grow as plants, one gardener tries to save the last memory of her mother.",format:"AI film"},
  {id:5,title:"The Last Stop",type:"FILMKA",genre:"Documentary",year:2025,runtime:"26 min",country:"Kenya",director:"Nia Okafor",language:"English, Swahili",mood:"Human",rating:"All ages",image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",summary:"At a rural bus stop, travellers share the small hopes and unexpected kindnesses that connect their journeys.",format:"Documentary"},
  {id:6,title:"Good Company",type:"FILMKA",genre:"Comedy",year:2025,runtime:"7 min",country:"Canada",director:"Sam Chen",language:"English",mood:"Playful",rating:"All ages",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",summary:"An introvert trains an AI assistant to make small talk. The assistant gets very, very good at it.",format:"AI short"}

  /* FILMAIKA_Catalog_Assignment2_Sample */
  {id: 7, title: "The Five Thieves of the Soul", type: "FILMAIKA", genre: "Drama", year: 2026, runtime: "8h 30m", country: "United States", director: "Staff / Production", language: "English", mood: "Spiritual / Thriller", rating: "13+", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Soul, Ego, Attachment, Desire", format: "16:9 / 9:16"},
  {id: 8, title: "The Disciples", type: "FILMAIKA", genre: "Historical / Drama", year: 2026, runtime: "21h 00m", country: "United States", director: "Staff / Production", language: "English", mood: "Faith / Deeply reflective", rating: "13+", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Desert, Testing, Faith, Journey, Jerusalem", format: "16:9 / 9:16"},
  {id: 9, title: "Ornamental Christmas", type: "FILMAIKA", genre: "Family", year: 2026, runtime: "12h 15m", country: "United States", director: "Staff / Production", language: "English", mood: "Holiday / Animation", rating: "All Ages", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Christmas, Ornaments, Magic, Holiday", format: "16:9 / 9:16"},
  {id: 10, title: "Jackson", type: "FILMAIKA", genre: "Documentary", year: 2026, runtime: "5h 00m", country: "United States", director: "Staff / Production", language: "English", mood: "Animated / Art", rating: "All Ages", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Pencil, Sketch, Rhythm, Dance", format: "16:9 / 9:16"},
  {id: 11, title: "FORTY DAYS", type: "FILMAIKA", genre: "Historical", year: 2026, runtime: "3h 20m", country: "United States", director: "Staff / Production", language: "English", mood: "Faith / Drama", rating: "13+", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Desert, Testing, Faith, Journey", format: "16:9 / 9:16"},
  {id: 12, title: "Crown Of Shadows", type: "FILMAIKA", genre: "Thriller", year: 2026, runtime: "2h 45m", country: "United States", director: "Staff / Production", language: "English", mood: "Action / Crime", rating: "16+", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Bronx, Syringe, Thriller, Shadow", format: "16:9 / 9:16"},
  {id: 13, title: "Chinese Treasure Hunt", type: "FILMAIKA", genre: "Adventure", year: 2026, runtime: "N/A", country: "United States", director: "Staff / Production", language: "English", mood: "Action / Mystery", rating: "PG", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Treasure, China, Hunt, Mystery", format: "16:9 / 9:16"},
  {id: 14, title: "Beano", type: "FILMAIKA", genre: "Animation", year: 2026, runtime: "N/A", country: "United States", director: "Staff / Production", language: "English", mood: "Kids / Slapstick", rating: "All Ages", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Cartoons, Mischief, Fun", format: "16:9 / 9:16"},
  {id: 15, title: "Bananaman", type: "FILMAIKA", genre: "Animation", year: 2026, runtime: "N/A", country: "United States", director: "Staff / Production", language: "English", mood: "Superhero / Comedy", rating: "All Ages", image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Banana, Hero, Comedy, Action", format: "16:9 / 9:16"},
  {id: 16, title: "BABYTEETH", type: "FILMAIKA", genre: "Drama", year: 2026, runtime: "N/A", country: "United States", director: "Staff / Production", language: "English", mood: "Indie / Coming-of-Age", rating: "16+", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Teeth, Youth, Drama, Life", format: "16:9 / 9:16"},
  {id: 17, title: "American Party", type: "FILMAIKA", genre: "Comedy", year: 2026, runtime: "N/A", country: "United States", director: "Staff / Production", language: "English", mood: "Party / Teen", rating: "16+", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Party, America, Fun, Chaos", format: "16:9 / 9:16"},
  {id: 18, title: "A WILD GOOSE CHASE", type: "FILMAIKA", genre: "Comedy", year: 2026, runtime: "N/A", country: "United States", director: "Staff / Production", language: "English", mood: "Adventure", rating: "PG", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85", summary: "Keywords: Chase, Mischief, Goose, Town", format: "16:9 / 9:16"}
  /* FILMAIKA_Catalog_Assignment2_Sample */
];
let activeType = "ALL";
let searchTerm = "";
let activeGenre = "ALL";
const grid = document.getElementById("filmGrid");
const emptyState = document.getElementById("emptyState");
const dialog = document.getElementById("filmDialog");
const dialogContent = document.getElementById("dialogContent");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function visibleFilms() {
  return films.filter(f => {
    const matchesType = activeType === "ALL" || f.type === activeType;
    const matchesGenre = activeGenre === "ALL" || f.genre === activeGenre;
    const haystack = [f.title,f.director,f.genre,f.country,f.language,f.summary].join(" ").toLowerCase();
    return matchesType && matchesGenre && haystack.includes(searchTerm.toLowerCase());
  });
}
function renderFilms() {
  const list = visibleFilms();
  grid.innerHTML = list.map(f => `
    <article class="film-card" tabindex="0" role="button" aria-label="View ${escapeHtml(f.title)} details" data-id="${f.id}">
      <div class="poster"><img loading="lazy" src="${escapeHtml(f.image)}" alt="Cinematic still for ${escapeHtml(f.title)}"><span class="poster-badge">${escapeHtml(f.type)}</span><span class="poster-play">▶</span></div>
      <div class="film-meta-top"><span>${escapeHtml(f.genre.toUpperCase())}</span><span>${f.year}</span></div>
      <h3 class="---">${escapeHtml(f.title)}</h3><p class="film-summary">${escapeHtml(f.summary)}</p>
      <div class="film-details-line"><span>${escapeHtml(f.runtime)}</span><span>${escapeHtml(f.country)}</span><span>${escapeHtml(f.format)}</span></div>
    </article>`).join("");
  emptyState.hidden = list.length > 0;
  grid.hidden = list.length === 0;
  document.querySelectorAll(".chip").forEach(b => b.classList.toggle("selected", b.dataset.filter === activeType));
}
function openFilm(id) {
  const f = films.find(item => item.id === Number(id));
  if (!f) return;
  dialogContent.innerHTML = `<div class="dialog-hero"><img src="${escapeHtml(f.image)}" alt=""><h2>${escapeHtml(f.title)}</h2></div><div class="dialog-body"><div class="eyebrow">${escapeHtml(f.type)} · ${escapeHtml(f.genre.toUpperCase())}</div><p>${escapeHtml(f.summary)}</p><div class="dialog-facts"><span>${f.year}</span><span>${escapeHtml(f.runtime)}</span><span>${escapeHtml(f.country)}</span><span>${escapeHtml(f.language)}</span><span>${escapeHtml(f.rating)}</span></div><p><strong>Directed by</strong> ${escapeHtml(f.director)}</p><p><strong>Mood:</strong> ${escapeHtml(f.mood)} &nbsp; <strong>Format:</strong> ${escapeHtml(f.format)}</p><button class="button button-dark" id="prototypeWatch">Watch film <span>▶</span></button><p id="watchMessage" class="watch-message">Video playback will connect when the production media library is integrated.</p></div>`;
  dialog.showModal();
  document.getElementById("prototypeWatch").addEventListener("click", () => {
    document.getElementById("watchMessage").textContent = "This prototype uses sample catalogue data. Connect a licensed video source to enable playback.";
  });
}
grid.addEventListener("click", e => { const card = e.target.closest(".film-card"); if (card) openFilm(card.dataset.id); });
grid.addEventListener("keydown", e => { const card = e.target.closest(".film-card"); if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openFilm(card.dataset.id); } });
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
document.querySelectorAll(".chip").forEach(btn => btn.addEventListener("click", () => { activeType = btn.dataset.filter; renderFilms(); }));
document.querySelectorAll(".world-link").forEach(link => link.addEventListener("click", () => { activeType = link.dataset.filter; renderFilms(); }));
document.getElementById("genreFilter").addEventListener("change", e => { activeGenre = e.target.value; renderFilms(); });
document.getElementById("searchInput").addEventListener("input", e => { searchTerm = e.target.value.trim(); renderFilms(); });
document.getElementById("loadMore").addEventListener("click", () => {
  document.getElementById("loadMore").textContent = "You're viewing all sample titles";
  document.getElementById("loadMore").disabled = true;
  document.getElementById("loadMore").style.opacity = ".6";
});
document.getElementById("searchToggle").addEventListener("click", () => { document.getElementById("searchOverlay").hidden = false; document.getElementById("globalSearch").focus(); });
document.getElementById("closeSearch").addEventListener("click", () => { document.getElementById("searchOverlay").hidden = true; });
document.getElementById("globalSearch").addEventListener("input", e => {
  searchTerm = e.target.value.trim(); document.getElementById("searchInput").value = e.target.value; renderFilms();
});
document.getElementById("globalSearch").addEventListener("keydown", e => { if (e.key === "Escape") document.getElementById("searchOverlay").hidden = true; if (e.key === "Enter") { document.getElementById("searchOverlay").hidden = true; document.getElementById("explore").scrollIntoView(); }});
document.getElementById("mobileMenu").addEventListener("click", () => document.querySelector(".main-nav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a => a.addEventListener("click", () => document.querySelector(".main-nav").classList.remove("open")));
const signInDialog = document.getElementById("signInDialog");
document.getElementById("signInBtn").addEventListener("click", () => signInDialog.showModal());
document.getElementById("closeSignIn").addEventListener("click", () => signInDialog.close());
document.getElementById("signinForm").addEventListener("submit", e => { e.preventDefault(); document.getElementById("signinMessage").textContent = "Demo only — connect an authentication provider to enable member accounts."; });
document.getElementById("newsletterForm").addEventListener("submit", e => { e.preventDefault(); document.getElementById("newsletterMessage").textContent = "Thanks for your interest! Newsletter signup needs a connected mailing-list service."; });
renderFilms();
