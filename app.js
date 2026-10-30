const DEFAULT_DATA = {"total":212,"resumo":{"travessura":{"quantidade":121,"porcentagem":57.08},"doces":{"quantidade":91,"porcentagem":42.92}},"tabelas":{"usuarios":[{"codigo":"F","nome":"Felipe"},{"codigo":"G","nome":"Gustavo Marconi"},{"codigo":"H","nome":"Hermann"},{"codigo":"I","nome":"Isabela"},{"codigo":"J","nome":"Joaozinho"},{"codigo":"K","nome":"Kelvin"},{"codigo":"L","nome":"Layza"},{"codigo":"M","nome":"Matos"},{"codigo":"N","nome":"Nardone"}],"resultados":[{"ordem":1,"resultado":"travessura","usuario":"H","data":"2026-10-01"},{"ordem":2,"resultado":"travessura","usuario":"K","data":"2026-10-01"},{"ordem":3,"resultado":"doces","usuario":"F","data":"2026-10-01"},{"ordem":4,"resultado":"travessura","usuario":"L","data":"2026-10-01"},{"ordem":5,"resultado":"doces","usuario":"G","data":"2026-10-01"},{"ordem":6,"resultado":"travessura","usuario":"M","data":"2026-10-01"},{"ordem":7,"resultado":"travessura","usuario":"J","data":"2026-10-01"},{"ordem":8,"resultado":"travessura","usuario":"K","data":"2026-10-02"},{"ordem":9,"resultado":"doces","usuario":"M","data":"2026-10-02"},{"ordem":10,"resultado":"travessura","usuario":"L","data":"2026-10-02"},{"ordem":11,"resultado":"travessura","usuario":"F","data":"2026-10-02"},{"ordem":12,"resultado":"travessura","usuario":"G","data":"2026-10-02"},{"ordem":13,"resultado":"doces","usuario":"J","data":"2026-10-02"},{"ordem":14,"resultado":"travessura","usuario":"H","data":"2026-10-02"},{"ordem":15,"resultado":"travessura","usuario":"I","data":"2026-10-02"},{"ordem":16,"resultado":"travessura","usuario":"K","data":"2026-10-03"},{"ordem":17,"resultado":"travessura","usuario":"L","data":"2026-10-03"},{"ordem":18,"resultado":"travessura","usuario":"F","data":"2026-10-03"},{"ordem":19,"resultado":"doces","usuario":"M","data":"2026-10-03"},{"ordem":20,"resultado":"doces","usuario":"G","data":"2026-10-03"},{"ordem":21,"resultado":"doces","usuario":"J","data":"2026-10-03"},{"ordem":22,"resultado":"travessura","usuario":"M","data":"2026-10-04"},{"ordem":23,"resultado":"travessura","usuario":"J","data":"2026-10-04"},{"ordem":24,"resultado":"doces","usuario":"F","data":"2026-10-04"},{"ordem":25,"resultado":"doces","usuario":"L","data":"2026-10-04"},{"ordem":26,"resultado":"travessura","usuario":"K","data":"2026-10-04"},{"ordem":27,"resultado":"travessura","usuario":"G","data":"2026-10-04"},{"ordem":28,"resultado":"doces","usuario":"I","data":"2026-10-04"},{"ordem":29,"resultado":"doces","usuario":"J","data":"2026-10-05"},{"ordem":30,"resultado":"travessura","usuario":"K","data":"2026-10-05"},{"ordem":31,"resultado":"travessura","usuario":"L","data":"2026-10-05"},{"ordem":32,"resultado":"doces","usuario":"M","data":"2026-10-05"},{"ordem":33,"resultado":"travessura","usuario":"F","data":"2026-10-05"},{"ordem":34,"resultado":"travessura","usuario":"G","data":"2026-10-05"},{"ordem":35,"resultado":"travessura","usuario":"F","data":"2026-10-06"},{"ordem":36,"resultado":"travessura","usuario":"H","data":"2026-10-06"},{"ordem":37,"resultado":"doces","usuario":"G","data":"2026-10-06"},{"ordem":38,"resultado":"travessura","usuario":"J","data":"2026-10-06"},{"ordem":39,"resultado":"travessura","usuario":"K","data":"2026-10-06"},{"ordem":40,"resultado":"travessura","usuario":"N","data":"2026-10-06"},{"ordem":41,"resultado":"doces","usuario":"M","data":"2026-10-06"},{"ordem":42,"resultado":"travessura","usuario":"I","data":"2026-10-06"},{"ordem":43,"resultado":"travessura","usuario":"L","data":"2026-10-06"},{"ordem":44,"resultado":"travessura","usuario":"L","data":"2026-10-07"},{"ordem":45,"resultado":"travessura","usuario":"K","data":"2026-10-07"},{"ordem":46,"resultado":"doces","usuario":"H","data":"2026-10-07"},{"ordem":47,"resultado":"travessura","usuario":"I","data":"2026-10-07"},{"ordem":48,"resultado":"travessura","usuario":"G","data":"2026-10-07"},{"ordem":49,"resultado":"travessura","usuario":"J","data":"2026-10-07"},{"ordem":50,"resultado":"doces","usuario":"N","data":"2026-10-07"},{"ordem":51,"resultado":"travessura","usuario":"M","data":"2026-10-07"},{"ordem":52,"resultado":"doces","usuario":"K","data":"2026-10-08"},{"ordem":53,"resultado":"doces","usuario":"H","data":"2026-10-08"},{"ordem":54,"resultado":"doces","usuario":"M","data":"2026-10-08"},{"ordem":55,"resultado":"travessura","usuario":"G","data":"2026-10-08"},{"ordem":56,"resultado":"doces","usuario":"J","data":"2026-10-08"},{"ordem":57,"resultado":"doces","usuario":"F","data":"2026-10-08"},{"ordem":58,"resultado":"doces","usuario":"L","data":"2026-10-08"},{"ordem":59,"resultado":"doces","usuario":"N","data":"2026-10-08"},{"ordem":60,"resultado":"travessura","usuario":"K","data":"2026-10-09"},{"ordem":61,"resultado":"doces","usuario":"J","data":"2026-10-09"},{"ordem":62,"resultado":"travessura","usuario":"G","data":"2026-10-09"},{"ordem":63,"resultado":"travessura","usuario":"M","data":"2026-10-09"},{"ordem":64,"resultado":"travessura","usuario":"L","data":"2026-10-09"},{"ordem":65,"resultado":"doces","usuario":"F","data":"2026-10-09"},{"ordem":66,"resultado":"travessura","usuario":"I","data":"2026-10-09"},{"ordem":67,"resultado":"travessura","usuario":"N","data":"2026-10-09"},{"ordem":68,"resultado":"doces","usuario":"L","data":"2026-10-10"},{"ordem":69,"resultado":"travessura","usuario":"F","data":"2026-10-10"},{"ordem":70,"resultado":"doces","usuario":"J","data":"2026-10-10"},{"ordem":71,"resultado":"travessura","usuario":"K","data":"2026-10-10"},{"ordem":72,"resultado":"travessura","usuario":"G","data":"2026-10-10"},{"ordem":73,"resultado":"travessura","usuario":"M","data":"2026-10-10"},{"ordem":74,"resultado":"travessura","usuario":"N","data":"2026-10-10"},{"ordem":75,"resultado":"doces","usuario":"M","data":"2026-10-11"},{"ordem":76,"resultado":"doces","usuario":"L","data":"2026-10-11"},{"ordem":77,"resultado":"travessura","usuario":"K","data":"2026-10-11"},{"ordem":78,"resultado":"doces","usuario":"G","data":"2026-10-11"},{"ordem":79,"resultado":"doces","usuario":"J","data":"2026-10-11"},{"ordem":80,"resultado":"doces","usuario":"F","data":"2026-10-11"},{"ordem":81,"resultado":"travessura","usuario":"G","data":"2026-10-12"},{"ordem":82,"resultado":"doces","usuario":"J","data":"2026-10-12"},{"ordem":83,"resultado":"doces","usuario":"K","data":"2026-10-12"},{"ordem":84,"resultado":"travessura","usuario":"N","data":"2026-10-12"},{"ordem":85,"resultado":"travessura","usuario":"I","data":"2026-10-12"},{"ordem":86,"resultado":"doces","usuario":"L","data":"2026-10-12"},{"ordem":87,"resultado":"travessura","usuario":"F","data":"2026-10-12"},{"ordem":88,"resultado":"doces","usuario":"H","data":"2026-10-12"},{"ordem":89,"resultado":"doces","usuario":"K","data":"2026-10-13"},{"ordem":90,"resultado":"doces","usuario":"I","data":"2026-10-13"},{"ordem":91,"resultado":"doces","usuario":"H","data":"2026-10-13"},{"ordem":92,"resultado":"travessura","usuario":"G","data":"2026-10-13"},{"ordem":93,"resultado":"travessura","usuario":"J","data":"2026-10-13"},{"ordem":94,"resultado":"travessura","usuario":"M","data":"2026-10-13"},{"ordem":95,"resultado":"travessura","usuario":"F","data":"2026-10-13"},{"ordem":96,"resultado":"travessura","usuario":"L","data":"2026-10-13"},{"ordem":97,"resultado":"doces","usuario":"N","data":"2026-10-13"},{"ordem":98,"resultado":"doces","usuario":"K","data":"2026-10-14"},{"ordem":99,"resultado":"travessura","usuario":"M","data":"2026-10-14"},{"ordem":100,"resultado":"travessura","usuario":"H","data":"2026-10-14"},{"ordem":101,"resultado":"doces","usuario":"G","data":"2026-10-14"},{"ordem":102,"resultado":"doces","usuario":"J","data":"2026-10-14"},{"ordem":103,"resultado":"travessura","usuario":"L","data":"2026-10-14"},{"ordem":104,"resultado":"travessura","usuario":"F","data":"2026-10-14"},{"ordem":105,"resultado":"doces","usuario":"N","data":"2026-10-14"},{"ordem":106,"resultado":"travessura","usuario":"I","data":"2026-10-14"},{"ordem":107,"resultado":"travessura","usuario":"K","data":"2026-10-15"},{"ordem":108,"resultado":"travessura","usuario":"I","data":"2026-10-15"},{"ordem":109,"resultado":"travessura","usuario":"H","data":"2026-10-15"},{"ordem":110,"resultado":"travessura","usuario":"G","data":"2026-10-15"},{"ordem":111,"resultado":"doces","usuario":"J","data":"2026-10-15"},{"ordem":112,"resultado":"doces","usuario":"L","data":"2026-10-15"},{"ordem":113,"resultado":"travessura","usuario":"M","data":"2026-10-15"},{"ordem":114,"resultado":"doces","usuario":"F","data":"2026-10-15"},{"ordem":115,"resultado":"travessura","usuario":"N","data":"2026-10-15"},{"ordem":116,"resultado":"travessura","usuario":"K","data":"2026-10-16"},{"ordem":117,"resultado":"travessura","usuario":"G","data":"2026-10-16"},{"ordem":118,"resultado":"travessura","usuario":"F","data":"2026-10-16"},{"ordem":119,"resultado":"travessura","usuario":"J","data":"2026-10-16"},{"ordem":120,"resultado":"doces","usuario":"L","data":"2026-10-16"},{"ordem":121,"resultado":"doces","usuario":"M","data":"2026-10-16"},{"ordem":122,"resultado":"doces","usuario":"N","data":"2026-10-16"},{"ordem":123,"resultado":"travessura","usuario":"J","data":"2026-10-17"},{"ordem":124,"resultado":"travessura","usuario":"K","data":"2026-10-17"},{"ordem":125,"resultado":"doces","usuario":"H","data":"2026-10-17"},{"ordem":126,"resultado":"doces","usuario":"M","data":"2026-10-17"},{"ordem":127,"resultado":"travessura","usuario":"G","data":"2026-10-17"},{"ordem":128,"resultado":"doces","usuario":"L","data":"2026-10-17"},{"ordem":129,"resultado":"doces","usuario":"N","data":"2026-10-17"},{"ordem":130,"resultado":"travessura","usuario":"F","data":"2026-10-17"},{"ordem":131,"resultado":"travessura","usuario":"K","data":"2026-10-18"},{"ordem":132,"resultado":"doces","usuario":"M","data":"2026-10-18"},{"ordem":133,"resultado":"travessura","usuario":"I","data":"2026-10-18"},{"ordem":134,"resultado":"travessura","usuario":"G","data":"2026-10-18"},{"ordem":135,"resultado":"doces","usuario":"J","data":"2026-10-18"},{"ordem":136,"resultado":"travessura","usuario":"N","data":"2026-10-18"},{"ordem":137,"resultado":"travessura","usuario":"F","data":"2026-10-18"},{"ordem":138,"resultado":"doces","usuario":"K","data":"2026-10-19"},{"ordem":139,"resultado":"travessura","usuario":"G","data":"2026-10-19"},{"ordem":140,"resultado":"doces","usuario":"J","data":"2026-10-19"},{"ordem":141,"resultado":"travessura","usuario":"F","data":"2026-10-19"},{"ordem":142,"resultado":"doces","usuario":"M","data":"2026-10-19"},{"ordem":143,"resultado":"travessura","usuario":"I","data":"2026-10-19"},{"ordem":144,"resultado":"travessura","usuario":"N","data":"2026-10-19"},{"ordem":145,"resultado":"travessura","usuario":"H","data":"2026-10-19"},{"ordem":146,"resultado":"travessura","usuario":"L","data":"2026-10-19"},{"ordem":147,"resultado":"travessura","usuario":"K","data":"2026-10-20"},{"ordem":148,"resultado":"travessura","usuario":"H","data":"2026-10-20"},{"ordem":149,"resultado":"travessura","usuario":"L","data":"2026-10-20"},{"ordem":150,"resultado":"doces","usuario":"G","data":"2026-10-20"},{"ordem":151,"resultado":"doces","usuario":"M","data":"2026-10-20"},{"ordem":152,"resultado":"doces","usuario":"J","data":"2026-10-20"},{"ordem":153,"resultado":"doces","usuario":"I","data":"2026-10-20"},{"ordem":154,"resultado":"travessura","usuario":"F","data":"2026-10-20"},{"ordem":155,"resultado":"doces","usuario":"K","data":"2026-10-21"},{"ordem":156,"resultado":"doces","usuario":"H","data":"2026-10-21"},{"ordem":157,"resultado":"doces","usuario":"G","data":"2026-10-21"},{"ordem":158,"resultado":"travessura","usuario":"M","data":"2026-10-21"},{"ordem":159,"resultado":"doces","usuario":"J","data":"2026-10-21"},{"ordem":160,"resultado":"travessura","usuario":"L","data":"2026-10-21"},{"ordem":161,"resultado":"doces","usuario":"I","data":"2026-10-21"},{"ordem":162,"resultado":"travessura","usuario":"N","data":"2026-10-21"},{"ordem":163,"resultado":"doces","usuario":"K","data":"2026-10-22"},{"ordem":164,"resultado":"doces","usuario":"H","data":"2026-10-22"},{"ordem":165,"resultado":"doces","usuario":"G","data":"2026-10-22"},{"ordem":166,"resultado":"travessura","usuario":"L","data":"2026-10-22"},{"ordem":167,"resultado":"doces","usuario":"I","data":"2026-10-22"},{"ordem":168,"resultado":"travessura","usuario":"M","data":"2026-10-22"},{"ordem":169,"resultado":"travessura","usuario":"J","data":"2026-10-22"},{"ordem":170,"resultado":"travessura","usuario":"F","data":"2026-10-22"},{"ordem":171,"resultado":"travessura","usuario":"N","data":"2026-10-22"},{"ordem":172,"resultado":"doces","usuario":"G","data":"2026-10-23"},{"ordem":173,"resultado":"travessura","usuario":"K","data":"2026-10-23"},{"ordem":174,"resultado":"doces","usuario":"I","data":"2026-10-23"},{"ordem":175,"resultado":"doces","usuario":"L","data":"2026-10-23"},{"ordem":176,"resultado":"travessura","usuario":"J","data":"2026-10-23"},{"ordem":177,"resultado":"doces","usuario":"F","data":"2026-10-23"},{"ordem":178,"resultado":"travessura","usuario":"M","data":"2026-10-23"},{"ordem":179,"resultado":"doces","usuario":"N","data":"2026-10-23"},{"ordem":180,"resultado":"travessura","usuario":"J","data":"2026-10-24"},{"ordem":181,"resultado":"travessura","usuario":"N","data":"2026-10-24"},{"ordem":182,"resultado":"travessura","usuario":"K","data":"2026-10-24"},{"ordem":183,"resultado":"doces","usuario":"L","data":"2026-10-24"},{"ordem":184,"resultado":"travessura","usuario":"I","data":"2026-10-24"},{"ordem":185,"resultado":"doces","usuario":"F","data":"2026-10-24"},{"ordem":186,"resultado":"doces","usuario":"G","data":"2026-10-24"},{"ordem":187,"resultado":"travessura","usuario":"M","data":"2026-10-24"},{"ordem":188,"resultado":"travessura","usuario":"I","data":"2026-10-25"},{"ordem":189,"resultado":"travessura","usuario":"L","data":"2026-10-25"},{"ordem":190,"resultado":"doces","usuario":"F","data":"2026-10-25"},{"ordem":191,"resultado":"travessura","usuario":"K","data":"2026-10-25"},{"ordem":192,"resultado":"doces","usuario":"G","data":"2026-10-25"},{"ordem":193,"resultado":"travessura","usuario":"N","data":"2026-10-25"},{"ordem":194,"resultado":"travessura","usuario":"J","data":"2026-10-25"},{"ordem":195,"resultado":"travessura","usuario":"M","data":"2026-10-25"},{"ordem":196,"resultado":"doces","usuario":"H","data":"2026-10-25"},{"ordem":197,"resultado":"doces","usuario":"I","data":"2026-10-26"},{"ordem":198,"resultado":"travessura","usuario":"K","data":"2026-10-26"},{"ordem":199,"resultado":"doces","usuario":"H","data":"2026-10-26"},{"ordem":200,"resultado":"doces","usuario":"N","data":"2026-10-26"},{"ordem":201,"resultado":"travessura","usuario":"L","data":"2026-10-26"},{"ordem":202,"resultado":"travessura","usuario":"G","data":"2026-10-26"},{"ordem":203,"resultado":"travessura","usuario":"J","data":"2026-10-26"},{"ordem":204,"resultado":"travessura","usuario":"M","data":"2026-10-26"},{"ordem":205,"resultado":"doces","usuario":"F","data":"2026-10-26"},{"ordem":206,"resultado":"doces","usuario":"I","data":"2026-10-27"},{"ordem":207,"resultado":"travessura","usuario":"K","data":"2026-10-27"},{"ordem":208,"resultado":"doces","usuario":"N","data":"2026-10-27"},{"ordem":209,"resultado":"doces","usuario":"G","data":"2026-10-27"},{"ordem":210,"resultado":"doces","usuario":"M","data":"2026-10-27"},{"ordem":211,"resultado":"travessura","usuario":"L","data":"2026-10-27"},{"ordem":212,"resultado":"travessura","usuario":"J","data":"2026-10-27"},{"ordem":213,"resultado":"doces","usuario":"K","data":"2026-10-28"},{"ordem":214,"resultado":"travessura","usuario":"L","data":"2026-10-28"},{"ordem":215,"resultado":"doces","usuario":"G","data":"2026-10-28"},{"ordem":216,"resultado":"doces","usuario":"J","data":"2026-10-28"},{"ordem":217,"resultado":"travessura","usuario":"I","data":"2026-10-28"},{"ordem":218,"resultado":"doces","usuario":"M","data":"2026-10-28"},{"ordem":219,"resultado":"travessura","usuario":"F","data":"2026-10-28"},{"ordem":220,"resultado":"travessura","usuario":"H","data":"2026-10-28"},{"ordem":221,"resultado":"travessura","usuario":"K","data":"2026-10-29"},{"ordem":222,"resultado":"doces","usuario":"I","data":"2026-10-29"},{"ordem":223,"resultado":"doces","usuario":"G","data":"2026-10-29"},{"ordem":224,"resultado":"doces","usuario":"M","data":"2026-10-29"},{"ordem":225,"resultado":"doces","usuario":"L","data":"2026-10-29"},{"ordem":226,"resultado":"doces","usuario":"J","data":"2026-10-29"},{"ordem":227,"resultado":"travessura","usuario":"N","data":"2026-10-29"}]},"relacionamentos":[{"campo":"tabelas.resultados.usuario","referencia":"tabelas.usuarios.codigo","tipo":"N:1","obrigatorio":true}],"observacao":"JSON não impõe chave estrangeira automaticamente. Para manter a integridade, valide que todo valor de resultados[].usuario exista em usuarios[].codigo antes de salvar/importar."};


const COLORS = {
  sweet: "#f6b94c",
  trick: "#ff7138",
  purple: "#ff8a24",
  grid: "rgba(144, 155, 178, .12)",
  text: "#8994aa"
};

let normalized = normalizeData(DEFAULT_DATA);
let charts = {};
let toastTimer;

function normalizeData(raw) {
  const users = raw?.tabelas?.usuarios || raw?.usuarios?.registros || raw?.usuarios || [];
  const results = raw?.tabelas?.resultados || raw?.resultados || [];
  const userList = Array.isArray(users) ? users.map(u => ({
    codigo: String(u.codigo ?? u.letra ?? u.id ?? "").trim().toUpperCase(),
    nome: u.nome ?? u.name ?? String(u.codigo ?? "")
  })) : [];
  const userMap = new Map(userList.map(u => [u.codigo, u.nome]));
  const resultList = results.map((r, i) => {
    const rawResult = String(r.resultado ?? r.tipo ?? "").toLowerCase();
    const result = ["t", "travessura", "trick"].includes(rawResult) ? "travessura" :
      ["d", "doce", "doces", "sweet"].includes(rawResult) ? "doces" : rawResult;
    const userCode = r.usuario == null ? null : String(r.usuario).trim().toUpperCase();
    return {
      ordem: Number(r.ordem ?? i + 1),
      resultado: result,
      usuario: userCode,
      nomeUsuario: userMap.get(userCode) || (userCode || "Sem usuário"),
      data: String(r.data ?? "")
    };
  }).filter(r => ["doces", "travessura"].includes(r.resultado))
    .sort((a, b) => a.ordem - b.ordem);
  return { users: userList, results: resultList };
}

const $ = id => document.getElementById(id);
const formatDate = iso => {
  if (!iso) return "Data desconhecida";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }).replace(".", "");
};
const pct = (n, total) => total ? (n / total * 100).toLocaleString("pt-BR", { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + "%" : "0%";
const count = (arr, result) => arr.filter(r => r.resultado === result).length;
const esc = s => String(s ?? "").replace(/[&<>"']/g, ch => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));

function aggregate(results) {
  const byUser = normalized.users.map(u => {
    const own = results.filter(r => r.usuario === u.codigo);
    return { ...u, jogadas: own.length, doces: count(own, "doces"), travessuras: count(own, "travessura") };
  });
  const sweets = count(results, "doces"), tricks = count(results, "travessura");
  return { byUser, sweets, tricks };
}

function longestPersonalStreak(results, resultType) {
  const datesByUser = new Map();
  results.forEach(result => {
    if (result.resultado !== resultType || !result.data) return;
    const dateTime = Date.parse(`${result.data}T00:00:00Z`);
    if (!Number.isFinite(dateTime)) return;
    const userKey = result.usuario || result.nomeUsuario;
    if (!datesByUser.has(userKey)) datesByUser.set(userKey, { nome: result.nomeUsuario, dates: new Set() });
    datesByUser.get(userKey).dates.add(result.data);
  });

  let longest = 0;
  const streaks = [];
  datesByUser.forEach(user => {
    const dates = [...user.dates].sort();
    let start = 0;
    for (let index = 1; index <= dates.length; index++) {
      const isConsecutive = index < dates.length &&
        Date.parse(`${dates[index]}T00:00:00Z`) - Date.parse(`${dates[index - 1]}T00:00:00Z`) === 86400000;
      if (isConsecutive) continue;
      const length = index - start;
      if (length > longest) {
        longest = length;
        streaks.length = 0;
      }
      if (length === longest) streaks.push({ nome: user.nome, inicio: dates[start], fim: dates[index - 1] });
      start = index;
    }
  });
  return { length: longest, streaks: streaks.sort((a, b) => a.nome.localeCompare(b.nome)) };
}

function render() {
  const activeResults = [...normalized.results];
  const rankingResults = activeResults;
  const stats = aggregate(activeResults);
  renderKpis(stats, activeResults);
  renderRanking(stats.byUser, "rankingList", "doces");
  renderRanking(stats.byUser, "trickRankingList", "travessuras");
  renderCharts(stats.byUser, rankingResults);
  renderStreaks(activeResults);
  const dates = activeResults.map(result => result.data).filter(Boolean).sort();
  let period = "período sem datas";
  if (dates.length) {
    const [year, month] = dates[dates.length - 1].split("-").map(Number);
    const monthEnd = new Date(Date.UTC(year, month, 0)).toISOString().slice(0, 10);
    period = `${formatDate(dates[0])} – ${formatDate(monthEnd)}`;
  }
  $("footerSummary").textContent = `${activeResults.length} resultados analisados • período: ${period}`;
}

function renderKpis(stats, results) {
  $("totalPlays").textContent = results.length.toLocaleString("pt-BR");
  $("totalSweets").textContent = stats.sweets.toLocaleString("pt-BR");
  $("totalTricks").textContent = stats.tricks.toLocaleString("pt-BR");
  $("sweetPercent").textContent = pct(stats.sweets, results.length);
  $("trickPercent").textContent = pct(stats.tricks, results.length);
  if (stats.sweets === stats.tricks) {
    $("dominantResult").textContent = "Empate";
    $("dominantFoot").textContent = "Mesmo número de doces e travessuras";
  } else {
    const sweetsLead = stats.sweets > stats.tricks;
    $("dominantResult").textContent = sweetsLead ? "Doces" : "Travessuras";
    $("dominantFoot").textContent = `${Math.abs(stats.sweets - stats.tricks)} resultado(s) de diferença`;
  }
}

function renderRanking(byUser, elementId, metric) {
  const sorted = [...byUser].sort((a, b) => b[metric] - a[metric] || b.jogadas - a.jogadas || a.nome.localeCompare(b.nome));
  const max = Math.max(1, ...sorted.map(user => user[metric]));
  $(elementId).innerHTML = sorted.length ? sorted.map((user, index) => `
    <div class="rank-row">
      <div class="rank-number">${index + 1}</div>
      <div class="rank-main">
        <div class="rank-name">${esc(user.nome)} <span>${esc(user.codigo)}</span></div>
        <div class="rank-bar"><div class="rank-bar-fill" style="width:${user[metric] / max * 100}%"></div></div>
      </div>
      <div class="rank-count">${user[metric]}</div>
    </div>`).join("") : `<div class="empty-state">Nenhum resultado para os filtros selecionados.</div>`;
}

function chartBaseOptions() {
  return {
    responsive: true, maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: "#20283a", borderColor: "#414b64", borderWidth: 1, titleColor: "#f4f5fb", bodyColor: "#d7dced", padding: 11, displayColors: true }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: COLORS.text, font: { family: "DM Sans", size: 10 }, maxRotation: 0, autoSkip: true }, border: { display: false } },
      y: { beginAtZero: true, grid: { color: COLORS.grid }, ticks: { color: COLORS.text, precision: 0, font: { family: "DM Sans", size: 10 } }, border: { display: false } }
    }
  };
}

function replaceChart(id, config) {
  if (charts[id]) charts[id].destroy();
  const canvas = $(id);
  charts[id] = new Chart(canvas, config);
}

function renderCharts(byUser, rankingResults) {
  const visible = [...byUser].sort((a, b) => b.jogadas - a.jogadas || a.nome.localeCompare(b.nome));
  const base = chartBaseOptions();
  replaceChart("playsChart", {
    type: "bar",
    data: { labels: visible.map(u => u.nome), datasets: [{ label: "Jogadas", data: visible.map(u => u.jogadas), backgroundColor: `${COLORS.purple}cc`, hoverBackgroundColor: "#ffb65c", borderRadius: 5, borderSkipped: false, maxBarThickness: 32 }] },
    options: { ...base, plugins: { ...base.plugins, tooltip: { ...base.plugins.tooltip, callbacks: { label: c => ` ${c.raw} jogada(s)` } } }, scales: { ...base.scales, y: { ...base.scales.y, suggestedMax: Math.max(5, ...visible.map(u => u.jogadas)) } } }
  });
  const successUsers = [...byUser].sort((a, b) =>
    (b.jogadas ? b.doces / b.jogadas : 0) - (a.jogadas ? a.doces / a.jogadas : 0) ||
    b.doces - a.doces ||
    a.nome.localeCompare(b.nome)
  );
  replaceChart("sweetSuccessChart", {
    type: "bar",
    data: { labels: successUsers.map(user => user.nome), datasets: [{
      label: "Sucesso de doces",
      data: successUsers.map(user => user.jogadas ? user.doces / user.jogadas * 100 : 0),
      backgroundColor: "#f6b94c",
      hoverBackgroundColor: "#ffd27a",
      borderRadius: 5,
      borderSkipped: false,
      maxBarThickness: 32
    }] },
    options: {
      ...base,
      plugins: {
        ...base.plugins,
        tooltip: {
          ...base.plugins.tooltip,
          callbacks: {
            label: context => ` ${context.raw.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}% de sucesso`,
            afterLabel: context => {
              const user = successUsers[context.dataIndex];
              return ` ${user.doces} doces em ${user.jogadas} tentativas`;
            }
          }
        }
      },
      scales: {
        ...base.scales,
        y: {
          ...base.scales.y,
          beginAtZero: true,
          min: 0,
          max: 100,
          ticks: { ...base.scales.y.ticks, callback: value => `${value}%` }
        }
      }
    }
  });
  const { dates, sweetsByDayByUser } = buildCumulativeSweets(rankingResults, normalized.users, visible);
  const labels = dates.map(formatDate);
  const lineColors = ["#36a2eb", "#ff6384", "#4bc0c0", "#9966ff", "#ff9f40", "#4caf50", "#ffd166", "#e76f51", "#5c6bc0"];
  const trendOptions = chartBaseOptions();
  trendOptions.elements = { line: { tension: .15, borderWidth: 2.5 }, point: { radius: 2.5, hoverRadius: 5, borderWidth: 0 } };
  trendOptions.plugins.legend = {
    display: true,
    position: "bottom",
    labels: { color: COLORS.text, boxWidth: 12, boxHeight: 3, padding: 12, font: { family: "DM Sans", size: 9 } }
  };
  trendOptions.plugins.tooltip.callbacks = {
    label: c => ` ${c.dataset.label}: ${c.raw} doce(s) acumulado(s)`
  };
  trendOptions.scales.y = { ...trendOptions.scales.y, beginAtZero: true, min: 0 };
  replaceChart("trendChart", {
    type: "line",
    data: { labels, datasets: visible.map((user, index) => ({
      label: user.nome,
      data: sweetsByDayByUser.get(user.codigo),
      borderColor: lineColors[index % lineColors.length],
      backgroundColor: lineColors[index % lineColors.length],
      pointBackgroundColor: lineColors[index % lineColors.length],
      fill: false
    }))},
    options: trendOptions
  });
  const hasDatasets = charts.trendChart.data.datasets.length > 0;
  $("hideTrendDatasets").disabled = !hasDatasets;
  $("showTrendDatasets").disabled = !hasDatasets;
}

function setTrendDatasetsVisibility(visible) {
  const chart = charts.trendChart;
  if (!chart) return;
  chart.data.datasets.forEach((_, index) => chart.setDatasetVisibility(index, visible));
  chart.update();
}

function buildCumulativeSweets(results, users, visibleUsers) {
  const dates = [...new Set(results.map(result => result.data).filter(Boolean))].sort();
  const sweetsByUser = new Map(users.map(user => [user.codigo, 0]));
  const sweetsByDayByUser = new Map(visibleUsers.map(user => [user.codigo, []]));
  const resultsByDate = new Map();
  results.forEach(result => {
    if (!resultsByDate.has(result.data)) resultsByDate.set(result.data, []);
    resultsByDate.get(result.data).push(result);
  });
  dates.forEach(date => {
    (resultsByDate.get(date) || []).forEach(result => {
      if (result.resultado === "doces" && sweetsByUser.has(result.usuario)) {
        sweetsByUser.set(result.usuario, sweetsByUser.get(result.usuario) + 1);
      }
    });
    visibleUsers.forEach(user => {
      if (sweetsByDayByUser.has(user.codigo)) {
        sweetsByDayByUser.get(user.codigo).push(sweetsByUser.get(user.codigo));
      }
    });
  });
  return { dates, sweetsByDayByUser };
}

function renderStreaks(results) {
  const sweets = longestPersonalStreak(results, "doces");
  const tricks = longestPersonalStreak(results, "travessura");
  $("sweetStreakCount").textContent = sweets.length;
  $("trickStreakCount").textContent = tricks.length;
  $("sweetStreakUnit").textContent = sweets.length === 1 ? "dia seguido" : "dias seguidos";
  $("trickStreakUnit").textContent = tricks.length === 1 ? "dia seguido" : "dias seguidos";
  $("sweetStreakDetail").innerHTML = streakDetail(sweets, "doces");
  $("trickStreakDetail").innerHTML = streakDetail(tricks, "travessura");
}

function streakDetail(streak, label) {
  if (!streak.length) return `<p class="streak-empty">Nenhuma sequência individual de ${label} encontrada.</p>`;
  const records = streak.streaks.map(record => {
    const startDate = `${formatDate(record.inicio)} de ${record.inicio.slice(0, 4)}`;
    const endDate = `${formatDate(record.fim)} de ${record.fim.slice(0, 4)}`;
    const dates = record.inicio === record.fim ? startDate : `${startDate} – ${endDate}`;
    return `<div class="streak-record">
      <span class="streak-player">${esc(record.nome)}</span>
      <span class="streak-record-dates">${esc(dates)}</span>
    </div>`;
  }).join("");
  return `<span class="streak-players-label">PESSOA(S) COM A MAIOR SEQUÊNCIA</span>
    <div class="streak-record-list">${records}</div>`;
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3500);
}

$("hideTrendDatasets").addEventListener("click", () => setTrendDatasetsVisibility(false));
$("showTrendDatasets").addEventListener("click", () => setTrendDatasetsVisibility(true));

render();
