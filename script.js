const telaInicial = document.getElementById("telaInicial");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");

const btnIniciar = document.getElementById("btnIniciar");
const btnMorse = document.getElementById("btnMorse");
const btnLimpar = document.getElementById("btnLimpar");
const btnEnviar = document.getElementById("btnEnviar");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnJogarNovamente = document.getElementById("btnJogarNovamente");

const textoMissao = document.getElementById("textoMissao");
const codigoDigitado = document.getElementById("codigoDigitado");
const feedback = document.getElementById("feedback");
const pontuacaoEl = document.getElementById("pontuacao");
const contadorMissaoEl = document.getElementById("contadorMissao");
const acertosEl = document.getElementById("acertos");
const resultadoFinal = document.getElementById("resultadoFinal");
const faseAtualEl = document.getElementById("faseAtual");
const dicaMissaoEl = document.getElementById("dicaMissao");

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
   MISSÕES
========================= */

const missoes = [
  // Letras mais simples
  { alvo: "E", codigo: textoParaMorse("E"), tipo: "Letras básicas" },
  { alvo: "T", codigo: textoParaMorse("T"), tipo: "Letras básicas" },
  { alvo: "A", codigo: textoParaMorse("A"), tipo: "Letras básicas" },
  { alvo: "N", codigo: textoParaMorse("N"), tipo: "Letras básicas" },
  { alvo: "M", codigo: textoParaMorse("M"), tipo: "Letras básicas" },
  { alvo: "I", codigo: textoParaMorse("I"), tipo: "Letras básicas" },
  { alvo: "S", codigo: textoParaMorse("S"), tipo: "Letras básicas" },
  { alvo: "O", codigo: textoParaMorse("O"), tipo: "Letras básicas" },

  // Letras intermediárias
  { alvo: "R", codigo: textoParaMorse("R"), tipo: "Letras intermediárias" },
  { alvo: "K", codigo: textoParaMorse("K"), tipo: "Letras intermediárias" },
  { alvo: "D", codigo: textoParaMorse("D"), tipo: "Letras intermediárias" },
  { alvo: "U", codigo: textoParaMorse("U"), tipo: "Letras intermediárias" },
  { alvo: "C", codigo: textoParaMorse("C"), tipo: "Letras intermediárias" },
  { alvo: "P", codigo: textoParaMorse("P"), tipo: "Letras intermediárias" },

  // Números
  { alvo: "1", codigo: textoParaMorse("1"), tipo: "Números" },
  { alvo: "2", codigo: textoParaMorse("2"), tipo: "Números" },
  { alvo: "3", codigo: textoParaMorse("3"), tipo: "Números" },
  { alvo: "5", codigo: textoParaMorse("5"), tipo: "Números" },
  { alvo: "7", codigo: textoParaMorse("7"), tipo: "Números" },
  { alvo: "9", codigo: textoParaMorse("9"), tipo: "Números" },
  { alvo: "0", codigo: textoParaMorse("0"), tipo: "Números" }
];

/* =========================
   ESTADO DO JOGO
========================= */

let indiceMissao = 0;
let codigoAtual = "";
let pontuacao = 0;
let acertos = 0;

let pressionando = false;
let inicioPressionamento = 0;

let audioContext = null;
let osciladorMorse = null;
let ganhoMorse = null;
let filtroMorse = null;

/*
  Configuração Morse realista

  Fórmula tradicional:
  unidade em ms = 1200 / WPM

  Em 12 palavras por minuto:
  unidade = 1200 / 12 = 100 ms

  ponto  = 1 unidade = 100 ms
  traço  = 3 unidades = 300 ms
*/
const WPM = 12;
const UNIDADE_MORSE = 1200 / WPM;

const DURACAO_PONTO_IDEAL = UNIDADE_MORSE;
const DURACAO_TRACO_IDEAL = UNIDADE_MORSE * 3;

// Limite para decidir se o operador fez ponto ou traço.
// Entre 1 e 3 unidades, usamos 2 unidades como fronteira.
const LIMITE_PONTO_TRACO = UNIDADE_MORSE * 2;

// Frequência clássica agradável para sidetone Morse.
const FREQUENCIA_SIDETONE = 650;

// Volume do sidetone.
const VOLUME_MORSE = 0.22;

/* =========================
   EVENTOS
========================= */

btnIniciar.addEventListener("click", iniciarJogo);
btnLimpar.addEventListener("click", limparCodigo);
btnEnviar.addEventListener("click", confirmarEnvio);
btnReiniciar.addEventListener("click", reiniciarJogo);
btnJogarNovamente.addEventListener("click", reiniciarJogo);

btnMorse.addEventListener("pointerdown", iniciarPressionamento);
btnMorse.addEventListener("pointerup", finalizarPressionamento);
btnMorse.addEventListener("pointerleave", finalizarPressionamento);
btnMorse.addEventListener("pointercancel", cancelarPressionamento);

document.addEventListener("keydown", (evento) => {
  if (evento.code !== "Space") return;
  if (!telaJogo.classList.contains("ativa")) return;
  if (pressionando) return;

  evento.preventDefault();
  iniciarPressionamento();
});

document.addEventListener("keyup", (evento) => {
  if (evento.code !== "Space") return;
  if (!telaJogo.classList.contains("ativa")) return;

  evento.preventDefault();
  finalizarPressionamento();
});

/* =========================
   CONTROLE DO JOGO
========================= */

function iniciarJogo() {
  prepararAudio();

  indiceMissao = 0;
  codigoAtual = "";
  pontuacao = 0;
  acertos = 0;
  pressionando = false;

  mostrarTela(telaJogo);
  carregarMissao();
  atualizarPlacar();
}

function reiniciarJogo() {
  pararTomMorse();

  indiceMissao = 0;
  codigoAtual = "";
  pontuacao = 0;
  acertos = 0;
  pressionando = false;

  mostrarTela(telaJogo);
  carregarMissao();
  atualizarPlacar();
}

function mostrarTela(tela) {
  telaInicial.classList.remove("ativa");
  telaJogo.classList.remove("ativa");
  telaFinal.classList.remove("ativa");

  tela.classList.add("ativa");
}

function carregarMissao() {
  const missao = missoes[indiceMissao];

  textoMissao.textContent = `Envie: ${missao.alvo}`;
  contadorMissaoEl.textContent = `${indiceMissao + 1}/${missoes.length}`;

  if (dicaMissaoEl) {
    dicaMissaoEl.textContent = `Pressione: ${missao.codigo}`;
  }

  if (faseAtualEl) {
    faseAtualEl.textContent = missao.tipo;
  }

  codigoAtual = "";
  atualizarCodigoNaTela();

  feedback.textContent = "";
  feedback.className = "feedback";
}

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

function atualizarCodigoNaTela() {
  codigoDigitado.textContent = codigoAtual || "—";
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

function limparCodigo() {
  codigoAtual = "";
  atualizarCodigoNaTela();

  tocarCliqueLimpar();

  feedback.textContent = "Código limpo. Transmita novamente.";
  feedback.className = "feedback";
}

function confirmarEnvio() {
  const missao = missoes[indiceMissao];

  if (!codigoAtual) {
    tocarErro();

    feedback.textContent = "Transmita pelo menos um ponto ou traço antes de confirmar.";
    feedback.className = "feedback erro";
    return;
  }

  if (codigoAtual === missao.codigo) {
    pontuacao += 10;
    acertos += 1;

    tocarAcerto();

    feedback.textContent = `Correto! ${missao.alvo} em Morse é ${missao.codigo}.`;
    feedback.className = "feedback sucesso";

    atualizarPlacar();

    setTimeout(proximaMissao, 900);
  } else {
    pontuacao = Math.max(0, pontuacao - 2);

    tocarErro();

    feedback.textContent = `Não foi dessa vez. Você enviou ${codigoAtual}, mas ${missao.alvo} é ${missao.codigo}.`;
    feedback.className = "feedback erro";

    atualizarPlacar();

    setTimeout(() => {
      codigoAtual = "";
      atualizarCodigoNaTela();
    }, 1000);
  }
}

function proximaMissao() {
  indiceMissao += 1;

  if (indiceMissao >= missoes.length) {
    finalizarJogo();
    return;
  }

  carregarMissao();
}

function atualizarPlacar() {
  pontuacaoEl.textContent = pontuacao;
  acertosEl.textContent = acertos;
}

function finalizarJogo() {
  mostrarTela(telaFinal);

  tocarFinalizacao();

  resultadoFinal.textContent =
    `Você acertou ${acertos} de ${missoes.length} missões e fez ${pontuacao} pontos. ` +
    `Treinamento concluído. O rádio está operacional.`;
}

/* =========================
   ÁREA DE ÁUDIO MORSE REALISTA
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

  /*
    square deixa o som mais parecido com sidetone telegráfico,
    menos "piano eletrônico" e mais rádio.
  */
  osciladorMorse.type = "square";
  osciladorMorse.frequency.setValueAtTime(
    FREQUENCIA_SIDETONE,
    audioContext.currentTime
  );

  /*
    Filtro suaviza o square para não ficar agressivo demais.
  */
  filtroMorse.type = "lowpass";
  filtroMorse.frequency.setValueAtTime(1500, audioContext.currentTime);

  /*
    Ataque rápido, mas não instantâneo.
    Isso evita estalo seco no início da manipulação.
  */
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

    /*
      Soltura rápida, mas com pequena rampa.
      Isso simula melhor a chave e evita clique digital artificial.
    */
    ganhoMorse.gain.exponentialRampToValueAtTime(0.001, agora + 0.018);

    osciladorMorse.stop(agora + 0.025);
  } catch (erro) {
    // Evita travar caso o navegador já tenha parado o oscilador.
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
  /*
    Acerto discreto para não quebrar muito a experiência Morse.
  */
  tocarTomCurto(760, 80, 0.09, "sine");

  setTimeout(() => {
    tocarTomCurto(980, 100, 0.09, "sine");
  }, 90);
}

function tocarErro() {
  /*
    Erro curto e grave.
  */
  tocarTomCurto(240, 120, 0.11, "sawtooth");

  setTimeout(() => {
    tocarTomCurto(180, 160, 0.1, "sawtooth");
  }, 120);
}

function tocarFinalizacao() {
  /*
    Finalização como pequena sequência telegráfica,
    sem virar música de videogame.
  */
  tocarTomCurto(FREQUENCIA_SIDETONE, DURACAO_PONTO_IDEAL, 0.12, "square");

  setTimeout(() => {
    tocarTomCurto(FREQUENCIA_SIDETONE, DURACAO_PONTO_IDEAL, 0.12, "square");
  }, UNIDADE_MORSE * 2);

  setTimeout(() => {
    tocarTomCurto(FREQUENCIA_SIDETONE, DURACAO_TRACO_IDEAL, 0.12, "square");
  }, UNIDADE_MORSE * 4);
}