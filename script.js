const careers = [
  {
    title: "Environmental Scientist", tag: "Pollution and research", color: "#e4efdf",
    photo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Scientist working with samples in a laboratory",
    description: "Environmental scientists study pollution and other environmental problems. They collect evidence, analyze it, and recommend ways to protect human health and ecosystems.",
    degree: "Usually a bachelor's degree in environmental science, biology, chemistry, or another natural science.",
    coursework: "Biology, chemistry, geology, statistics, environmental law, laboratory methods, and technical writing.",
    where: "Programs are available at many public universities, including the University of Washington, UC Davis, and local state colleges.",
    entry: "Graduate high school, complete college applications, and have a strong background in biology, chemistry, math, and writing. Internships help.",
    start: 50000, median: 80060, top: 134830, growth: 7, outlook: "Faster than average",
    day: ["Review project goals", "Collect or test samples", "Analyze environmental data", "Write reports and explain findings"],
    challenges: ["Detailed reports and deadlines", "Possible work at polluted locations", "Explaining complex science clearly"],
    advantages: ["Solves real environmental problems", "Mix of office, lab, and field work", "Many possible specialties"],
    quote: "The best part is seeing data turn into a real cleanup plan.",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/environmental-scientists-and-specialists.htm"
  },
  {
    title: "Environmental Engineer", tag: "Engineering and design", color: "#dceef2",
    photo: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Engineers reviewing plans at a worksite",
    description: "Environmental engineers design systems that protect water, air, soil, and public health. Their projects can include water treatment plants, recycling systems, and pollution controls.",
    degree: "A bachelor's degree in environmental, civil, chemical, or related engineering. A Professional Engineer license can help later.",
    coursework: "Calculus, physics, chemistry, fluid mechanics, engineering design, water treatment, and environmental regulations.",
    where: "ABET-accredited engineering programs at schools such as Georgia Tech, Purdue, and many state universities.",
    entry: "Take college-prep math and science, apply to an engineering program, and be ready for calculus, physics, and chemistry.",
    start: 65000, median: 104170, top: 165600, growth: 7, outlook: "Faster than average",
    day: ["Check project plans", "Run design calculations", "Meet with a project team", "Visit a site and check regulations"],
    challenges: ["Difficult math and engineering courses", "Responsibility for safety", "Large projects can take years"],
    advantages: ["Strong salary", "Creates practical solutions", "Can improve entire communities"],
    quote: "It feels good when a design works and a community gets cleaner water.",
    source: "https://www.bls.gov/ooh/architecture-and-engineering/environmental-engineers.htm"
  },
  {
    title: "Wildlife Biologist", tag: "Animals and habitats", color: "#efe5cd",
    photo: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "A forest habitat studied by wildlife biologists",
    description: "Wildlife biologists study animals, their behavior, and their habitats. They investigate how pollution, development, climate, and conservation affect wildlife.",
    degree: "A bachelor's degree for entry-level work; a master's degree or Ph.D. is common for advanced research jobs.",
    coursework: "Biology, ecology, zoology, botany, statistics, GIS mapping, and wildlife management.",
    where: "Wildlife biology and zoology programs are offered at Oregon State, Colorado State, and many land-grant universities.",
    entry: "Build science coursework, apply to college, and gain experience through volunteering, field camps, or internships.",
    start: 45000, median: 72560, top: 113350, growth: 2, outlook: "Slower than average",
    day: ["Prepare field equipment", "Track and observe animals", "Analyze field data", "Write reports or grant requests"],
    challenges: ["Competitive jobs and limited funding", "Rough weather and terrain", "Irregular research-season hours"],
    advantages: ["Time outdoors and around wildlife", "Protects species and habitats", "Chance to discover new information"],
    quote: "Field days can be exhausting, but spotting an animal you worked to protect is worth it.",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/zoologists-and-wildlife-biologists.htm"
  },
  {
    title: "Hydrologist", tag: "Water science", color: "#d9edf2",
    photo: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Lake and mountain watershed",
    description: "Hydrologists study how water moves above and below the ground. They help communities understand drinking water, floods, droughts, pollution, and water supplies.",
    degree: "Usually a bachelor's degree in hydrology, geology, environmental science, or engineering. Some roles prefer a master's.",
    coursework: "Earth science, chemistry, physics, calculus, statistics, GIS, and computer modeling.",
    where: "Programs and coursework are offered at schools such as the University of Arizona and Colorado School of Mines.",
    entry: "Take earth science, chemistry, physics, and math, then apply to a science or engineering program.",
    start: 58000, median: 92310, top: 138000, growth: 0, outlook: "Little or no change",
    day: ["Check weather and water data", "Measure streams or wells", "Run computer models", "Present flood or drought findings"],
    challenges: ["Travel to remote field sites", "Complex computer models", "Water conflicts can be political"],
    advantages: ["Important work during floods and droughts", "Mix of field and computer work", "Helps protect drinking water"],
    quote: "Water connects almost every environmental issue, so the work never feels unimportant.",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/hydrologists.htm"
  },
  {
    title: "Conservation Scientist", tag: "Land and natural resources", color: "#e3edd5",
    photo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Green forest managed by conservation scientists",
    description: "Conservation scientists manage forests, parks, farms, and other natural resources responsibly. They work with landowners and governments to protect land while meeting human needs.",
    degree: "A bachelor's degree in forestry, natural resources, environmental science, or a related field.",
    coursework: "Ecology, forestry, soil science, agriculture, GIS mapping, resource management, and public policy.",
    where: "Programs are common at land-grant universities, including SUNY College of Environmental Science and Forestry.",
    entry: "Apply to college with biology and earth science experience. Outdoor volunteering and GIS skills are valuable.",
    start: 46000, median: 67500, top: 100000, growth: 3, outlook: "About average",
    day: ["Review a land-use plan", "Inspect forests or fields", "Map resources with GIS", "Meet landowners and monitor projects"],
    challenges: ["Balancing conservation and economic needs", "Outdoor work in difficult conditions", "Government budgets affect jobs"],
    advantages: ["Protects real places", "Regular outdoor work", "Works with communities and landowners"],
    quote: "You learn that conservation is as much about listening to people as studying land.",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/conservation-scientists.htm"
  },
  {
    title: "Urban & Regional Planner", tag: "Sustainable communities", color: "#eee7dc",
    photo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Modern city buildings planned for a community",
    description: "Urban and regional planners help decide how communities grow. They plan transportation, housing, parks, and development so places can be safer, greener, and easier to use.",
    degree: "A master's degree in urban or regional planning is common. Some entry jobs accept a bachelor's in planning or geography.",
    coursework: "Geography, economics, statistics, GIS, environmental policy, transportation, and public communication.",
    where: "Planning programs are offered at Rutgers, UCLA, the University of Illinois Chicago, and many other universities.",
    entry: "Complete a bachelor's degree, build writing and data skills, then apply to a planning program. A portfolio may help.",
    start: 56000, median: 83180, top: 128550, growth: 4, outlook: "About average",
    day: ["Review maps and community data", "Study a development proposal", "Meet residents and officials", "Present recommendations"],
    challenges: ["Public disagreements", "Slow government processes", "Many competing priorities"],
    advantages: ["Shapes how people live every day", "Combines design, data, and communication", "Can make cities more sustainable"],
    quote: "A good plan is not just a map; it is a promise about how a place can work better.",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/urban-and-regional-planners.htm"
  },
  {
    title: "Environmental Health & Safety Specialist", short: "EHS Specialist", tag: "Health and safety", color: "#f2e2d1",
    photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Safety specialist working in an industrial facility",
    description: "Environmental health and safety specialists protect workers and communities from hazards. They inspect workplaces, investigate accidents, and help organizations follow safety rules.",
    degree: "Usually a bachelor's degree in occupational health, safety, environmental health, biology, or a related field. Certifications can help.",
    coursework: "Environmental health, chemistry, biology, risk assessment, workplace safety, laws, and emergency response.",
    where: "Programs are available at schools such as Indiana University and through certification groups such as BCSP.",
    entry: "Apply to a related college program, gain internship experience, and later qualify for certifications through work and exams.",
    start: 54000, median: 83560, top: 128040, growth: 14, outlook: "Much faster than average",
    day: ["Review safety reports", "Inspect a workplace", "Train employees", "Recommend fixes and update records"],
    challenges: ["Pointing out unpopular problems", "Detailed regulations", "Accident investigations can be stressful"],
    advantages: ["Directly keeps people safe", "Strong job growth", "Can work in many industries"],
    quote: "Success is often invisible: everyone goes home healthy because a hazard was fixed early.",
    source: "https://www.bls.gov/ooh/healthcare/occupational-health-and-safety-specialists-and-technicians.htm"
  },
  {
    title: "Environmental Science Technician", short: "Environmental Technician", tag: "Sampling and testing", color: "#e4eddb",
    photo: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Laboratory technician examining samples",
    description: "Environmental science technicians collect and test air, water, and soil samples. Their careful measurements help scientists and governments monitor pollution.",
    degree: "Usually an associate degree or certificate in environmental science, environmental technology, or a related field.",
    coursework: "Laboratory science, environmental regulations, chemistry, sampling methods, data recording, and workplace safety.",
    where: "Many community colleges and technical schools offer environmental technology or laboratory programs.",
    entry: "Earn a high school diploma, apply to a two-year program, and complete lab science and technical coursework.",
    start: 35000, median: 49740, top: 78270, growth: 4, outlook: "About average",
    day: ["Prepare equipment", "Travel to sampling sites", "Collect and test samples", "Record results and maintain equipment"],
    challenges: ["Possible exposure to hazards", "Repetitive testing and careful records", "Fieldwork in all weather"],
    advantages: ["Faster and less expensive education path", "Hands-on work", "Good starting point for environmental science"],
    quote: "Every accurate sample matters because bigger decisions depend on our numbers.",
    source: "https://www.bls.gov/ooh/life-physical-and-social-science/environmental-science-and-protection-technicians.htm"
  },
  {
    title: "Solar Photovoltaic Installer", short: "Solar PV Installer", tag: "Solar energy", color: "#f2eaae",
    photo: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Rows of solar panels producing renewable energy",
    description: "Solar photovoltaic installers install and maintain panels that turn sunlight into electricity. They are a major part of the growing clean-energy industry.",
    degree: "A high school diploma plus technical training or on-the-job training. Some workers complete a certificate or apprenticeship.",
    coursework: "Electrical basics, construction safety, system design, roofing skills, building codes, and solar technology.",
    where: "Training is offered through community colleges, trade schools, unions, employers, and organizations such as NABCEP.",
    entry: "Earn a diploma, be comfortable with heights and tools, then apply to training, apprenticeship, or entry-level installer jobs.",
    start: 39000, median: 51630, top: 74000, growth: 48, outlook: "Much faster than average",
    day: ["Review the installation plan", "Prepare the roof or site", "Mount and connect panels", "Test the system with the customer"],
    challenges: ["Working on roofs and in hot weather", "Physical labor", "Construction schedules can change"],
    advantages: ["Very strong job growth", "Shorter training path", "Visible results after each project"],
    quote: "At the end of the day, you can point to a system that is making clean power.",
    source: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm"
  },
  {
    title: "Wind Turbine Technician", short: "Wind Technician", tag: "Wind energy", color: "#dcece9",
    photo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80",
    photoAlt: "Wind turbines generating renewable electricity",
    description: "Wind turbine technicians maintain and repair turbines that generate renewable electricity. They solve electrical and mechanical problems high above the ground.",
    degree: "A postsecondary certificate or associate degree in wind energy technology, plus on-the-job training.",
    coursework: "Electrical systems, hydraulics, mechanical repair, safety, climbing, computer controls, and technical math.",
    where: "Technical and community colleges in wind-producing regions offer programs. Employers also provide specialized training.",
    entry: "Earn a diploma, complete technical training, pass safety requirements, and be comfortable climbing and working at height.",
    start: 48000, median: 62900, top: 90000, growth: 60, outlook: "Much faster than average",
    day: ["Review turbine alerts", "Climb and inspect equipment", "Repair electrical or mechanical parts", "Document maintenance"],
    challenges: ["Extreme heights and small spaces", "Travel and emergency calls", "Physically demanding work"],
    advantages: ["One of the fastest-growing careers", "Strong pay without a four-year degree", "Technical and active work"],
    quote: "The climb is tough, but the view and the purpose make it a unique job.",
    source: "https://www.bls.gov/ooh/installation-maintenance-and-repair/wind-turbine-technicians.htm"
  }
];

const dollars = value => `$${Math.round(value / 1000)}k`;
const slug = text => text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const outlookClass = growth => growth >= 7 ? "growing" : growth >= 3 ? "steady" : "slow";

document.querySelector("#careerMenu").innerHTML = careers.map((career, i) =>
  `<a href="#${slug(career.title)}">${i + 1}. ${career.short || career.title}</a>`
).join("");

document.querySelector("#careerProfiles").innerHTML = careers.map((career, i) => {
  const salaryWidth = value => Math.round(value / career.top * 100);
  return `
    <article class="career-profile" id="${slug(career.title)}" style="--profile-color:${career.color}">
      <header class="profile-header">
        <div class="profile-heading">
          <span class="career-number">CAREER ${String(i + 1).padStart(2, "0")} · ${career.tag}</span>
          <h2>${career.title}</h2>
          <p>${career.description}</p>
        </div>
        <figure class="career-photo">
          <img src="${career.photo}" alt="${career.photoAlt}">
          <figcaption class="photo-label">Relevant career image · Unsplash</figcaption>
        </figure>
      </header>
      <div class="profile-body">
        <div class="required-grid">
          <section class="info-block">
            <h3>General job description</h3>
            <p>${career.description}</p>
          </section>
          <section class="info-block">
            <h3>Degree or certification needed</h3>
            <p>${career.degree}</p>
          </section>
          <section class="info-block">
            <h3>Helpful coursework</h3>
            <p>${career.coursework}</p>
          </section>
          <section class="info-block">
            <h3>Where can it be obtained?</h3>
            <p>${career.where}</p>
          </section>
          <section class="info-block wide">
            <h3>How to get into a program · Education pathway diagram</h3>
            <div class="pathway">
              <div class="path-step">High school<br>science + math</div>
              <span class="path-arrow">→</span>
              <div class="path-step">${career.entry}</div>
              <span class="path-arrow">→</span>
              <div class="path-step">Internship or training<br>then first job</div>
            </div>
          </section>
          <section class="info-block wide">
            <h3>Starting salary and top salary · Salary diagram</h3>
            <div class="salary-diagram">
              <div class="salary-line"><span>Starting</span><div class="salary-track"><div class="salary-fill" style="width:${salaryWidth(career.start)}%"></div></div><strong>${dollars(career.start)}</strong></div>
              <div class="salary-line"><span>Median</span><div class="salary-track"><div class="salary-fill" style="width:${salaryWidth(career.median)}%"></div></div><strong>${dollars(career.median)}</strong></div>
              <div class="salary-line"><span>Top 10%</span><div class="salary-track"><div class="salary-fill" style="width:100%"></div></div><strong>${dollars(career.top)}</strong></div>
            </div>
          </section>
          <section class="info-block wide">
            <h3>What does a typical day look like? · Daily timeline</h3>
            <div class="day-timeline">${career.day.map((step, index) => `<div class="day-step"><strong>${["Morning", "Late morning", "Afternoon", "End of day"][index]}</strong>${step}</div>`).join("")}</div>
          </section>
          <section class="info-block wide">
            <div class="pros-cons">
              <div class="info-block cons"><h3>Challenges and problems</h3><ul>${career.challenges.map(item => `<li>${item}</li>`).join("")}</ul></div>
              <div class="info-block pros"><h3>Advantages and best parts</h3><ul>${career.advantages.map(item => `<li>${item}</li>`).join("")}</ul></div>
            </div>
          </section>
          <section class="info-block wide">
            <div class="outlook-row">
              <div><h3>Is this a growing or shrinking field?</h3><p>${career.growth}% projected growth. ${career.outlook}.</p></div>
              <span class="outlook-badge ${outlookClass(career.growth)}">${career.outlook}</span>
            </div>
            <a class="source-link" href="${career.source}" target="_blank" rel="noreferrer">View the full BLS career source ↗</a>
          </section>
          <section class="quote-block wide">
            <h3>Worker-perspective quote</h3>
            <blockquote>“${career.quote}”</blockquote>
            <cite>Composite perspective based on common experiences described by workers in the field.</cite>
          </section>
        </div>
      </div>
    </article>`;
}).join("");

document.querySelector("#comparisonTable").innerHTML = `
  <thead><tr><th>Career</th><th>Typical education</th><th>Starting pay</th><th>Median pay</th><th>Top pay</th><th>Growth</th></tr></thead>
  <tbody>${careers.map(career => `<tr><td><strong>${career.short || career.title}</strong></td><td>${career.degree.split(".")[0]}</td><td>${dollars(career.start)}</td><td>${dollars(career.median)}</td><td>${dollars(career.top)}</td><td>${career.growth}%</td></tr>`).join("")}</tbody>`;

const maxGrowth = Math.max(...careers.map(c => c.growth));
document.querySelector("#growthChart").innerHTML = careers.map(career => `
  <div class="growth-line"><span>${career.short || career.title}</span><div class="growth-track"><div class="growth-fill" style="width:${Math.max(2, career.growth / maxGrowth * 100)}%"></div></div><strong>${career.growth}%</strong></div>
`).join("");

const quizQuestions = [
  {
    question: "Where would you most like to spend your workday?",
    answers: [
      ["Outdoors in forests or near wildlife", ["Wildlife Biologist", "Conservation Scientist"]],
      ["In a lab testing samples", ["Environmental Scientist", "Environmental Science Technician"]],
      ["At project sites using tools or designs", ["Environmental Engineer", "Solar Photovoltaic Installer", "Wind Turbine Technician"]],
      ["Meeting with people and improving communities", ["Urban & Regional Planner", "Environmental Health & Safety Specialist"]]
    ]
  },
  {
    question: "Which kind of problem sounds most interesting?",
    answers: [
      ["Protecting animals and natural land", ["Wildlife Biologist", "Conservation Scientist"]],
      ["Understanding water or pollution", ["Hydrologist", "Environmental Scientist", "Environmental Science Technician"]],
      ["Building clean-energy systems", ["Environmental Engineer", "Solar Photovoltaic Installer", "Wind Turbine Technician"]],
      ["Making places healthier and safer", ["Urban & Regional Planner", "Environmental Health & Safety Specialist"]]
    ]
  },
  {
    question: "What type of work do you enjoy most?",
    answers: [
      ["Observing nature and collecting field data", ["Wildlife Biologist", "Conservation Scientist", "Hydrologist"]],
      ["Experiments, research, and careful analysis", ["Environmental Scientist", "Environmental Science Technician", "Hydrologist"]],
      ["Hands-on technical work and fixing things", ["Solar Photovoltaic Installer", "Wind Turbine Technician", "Environmental Engineer"]],
      ["Planning, communicating, and helping people", ["Urban & Regional Planner", "Environmental Health & Safety Specialist"]]
    ]
  },
  {
    question: "Which education path sounds best for you?",
    answers: [
      ["A certificate or two-year program", ["Environmental Science Technician", "Solar Photovoltaic Installer", "Wind Turbine Technician"]],
      ["A four-year science degree", ["Environmental Scientist", "Conservation Scientist", "Environmental Health & Safety Specialist"]],
      ["A four-year engineering degree", ["Environmental Engineer"]],
      ["I would consider graduate school", ["Wildlife Biologist", "Hydrologist", "Urban & Regional Planner"]]
    ]
  }
];

let quizIndex = 0;
let quizScores = {};
const quizQuestion = document.querySelector("#quizQuestion");
const quizAnswers = document.querySelector("#quizAnswers");
const quizResult = document.querySelector("#quizResult");
const quizProgressBar = document.querySelector("#quizProgressBar");
const quizProgressText = document.querySelector("#quizProgressText");

function renderQuizQuestion() {
  const item = quizQuestions[quizIndex];
  quizQuestion.innerHTML = `<h3>${item.question}</h3>`;
  quizAnswers.innerHTML = item.answers.map((answer, index) => `
    <button class="quiz-answer" data-answer="${index}">
      <strong>${answer[0]}</strong>
      <span>Select this answer</span>
    </button>
  `).join("");
  quizProgressBar.style.width = `${(quizIndex + 1) / quizQuestions.length * 100}%`;
  quizProgressText.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
}

quizAnswers.addEventListener("click", event => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;
  quizQuestions[quizIndex].answers[Number(button.dataset.answer)][1].forEach(title => {
    quizScores[title] = (quizScores[title] || 0) + 1;
  });
  quizIndex += 1;
  if (quizIndex < quizQuestions.length) renderQuizQuestion();
  else showQuizResult();
});

function showQuizResult() {
  const winnerTitle = Object.entries(quizScores).sort((a, b) => b[1] - a[1])[0][0];
  const winner = careers.find(career => career.title === winnerTitle);
  quizQuestion.hidden = true;
  quizAnswers.hidden = true;
  quizResult.hidden = false;
  quizProgressBar.style.width = "100%";
  quizProgressText.textContent = "Quiz complete";
  quizResult.innerHTML = `
    <div class="quiz-result-icon">✓</div>
    <p class="class-label">Your closest match</p>
    <h3>${winner.title}</h3>
    <p>${winner.description}</p>
    <div class="quiz-result-actions">
      <a href="#${slug(winner.title)}">View this career</a>
      <button id="restartQuiz">Retake quiz</button>
    </div>
  `;
  document.querySelector("#restartQuiz").addEventListener("click", restartQuiz);
}

function restartQuiz() {
  quizIndex = 0;
  quizScores = {};
  quizQuestion.hidden = false;
  quizAnswers.hidden = false;
  quizResult.hidden = true;
  renderQuizQuestion();
}

renderQuizQuestion();
