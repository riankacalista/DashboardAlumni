const roadmap = [
  {
    year: "2026",
    title: "Portal alumni terintegrasi dan API dasar selesai dibangun",
    detail: "Fondasi digital dimulai dari SSO, integrasi dasar, dan portal layanan alumni.",
  },
  {
    year: "2027",
    title: "AI Chatbot Tracer Study dan Career Platform mulai digunakan",
    detail: "Fokus pada peningkatan response rate, self-service alumni, dan simulasi karir.",
  },
  {
    year: "2028",
    title: "BI Dashboard dan Data Warehouse aktif digunakan pimpinan",
    detail: "Dashboard analitik real-time dan data warehouse mulai dipakai untuk keputusan strategis.",
  },
  {
    year: "2029",
    title: "Predictive Analytics diterapkan untuk evaluasi kurikulum",
    detail: "Model prediktif membantu melihat tren employability, kebutuhan kompetensi, dan gap kurikulum.",
  },
  {
    year: "2030",
    title: "Smart Alumni Ecosystem berjalan penuh",
    detail: "Seluruh layanan alumni, tracer study, BI, dan AI terintegrasi secara menyeluruh.",
  },
];

const investments = [
  {
    name: "Portal Alumni Terintegrasi + SSO Integration",
    value: 320,
    valueText: "Rp 320.000.000",
    priority: "High",
  },
  {
    name: "Integrasi API SINATRA UB – Portal IKA FK UB",
    value: 150,
    valueText: "Rp 150.000.000",
    priority: "High",
  },
  {
    name: "AI Chatbot Tracer Study (WhatsApp API)",
    value: 280,
    valueText: "Rp 280.000.000",
    priority: "High",
  },
  {
    name: "Career Development Platform + AI Recommendation Engine",
    value: 350,
    valueText: "Rp 350.000.000",
    priority: "High",
  },
  {
    name: "BI Dashboard Fakultas (Tableau / Power BI)",
    value: 220,
    valueText: "Rp 220.000.000",
    priority: "High",
  },
  {
    name: "Implementasi Data Warehouse Alumni",
    value: 200,
    valueText: "Rp 200.000.000",
    priority: "Medium",
  },
  {
    name: "Infrastruktur Server & Cloud (upgrade + hosting)",
    value: 185,
    valueText: "Rp 185.000.000",
    priority: "High",
  },
  {
    name: "Pelatihan SDM & Change Management",
    value: 95,
    valueText: "Rp 95.000.000",
    priority: "High",
  },
  {
    name: "Predictive Analytics & ML Models",
    value: 175,
    valueText: "Rp 175.000.000",
    priority: "Medium",
  },
];

const alignments = [
  {
    title: "Kurikulum lebih relevan dengan industri kesehatan",
    enabler: "BI Dashboard Skills Gap & Alumni Tracking System",
    owner: "Dosen / Tim Kurikulum",
    period: "2026–2027",
  },
  {
    title: "Ikatan alumni dan komunitas IKA FK UB",
    enabler: "Portal Alumni Terintegrasi, e-legalisasi, registrasi digital",
    owner: "Admin Alumni / IKA FK UB",
    period: "2026",
  },
  {
    title: "Employability lulusan medis nasional dan internasional",
    enabler: "Career Development Platform berbasis AI",
    owner: "Tim Career Center / Alumni",
    period: "2027–2028",
  },
  {
    title: "Pemenuhan standar akreditasi LAM-PTKes",
    enabler: "Tracer Study Otomatis via WhatsApp AI Chatbot",
    owner: "CIO Fakultas / Data Steward",
    period: "2026–2027",
  },
  {
    title: "Tata kelola data dan kepatuhan UU PDP",
    enabler: "RBAC, enkripsi data, audit trail, consent management",
    owner: "Data Steward / Auditor Internal",
    period: "2026",
  },
  {
    title: "Keputusan strategis berbasis data alumni real-time",
    enabler: "BI Dashboard Geospasial & Predictive Analytics",
    owner: "Pimpinan Fakultas / CIO",
    period: "2027–2029",
  },
  {
    title: "Kemitraan dengan rumah sakit dan industri kesehatan",
    enabler: "Verifikasi kredensial medis, lowongan kerja, employer survey",
    owner: "Tim Mitra / Career Center",
    period: "2027–2028",
  },
];

const governance = [
  {
    title: "Peran kunci",
    body: "CIO, Data Steward, Tim BI, Admin Alumni, dan Auditor Internal memastikan implementasi, kualitas data, dan kepatuhan berjalan seragam.",
  },
  {
    title: "Kontrol keamanan",
    body: "RBAC, enkripsi data at rest dan in transit, audit trail, backup, dan disaster recovery adalah kontrol minimum yang disorot laporan.",
  },
  {
    title: "AI governance",
    body: "AI dipakai bertahap untuk chatbot tracer study, simulasi wawancara, dan rekomendasi kerja dengan prinsip etis dan bertanggung jawab.",
  },
  {
    title: "Nilai strategis",
    body: "Dashboard ini mendukung data-driven decision making, evaluasi kurikulum, employer reputation, dan peningkatan kualitas layanan alumni.",
  },
];

const quickWins = [
  {
    title: "SSO login alumni",
    body: "Satu pintu akses untuk portal alumni dan layanan digital lain.",
  },
  {
    title: "WhatsApp chatbot tracer study",
    body: "Mempercepat pengisian survei dan menaikkan response rate.",
  },
  {
    title: "Dashboard visual alumni",
    body: "Membantu pimpinan membaca data tanpa perlu menggali laporan panjang.",
  },
  {
    title: "Digital legalisasi ijazah",
    body: "Mempercepat layanan administrasi dan verifikasi dokumen.",
  },
  {
    title: "Portal lowongan kerja medis",
    body: "Meningkatkan employability dengan kanal karir yang terkurasi.",
  },
  {
    title: "Employer survey digital",
    body: "Menyediakan umpan balik langsung dari rumah sakit dan industri.",
  },
];

const donutSegments = [
  {
    label: "High priority",
    value: 7,
    percent: 77,
    color: "#7ee0c0",
    note: "Fokus utama implementasi",
  },
  {
    label: "Medium priority",
    value: 2,
    percent: 20,
    color: "#ffcc7a",
    note: "Tahap penguatan",
  },
  {
    label: "Margin lain",
    value: 0.3,
    percent: 3,
    color: "#8db3ff",
    note: "Ruang penyesuaian",
  },
];

const flowNodes = [
  {
    title: "Data sumber",
    body: "SINATRA UB, SIAM UB, Portal Alumni, tracer study, dan data employer menjadi bahan baku dashboard.",
  },
  {
    title: "Integrasi & quality check",
    body: "Data dipadukan lewat API, divalidasi oleh Data Steward, dan dijaga dengan RBAC serta audit trail.",
  },
  {
    title: "Analitik BI",
    body: "Dashboard menampilkan response rate, employability, sebaran alumni, skills gap, dan roadmap.",
  },
  {
    title: "Keputusan pimpinan",
    body: "Pimpinan memakai insight ini untuk akreditasi, evaluasi kurikulum, dan strategi karir.",
  },
];

const insight = [
  "Laporan menekankan bahwa pengelolaan alumni FK UB masih terfragmentasi, response rate tracer study perlu ditingkatkan, dan pimpinan membutuhkan dashboard BI untuk evaluasi kurikulum, employability, serta kebutuhan akreditasi LAM-PTKes.",
  "Dashboard ini merangkum isi laporan ke dalam struktur eksekutif yang siap dipresentasikan: ringkasan KPI, roadmap, investasi, alignment bisnis-SI/TI, tata kelola, dan aksi cepat implementasi.",
];

const pageMeta = {
  overview: {
    title: "Ringkasan eksekutif",
    subtitle: "Pilih halaman dari sidebar atau cari kata kunci.",
  },
  visual: {
    title: "Visual ringkas",
    subtitle: "Chart dan alur akan mengikuti kata kunci yang kamu cari.",
  },
  roadmap: {
    title: "Roadmap implementasi",
    subtitle: "Lihat milestone transformasi digital per tahun.",
  },
  investment: {
    title: "Portofolio investasi",
    subtitle: "Anggaran utama dan prioritas akan ikut terfilter.",
  },
  alignment: {
    title: "Strategic alignment",
    subtitle: "Hubungan tujuan bisnis dan enabler SI/TI.",
  },
  governance: {
    title: "Governance",
    subtitle: "Kontrol, peran, dan kepatuhan data.",
  },
  quickwins: {
    title: "Quick wins",
    subtitle: "Aksi cepat untuk adopsi awal.",
  },
  insight: {
    title: "Insight eksekutif",
    subtitle: "Ringkasan alasan dashboard ini relevan.",
  },
};

const pageOrder = ["overview", "visual", "roadmap", "investment", "alignment", "governance", "quickwins", "insight"];

const pageKeywords = {
  overview: ["overview", "ringkasan", "dashboard", "eksekutif"],
  visual: ["visual", "chart", "diagram", "donut"],
  roadmap: ["roadmap", "implementasi", "milestone"],
  investment: ["investment", "investasi", "capex", "anggaran"],
  alignment: ["alignment", "strategic", "ward", "peppard"],
  governance: ["governance", "pdp", "keamanan", "data"],
  quickwins: ["quick wins", "quickwin", "adopsi"],
  insight: ["insight", "eksekutif", "relevan"],
};

const state = {
  page: "overview",
  search: "",
};

const elements = {
  sidebar: document.getElementById("sidebar"),
  backdrop: document.getElementById("backdrop"),
  openSidebar: document.getElementById("openSidebar"),
  closeSidebar: document.getElementById("closeSidebar"),
  searchInput: document.getElementById("searchInput"),
  searchMeta: document.getElementById("searchMeta"),
  clearSearch: document.getElementById("clearSearch"),
  sidebarNav: document.getElementById("sidebarNav"),
  pageKicker: document.getElementById("pageKicker"),
  pageTitle: document.getElementById("pageTitle"),
  pageSubtitle: document.getElementById("pageSubtitle"),
  resultCount: document.getElementById("resultCount"),
  heroBadges: document.getElementById("heroBadges"),
  focusList: document.getElementById("focusList"),
  metricsGrid: document.getElementById("metricsGrid"),
  priorityDonut: document.getElementById("priorityDonut"),
  donutLegend: document.getElementById("donutLegend"),
  flowDiagram: document.getElementById("flowDiagram"),
  roadmap: document.getElementById("roadmap"),
  investmentChart: document.getElementById("investmentChart"),
  miniSummary: document.getElementById("miniSummary"),
  alignmentGrid: document.getElementById("alignmentGrid"),
  governanceCards: document.getElementById("governanceCards"),
  quickWins: document.getElementById("quickWins"),
  insightCopy: document.getElementById("insightCopy"),
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .trim();
}

function matchesText(values, term) {
  if (!term) {
    return true;
  }

  return values.some((value) => normalize(value).includes(term));
}

function shouldShowAllForPage(pageId, term) {
  if (!term) {
    return false;
  }

  return (pageKeywords[pageId] || []).some((keyword) => keyword.includes(term) || term.includes(keyword));
}

function getTerm() {
  return normalize(elements.searchInput.value);
}

function getVisiblePanel() {
  return document.querySelector(`.page-panel[data-page="${state.page}"]`);
}

function setSidebarOpen(isOpen) {
  elements.sidebar.classList.toggle("open", isOpen);
  elements.backdrop.hidden = !isOpen;
  document.body.classList.toggle("sidebar-open", isOpen);
}

function closeSidebar() {
  setSidebarOpen(false);
}

function openSidebar() {
  setSidebarOpen(true);
}

function renderList(container, items, emptyLabel, renderer) {
  if (!container) {
    return;
  }

  if (!items.length) {
    container.innerHTML = `<div class="empty-state card soft"><strong>${emptyLabel}</strong><span>Ubah kata kunci atau pilih halaman lain.</span></div>`;
    return;
  }

  container.innerHTML = items.map(renderer).join("");
}

function renderOverview(term) {
  const showAll = shouldShowAllForPage("overview", term);

  const badges = ["BI Dashboard", "Tracer Study", "Career Development", "AI & Predictive Analytics"].filter((item) => showAll || matchesText([item], term));

  const focusItems = [
    "Integrasi Portal Alumni, SINATRA, SIAM, dan dashboard pimpinan",
    "Automasi tracer study via chatbot dan pelaporan BI",
    "Analitik skills gap, employability, dan evaluasi kurikulum",
    "Governance data, audit trail, RBAC, dan kepatuhan UU PDP",
  ].filter((item) => showAll || matchesText([item], term));

  const metricsSource = [
    { label: "Penyelarasan strategis", value: "7", detail: "pasang alignment bisnis-SI/TI", tone: "accent" },
    { label: "Portofolio investasi", value: "9", detail: "komponen utama 2026–2029", tone: "accent warm" },
    { label: "Total CAPEX", value: "Rp 1,975 M", detail: "estimasi investasi laporan", tone: "accent deep" },
    { label: "Milestone roadmap", value: "5", detail: "fase implementasi 2026–2030", tone: "accent green" },
    { label: "Quick wins", value: "5", detail: "aksi cepat untuk adopsi awal", tone: "accent slate" },
    { label: "Prioritas tinggi", value: "7", detail: "dari 9 inisiatif investasi", tone: "accent amber" },
  ];
  const metrics = showAll ? metricsSource : metricsSource.filter((item) => matchesText([item.label, item.value, item.detail], term));

  renderList(elements.heroBadges, badges, "Tidak ada badge yang cocok", (item) => `<span>${item}</span>`);
  renderList(elements.focusList, focusItems, "Tidak ada fokus yang cocok", (item) => `<li>${item}</li>`);

  if (!elements.metricsGrid) {
    return;
  }

  if (!metrics.length) {
    elements.metricsGrid.innerHTML = '<div class="empty-state card soft"><strong>Tidak ada metrik yang cocok</strong><span>Coba kata kunci lain.</span></div>';
    return;
  }

  elements.metricsGrid.innerHTML = metrics
    .map(
      (item) => `
        <article class="metric card ${item.tone}">
          <span class="metric-label">${item.label}</span>
          <strong>${item.value}</strong>
          <small>${item.detail}</small>
        </article>
      `
    )
    .join("");
}

function renderVisual(term) {
  const showAll = shouldShowAllForPage("visual", term);
  const filteredSegments = showAll ? donutSegments : donutSegments.filter((item) => matchesText([item.label, item.note], term));
  const filteredNodes = showAll ? flowNodes : flowNodes.filter((item) => matchesText([item.title, item.body], term));

  if (filteredSegments.length) {
    const total = filteredSegments.reduce((sum, item) => sum + item.percent, 0);
    const gradient = filteredSegments
      .map((segment, index) => {
        const start = filteredSegments.slice(0, index).reduce((sum, item) => sum + item.percent, 0);
        const end = start + segment.percent;
        return `${segment.color} ${start}% ${end}%`;
      })
      .join(", ");

    elements.priorityDonut.style.background = `conic-gradient(${gradient})`;
    elements.priorityDonut.querySelector(".donut-center strong").textContent = `${total}%`;
    elements.priorityDonut.querySelector(".donut-center span").textContent = term ? "Filtered priority share" : "High Priority";
    elements.donutLegend.innerHTML = filteredSegments
      .map(
        (segment) => `
          <div class="legend-item">
            <span class="legend-swatch" style="background:${segment.color}"></span>
            <div class="legend-text">
              <strong>${segment.label} (${segment.value})</strong>
              <span>${segment.note}</span>
            </div>
          </div>
        `
      )
      .join("");
  } else {
    elements.priorityDonut.style.background = "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))";
    elements.priorityDonut.querySelector(".donut-center strong").textContent = "0%";
    elements.priorityDonut.querySelector(".donut-center span").textContent = "Tidak ada hasil";
    elements.donutLegend.innerHTML = '<div class="empty-state inline"><strong>Tidak ada segment yang cocok</strong><span>Coba kata lain.</span></div>';
  }

  renderList(
    elements.flowDiagram,
    filteredNodes,
    "Tidak ada node diagram yang cocok",
    (item) => `
      <div class="flow-node">
        <strong>${item.title}</strong>
        <span>${item.body}</span>
      </div>
    `
  );
}

function renderRoadmap(term) {
  const showAll = shouldShowAllForPage("roadmap", term);
  const filtered = showAll ? roadmap : roadmap.filter((item) => matchesText([item.year, item.title, item.detail], term));

  renderList(
    elements.roadmap,
    filtered,
    "Tidak ada milestone yang cocok",
    (item) => `
      <article class="timeline-item">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-content">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      </article>
    `
  );
}

function renderInvestment(term) {
  const showAll = shouldShowAllForPage("investment", term);
  const filtered = showAll ? investments : investments.filter((item) => matchesText([item.name, item.valueText, item.priority], term));
  const max = Math.max(...filtered.map((item) => item.value), 1);

  renderList(elements.investmentChart, filtered, "Tidak ada item investasi yang cocok", (item) => {
    const width = Math.round((item.value / max) * 100);
    const tone = item.priority === "High" ? "linear-gradient(90deg, #7ee0c0, #8db3ff)" : "linear-gradient(90deg, #ffcc7a, #ff8fb3)";

    return `
        <div class="bar-row">
          <div class="bar-label">
            <strong>${item.name}</strong><br />
            <span class="tag ${item.priority === "High" ? "" : "alt"}">${item.priority}</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="--w:${width}%; background:${tone}"></div>
          </div>
          <div class="bar-value">${item.valueText}</div>
        </div>
      `;
  });

  const total = filtered.reduce((sum, item) => sum + item.value, 0);
  const highCount = filtered.filter((item) => item.priority === "High").length;
  const topNames =
    filtered
      .slice(0, 2)
      .map((item) => item.name)
      .join(", ") || "Tidak ada data";

  elements.miniSummary.innerHTML = [
    { label: "Filtered total", value: total ? `Rp ${new Intl.NumberFormat("id-ID").format(total)} juta` : "-", detail: `${filtered.length} item tampil` },
    { label: "High priority", value: `${highCount} item`, detail: "prioritas utama" },
    { label: "Sorotan", value: topNames, detail: term ? `cocok untuk "${elements.searchInput.value}"` : "item teratas" },
  ]
    .map(
      (item) => `
        <div>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <small>${item.detail}</small>
        </div>
      `
    )
    .join("");
}

function renderAlignment(term) {
  const showAll = shouldShowAllForPage("alignment", term);
  const filtered = showAll ? alignments : alignments.filter((item) => matchesText([item.title, item.enabler, item.owner, item.period], term));

  renderList(
    elements.alignmentGrid,
    filtered,
    "Tidak ada alignment yang cocok",
    (item, index) => `
      <article class="alignment-card">
        <div>
          <div class="card-topline">
            <div class="card-index">${index + 1}</div>
            <div class="tag">${item.period}</div>
          </div>
          <h3>${item.title}</h3>
          <p>${item.enabler}</p>
        </div>
        <p><strong>Owner:</strong> ${item.owner}</p>
      </article>
    `
  );
}

function renderGovernance(term) {
  const showAll = shouldShowAllForPage("governance", term);
  const filtered = showAll ? governance : governance.filter((item) => matchesText([item.title, item.body], term));

  renderList(
    elements.governanceCards,
    filtered,
    "Tidak ada governance yang cocok",
    (item) => `
      <article class="info-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `
  );
}

function renderQuickWins(term) {
  const showAll = shouldShowAllForPage("quickwins", term);
  const filtered = showAll ? quickWins : quickWins.filter((item) => matchesText([item.title, item.body], term));

  renderList(
    elements.quickWins,
    filtered,
    "Tidak ada quick win yang cocok",
    (item) => `
      <article class="quick-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `
  );
}

function renderInsight(term) {
  const showAll = shouldShowAllForPage("insight", term);
  const filtered = showAll ? insight : insight.filter((item) => matchesText([item], term));

  renderList(elements.insightCopy, filtered, "Tidak ada insight yang cocok", (item) => `<p>${item}</p>`);
}

function countMatches(pageId, term) {
  if (shouldShowAllForPage(pageId, term)) {
    const counts = {
      overview: 4 + 4 + 6,
      visual: donutSegments.length + flowNodes.length,
      roadmap: roadmap.length,
      investment: investments.length,
      alignment: alignments.length,
      governance: governance.length,
      quickwins: quickWins.length,
      insight: insight.length,
    };

    return counts[pageId] || 0;
  }

  const matchers = {
    overview: () => {
      const badges = ["BI Dashboard", "Tracer Study", "Career Development", "AI & Predictive Analytics"].filter((item) => matchesText([item], term)).length;
      const focus = [
        "Integrasi Portal Alumni, SINATRA, SIAM, dan dashboard pimpinan",
        "Automasi tracer study via chatbot dan pelaporan BI",
        "Analitik skills gap, employability, dan evaluasi kurikulum",
        "Governance data, audit trail, RBAC, dan kepatuhan UU PDP",
      ].filter((item) => matchesText([item], term)).length;
      const metrics = ["Penyelarasan strategis", "Portofolio investasi", "Total CAPEX", "Milestone roadmap", "Quick wins", "Prioritas tinggi"].filter((item) => matchesText([item], term)).length;

      return badges + focus + metrics;
    },
    visual: () => donutSegments.filter((item) => matchesText([item.label, item.note], term)).length + flowNodes.filter((item) => matchesText([item.title, item.body], term)).length,
    roadmap: () => roadmap.filter((item) => matchesText([item.year, item.title, item.detail], term)).length,
    investment: () => investments.filter((item) => matchesText([item.name, item.valueText, item.priority], term)).length,
    alignment: () => alignments.filter((item) => matchesText([item.title, item.enabler, item.owner, item.period], term)).length,
    governance: () => governance.filter((item) => matchesText([item.title, item.body], term)).length,
    quickwins: () => quickWins.filter((item) => matchesText([item.title, item.body], term)).length,
    insight: () => insight.filter((item) => matchesText([item], term)).length,
  };

  return matchers[pageId] ? matchers[pageId]() : 0;
}

function findBestPage(term) {
  if (!term) {
    return state.page;
  }

  const scopes = {
    overview: ["BI Dashboard", "Tracer Study", "Career Development", "AI & Predictive Analytics", "Integrasi Portal Alumni"],
    visual: donutSegments.flatMap((item) => [item.label, item.note]).concat(flowNodes.flatMap((item) => [item.title, item.body])),
    roadmap: roadmap.flatMap((item) => [item.year, item.title, item.detail]),
    investment: investments.flatMap((item) => [item.name, item.valueText, item.priority]),
    alignment: alignments.flatMap((item) => [item.title, item.enabler, item.owner, item.period]),
    governance: governance.flatMap((item) => [item.title, item.body]),
    quickwins: quickWins.flatMap((item) => [item.title, item.body]),
    insight: insight.slice(),
  };

  return pageOrder.find((pageId) => scopes[pageId].some((item) => normalize(item).includes(term))) || state.page;
}

function updateSidebarNav() {
  elements.sidebarNav.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === state.page);
  });
}

function updateTopbar(term) {
  const meta = pageMeta[state.page] || pageMeta.overview;
  elements.pageKicker.textContent = term ? "Search mode" : "Dashboard interaktif";
  elements.pageTitle.textContent = meta.title;
  elements.pageSubtitle.textContent = term ? `Menampilkan ${countMatches(state.page, term)} hasil pada halaman ini untuk "${elements.searchInput.value}".` : meta.subtitle;
  elements.resultCount.textContent = term ? `${countMatches(state.page, term)} hasil` : `Halaman: ${meta.title}`;
  elements.searchMeta.textContent = term ? `Tekan Enter untuk lompat ke halaman paling relevan. Ditemukan ${pageOrder.reduce((sum, pageId) => sum + countMatches(pageId, term), 0)} item total.` : "Ketik kata kunci untuk memfilter halaman.";
}

function renderActivePage() {
  const term = getTerm();

  document.querySelectorAll(".page-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.page === state.page);
  });

  renderOverview(term);
  renderVisual(term);
  renderRoadmap(term);
  renderInvestment(term);
  renderAlignment(term);
  renderGovernance(term);
  renderQuickWins(term);
  renderInsight(term);
  updateSidebarNav();
  updateTopbar(term);

  const visiblePanel = getVisiblePanel();
  if (visiblePanel) {
    visiblePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setPage(pageId, { syncHash = true } = {}) {
  state.page = pageOrder.includes(pageId) ? pageId : "overview";

  if (syncHash) {
    const nextHash = `#${state.page}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }

  renderActivePage();
  closeSidebar();
}

function initPageFromHash() {
  const hash = normalize(window.location.hash.replace("#", ""));
  return pageOrder.includes(hash) ? hash : "overview";
}

function handleSearchEnter() {
  const term = getTerm();
  if (!term) {
    renderActivePage();
    return;
  }

  setPage(findBestPage(term));
}

function init() {
  elements.openSidebar.addEventListener("click", openSidebar);
  elements.closeSidebar.addEventListener("click", closeSidebar);
  elements.backdrop.addEventListener("click", closeSidebar);

  elements.searchInput.addEventListener("input", renderActivePage);
  elements.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchEnter();
    }
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.searchInput.value = "";
    renderActivePage();
    elements.searchInput.focus();
  });

  elements.sidebarNav.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");
    if (!link) {
      return;
    }

    event.preventDefault();
    setPage(link.dataset.route);
  });

  window.addEventListener("hashchange", () => {
    const nextPage = initPageFromHash();
    if (nextPage !== state.page) {
      setPage(nextPage, { syncHash: false });
    }
  });

  setPage(initPageFromHash(), { syncHash: false });
}

init();
