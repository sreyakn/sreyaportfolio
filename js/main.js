// Edit this list to add, remove or reorder graphic design work.
// file: image in /images · w/h: pixel size (stops layout jumping) · alt: image description
const works = [
  {file:"stylecrate-new-drop", w:1000, h:1500, title:"Stylecrate: New drop", type:"Fashion campaign", alt:"Purple streetwear poster with a model in a cap, headphones and tracksuit on a starry dark background"},
  {file:"velin-jewelry", w:1035, h:1500, title:"Velin & Co.", type:"Jewelry promotion", alt:"Beige jewelry collage with gold rings and earrings and a new arrival call to action"},
  {file:"stylecrate-trendy-timeless", w:1000, h:1500, title:"Trendy & Timeless", type:"Fashion poster", alt:"Blue and white poster with bold type and a black and white photo of a model in a cap and headphones"},
  {file:"brew-bliss-poster", w:1250, h:1500, title:"Brew & Bliss Cafe", type:"Cafe poster", alt:"Cafe poster with a latte art cup, a thatched-roof coffee shop and a list of features"},
  {file:"maia-estates", w:1056, h:1500, title:"MAIA Estates", type:"Real estate layout", alt:"Blue real estate brochure with a night photo of a luxury home, room photos and unit details"},
  {file:"stylecrate-cherries-tee", w:1000, h:1500, title:"Cherries oversized tee", type:"Apparel ad", alt:"Black oversized cherries t-shirt advertisement on a grey striped background"},
  {file:"strawberry-ice-cream", w:937, h:1500, title:"Strawberry ice cream", type:"Product ad", alt:"Pink strawberry ice cream cone advertisement with swirling background and floating strawberries"},
  {file:"stylecrate-outfit-labels", w:736, h:981, title:"Outfit breakdown", type:"Social post", alt:"Model in a bomber jacket, brown crop top and leather shorts with arrows labelling each piece"},
  {file:"voyago-kerala", w:736, h:736, title:"Enchanting Kerala", type:"Travel promotion", alt:"Kerala tea hills travel poster with a package price, itinerary and booking button"},
  {file:"stylecrate-new-arrivals", w:1500, h:375, title:"Trendy fashion banner", type:"Web banner", alt:"Wide maroon banner with four models in black outfits and the words Trendy Fashion"},
  {file:"brew-bliss-banner", w:1500, h:750, title:"A brew for every mood", type:"Web banner", alt:"Dark coffee banner with a cup of coffee and the line A Brew for Every Mood"},
  {file:"healthy-bowl", w:1500, h:750, title:"Healthy Bowl", type:"Web banner", alt:"Salad bowl banner with the headline Healthy choices, happy life on a lime green background"}
];

const g = document.getElementById("gallery");
works.forEach((p, i) => {
  const f = document.createElement("figure");
  f.tabIndex = 0;
  f.innerHTML = `<img src="images/${p.file}.webp" width="${p.w}" height="${p.h}" alt="${p.alt}" ${i > 2 ? 'loading="lazy"' : ""} decoding="async">
  <figcaption><strong>${p.title}</strong><span>${p.type} · Design concept</span></figcaption>`;
  g.appendChild(f);
});

// Lightbox
const lb = document.getElementById("lb"), lbImg = lb.querySelector("img"), lbCap = lb.querySelector("p");
const open = f => { const i = f.querySelector("img"); lbImg.src = i.src; lbImg.alt = i.alt; lbCap.textContent = f.querySelector("figcaption").textContent; lb.showModal(); };
g.addEventListener("click", e => { const f = e.target.closest("figure"); if (f) open(f); });
g.addEventListener("keydown", e => { if (e.key === "Enter" && e.target.matches("figure")) open(e.target); });
document.getElementById("lbx").onclick = () => lb.close();
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".rv").forEach(el => io.observe(el));
