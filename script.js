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

/* =========================
   TABELA MORSE
========================= */

const TABELA_MORSE = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",

  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----."
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

/* =========================
   CAMPANHA INICIANTE
========================= */

const NIVEIS_INICIANTE = [
  {
    numero: 1,
    patente: "Bisonho",
    titulo: "Instrução Básica",
    descricao: "Primeiro contato com ponto e traço.",
    missoes: ["E", "T", "E", "T", "A"]
  },
  {
    numero: 2,
    patente: "Recruta",
    titulo: "Primeiras Letras",
    descricao: "Letras simples com combinações curtas.",
    missoes: ["E", "T", "A", "N", "M"]
  },
  {
    numero: 3,
    patente: "Soldado",
    titulo: "Letras Simples",
    descricao: "Sequências básicas de pontos e traços.",
    missoes: ["I", "M", "S", "O", "A", "N"]
  },
  {
    numero: 4,
    patente: "Soldado Safo",
    titulo: "Letras Intermediárias I",
    descricao: "Padrões mais variados e exigência maior.",
    missoes: ["R", "K", "D", "U", "S", "O"]
  },
  {
    numero: 5,
    patente: "Cabo",
    titulo: "Letras Intermediárias II",
    descricao: "Mais memória e precisão na manipulação.",
    missoes: ["C", "P", "L", "W", "R", "K"]
  },
  {
    numero: 6,
    patente: "3º Sargento",
    titulo: "Letras Avançadas I",
    descricao: "Letras com padrões mais longos.",
    missoes: ["F", "G", "H", "V", "D", "U"]
  },
  {
    numero: 7,
    patente: "2º Sargento",
    titulo: "Letras Avançadas II",
    descricao: "As letras mais difíceis do alfabeto Morse.",
    missoes: ["B", "J", "Q", "X", "Y", "Z"]
  },
  {
    numero: 8,
    patente: "1º Sargento",
    titulo: "Números I",
    descricao: "Primeira etapa numérica.",
    missoes: ["1", "2", "3", "4", "5"]
  },
  {
    numero: 9,
    patente: "Subtenente",
    titulo: "Números II",
    descricao: "Segunda etapa numérica.",
    missoes: ["6", "7", "8", "9", "0"]
  },
  {
    numero: 10,
    patente: "Cadete",
    titulo: "Mistura Letra e Número",
    descricao: "Caracteres mistos na mesma missão.",
    missoes: ["A1", "B2", "C3", "D4", "E5"]
  },
  {
    numero: 11,
    patente: "Aspirante",
    titulo: "Palavras Curtas",
    descricao: "Primeiro uso real de separação entre letras.",
    missoes: ["SOS", "RIO", "MAR", "SOL", "QSL"]
  },
  {
    numero: 12,
    patente: "2º Tenente",
    titulo: "Palavras Médias",
    descricao: "Palavras maiores e ritmo mais regular.",
    missoes: ["MORSE", "RADIO", "FOCO", "SINAL", "TORRE"]
  },
  {
    numero: 13,
    patente: "1º Tenente",
    titulo: "Indicativos",
    descricao: "Códigos usados em comunicação operacional.",
    missoes: ["QTH", "QRA", "QSL", "QTC", "QRV"]
  },
  {
    numero: 14,
    patente: "Capitão",
    titulo: "Frases Curtas",
    descricao: "Primeiro uso de separação entre palavras.",
    missoes: ["QSL OK", "QRV 5", "QTH RIO", "SINAL OK", "RADIO 1"]
  },
  {
    numero: 15,
    patente: "Major",
    titulo: "Frases com Números",
    descricao: "Frases misturando palavras e algarismos.",
    missoes: ["BASE 1", "POSTO 2", "TORRE 3", "QTC 5", "RADIO 9"]
  },
  {
    numero: 16,
    patente: "Tenente-Coronel",
    titulo: "Mensagens Operacionais I",
    descricao: "Mensagens simples com sentido operacional.",
    missoes: ["QTC BASE", "QSL RADIO", "QRV POSTO", "SINAL FORTE", "BASE QRV"]
  },
  {
    numero: 17,
    patente: "Coronel",
    titulo: "Mensagens Operacionais II",
    descricao: "Mensagens com palavras e números.",
    missoes: ["RADIO BASE 1", "POSTO QRV 2", "QTC SINAL 3", "BASE QSL 4", "TORRE QRV 5"]
  },
  {
    numero: 18,
    patente: "General de Brigada",
    titulo: "Transmissão Avançada",
    descricao: "Frases maiores com mais exigência de regularidade.",
    missoes: ["OPERADOR QRV", "SINAL QSL 5", "BASE RADIO OK", "QTC POSTO 7", "TORRE SINAL 9"]
  },
  {
    numero: 19,
    patente: "General de Divisão",
    titulo: "Mensagem Longa",
    descricao: "Controle mental e constância até o fim.",
    missoes: ["OPERADOR MORSE", "RADIO BASE QRV", "QTC SINAL FORTE", "POSTO QSL 123", "BASE OPERADOR OK"]
  },
  {
    numero: 20,
    patente: "General de Exército",
    titulo: "Missão Final Iniciante",
    descricao: "Junta letras, números, palavras e frases.",
    missoes: ["OPERADOR MORSE QRV", "QTC BASE SINAL 12", "RADIO POSTO QSL 9", "TRANSMISSAO OK 5", "MISSAO FINAL QRV"]
  }
];

const PATENTE_FINAL = "Marechal";
const APROVEITAMENTO_MINIMO = 80;
const APROVEITAMENTO_BONUS = 90;
const META_WPM = 12;

/* =========================
   ESTADO DO JOGO
========================= */

let nomeOperador = "Operador";
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

/*
  Configuração Morse realista.
  12 WPM = unidade de 100 ms.
*/
const WPM = 12;
const UNIDADE_MORSE = 1200 / WPM;
const DURACAO_PONTO_IDEAL = UNIDADE_MORSE;
const DURACAO_TRACO_IDEAL = UNIDADE_MORSE * 3;
const LIMITE_PONTO_TRACO = UNIDADE_MORSE * 2;
const FREQUENCIA_SIDETONE = 650;
const VOLUME_MORSE = 0.22;

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
  const nivelSalvo = Number(localStorage.getItem("operadorMorseNivelLiberado") || "0");

  if (nomeSalvo) {
    nomeOperador = nomeSalvo;
    inputNomeOperador.value = nomeSalvo;
  }

  if (!Number.isNaN(nivelSalvo)) {
    nivelAtualIndex = Math.min(Math.max(nivelSalvo, 0), NIVEIS_INICIANTE.length - 1);
  }
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

function entrarCampanha() {
  salvarNomeOperador();
  renderizarCampanha();
  mostrarTela(telaCampanha);
}

function salvarNomeOperador() {
  nomeOperador = inputNomeOperador.value.trim() || "Operador";
  localStorage.setItem("operadorMorseNome", nomeOperador);
}

/* =========================
   MAPA DA CAMPANHA
========================= */

function renderizarCampanha() {
  const nivelLiberado = obterNivelLiberado();

  statusIniciante.textContent = `Nível liberado: ${nivelLiberado + 1}`;

  gridNiveis.innerHTML = NIVEIS_INICIANTE
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
            <span class="nivel-numero">Nível ${nivel.numero}</span>
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
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      iniciarNivel(index);
    });
  });
}

function obterNivelLiberado() {
  const salvo = Number(localStorage.getItem("operadorMorseNivelLiberado") || "0");

  if (Number.isNaN(salvo)) return 0;

  return Math.min(Math.max(salvo, 0), NIVEIS_INICIANTE.length - 1);
}

function continuarNivelAtual() {
  iniciarNivel(obterNivelLiberado());
}

/* =========================
   CONTROLE DO NÍVEL
========================= */

function iniciarNivel(index) {
  prepararAudio();

  salvarNomeOperador();

  nivelAtualIndex = Math.min(Math.max(index, 0), NIVEIS_INICIANTE.length - 1);
  missaoAtualIndex = 0;
  codigoAtual = "";
  pontuacao = 0;
  acertosNivel = 0;
  errosNivel = 0;
  sequenciaAcertos = 0;
  pressionando = false;
  inicioNivelMs = performance.now();

  mostrarTela(telaJogo);
  carregarMissao();
  atualizarPlacar();
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

  if (nivelAtualIndex >= NIVEIS_INICIANTE.length - 1) {
    entrarCampanha();
    return;
  }

  iniciarNivel(nivelAtualIndex + 1);
}

function getNivelAtual() {
  return NIVEIS_INICIANTE[nivelAtualIndex];
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
  badgeNivel.textContent = `Nível ${nivel.numero}`;
  badgePatente.textContent = nivel.patente;

  textoMissao.textContent = `Envie: ${missao.alvo}`;
  dicaMissaoEl.textContent = `Pressione: ${missao.codigo}`;

  contadorMissaoEl.textContent = `${missaoAtualIndex + 1}/${nivel.missoes.length}`;
  faseAtualEl.textContent = missao.tipo;

  codigoAtual = "";
  atualizarCodigoNaTela();

  feedback.textContent = "";
  feedback.className = "feedback";
}

function confirmarEnvio() {
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

  let patenteResultado = nivel.patente;
  let campanhaFinalizada = false;

  if (aprovado && nivelAtualIndex === NIVEIS_INICIANTE.length - 1) {
    patenteResultado = PATENTE_FINAL;
    campanhaFinalizada = true;
  }

  ultimoResultado = {
    nome: nomeOperador,
    modo: "Iniciante",
    patente: patenteResultado,
    nivel: campanhaFinalizada ? NIVEIS_INICIANTE.length + 1 : nivel.numero,
    titulo: campanhaFinalizada ? "Campanha iniciante concluída" : nivel.titulo,
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

  if (aprovado) {
    liberarProximoNivel(campanhaFinalizada);
  }

  mostrarResultadoNivel(ultimoResultado, campanhaFinalizada);
}

function liberarProximoNivel(campanhaFinalizada) {
  const nivelLiberadoAtual = obterNivelLiberado();

  if (campanhaFinalizada) {
    localStorage.setItem("operadorMorseNivelLiberado", String(NIVEIS_INICIANTE.length - 1));
    localStorage.setItem("operadorMorseInicianteConcluido", "sim");
    return;
  }

  const proximoIndex = Math.min(nivelAtualIndex + 1, NIVEIS_INICIANTE.length - 1);

  if (proximoIndex > nivelLiberadoAtual) {
    localStorage.setItem("operadorMorseNivelLiberado", String(proximoIndex));
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
      `Você ficou com ${resultado.aproveitamento}% de aproveitamento. ` +
      `O mínimo é 80%. Repita o nível para tentar novamente.`;

    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Repetir nível";
    return;
  }

  if (campanhaFinalizada) {
    resultadoBadge.textContent = "Campanha iniciante concluída";
    tituloResultado.textContent = "Promoção a Marechal";

    resultadoFinal.textContent =
      `Missão final concluída! Você alcançou Marechal no modo Iniciante. ` +
      `Aproveitamento de ${resultado.aproveitamento}% e velocidade aproximada de ${resultado.wpm.toFixed(1)} WPM.`;

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

  if (resultado.bonus) {
    mensagem += " Bônus por aproveitamento de 90% ou mais.";
  }

  if (resultado.excelenciaWpm) {
    mensagem += " Ritmo operacional: meta de 12 WPM alcançada.";
  }

  resultadoFinal.textContent = mensagem;

  btnProximoNivel.style.display = "inline-block";
  btnJogarNovamente.textContent = "Repetir nível";
}

function proximaPatenteTexto() {
  if (nivelAtualIndex >= NIVEIS_INICIANTE.length - 1) {
    return PATENTE_FINAL;
  }

  return NIVEIS_INICIANTE[nivelAtualIndex + 1].patente;
}

/* =========================
   CÓDIGO DIGITADO
========================= */

function iniciarPressionamento() {
  prepararAudio();

  if (pressionando) return;

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
  if (!codigoAtual.trim()) return;

  if (!codigoAtual.endsWith(" ")) {
    codigoAtual += " ";
  }

  atualizarCodigoNaTela();
}

function inserirEspacoPalavra() {
  if (!codigoAtual.trim()) return;

  codigoAtual = codigoAtual.trim();

  if (!codigoAtual.endsWith("/")) {
    codigoAtual += " / ";
  }

  atualizarCodigoNaTela();
}

function atualizarCodigoNaTela() {
  codigoDigitado.textContent = codigoAtual.trim() || "—";
}

function limparCodigo() {
  codigoAtual = "";
  atualizarCodigoNaTela();

  tocarCliqueLimpar();

  feedback.textContent = "Código limpo.";
  feedback.className = "feedback";
}

function mostrarFeedbackManipulacao(simbolo, duracao) {
  const duracaoArredondada = Math.round(duracao);

  if (simbolo === ".") {
    feedback.textContent = `Ponto transmitido (${duracaoArredondada} ms).`;
  } else {
    feedback.textContent = `Traço transmitido (${duracaoArredondada} ms).`;
  }

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
    if (b.nivel !== a.nivel) return b.nivel - a.nivel;
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    if (b.aproveitamento !== a.aproveitamento) return b.aproveitamento - a.aproveitamento;
    if (a.tempoSegundos !== b.tempoSegundos) return a.tempoSegundos - b.tempoSegundos;
    return b.wpm - a.wpm;
  });

  const top20 = ranking.slice(0, 20);

  localStorage.setItem("operadorMorseRanking", JSON.stringify(top20));
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
    .map((item, index) => {
      return `
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
      `;
    })
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
   ÁUDIO MORSE REALISTA
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
  osciladorMorse.frequency.setValueAtTime(
    FREQUENCIA_SIDETONE,
    audioContext.currentTime
  );

  filtroMorse.type = "lowpass";
  filtroMorse.frequency.setValueAtTime(1500, audioContext.currentTime);

  ganhoMorse.gain.setValueAtTime(0.001, audioContext.currentTime);
  ganhoMorse.gain.exponentialRampToValueAtTime(
    VOLUME_MORSE,
    audioContext.currentTime + 0.012
  );

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
  } catch (erro) {
    // Evita travamento se o navegador já tiver parado o oscilador.
  }

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
  ganho.gain.exponentialRampToValueAtTime(
    volume,
    audioContext.currentTime + 0.01
  );

  ganho.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + duracao / 1000
  );

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

  setTimeout(() => {
    tocarTomCurto(980, 100, 0.09, "sine");
  }, 90);
}

function tocarErro() {
  tocarTomCurto(240, 120, 0.11, "sawtooth");

  setTimeout(() => {
    tocarTomCurto(180, 160, 0.1, "sawtooth");
  }, 120);
}

function tocarFinalizacao() {
  tocarTomCurto(FREQUENCIA_SIDETONE, DURACAO_PONTO_IDEAL, 0.12, "square");

  setTimeout(() => {
    tocarTomCurto(FREQUENCIA_SIDETONE, DURACAO_PONTO_IDEAL, 0.12, "square");
  }, UNIDADE_MORSE * 2);

  setTimeout(() => {
    tocarTomCurto(FREQUENCIA_SIDETONE, DURACAO_TRACO_IDEAL, 0.12, "square");
  }, UNIDADE_MORSE * 4);
}