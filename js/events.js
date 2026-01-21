const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const posterPreview = document.getElementById("posterPreview");
const posterPreviewImg = document.getElementById("posterPreviewImg");
const posterClose = document.getElementById("posterClose");
hamburger.onclick = () => navLinks.classList.toggle("open");

/* ================= EVENTS DATA ================= */

const events = [
  {
    name: "AVINYA-2026",
    inst: "RSCOE",
    desc: "Coding, AI & system design.",
    coord: "Swati Paralkar · 9309513956",
    register: "https://www.atincampus.co.in/event-list",
    rulebook: "https://drive.google.com/file/d/1evJy_VAnULUf1hZCYH3P6qKRYhbAky9X/view",
    poster: "assets/eventsImages/avinya.jpeg"
  },
  {
    name: "PRAKALP",
    inst: "RSCOE",
    desc: "IT innovation challenge.",
    coord: "Pallavi Tekade · 8483934912",
    rulebook:"#",
    register: "https://www.atincampus.co.in/event-list",
    poster: "assets/eventsImages/prakalpa.jpeg"
  },
  {
    name: "ABHYUDAYA",
    inst: "RSCOE",
    desc: "Techno-business & analytics competition.",
    coord: "Neeraj Sathawane · 9595497402",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/abhyudaya.jpeg"
  },
  {
    name: "ELECTRONOVA",
    inst: "RSCOE",
    desc: "Electronics & IoT based challenges.",
    coord: "Ajit Tatugade · 8087274140",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/electronova.jpeg"
  },
  {
    name: "CATRACK",
    inst: "RSCOE",
    desc: "Route following robotic car competition.",
    coord: "Amruta Uduparkar · 8788799157",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/catrack.png"
  },
  {
    name: "AUTOMATION ASCENSION 3.0",
    inst: "RSCOE",
    desc: "Automation & robotics innovation event.",
    coord: "Ravi Shankar Rai · 8948271201",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/automationascension.png"
  },
  {
    name: "TECHNOXPLOSION",
    inst: "RSCOE",
    desc: "Interdisciplinary engineering challenges.",
    coord: "Amol Patil · 9673971723",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/coming_soon.webp"
  },
  {
    name: "IDEATHON-2026",
    inst: "RSCOE",
    desc: "Mechanical ideation & innovation.",
    coord: "R. P. Sonawane · 9503305104",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/coming_soon.webp"
  },
  {
    name: "SUSTAINACAST",
    inst: "RSCOE",
    desc: "National-level sustainable concrete design competition.",
    coord: "Ramatai Pawar · 9307475018",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/sustainacast.jpeg"
  },
  {
    name: "SHARK TANK",
    inst: "RSCOE",
    desc: "Startup pitching & business innovation.",
    coord: "Pramila Parekh · 9890112348",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/coming_soon.webp"
  },
  {
    name: "TANTRA-UTSAV",
    inst: "Polytechnic",
    desc: "National level polytechnic technical event.",
    coord: "Mayuri More · 9970897952",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/tantrautsav.jpeg"
  },
  {
    name: "LIBCAST CHALLENGE",
    inst: "Other",
    desc: "Reels & content creation competition by library.",
    coord: "Library Team",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/libcast.jpeg"
  },
  {
    name: "PHARMACY IDEATHON",
    inst: "Other",
    desc: "Healthcare & pharma innovation ideathon.",
    coord: "Trupti Deshpande · 7709184076",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/coming_soon.webp"
  },
  {
    name: "DIGITAL TEACHING SKILL",
    inst: "Other",
    desc: "Teaching skill development competition.",
    coord: "RSCOED Faculty",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/coming_soon.webp"
  },
  {
    name: "TECHNOTHON",
    inst: "Other",
    desc: "Tech marathon & multi-event challenge.",
    coord: "Rasika Patil · 9890906515",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/technothon.jpeg"
  },
  {
    name: "TECHNOMANTHAN",
    inst: "Other",
    desc: "National-level problem solving contest.",
    coord: "Suraj Gangawane · 9130290541",
    register: "https://www.atincampus.co.in/event-list",
    rulebook:"#",
    poster: "assets/eventsImages/technomanthan.png"
  }
];

/* ================= RENDER LOGIC ================= */

const grid = document.getElementById("eventsGrid");
const search = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-tabs button");

const modal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalDept = document.getElementById("modalDept");
const modalDesc = document.getElementById("modalDesc");
const modalCoord = document.getElementById("modalCoord");
const modalActions = document.getElementById("modalActions");
const closeModal = document.getElementById("closeModal");

let activeFilter = "all";

function render() {
  grid.innerHTML = "";
  const q = search.value.toLowerCase();

  events.forEach(e => {
    if (
      (activeFilter === "all" || e.inst === activeFilter) &&
      e.name.toLowerCase().includes(q)
    ) {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <div class="poster" style="--poster-img:url('${e.poster}')">
          <img src="${e.poster}" alt="${e.name}">
        </div>
        <h3 class="event-title">${e.name}</h3>
        <span class="tap-hint">View Event Details</span>
      `;
      card.onclick = () => openModal(e);
      // Poster click → fullscreen preview
      const posterImg = card.querySelector(".poster img");
      if (posterImg) {
        posterImg.onclick = (ev) => {
          ev.stopPropagation(); // prevent opening event modal
          openPosterPreview(e.poster);
        };
      }

      grid.appendChild(card);
    }
  });
}

filterBtns.forEach(btn => {
  btn.onclick = () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  };
});

search.oninput = render;

function openModal(e) {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  modalTitle.textContent = e.name;
  modalDept.textContent = e.inst;
  modalDesc.textContent = e.desc;
  modalCoord.textContent = e.coord;

  // Always show Register button
  modalActions.innerHTML = `
    <a href="${e.register}" target="_blank">
      <button class="btn-register">Register Now</button>
    </a>
  `;

  // Show Rule Book ONLY if link exists
  if (e.rulebook) {
    modalActions.innerHTML += `
      <a href="${e.rulebook}" target="_blank">
        <button class="btn-rulebook">Rule Book</button>
      </a>
    `;
  }
}





closeModal.onclick = () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
};

function openPosterPreview(src){
  posterPreviewImg.src = src;
  posterPreview.style.display = "flex";
  document.body.classList.add("modal-open");
}

function closePosterPreview(){
  posterPreview.style.display = "none";
  posterPreviewImg.src = "";
  document.body.classList.remove("modal-open");
}

posterClose.onclick = closePosterPreview;

// Close on background click
posterPreview.onclick = (e) => {
  if(e.target === posterPreview) closePosterPreview();
};

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && posterPreview.style.display === "flex"){
    closePosterPreview();
  }
});

render();


