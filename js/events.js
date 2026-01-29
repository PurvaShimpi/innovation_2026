const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const posterPreview = document.getElementById("posterPreview");
const posterPreviewImg = document.getElementById("posterPreviewImg");
const posterClose = document.getElementById("posterClose");
hamburger.onclick = () => navLinks.classList.toggle("open");

/* ================= EVENTS DATA ================= */

const events = [
  {
    name: "AVINYA-4.0",
    inst: "RSCOE",
    desc: "Coding, AI & system design.",
    coord: "Swati Paralkar · 9309513956",
    register: "https://www.atincampus.co.in/event-details/avinya-4-0-cs-dept",
    rulebook: "https://drive.google.com/file/d/1gmy9QGV25F3vE4b8LglyPpWeB21IwU_G/view?usp=drivesdk",
    poster: "assets/eventsImages/avinya.jpeg"
  },
  {
    name: "PRAKALP",
    inst: "RSCOE",
    desc: "IT innovation challenge.",
    coord: "Pallavi Tekade · 8483934912",
    rulebook:"https://drive.google.com/file/d/16_YHJEMvTrTDIpBr_wi64XFPP8-D7Je8/view?usp=drive_link",
    register: "https://www.atincampus.co.in/event-details/prakalp-2026-it-dept",
    poster: "assets/eventsImages/prakalpa.jpeg"
  },
  {
    name: "ABHYUDAYA",
    inst: "RSCOE",
    desc: "Techno-business & analytics competition.",
    coord: " Bhavesh Patil · 9284918599",
    register: "https://www.atincampus.co.in/event-details/abhyudaya-csbs-dept",
    rulebook:"#",
    poster: "assets/eventsImages/abhyudaya.jpeg"
  },
  {
    name: "ELECTRONOVA",
    inst: "RSCOE",
    desc: "Electronics & IoT based challenges.",
    coord: "Ajit Tatugade · 8087274140",
    register: "https://www.atincampus.co.in/event-details/electronova-entc-dept",
    rulebook:"https://drive.google.com/file/d/1WUJgBxKm40oMbRZHGDBhlivPrQo2kT1y/view?usp=drive_link",
    poster: "assets/eventsImages/electronova.jpeg"
  },
  {
    name: "CATRACK",
    inst: "RSCOE",
    desc: "Route following robotic car competition.",
    coord: "Amruta Uduparkar · 8788799157",
    register: "https://www.atincampus.co.in/event-details/catrack-2k26-electrical-dept",
    rulebook:"#",
    poster: "assets/eventsImages/catrack.png"
  },
  {
    name: "AUTOMATION ASCENSION 3.0",
    inst: "RSCOE",
    desc: "Automation & robotics innovation event.",
    coord: "Ravi Shankar Rai · 8948271201",
    register: "https://www.atincampus.co.in/event-details/automation-ascention-3-0-a-r-dept",
    rulebook:"https://drive.google.com/file/d/1ypV6O1Gpx9pFWf6UDcQJWnOM6i0fQNQC/view?usp=drive_link",
    poster: "assets/eventsImages/automationascension.png"
  },
  {
    name: "TECHNOXPLOSION [CYBERHEIST]",
    inst: "RSCOE",
    desc: "Interdisciplinary engineering challenges.",
    coord: "Rahul Hadole · 9011095044",
    register: "https://www.atincampus.co.in/event-details/technoxplosion-engineering-sciences-and-humanities-dept",
    rulebook:"https://docs.google.com/document/d/1a85Xl0ySprX9DAYOfBrxKK9y9z-av_Oq/edit?usp=drive_link&ouid=103880505456889555695&rtpof=true&sd=true",
    poster: "assets/eventsImages/cyberheist.jpeg"
  },
  {
    name: "MONOPOLY",
    inst: "Other",
    desc: "♟💼 Monopoly",
    coord: "Kimya Chatuphale · 8767573149",
    register: "https://www.atincampus.co.in/event-details/monopoly-mba-jims",
    rulebook:"#",
    poster: "assets/eventsImages/technothon.jpeg"
  },
  {
    name: "IDEATHON [MECH.]",
    inst: "RSCOE",
    desc: "Mechanical ideation & innovation.",
    coord: "R. P. Sonawane · 9503305104",
    register: "https://www.atincampus.co.in/event-details/ideathon-2k26-mech-dept",
    rulebook:"#",
    poster: "assets/eventsImages/ideathon.jpeg"
  },
  {
    name: "SUSTAINACAST",
    inst: "RSCOE",
    desc: "National-level sustainable concrete design competition.",
    coord: "Ramatai Pawar · 9307475018",
    register: "https://www.atincampus.co.in/event-details/sustainacast-2026-civil-dept",
    rulebook:"https://drive.google.com/file/d/1srLvDX1dg1tfOuubur8wrtJIF1sjlrmh/view?usp=drive_link",
    poster: "assets/eventsImages/sustainacast.jpeg"
  },
  {
    name: "SHARK TANK",
    inst: "RSCOE",
    desc: "Startup pitching & business innovation.",
    coord: "Pramila Parekh · 9890112348",
    register: "https://www.atincampus.co.in/event-details/shark-tank-mba-dept-1",
    rulebook:"#",
    poster: "assets/eventsImages/sharktank.jpeg"
  },
  {
    name: "The Ad Mad Show",
    inst: "Other",
    desc: " The Ad Mad Show",
    coord: "Gayatri Gawali · 9405565069",
    register: "https://www.atincampus.co.in/event-details/the-ad-mad-show-mba-jims",
    rulebook:"#",
    poster: "assets/eventsImages/technothon.jpeg"
  },
  {
    name: "TANTRA-UTSAV",
    inst: "Polytechnic",
    desc: "National level polytechnic technical event.",
    coord: "Mayuri More · 9970897952",
    register: "https://www.atincampus.co.in/event-details/tantra-utsav-2k26-polytechnic-dept",
    rulebook:"#",
    poster: "assets/eventsImages/tantrautsav.jpeg"
  },
  {
    name: "LIBCAST CHALLENGE",
    inst: "RSCOE",
    desc: "Reels & content creation competition by library.",
    coord: "Library Team",
    register: "https://www.atincampus.co.in/event-details/libcaste-challenge-jayawant-library",
    rulebook:"#",
    poster: "assets/eventsImages/libcast.jpeg"
  },
  {
    name: "TECHNOMANTHAN",
    inst: "RSCOE",
    desc: "National-level problem solving contest.",
    coord: "Suraj Gangawane · 9130290541",
    register: "https://www.atincampus.co.in/event-details/technomanthan-2k26-ca-dept",
    rulebook:"#",
    poster: "assets/eventsImages/technomanthan.png"
  },
  {
    name: "STREET PLAY",
    inst: "Other",
    desc: "Got a message for society? Bring it to the streets!",
    coord: "",
    register: "https://www.atincampus.co.in/event-details/the-street-paly-show-sadak-se-samwad-mba-jims",
    rulebook:"#",
    poster: "assets/eventsImages/technothon.jpeg"
  },
  {
    name: "Escape the Room",
    inst: "RSCOE",
    desc: " Escape the Room",
    coord: "Sahil Mishra · 84699 40811",
    register: "https://www.atincampus.co.in/event-details/escape-the-room-secrets-inside-escape-awaits-mca-bca-dept",
    rulebook:"#",
    poster: "assets/eventsImages/technothon.jpeg"
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




