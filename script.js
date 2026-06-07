const careers = [
  {
    id: "environmental-scientist", title: "Environmental Scientist", icon: "◉", color: "#dceccf",
    category: "lab", education: "bachelor", tag: "Science & research",
    summary: "Studies pollution and other environmental problems, then recommends solutions.",
    degree: "Usually a bachelor's degree in environmental science, biology, chemistry, or a related natural science.",
    where: "Available at many public universities, including programs at the University of Washington, UC Davis, and local state colleges.",
    entry: "A high school diploma, college application, and a strong background in biology, chemistry, math, and writing. Internships help.",
    start: 50000, median: 80060, top: 134830, growth: "7% growth — faster than average",
    day: "Collect samples, review environmental data, write reports, meet with clients or officials, and sometimes visit a cleanup site.",
    challenges: ["Deadlines and detailed reports", "Possible exposure to polluted locations", "Explaining complicated findings clearly"],
    advantages: ["Work directly solves environmental problems", "Mix of office, lab, and field work", "Many possible specialties"],
    quote: "“The best part is seeing data turn into a real cleanup plan.” — composite field perspective",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/environmental-scientists-and-specialists.htm"
  },
  {
    id: "environmental-engineer", title: "Environmental Engineer", icon: "⌬", color: "#d2e6e8",
    category: "build", education: "bachelor", tag: "Engineering",
    summary: "Designs systems that protect water, air, soil, and public health.",
    degree: "A bachelor's degree in environmental, civil, chemical, or related engineering. A Professional Engineer license can help later.",
    where: "ABET-accredited programs at schools such as Georgia Tech, Purdue, and many state universities.",
    entry: "Complete college-prep math and science, apply to an engineering program, and be ready for calculus, physics, and chemistry.",
    start: 65000, median: 104170, top: 165600, growth: "7% growth — faster than average",
    day: "Review designs, run calculations, meet with a project team, visit a worksite, and check that a project follows environmental rules.",
    challenges: ["Challenging math and engineering courses", "Responsibility for safety and regulations", "Projects can take years"],
    advantages: ["Strong salary", "Creates practical solutions", "Work can improve entire communities"],
    quote: "“It feels good when a design works and a community gets cleaner water.” — composite field perspective",
    source: "https://www.bls.gov/ooh/architecture-and-engineering/environmental-engineers.htm"
  },
  {
    id: "wildlife-biologist", title: "Wildlife Biologist", icon: "⌁", color: "#f0dfbd",
    category: "field", education: "advanced", tag: "Wildlife",
    summary: "Studies animals, habitats, and how human activity affects wildlife.",
    degree: "A bachelor's degree for entry roles; a master's or Ph.D. is common for higher-level research jobs.",
    where: "Wildlife biology and zoology programs are offered at schools such as Oregon State, Colorado State, and many land-grant universities.",
    entry: "Build science coursework, apply to college, and gain experience through volunteering, field camps, or internships.",
    start: 45000, median: 72560, top: 113350, growth: "2% growth — slower than average",
    day: "Track animals, collect field data, analyze results, manage habitat projects, and write reports or grant applications.",
    challenges: ["Competitive jobs and limited funding", "Fieldwork in rough weather", "Irregular hours during research seasons"],
    advantages: ["Time outdoors and around wildlife", "Protects species and ecosystems", "Chance to discover new information"],
    quote: "“Field days can be exhausting, but spotting an animal you worked to protect is worth it.” — composite field perspective",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/zoologists-and-wildlife-biologists.htm"
  },
  {
    id: "hydrologist", title: "Hydrologist", icon: "≈", color: "#cce8ee",
    category: "lab", education: "advanced", tag: "Water",
    summary: "Studies how water moves, its quality, and how communities can manage it.",
    degree: "Usually a bachelor's degree in hydrology, geology, environmental science, or engineering. Some roles prefer a master's.",
    where: "Programs and coursework are available at schools such as the University of Arizona and Colorado School of Mines.",
    entry: "Take earth science, chemistry, physics, and math, then apply to a science or engineering program.",
    start: 58000, median: 92310, top: 138000, growth: "0% growth — little or no change",
    day: "Measure streams or wells, analyze computer models, study flood or drought risks, and present findings to decision-makers.",
    challenges: ["Travel to remote field sites", "Complex computer models", "Water conflicts can be political"],
    advantages: ["Important work as droughts and floods increase", "Good mix of field and computer work", "Helps protect drinking water"],
    quote: "“Water connects almost every environmental issue, so the work never feels unimportant.” — composite field perspective",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/hydrologists.htm"
  },
  {
    id: "conservation-scientist", title: "Conservation Scientist", icon: "♧", color: "#d9e7bd",
    category: "field", education: "bachelor", tag: "Land",
    summary: "Manages forests, parks, farms, and other natural resources responsibly.",
    degree: "A bachelor's degree in forestry, natural resources, environmental science, or a related field.",
    where: "Programs are common at land-grant universities, including SUNY College of Environmental Science and Forestry.",
    entry: "Apply to college with biology and earth science experience. Outdoor volunteering and GIS skills are valuable.",
    start: 46000, median: 67500, top: 100000, growth: "3% growth — about average",
    day: "Inspect land, create resource plans, use mapping software, work with landowners, and monitor restoration projects.",
    challenges: ["Balancing conservation and economic needs", "Outdoor work in difficult conditions", "Government budgets affect jobs"],
    advantages: ["Protects real places", "Regular outdoor work", "Works with communities and landowners"],
    quote: "“You learn that conservation is as much about listening to people as studying land.” — composite field perspective",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/conservation-scientists.htm"
  },
  {
    id: "urban-planner", title: "Urban & Regional Planner", icon: "▦", color: "#e7dfcf",
    category: "people", education: "advanced", tag: "Communities",
    summary: "Plans greener, safer, and more useful communities and transportation systems.",
    degree: "A master's degree in urban or regional planning is common. Some entry jobs accept a bachelor's in planning or geography.",
    where: "Planning programs are offered at universities such as Rutgers, UCLA, and the University of Illinois Chicago.",
    entry: "Complete a bachelor's degree, build writing and data skills, then apply to a planning program. A portfolio may help.",
    start: 56000, median: 83180, top: 128550, growth: "4% growth — about average",
    day: "Study maps and data, review development proposals, meet with residents, and present recommendations at public meetings.",
    challenges: ["Public disagreements", "Slow government processes", "Many rules and competing priorities"],
    advantages: ["Shapes how people live every day", "Combines design, data, and communication", "Can make cities more sustainable"],
    quote: "“A good plan is not just a map; it is a promise about how a place can work better.” — composite field perspective",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/urban-and-regional-planners.htm"
  },
  {
    id: "safety-specialist", title: "Environmental Health & Safety Specialist", icon: "✚", color: "#f1dfc8",
    category: "people", education: "bachelor", tag: "Public health",
    summary: "Protects workers and communities from environmental and workplace hazards.",
    degree: "Usually a bachelor's degree in occupational health, safety, environmental health, biology, or a related field. Certifications can help.",
    where: "Programs are available at schools such as Indiana University and through safety organizations such as BCSP.",
    entry: "Apply to a related college program, gain internship experience, and later qualify for certifications through work experience and exams.",
    start: 54000, median: 83560, top: 128040, growth: "14% growth — much faster than average",
    day: "Inspect workplaces, train employees, investigate incidents, check records, and recommend safer procedures.",
    challenges: ["Must point out problems people may not want to hear", "Detailed regulations", "Responding after accidents can be stressful"],
    advantages: ["Directly keeps people safe", "Strong job growth", "Works in many industries"],
    quote: "“Success is often invisible: everyone goes home healthy because a hazard was fixed early.” — composite field perspective",
    source: "https://www.bls.gov/ooh/healthcare/occupational-health-and-safety-specialists-and-technicians.htm"
  },
  {
    id: "environmental-technician", title: "Environmental Science Technician", icon: "⌕", color: "#d5e4c5",
    category: "lab", education: "certificate", tag: "Testing",
    summary: "Collects and tests air, water, and soil samples to monitor pollution.",
    degree: "Usually an associate degree or certificate in environmental science, environmental technology, or a related field.",
    where: "Many community colleges and technical schools offer environmental technology or laboratory programs.",
    entry: "Earn a high school diploma, apply to a two-year program, and complete lab science and technical coursework.",
    start: 35000, median: 49740, top: 78270, growth: "4% growth — about average",
    day: "Prepare equipment, travel to sampling sites, collect samples, run lab tests, record data, and maintain safety procedures.",
    challenges: ["Possible exposure to hazards", "Repetitive testing and careful records", "Fieldwork in all kinds of weather"],
    advantages: ["Faster and less expensive education path", "Hands-on work", "Good starting point for environmental science"],
    quote: "“Every accurate sample matters because bigger decisions depend on our numbers.” — composite field perspective",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/environmental-science-and-protection-technicians.htm"
  },
  {
    id: "solar-installer", title: "Solar PV Installer", icon: "☼", color: "#f3e899",
    category: "build", education: "certificate", tag: "Clean energy",
    summary: "Installs and maintains solar panels that turn sunlight into electricity.",
    degree: "A high school diploma plus technical training or on-the-job training. Some workers complete a certificate or apprenticeship.",
    where: "Training is offered through community colleges, trade schools, unions, employers, and organizations such as NABCEP.",
    entry: "Earn a diploma, be comfortable with heights and tools, then apply to training, apprenticeship, or entry-level installer jobs.",
    start: 39000, median: 51630, top: 74000, growth: "48% growth — much faster than average",
    day: "Review a plan, prepare a roof or site, mount panels, connect equipment, test the system, and explain it to the customer.",
    challenges: ["Working on roofs and in hot weather", "Physical labor", "Projects depend on construction schedules"],
    advantages: ["Very strong job growth", "Shorter training path", "Visible results at the end of each project"],
    quote: "“At the end of the day, you can point to a system that is making clean power.” — composite field perspective",
    source: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm"
  },
  {
    id: "wind-technician", title: "Wind Turbine Technician", icon: "✣", color: "#cfe4df",
    category: "build", education: "certificate", tag: "Clean energy",
    summary: "Maintains and repairs wind turbines that generate renewable electricity.",
    degree: "A postsecondary certificate or associate degree in wind energy technology, plus on-the-job training.",
    where: "Technical and community colleges in wind-producing regions offer programs; employers also provide specialized training.",
    entry: "Earn a diploma, complete technical training, pass safety requirements, and be comfortable climbing and working at height.",
    start: 48000, median: 62900, top: 90000, growth: "60% growth — much faster than average",
    day: "Climb turbines, inspect equipment, diagnose electrical or mechanical problems, replace parts, and document maintenance.",
    challenges: ["Extreme heights and small spaces", "Travel and emergency calls", "Physically demanding work"],
    advantages: ["One of the fastest-growing careers", "Strong pay without a four-year degree", "Technical and active work"],
    quote: "“The climb is tough, but the view and the purpose make it a unique job.” — composite field perspective",
    source: "https://www.bls.gov/ooh/installation-maintenance-and-repair/wind-turbine-technicians.htm"
  }
];

const grid = document.querySelector("#careerGrid");
const dialog = document.querySelector("#careerDialog");
const dialogContent = document.querySelector("#dialogContent");
const searchInput = document.querySelector("#searchInput");
const filters = document.querySelectorAll(".filter");
const emptyState = document.querySelector("#emptyState");
const compareWrap = document.querySelector("#compareWrap");
const compareEmpty = document.querySelector("#compareEmpty");
const compareTable = document.querySelector("#compareTable");
let activeFilter = "all";
let comparison = [];

const money = value => `$${Math.round(value / 1000)}k`;

function renderCareers() {
  const query = searchInput.value.trim().toLowerCase();
  const shown = careers.filter(career => {
    const matchesFilter = activeFilter === "all" || career.education === activeFilter;
    const matchesSearch = `${career.title} ${career.tag} ${career.summary} ${career.degree}`.toLowerCase().includes(query);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = shown.map((career, index) => `
    <article class="career-card" style="--card-color:${career.color}">
      <span class="card-number">${String(careers.indexOf(career) + 1).padStart(2, "0")}</span>
      <div class="card-visual" aria-hidden="true">${career.icon}</div>
      <div class="card-body">
        <div class="card-tags"><span class="tag">${career.tag}</span><span class="tag">${career.education}</span></div>
        <h3>${career.title}</h3>
        <p>${career.summary}</p>
        <div class="card-stats">
          <div><small>Median pay</small><strong>${money(career.median)}</strong></div>
          <div><small>Outlook</small><strong>${career.growth.split(" ")[0]}</strong></div>
        </div>
        <div class="card-actions">
          <button class="details-btn" data-details="${career.id}">View profile</button>
          <button class="compare-btn ${comparison.includes(career.id) ? "selected" : ""}" data-compare="${career.id}">${comparison.includes(career.id) ? "Selected" : "+ Compare"}</button>
        </div>
      </div>
    </article>
  `).join("");
  emptyState.hidden = shown.length > 0;
}

function openCareer(id) {
  const c = careers.find(career => career.id === id);
  const salaryWidth = value => Math.max(8, Math.round(value / c.top * 100));
  dialogContent.innerHTML = `
    <div class="dialog-hero" style="--dialog-color:${c.color}">
      <span aria-hidden="true">${c.icon}</span>
      <p class="eyebrow">${c.tag}</p>
      <h2>${c.title}</h2>
      <p>${c.summary}</p>
    </div>
    <div class="dialog-content">
      <h3>Salary snapshot</h3>
      <div class="salary-chart" aria-label="Salary range">
        ${[["Starting", c.start], ["Median", c.median], ["Top 10%", c.top]].map(row => `
          <div class="salary-row"><span>${row[0]}</span><div class="salary-track"><div class="salary-fill" style="width:${salaryWidth(row[1])}%"></div></div><strong>${money(row[1])}</strong></div>
        `).join("")}
      </div>
      <div class="detail-grid">
        <section class="detail-block"><h3>Education needed</h3><p>${c.degree}</p></section>
        <section class="detail-block"><h3>Where can I study?</h3><p>${c.where}</p></section>
        <section class="detail-block"><h3>Getting into a program</h3><p>${c.entry}</p></section>
        <section class="detail-block"><h3>Typical day</h3><p>${c.day}</p></section>
        <section class="detail-block"><h3>Challenges</h3><ul>${c.challenges.map(item => `<li>${item}</li>`).join("")}</ul></section>
        <section class="detail-block"><h3>Best parts</h3><ul>${c.advantages.map(item => `<li>${item}</li>`).join("")}</ul></section>
        <section class="detail-block"><h3>Job outlook</h3><p><strong>${c.growth}</strong></p><a class="source-link" href="${c.source}" target="_blank" rel="noreferrer">Check the BLS career page ↗</a></section>
        <section class="detail-block quote-block"><h3>Voice from the field</h3><p>${c.quote}</p></section>
      </div>
    </div>
  `;
  dialog.showModal();
}

function updateCompare() {
  const selected = comparison.map(id => careers.find(c => c.id === id));
  compareEmpty.hidden = selected.length > 0;
  compareWrap.hidden = selected.length === 0;
  if (!selected.length) return;
  const rows = [
    ["Career", ...selected.map(c => `<strong>${c.title}</strong>`)],
    ["Education", ...selected.map(c => c.degree)],
    ["Starting pay", ...selected.map(c => money(c.start))],
    ["Median pay", ...selected.map(c => money(c.median))],
    ["Job outlook", ...selected.map(c => c.growth)],
    ["Typical day", ...selected.map(c => c.day)]
  ];
  compareTable.innerHTML = rows.map((row, i) => `<tr>${row.map((cell, j) => i === 0 || j === 0 ? `<th>${cell}</th>` : `<td>${cell}</td>`).join("")}</tr>`).join("");
}

grid.addEventListener("click", event => {
  const details = event.target.closest("[data-details]");
  const compare = event.target.closest("[data-compare]");
  if (details) openCareer(details.dataset.details);
  if (compare) {
    const id = compare.dataset.compare;
    if (comparison.includes(id)) comparison = comparison.filter(item => item !== id);
    else if (comparison.length < 3) comparison.push(id);
    else alert("Choose up to three careers to compare.");
    renderCareers();
    updateCompare();
  }
});

filters.forEach(filter => filter.addEventListener("click", () => {
  filters.forEach(item => item.classList.remove("active"));
  filter.classList.add("active");
  activeFilter = filter.dataset.filter;
  renderCareers();
}));
searchInput.addEventListener("input", renderCareers);
document.querySelector("#clearCompare").addEventListener("click", () => { comparison = []; renderCareers(); updateCompare(); });
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

const quizResults = {
  field: ["You may be a field explorer.", "Start with Wildlife Biologist or Conservation Scientist. Both combine science with regular outdoor work."],
  lab: ["You may be an investigator.", "Start with Environmental Scientist, Hydrologist, or Environmental Science Technician. These careers use samples and data to solve problems."],
  build: ["You may be a solution builder.", "Start with Environmental Engineer, Solar Installer, or Wind Turbine Technician. These careers turn plans into working systems."],
  people: ["You may be a community connector.", "Start with Urban Planner or Environmental Health & Safety Specialist. Both mix environmental knowledge with communication."]
};
document.querySelector("#quizOptions").addEventListener("click", event => {
  const button = event.target.closest("[data-result]");
  if (!button) return;
  const result = quizResults[button.dataset.result];
  document.querySelector("#quizOptions").hidden = true;
  const resultBox = document.querySelector("#quizResult");
  resultBox.hidden = false;
  resultBox.innerHTML = `<p class="eyebrow">Your result</p><h3>${result[0]}</h3><p>${result[1]}</p><button class="details-btn" id="resetQuiz">Try again</button>`;
  document.querySelector("#resetQuiz").addEventListener("click", () => {
    resultBox.hidden = true;
    document.querySelector("#quizOptions").hidden = false;
  });
});

renderCareers();
updateCompare();
