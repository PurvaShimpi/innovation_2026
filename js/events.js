const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.onclick = () => navLinks.classList.toggle("open");

const events = [
  {
    name:"PRAKALPA",
    inst:"RSCOE",
    desc:"IT innovation challenge.",
    coord:"Pallavi Tekade · 8483934912",
    register:"#",
   poster: "assets/testEvent.png"  
 },
  {
    
  name: "AVINYA-2026 ( CS Dept.)",
  inst: "RSCOE",
  desc: "Coding, AI & system design. lorem *456 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  coord: "Swati Paralkar · 9309513956",
  register: "#",
  rulebook: "https://drive.google.com/file/d/1evJy_VAnULUf1hZCYH3P6qKRYhbAky9X/view?usp=drivesdk",
 poster: "assets/eventsImages/avinya.jpeg"

},
  {
    name:"ABHYUDAYA",
    inst:"RSCOE",
    desc:"Techno-business analytics.",
    coord:"Neeraj Sathawane · 9595497402",
    register:"#",
   poster: "assets/eventsImages/abhyudaya.jpeg"  
},
  {
    name:"ELECTRONOVA",
    inst:"RSCOE",
    desc:"Electronics & IoT.",
    coord:"Ajit Tatugade · 8087274140",
    register:"#",
   poster: "assets/eventsImages/electronova.jpeg"  
},
  {
    name:"CATRACK",
    inst:"RSCOE",
    desc:"Electrical engineering.",
    coord:"Amruta Uduparkar · 8788799157",
    register:"#",
   poster: "assets/eventsImages/catrack.png"  
},
  {
    name:"AUTOMATION ASCENSION 3.0",
    inst:"RSCOE",
    desc:"Automation & robotics.",
    coord:"Ravi Shankar Rai · 8948271201",
    register:"#",
   poster: "assets/eventsImages/automationascension.png"  
},
  {
    name:"TECHNOXPLOSION",
    inst:"RSCOE",
    desc:"Interdisciplinary engineering.",
    coord:"Amol Patil · 9673971723",
    register:"#",
   poster: "assets/testEvent.png"  
},
  {
    name:"IDEATHON-2026",
    inst:"RSCOE",
    desc:"Mechanical ideation.",
    coord:"R.P. Sonawane · 9503305104",
    register:"#",
   poster: "assets/testEvent.png"  
},
  {
    name:"SUSTAINACAST",
    inst:"RSCOE",
    desc:"Civil sustainability.",
    coord:"Ramatai Pawar · 9307475018",
    register:"#",
   poster: "assets/eventsImages/sustainacast.jpeg"  
},
  
{
    name:"SHARK TANK",
    inst:"RSCOE",
    desc:"MBA startup pitch.",
    coord:"Pramila Parekh · 9890112348",
    register:"#",
   poster: "assets/testEvent.png"  
},
  {
    name:"TANTRA-UTSAV",
    inst:"Polytechnic",
    desc:"Polytechnic tech events.",
    coord:"Mayuri More · 9970897952",
    register:"#",
   poster: "assets/eventsImages/tantrautsav.jpeg"  
},
  {
    name:"LIBCAST CHALLENGE",
    inst:"Other",
    desc:"Library innovation challenge.",
    coord:"Library Team",
    register:"#",
   poster: "assets/eventsImages/libcast.jpeg"  
},
  {
    name:"PHARMACY IDEATHON",
    inst:"Other",
    desc:"Healthcare innovation.",
    coord:"Trupti Deshpande · 7709184076",
    register:"#",
   poster: "assets/testEvent.png"  
},
  {
    name:"DIGITAL TEACHING SKILL",
    inst:"Other",
    desc:"Digital pedagogy.",
    coord:"RSCOED Faculty",
    register:"#",
   poster: "assets/testEvent.png"  
},
  {
    name:"TECHNOTHON",
    inst:"Other",
    desc:"Tech marathon.",
    coord:"Rasika Patil · 9890906515",
    register:"#",
    poster: "assets/eventsImages/technothon.jpeg"   
}
];

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

function render(){
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
  <div class="poster">
    ${e.poster 
      ? `<img src="${e.poster}" alt="${e.name}">`
      : `<span class="poster-fallback">A3 POSTER</span>`
    }
  </div>
  <h3 class="event-title">${e.name}</h3>
<span class="tap-hint">View Event Details</span>



`;


      card.onclick = () => openModal(e);
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

function openModal(e){
  modal.style.display = "flex";
  document.body.classList.add("modal-open");

  modalTitle.textContent = e.name;
  modalDept.textContent = e.inst;
  modalDesc.textContent = e.desc;
  modalCoord.textContent = e.coord;

  modalActions.innerHTML = `
    <a href="${e.register}" target="_blank">
      <button class="btn-register">Register Now</button>
    </a>
  `;

  if(e.rulebook){
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




render();

