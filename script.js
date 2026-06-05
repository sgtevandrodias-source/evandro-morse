/* 
  EVANDRO MORSE
  Versão: Iniciante + Intermediário
  Ajuste principal:
  - Modo Intermediário funcional
  - Sem botões Espaço Letra / Espaço Palavra
  - Separação automática por pausa
*/

const telaInicial = document.getElementById("telaInicial");
const telaCampanha = document.getElementById("telaCampanha");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");
const telaRanking = document.getElementById("telaRanking");

const inputNomeOperador = document.getElementById("inputNomeOperador");

const btnEntrarCampanha = document.getElementById("btnEntrarCampanha");
const btnAbrirRanking = document.getElementById("btnAbrirRanking");
const btnVoltarInicioCampanha = document.getElementById("btnVoltarInicioCampanha");
const btnContinuarNivel = document.getElementById("btnContinuarNivel");

const btnMorse = document.getElementById("btnMorse");
const btnLimpar = document.getElementById("btnLimpar");
const btnEnviar = document.getElementById("btnEnviar");
const btnEspacoLetra = document.getElementById("btnEspacoLetra");
const btnEspacoPalavra = document.getElementById("btnEspacoPalavra");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnVoltarCampanha = document.getElementById("btnVoltarCampanha");

const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const btnProximoNivel = document.getElementById("btnProximoNivel");
const btnMapaResultado = document.getElementById("btnMapaResultado");
const btnRankingFinal = document.getElementById("btnRankingFinal");

const btnVoltarCampanhaRanking = document.getElementById("btnVoltarCampanhaRanking");
const btnVoltarInicio = document.getElementById("btnVoltarInicio");
const btnLimparRanking = document.getElementById("btnLimparRanking");

const textoMissao = document.getElementById("textoMissao");
const codigoDigitado = document.getElementById("codigoDigitado");
const feedback = document.getElementById("feedback");
const pontuacaoEl = document.getElementById("pontuacao");
const contadorMissaoEl = document.getElementById("contadorMissao");
const acertosEl = document.getElementById("acertos");
const nomeOperadorEl = document.getElementById("nomeOperador");
const faseAtualEl = document.getElementById("faseAtual");
const dicaMissaoEl = document.getElementById("dicaMissao");
const badgeNivel = document.getElementById("badgeNivel");
const badgePatente = document.getElementById("badgePatente");

const resultadoBadge = document.getElementById("resultadoBadge");
const tituloResultado = document.getElementById("tituloResultado");
const resultadoFinal = document.getElementById("resultadoFinal");
const resultadoAproveitamento = document.getElementById("resultadoAproveitamento");
const resultadoTempo = document.getElementById("resultadoTempo");
const resultadoWpm = document.getElementById("resultadoWpm");
const resultadoPontos = document.getElementById("resultadoPontos");
const listaRanking = document.getElementById("listaRanking");
const gridNiveis = document.getElementById("gridNiveis");
const statusIniciante = document.getElementById("statusIniciante");

const cardModoIniciante = document.getElementById("cardModoIniciante");
const cardModoIntermediario = document.getElementById("cardModoIntermediario");
const cardModoAvancado = document.getElementById("cardModoAvancado");

/* =========================
   TABELA MORSE
========================= */

const TABELA_MORSE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----."
};

function textoParaMorse(texto) {
  return texto
    .toUpperCase()
    .split("")
    .map((caractere) => {
      if (caractere === " ") return "/";
      return TABELA_MORSE[caractere] || "";
    })
    .filter(Boolean)
    .join(" ");
}

function morseParaFonico(codigo) {
  return codigo
    .replaceAll(".", "di")
    .replaceAll("-", "dah")
    .replaceAll(" / ", "   pausa palavra   ")
    .replaceAll("/", "   pausa palavra   ")
    .replaceAll(" ", "   pausa letra   ");
}

/* =========================
   CONFIGURAÇÕES
========================= */

const APROVEITAMENTO_MINIMO = 80;
const APROVEITAMENTO_BONUS = 90;
const META_WPM = 12;
const PATENTE_FINAL_INICIANTE = "Marechal";
const PATENTE_FINAL_INTERMEDIARIO = "Operador Intermediário";

const MODO_INICIANTE = "iniciante";
const MODO_INTERMEDIARIO = "intermediario";

const WPM = 12;
const UNIDADE_MORSE = 1200 / WPM;
const LIMITE_PONTO_TRACO = UNIDADE_MORSE * 2;

const PAUSA_AUTO_LETRA_MS = 800;
const PAUSA_AUTO_PALAVRA_MS = 1800;

const FREQUENCIA_SIDETONE = 650;
const VOLUME_MORSE = 0.22;

/* =========================
   NÍVEIS INICIANTE
========================= */

const NIVEIS_INICIANTE = [
  { numero: 1, patente: "Bisonho", titulo: "Instrução Básica", descricao: "Primeiro contato com ponto e traço.", missoes: ["E", "T", "E", "T", "A"] },
  { numero: 2, patente: "Recruta", titulo: "Primeiras Letras", descricao: "Letras simples com combinações curtas.", missoes: ["E", "T", "A", "N", "M"] },
  { numero: 3, patente: "Soldado", titulo: "Letras Simples", descricao: "Sequências básicas de pontos e traços.", missoes: ["I", "M", "S", "O", "A", "N"] },
  { numero: 4, patente: "Soldado Safo", titulo: "Letras Intermediárias I", descricao: "Padrões mais variados.", missoes: ["R", "K", "D", "U", "S", "O"] },
  { numero: 5, patente: "Cabo", titulo: "Letras Intermediárias II", descricao: "Mais memória e precisão.", missoes: ["C", "P", "L", "W", "R", "K"] },
  { numero: 6, patente: "3º Sargento", titulo: "Letras Avançadas I", descricao: "Letras com padrões mais longos.", missoes: ["F", "G", "H", "V", "D", "U"] },
  { numero: 7, patente: "2º Sargento", titulo: "Letras Avançadas II", descricao: "Letras mais difíceis.", missoes: ["B", "J", "Q", "X", "Y", "Z"] },
  { numero: 8, patente: "1º Sargento", titulo: "Números I", descricao: "Primeira etapa numérica.", missoes: ["1", "2", "3", "4", "5"] },
  { numero: 9, patente: "Subtenente", titulo: "Números II", descricao: "Segunda etapa numérica.", missoes: ["6", "7", "8", "9", "0"] },
  { numero: 10, patente: "Cadete", titulo: "Mistura Letra e Número", descricao: "Caracteres mistos.", missoes: ["A1", "B2", "C3", "D4", "E5"] },
  { numero: 11, patente: "Aspirante", titulo: "Palavras Curtas", descricao: "Separação entre letras.", missoes: ["SOS", "RIO", "MAR", "SOL", "QSL"] },
  { numero: 12, patente: "2º Tenente", titulo: "Palavras Médias", descricao: "Palavras maiores.", missoes: ["MORSE", "RADIO", "FOCO", "SINAL", "TORRE"] },
  { numero: 13, patente: "1º Tenente", titulo: "Indicativos", descricao: "Códigos operacionais.", missoes: ["QTH", "QRA", "QSL", "QTC", "QRV"] },
  { numero: 14, patente: "Capitão", titulo: "Frases Curtas", descricao: "Separação entre palavras.", missoes: ["QSL OK", "QRV 5", "QTH RIO", "SINAL OK", "RADIO 1"] },
  { numero: 15, patente: "Major", titulo: "Frases com Números", descricao: "Palavras e algarismos.", missoes: ["BASE 1", "POSTO 2", "TORRE 3", "QTC 5", "RADIO 9"] },
  { numero: 16, patente: "Tenente-Coronel", titulo: "Mensagens Operacionais I", descricao: "Mensagens simples.", missoes: ["QTC BASE", "QSL RADIO", "QRV POSTO", "SINAL FORTE", "BASE QRV"] },
  { numero: 17, patente: "Coronel", titulo: "Mensagens Operacionais II", descricao: "Mensagens com números.", missoes: ["RADIO BASE 1", "POSTO QRV 2", "QTC SINAL 3", "BASE QSL 4", "TORRE QRV 5"] },
  { numero: 18, patente: "General de Brigada", titulo: "Transmissão Avançada", descricao: "Frases maiores.", missoes: ["OPERADOR QRV", "SINAL QSL 5", "BASE RADIO OK", "QTC POSTO 7", "TORRE SINAL 9"] },
  { numero: 19, patente: "General de Divisão", titulo: "Mensagem Longa", descricao: "Controle mental.", missoes: ["OPERADOR MORSE", "RADIO BASE QRV", "QTC SINAL FORTE", "POSTO QSL 123", "BASE OPERADOR OK"] },
  { numero: 20, patente: "General de Exército", titulo: "Missão Final Iniciante", descricao: "Junta tudo.", missoes: ["OPERADOR MORSE QRV", "QTC BASE SINAL 12", "RADIO POSTO QSL 9", "TRANSMISSAO OK 5", "MISSAO FINAL QRV"] }
];

/* =========================
   NÍVEIS INTERMEDIÁRIO
========================= */

const NIVEIS_INTERMEDIARIO = [
  {
    numero: 1,
    patente: "Operador em Treinamento",
    titulo: "Sem Rodinhas",
    descricao: "Letras simples, agora sem botões de espaço.",
    missoes: ["E", "T", "A", "N", "M"]
  },
  {
    numero: 2,
    patente: "Operador Aprendiz",
    titulo: "Pausa entre Letras",
    descricao: "A pausa média separa automaticamente as letras.",
    missoes: ["I", "S", "O", "R", "K"]
  },
  {
    numero: 3,
    patente: "Operador Auxiliar",
    titulo: "Ritmo Fônico I",
    descricao: "Reconheça o desenho sonoro das letras.",
    missoes: ["D", "U", "C", "P", "L"]
  },
  {
    numero: 4,
    patente: "Operador de Rede",
    titulo: "Ritmo Fônico II",
    descricao: "Padrões longos exigem memória auditiva.",
    missoes: ["F", "G", "H", "V", "B", "Z"]
  },
  {
    numero: 5,
    patente: "Operador de Posto",
    titulo: "Palavras Curtas",
    descricao: "A pausa longa vira separação de palavra.",
    missoes: ["SOS", "QSL", "QTH", "QRA", "QRV"]
  },
  {
    numero: 6,
    patente: "Operador Tático",
    titulo: "Palavras Médias",
    descricao: "Agora o cérebro começa a ouvir blocos.",
    missoes: ["RADIO", "SINAL", "TORRE", "POSTO", "MORSE"]
  },
  {
    numero: 7,
    patente: "Operador de Mensagem",
    titulo: "Frases Curtas",
    descricao: "Separe palavras apenas com pausa.",
    missoes: ["QSL OK", "BASE QRV", "SINAL OK", "RADIO 1", "POSTO 2"]
  },
  {
    numero: 8,
    patente: "Operador Chefe",
    titulo: "Frases Operacionais",
    descricao: "Pouco apoio visual. Mais escuta e ritmo.",
    missoes: ["QTC BASE", "RADIO QRV", "POSTO QSL", "SINAL FORTE", "TORRE OK"]
  },
  {
    numero: 9,
    patente: "Instrutor Morse",
    titulo: "Mensagem Operacional",
    descricao: "Mensagens maiores, sem botão auxiliar.",
    missoes: ["RADIO BASE QRV", "QTC SINAL 3", "POSTO QSL 2", "BASE RADIO OK", "TORRE SINAL 9"]
  },
  {
    numero: 10,
    patente: "Especialista Morse",
    titulo: "Missão Final Intermediária",
    descricao: "Transmissão completa por ritmo e pausa.",
    missoes: ["OPERADOR QRV", "QTC BASE SINAL", "RADIO POSTO QSL", "SINAL FORTE OK", "MISSAO INTERMEDIARIA"]
  }
];

/* =========================
   ESTADO
========================= */

let nomeOperador = "Operador";
let modoAtual = MODO_INICIANTE;
let nivelAtualIndex = 0;
let missaoAtualIndex = 0;

let codigoAtual = "";
let pontuacao = 0;
let acertosNivel = 0;
let errosNivel = 0;
let sequenciaAcertos = 0;

let inicioNivelMs = 0;
let fimNivelMs = 0;

let pressionando = false;
let inicioPressionamento = 0;

let audioContext = null;
let osciladorMorse = null;
let ganhoMorse = null;
let filtroMorse = null;

let ultimoResultado = null;
let temporizadorLetra = null;
let temporizadorPalavra = null;

/* =========================
   OPERADOR E CHAVES
========================= */

function getNomeOperadorAtual() {
  return inputNomeOperador.value.trim() || nomeOperador || "Operador";
}

function gerarSlugOperador(nome) {
  return String(nome || "operador")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "operador";
}

function getChaveOperador() {
  return gerarSlugOperador(getNomeOperadorAtual());
}

function chaveNivelLiberado(modo = modoAtual) {
  return `operadorMorseNivelLiberado_${modo}_${getChaveOperador()}`;
}

function chaveInicianteConcluido() {
  return `operadorMorseInicianteConcluido_${getChaveOperador()}`;
}

function chaveIntermediarioConcluido() {
  return `operadorMorseIntermediarioConcluido_${getChaveOperador()}`;
}

/* =========================
   EVENTOS
========================= */

btnEntrarCampanha.addEventListener("click", entrarCampanha);
btnAbrirRanking.addEventListener("click", abrirRanking);
btnVoltarInicioCampanha.addEventListener("click", voltarInicio);
btnContinuarNivel.addEventListener("click", continuarNivelAtual);

btnLimpar.addEventListener("click", limparCodigo);
btnEnviar.addEventListener("click", confirmarEnvio);
btnEspacoLetra.addEventListener("click", inserirEspacoLetra);
btnEspacoPalavra.addEventListener("click", inserirEspacoPalavra);
btnReiniciar.addEventListener("click", reiniciarNivel);
btnVoltarCampanha.addEventListener("click", entrarCampanha);

btnJogarNovamente.addEventListener("click", repetirNivel);
btnProximoNivel.addEventListener("click", avancarProximoNivel);
btnMapaResultado.addEventListener("click", entrarCampanha);
btnRankingFinal.addEventListener("click", abrirRanking);

btnVoltarCampanhaRanking.addEventListener("click", entrarCampanha);
btnVoltarInicio.addEventListener("click", voltarInicio);
btnLimparRanking.addEventListener("click", limparRanking);

if (cardModoIniciante) cardModoIniciante.addEventListener("click", abrirModoIniciante);
if (cardModoIntermediario) cardModoIntermediario.addEventListener("click", abrirModoIntermediario);
if (cardModoAvancado) cardModoAvancado.addEventListener("click", abrirModoAvancado);

btnMorse.addEventListener("pointerdown", iniciarPressionamento);
btnMorse.addEventListener("pointerup", finalizarPressionamento);
btnMorse.addEventListener("pointerleave", finalizarPressionamento);
btnMorse.addEventListener("pointercancel", cancelarPressionamento);

document.addEventListener("keydown", (evento) => {
  if (!telaJogo.classList.contains("ativa")) return;

  if (evento.code === "Space") {
    if (pressionando) return;
    evento.preventDefault();
    iniciarPressionamento();
  }

  if (evento.code === "Enter") {
    evento.preventDefault();
    confirmarEnvio();
  }

  if (evento.code === "Backspace") {
    evento.preventDefault();
    limparCodigo();
  }
});

document.addEventListener("keyup", (evento) => {
  if (!telaJogo.classList.contains("ativa")) return;

  if (evento.code === "Space") {
    evento.preventDefault();
    finalizarPressionamento();
  }
});

/* =========================
   INICIALIZAÇÃO
========================= */

carregarPreferencias();

function carregarPreferencias() {
  const nomeSalvo = localStorage.getItem("operadorMorseNome");

  if (nomeSalvo) {
    nomeOperador = nomeSalvo;
    inputNomeOperador.value = nomeSalvo;
  }

  modoAtual = MODO_INICIANTE;
  nivelAtualIndex = obterNivelLiberado(MODO_INICIANTE);
}

/* =========================
   TELAS
========================= */

function mostrarTela(tela) {
  telaInicial.classList.remove("ativa");
  telaCampanha.classList.remove("ativa");
  telaJogo.classList.remove("ativa");
  telaFinal.classList.remove("ativa");
  telaRanking.classList.remove("ativa");
  tela.classList.add("ativa");
}

function voltarInicio() {
  mostrarTela(telaInicial);
}

function salvarNomeOperador() {
  nomeOperador = getNomeOperadorAtual();
  inputNomeOperador.value = nomeOperador;
  localStorage.setItem("operadorMorseNome", nomeOperador);
}

function entrarCampanha() {
  salvarNomeOperador();
  renderizarCampanha();
  mostrarTela(telaCampanha);
}

/* =========================
   MODOS
========================= */

function getNiveisModo(modo = modoAtual) {
  if (modo === MODO_INTERMEDIARIO) return NIVEIS_INTERMEDIARIO;
  return NIVEIS_INICIANTE;
}

function getNomeModo(modo = modoAtual) {
  if (modo === MODO_INTERMEDIARIO) return "Intermediário";
  return "Iniciante";
}

function modoInicianteConcluido() {
  return localStorage.getItem(chaveInicianteConcluido()) === "sim";
}

function modoIntermediarioConcluido() {
  return localStorage.getItem(chaveIntermediarioConcluido()) === "sim";
}

function abrirModoIniciante() {
  salvarNomeOperador();
  modoAtual = MODO_INICIANTE;
  renderizarCampanha();
}

function abrirModoIntermediario() {
  salvarNomeOperador();

  if (!modoInicianteConcluido()) {
    alert("Conclua o modo Iniciante para liberar o Intermediário.");
    return;
  }

  modoAtual = MODO_INTERMEDIARIO;
  renderizarCampanha();
}

function abrirModoAvancado() {
  salvarNomeOperador();

  if (!modoIntermediarioConcluido()) {
    alert("Conclua o modo Intermediário para liberar o Avançado.");
    return;
  }

  alert("Modo Avançado será a próxima grande missão: tempo limite, menos dicas e mensagens operacionais.");
}

function atualizarCardModo(idCard, liberado, textoBadge, textoStatus) {
  const card = document.getElementById(idCard);
  if (!card) return;

  const badge = card.querySelector(".badge");
  const status = card.querySelector(".modo-status span");

  card.classList.toggle("bloqueado", !liberado);
  card.classList.toggle("ativo", liberado);

  if (badge) {
    badge.textContent = textoBadge;
    badge.className = liberado ? "badge sucesso" : "badge alerta";
  }

  if (status) status.textContent = textoStatus;
}

function aplicarModoVisualJogo() {
  const intermediario = modoAtual === MODO_INTERMEDIARIO;

  btnEspacoLetra.style.display = intermediario ? "none" : "inline-block";
  btnEspacoPalavra.style.display = intermediario ? "none" : "inline-block";

  if (intermediario) {
    feedback.textContent = "Modo Intermediário: use pausas naturais. Pausa média separa letra; pausa longa separa palavra.";
    feedback.className = "feedback alerta";
  }
}

/* =========================
   CAMPANHA / MAPA
========================= */

function obterNivelLiberado(modo = modoAtual) {
  const niveis = getNiveisModo(modo);
  const salvo = Number(localStorage.getItem(chaveNivelLiberado(modo)) || "0");

  if (Number.isNaN(salvo)) return 0;

  return Math.min(Math.max(salvo, 0), niveis.length - 1);
}

function renderizarCampanha() {
  const operador = getNomeOperadorAtual();
  const nivelLiberado = obterNivelLiberado(modoAtual);
  const niveis = getNiveisModo(modoAtual);

  const inicianteConcluido = modoInicianteConcluido();
  const intermediarioConcluido = modoIntermediarioConcluido();

  statusIniciante.textContent =
    `${operador}: ${getNomeModo(modoAtual)} — nível liberado ${nivelLiberado + 1}`;

  atualizarCardModo(
    "cardModoIntermediario",
    inicianteConcluido,
    inicianteConcluido ? "Liberado" : "Bloqueado",
    inicianteConcluido ? "Clique para treinar sem botões de espaço" : "Conclua o Iniciante para liberar"
  );

  atualizarCardModo(
    "cardModoAvancado",
    intermediarioConcluido,
    intermediarioConcluido ? "Liberado" : "Bloqueado",
    intermediarioConcluido ? "Modo Avançado liberado" : "Conclua o Intermediário para liberar"
  );

  gridNiveis.innerHTML = niveis
    .map((nivel, index) => {
      const bloqueado = index > nivelLiberado;
      const concluido = index < nivelLiberado;
      const atual = index === nivelLiberado;

      let classe = "nivel-card";
      if (bloqueado) classe += " bloqueado";
      if (concluido) classe += " concluido";
      if (atual) classe += " atual";

      const icone = bloqueado ? "🔒" : concluido ? "✓" : "▶";

      return `
        <button class="${classe}" data-index="${index}" ${bloqueado ? "disabled" : ""}>
          <div class="nivel-linha">
            <span class="nivel-numero">${getNomeModo(modoAtual)} ${nivel.numero}</span>
            <span class="nivel-lock">${icone}</span>
          </div>
          <strong>${escaparHtml(nivel.patente)}</strong>
          <span>${escaparHtml(nivel.titulo)}</span>
          <span>${escaparHtml(nivel.descricao)}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".nivel-card:not(.bloqueado)").forEach((card) => {
    card.addEventListener("click", () => iniciarNivel(Number(card.dataset.index)));
  });
}

function continuarNivelAtual() {
  iniciarNivel(obterNivelLiberado(modoAtual));
}

/* =========================
   CONTROLE DO NÍVEL
========================= */

function iniciarNivel(index) {
  prepararAudio();
  salvarNomeOperador();

  const nivelLiberado = obterNivelLiberado(modoAtual);
  const niveis = getNiveisModo(modoAtual);
  const indexSeguro = Math.min(Math.max(index, 0), nivelLiberado);

  nivelAtualIndex = Math.min(Math.max(indexSeguro, 0), niveis.length - 1);
  missaoAtualIndex = 0;
  codigoAtual = "";
  pontuacao = 0;
  acertosNivel = 0;
  errosNivel = 0;
  sequenciaAcertos = 0;
  pressionando = false;
  inicioNivelMs = performance.now();

  limparTemporizadoresPausa();

  mostrarTela(telaJogo);
  carregarMissao();
  atualizarPlacar();
  aplicarModoVisualJogo();
}

function reiniciarNivel() {
  pararTomMorse();
  iniciarNivel(nivelAtualIndex);
}

function repetirNivel() {
  reiniciarNivel();
}

function avancarProximoNivel() {
  if (!ultimoResultado || !ultimoResultado.aprovado) {
    repetirNivel();
    return;
  }

  const niveis = getNiveisModo(modoAtual);

  if (nivelAtualIndex >= niveis.length - 1) {
    entrarCampanha();
    return;
  }

  iniciarNivel(nivelAtualIndex + 1);
}

function getNivelAtual() {
  return getNiveisModo(modoAtual)[nivelAtualIndex];
}

function getMissaoAtual() {
  const nivel = getNivelAtual();
  const alvo = nivel.missoes[missaoAtualIndex];

  return {
    alvo,
    codigo: textoParaMorse(alvo),
    tipo: nivel.titulo
  };
}

function carregarMissao() {
  const nivel = getNivelAtual();
  const missao = getMissaoAtual();

  nomeOperadorEl.textContent = nivel.patente;
  badgeNivel.textContent = `${getNomeModo(modoAtual)} ${nivel.numero}`;
  badgePatente.textContent = nivel.patente;

  textoMissao.textContent = `Envie: ${missao.alvo}`;

  if (modoAtual === MODO_INTERMEDIARIO) {
    dicaMissaoEl.textContent = `Método fônico: ${morseParaFonico(missao.codigo)}`;
  } else {
    dicaMissaoEl.textContent = `Pressione: ${missao.codigo}`;
  }

  contadorMissaoEl.textContent = `${missaoAtualIndex + 1}/${nivel.missoes.length}`;
  faseAtualEl.textContent = missao.tipo;

  codigoAtual = "";
  atualizarCodigoNaTela();

  feedback.textContent = "";
  feedback.className = "feedback";

  aplicarModoVisualJogo();
}

function confirmarEnvio() {
  limparTemporizadoresPausa();

  const missao = getMissaoAtual();

  if (!codigoAtual.trim()) {
    tocarErro();
    feedback.textContent = "Transmita pelo menos um ponto ou traço antes de confirmar.";
    feedback.className = "feedback erro";
    return;
  }

  const enviado = normalizarCodigo(codigoAtual);
  const correto = normalizarCodigo(missao.codigo);

  if (enviado === correto) {
    acertosNivel += 1;
    sequenciaAcertos += 1;

    const pontosGanhos = calcularPontosAcerto();
    pontuacao += pontosGanhos;

    tocarAcerto();
    feedback.textContent = `Correto! +${pontosGanhos} pontos.`;
    feedback.className = "feedback sucesso";
  } else {
    errosNivel += 1;
    sequenciaAcertos = 0;
    pontuacao = Math.max(0, pontuacao - 2);

    tocarErro();
    feedback.textContent = `Incorreto. Correto: ${missao.codigo}`;
    feedback.className = "feedback erro";
  }

  atualizarPlacar();
  setTimeout(proximaMissao, 900);
}

function calcularPontosAcerto() {
  if (sequenciaAcertos >= 5) return 15;
  if (sequenciaAcertos >= 3) return 13;
  if (sequenciaAcertos >= 2) return 12;
  return 10;
}

function proximaMissao() {
  const nivel = getNivelAtual();

  missaoAtualIndex += 1;

  if (missaoAtualIndex >= nivel.missoes.length) {
    finalizarNivel();
    return;
  }

  carregarMissao();
}

function atualizarPlacar() {
  pontuacaoEl.textContent = pontuacao;
  acertosEl.textContent = acertosNivel;
}

function finalizarNivel() {
  fimNivelMs = performance.now();

  const nivel = getNivelAtual();
  const niveis = getNiveisModo(modoAtual);
  const totalMissoes = nivel.missoes.length;
  const aproveitamento = Math.round((acertosNivel / totalMissoes) * 100);
  const tempoSegundos = Math.max(1, Math.round((fimNivelMs - inicioNivelMs) / 1000));
  const wpm = calcularWpmNivel(tempoSegundos);
  const aprovado = aproveitamento >= APROVEITAMENTO_MINIMO;
  const bonus = aproveitamento >= APROVEITAMENTO_BONUS;
  const excelenciaWpm = wpm >= META_WPM;

  let pontosFinais = pontuacao;
  if (bonus) pontosFinais += 25;
  if (excelenciaWpm && aprovado) pontosFinais += 25;

  pontuacao = pontosFinais;

  let campanhaFinalizada = false;
  let patenteResultado = nivel.patente;

  if (aprovado && nivelAtualIndex === niveis.length - 1) {
    campanhaFinalizada = true;
    patenteResultado = modoAtual === MODO_INTERMEDIARIO
      ? PATENTE_FINAL_INTERMEDIARIO
      : PATENTE_FINAL_INICIANTE;
  }

  ultimoResultado = {
    nome: nomeOperador,
    chaveOperador: getChaveOperador(),
    modo: getNomeModo(modoAtual),
    patente: patenteResultado,
    nivel: campanhaFinalizada ? niveis.length + 1 : nivel.numero,
    titulo: campanhaFinalizada ? `Campanha ${getNomeModo(modoAtual)} concluída` : nivel.titulo,
    pontos: pontosFinais,
    aproveitamento,
    tempoSegundos,
    wpm,
    aprovado,
    bonus,
    excelenciaWpm,
    data: new Date().toLocaleDateString("pt-BR")
  };

  salvarRanking(ultimoResultado);

  if (aprovado) liberarProximoNivel(campanhaFinalizada);

  mostrarResultadoNivel(ultimoResultado, campanhaFinalizada);
}

function liberarProximoNivel(campanhaFinalizada) {
  const niveis = getNiveisModo(modoAtual);
  const nivelLiberadoAtual = obterNivelLiberado(modoAtual);

  if (campanhaFinalizada) {
    localStorage.setItem(chaveNivelLiberado(modoAtual), String(niveis.length - 1));

    if (modoAtual === MODO_INICIANTE) {
      localStorage.setItem(chaveInicianteConcluido(), "sim");
    }

    if (modoAtual === MODO_INTERMEDIARIO) {
      localStorage.setItem(chaveIntermediarioConcluido(), "sim");
    }

    return;
  }

  const proximoIndex = Math.min(nivelAtualIndex + 1, niveis.length - 1);

  if (proximoIndex > nivelLiberadoAtual) {
    localStorage.setItem(chaveNivelLiberado(modoAtual), String(proximoIndex));
  }
}

function mostrarResultadoNivel(resultado, campanhaFinalizada) {
  mostrarTela(telaFinal);

  resultadoAproveitamento.textContent = `${resultado.aproveitamento}%`;
  resultadoTempo.textContent = formatarTempo(resultado.tempoSegundos);
  resultadoWpm.textContent = resultado.wpm.toFixed(1);
  resultadoPontos.textContent = resultado.pontos;

  if (!resultado.aprovado) {
    resultadoBadge.textContent = "Repetir nível";
    tituloResultado.textContent = "Nível não concluído";
    resultadoFinal.textContent =
      `Você ficou com ${resultado.aproveitamento}% de aproveitamento. O mínimo é 80%. Repita o nível.`;
    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Repetir nível";
    return;
  }

  if (campanhaFinalizada) {
    resultadoBadge.textContent = `Campanha ${getNomeModo(modoAtual)} concluída`;
    tituloResultado.textContent = `Promoção: ${resultado.patente}`;
    resultadoFinal.textContent =
      `Excelente! Você concluiu o modo ${getNomeModo(modoAtual)} com ${resultado.aproveitamento}% de aproveitamento e ${resultado.wpm.toFixed(1)} WPM aproximado.`;
    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Refazer missão final";
    return;
  }

  resultadoBadge.textContent = resultado.bonus ? "Aprovado com destaque" : "Aprovado";
  tituloResultado.textContent = `Promoção: ${proximaPatenteTexto()}`;

  let mensagem =
    `Você concluiu o nível com ${resultado.aproveitamento}% de aproveitamento. ` +
    `Tempo: ${formatarTempo(resultado.tempoSegundos)}. ` +
    `Velocidade aproximada: ${resultado.wpm.toFixed(1)} WPM.`;

  if (resultado.bonus) mensagem += " Bônus por aproveitamento de 90% ou mais.";
  if (resultado.excelenciaWpm) mensagem += " Meta operacional de 12 WPM alcançada.";

  resultadoFinal.textContent = mensagem;

  btnProximoNivel.style.display = "inline-block";
  btnJogarNovamente.textContent = "Repetir nível";
}

function proximaPatenteTexto() {
  const niveis = getNiveisModo(modoAtual);

  if (nivelAtualIndex >= niveis.length - 1) {
    return modoAtual === MODO_INTERMEDIARIO
      ? PATENTE_FINAL_INTERMEDIARIO
      : PATENTE_FINAL_INICIANTE;
  }

  return niveis[nivelAtualIndex + 1].patente;
}

/* =========================
   MANIPULAÇÃO MORSE
========================= */

function iniciarPressionamento() {
  prepararAudio();

  if (pressionando) return;

  limparTemporizadoresPausa();

  pressionando = true;
  inicioPressionamento = performance.now();

  btnMorse.classList.add("pressionado");
  iniciarTomMorse();
}

function finalizarPressionamento() {
  if (!pressionando) return;

  const fimPressionamento = performance.now();
  const duracao = fimPressionamento - inicioPressionamento;

  pressionando = false;
  btnMorse.classList.remove("pressionado");

  pararTomMorse();

  const simbolo = duracao < LIMITE_PONTO_TRACO ? "." : "-";

  adicionarSimbolo(simbolo);
  mostrarFeedbackManipulacao(simbolo, duracao);

  if (modoAtual === MODO_INTERMEDIARIO) {
    agendarSeparacaoAutomatica();
  }
}

function cancelarPressionamento() {
  if (!pressionando) return;

  pressionando = false;
  btnMorse.classList.remove("pressionado");
  pararTomMorse();
}

function adicionarSimbolo(simbolo) {
  codigoAtual += simbolo;
  atualizarCodigoNaTela();
}

function inserirEspacoLetra() {
  piscarBotao(btnEspacoLetra);

  if (!codigoAtual.trim()) return;

  if (!codigoAtual.endsWith(" ")) {
    codigoAtual += " ";
  }

  atualizarCodigoNaTela();
}

function inserirEspacoPalavra() {
  piscarBotao(btnEspacoPalavra);

  if (!codigoAtual.trim()) return;

  codigoAtual = codigoAtual.trim();

  if (!codigoAtual.endsWith("/")) {
    codigoAtual += " / ";
  }

  atualizarCodigoNaTela();
}

function agendarSeparacaoAutomatica() {
  limparTemporizadoresPausa();

  temporizadorLetra = setTimeout(() => {
    if (!codigoAtual.trim()) return;

    if (!codigoAtual.endsWith(" ") && !codigoAtual.endsWith("/")) {
      codigoAtual += " ";
      atualizarCodigoNaTela();
      feedback.textContent = "Pausa detectada: próxima letra.";
      feedback.className = "feedback alerta";
    }
  }, PAUSA_AUTO_LETRA_MS);

  temporizadorPalavra = setTimeout(() => {
    if (!codigoAtual.trim()) return;

    codigoAtual = codigoAtual.trim();

    if (!codigoAtual.endsWith("/")) {
      codigoAtual += " / ";
      atualizarCodigoNaTela();
      feedback.textContent = "Pausa longa detectada: próxima palavra.";
      feedback.className = "feedback alerta";
    }
  }, PAUSA_AUTO_PALAVRA_MS);
}

function limparTemporizadoresPausa() {
  if (temporizadorLetra) clearTimeout(temporizadorLetra);
  if (temporizadorPalavra) clearTimeout(temporizadorPalavra);
  temporizadorLetra = null;
  temporizadorPalavra = null;
}

function piscarBotao(botao) {
  if (!botao) return;

  botao.classList.add("piscou");

  setTimeout(() => {
    botao.classList.remove("piscou");
  }, 140);
}

function atualizarCodigoNaTela() {
  codigoDigitado.textContent = codigoAtual.trim() || "—";
}

function limparCodigo() {
  limparTemporizadoresPausa();
  codigoAtual = "";
  atualizarCodigoNaTela();

  tocarCliqueLimpar();

  feedback.textContent = "Código limpo.";
  feedback.className = "feedback";
}

function mostrarFeedbackManipulacao(simbolo, duracao) {
  const duracaoArredondada = Math.round(duracao);
  feedback.textContent = simbolo === "."
    ? `Ponto transmitido (${duracaoArredondada} ms).`
    : `Traço transmitido (${duracaoArredondada} ms).`;
  feedback.className = "feedback";
}

function normalizarCodigo(codigo) {
  return codigo
    .trim()
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s+/g, " ");
}

/* =========================
   TEMPO, WPM E RANKING
========================= */

function calcularWpmNivel(tempoSegundos) {
  const nivel = getNivelAtual();
  const textoTotal = nivel.missoes.join("");
  const caracteresValidos = textoTotal.replace(/\s/g, "").length;
  const minutos = tempoSegundos / 60;
  const wpm = caracteresValidos / 5 / minutos;

  return Number.isFinite(wpm) ? wpm : 0;
}

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;

  if (min <= 0) return `${seg}s`;

  return `${min}min ${String(seg).padStart(2, "0")}s`;
}

function salvarRanking(resultado) {
  const ranking = obterRanking();

  ranking.push(resultado);

  ranking.sort((a, b) => {
    if (b.modo !== a.modo) return String(b.modo).localeCompare(String(a.modo));
    if (b.nivel !== a.nivel) return b.nivel - a.nivel;
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    if (b.aproveitamento !== a.aproveitamento) return b.aproveitamento - a.aproveitamento;
    if (a.tempoSegundos !== b.tempoSegundos) return a.tempoSegundos - b.tempoSegundos;
    return b.wpm - a.wpm;
  });

  localStorage.setItem("operadorMorseRanking", JSON.stringify(ranking.slice(0, 20)));
}

function obterRanking() {
  try {
    return JSON.parse(localStorage.getItem("operadorMorseRanking")) || [];
  } catch (erro) {
    return [];
  }
}

function abrirRanking() {
  renderizarRanking();
  mostrarTela(telaRanking);
}

function renderizarRanking() {
  const ranking = obterRanking();

  if (!ranking.length) {
    listaRanking.innerHTML = `
      <div class="ranking-item">
        <div class="ranking-posicao">—</div>
        <div>
          <div class="ranking-nome">Ainda não há registros</div>
          <div class="ranking-detalhes">Conclua um nível para aparecer no ranking.</div>
        </div>
      </div>
    `;
    return;
  }

  listaRanking.innerHTML = ranking
    .map((item, index) => `
      <div class="ranking-item">
        <div class="ranking-posicao">${index + 1}</div>
        <div>
          <div class="ranking-nome">${escaparHtml(item.nome)} — ${escaparHtml(item.patente)}</div>
          <div class="ranking-detalhes">
            ${escaparHtml(item.modo || "Iniciante")} • Nível ${item.nivel} • ${item.aproveitamento}% • ${formatarTempo(item.tempoSegundos)} • ${item.wpm.toFixed(1)} WPM • ${item.data}
          </div>
        </div>
        <div class="ranking-pontos">${item.pontos} pts</div>
      </div>
    `)
    .join("");
}

function limparRanking() {
  const confirmar = window.confirm("Deseja limpar o ranking local deste aparelho?");
  if (!confirmar) return;

  localStorage.removeItem("operadorMorseRanking");
  renderizarRanking();
}

function escaparHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================
   ÁUDIO
========================= */

function prepararAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function iniciarTomMorse() {
  prepararAudio();
  pararTomMorse();

  osciladorMorse = audioContext.createOscillator();
  ganhoMorse = audioContext.createGain();
  filtroMorse = audioContext.createBiquadFilter();

  osciladorMorse.type = "square";
  osciladorMorse.frequency.setValueAtTime(FREQUENCIA_SIDETONE, audioContext.currentTime);

  filtroMorse.type = "lowpass";
  filtroMorse.frequency.setValueAtTime(1500, audioContext.currentTime);

  ganhoMorse.gain.setValueAtTime(0.001, audioContext.currentTime);
  ganhoMorse.gain.exponentialRampToValueAtTime(VOLUME_MORSE, audioContext.currentTime + 0.012);

  osciladorMorse.connect(filtroMorse);
  filtroMorse.connect(ganhoMorse);
  ganhoMorse.connect(audioContext.destination);

  osciladorMorse.start();
}

function pararTomMorse() {
  if (!osciladorMorse || !ganhoMorse) return;

  const agora = audioContext.currentTime;

  try {
    ganhoMorse.gain.cancelScheduledValues(agora);
    ganhoMorse.gain.setValueAtTime(ganhoMorse.gain.value || VOLUME_MORSE, agora);
    ganhoMorse.gain.exponentialRampToValueAtTime(0.001, agora + 0.018);
    osciladorMorse.stop(agora + 0.025);
  } catch (erro) {}

  osciladorMorse = null;
  ganhoMorse = null;
  filtroMorse = null;
}

function tocarTomCurto(frequencia, duracao, volume = 0.14, tipo = "sine") {
  prepararAudio();

  const oscilador = audioContext.createOscillator();
  const ganho = audioContext.createGain();

  oscilador.type = tipo;
  oscilador.frequency.setValueAtTime(frequencia, audioContext.currentTime);

  ganho.gain.setValueAtTime(0.001, audioContext.currentTime);
  ganho.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + 0.01);
  ganho.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duracao / 1000);

  oscilador.connect(ganho);
  ganho.connect(audioContext.destination);

  oscilador.start();
  oscilador.stop(audioContext.currentTime + duracao / 1000 + 0.02);
}

function tocarCliqueLimpar() {
  tocarTomCurto(420, 70, 0.08, "square");
}

function tocarAcerto() {
  tocarTomCurto(760, 80, 0.09, "sine");
  setTimeout(() => tocarTomCurto(980, 100, 0.09, "sine"), 90);
}

function tocarErro() {
  tocarTomCurto(240, 120, 0.11, "sawtooth");
  setTimeout(() => tocarTomCurto(180, 160, 0.1, "sawtooth"), 120);
}