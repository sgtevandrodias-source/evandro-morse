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

const missoes = [
  { alvo: "A", codigo: ".-", tipo: "Letra" },
  { alvo: "E", codigo: ".", tipo: "Letra" },
  { alvo: "T", codigo: "-", tipo: "Letra" },
  { alvo: "I", codigo: "..", tipo: "Letra" },
  { alvo: "M", codigo: "--", tipo: "Letra" },
  { alvo: "N", codigo: "-.", tipo: "Letra" },
  { alvo: "D", codigo: "-..", tipo: "Letra" },
  { alvo: "O", codigo: "---", tipo: "Letra" },
  { alvo: "S", codigo: "...", tipo: "Letra" },
  { alvo: "R", codigo: ".-.", tipo: "Letra" }
];

let indiceMissao = 0;
let codigoAtual = "";
let pontuacao = 0;
let acertos = 0;

let pressionando = false;
let inicioPressionamento = 0;

let audioContext = null;

const LIMITE_TOQUE_LONGO = 280;

btnIniciar.addEventListener("click", iniciarJogo);
btnLimpar.addEventListener("click", limparCodigo);
btnEnviar.addEventListener("click", confirmarEnvio);
btnReiniciar.addEventListener("click", reiniciarJogo);
btnJogarNovamente.addEventListener("click", reiniciarJogo);

btnMorse.addEventListener("pointerdown", iniciarPressionamento);
btnMorse.addEventListener("pointerup", finalizarPressionamento);
btnMorse.addEventListener("pointerleave", cancelarSeNecessario);
btnMorse.addEventListener("pointercancel", cancelarSeNecessario);

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

function iniciarJogo() {
  prepararAudio();

  indiceMissao = 0;
  codigoAtual = "";
  pontuacao = 0;
  acertos = 0;

  mostrarTela(telaJogo);
  carregarMissao();
  atualizarPlacar();
}

function reiniciarJogo() {
  iniciarJogo();
}

function mostrarTela(tela) {
  telaInicial.classList.remove("ativa");
  telaJogo.classList.remove("ativa");
  telaFinal.classList.remove("ativa");

  tela.classList.add("ativa");
}

function carregarMissao() {
  const missao = missoes[indiceMissao];

  textoMissao.textContent = `Envie a letra ${missao.alvo}`;
  contadorMissaoEl.textContent = `${indiceMissao + 1}/${missoes.length}`;

  codigoAtual = "";
  atualizarCodigoNaTela();

  feedback.textContent = "";
  feedback.className = "feedback";
}

function iniciarPressionamento() {
  prepararAudio();

  pressionando = true;
  inicioPressionamento = Date.now();

  btnMorse.classList.add("pressionado");
}

function finalizarPressionamento() {
  if (!pressionando) return;

  const duracao = Date.now() - inicioPressionamento;

  if (duracao >= LIMITE_TOQUE_LONGO) {
    adicionarSimbolo("-");
    tocarBeep(520, 260);
  } else {
    adicionarSimbolo(".");
    tocarBeep(720, 100);
  }

  pressionando = false;
  btnMorse.classList.remove("pressionado");
}

function cancelarSeNecessario() {
  if (!pressionando) return;

  pressionando = false;
  btnMorse.classList.remove("pressionado");
}

function adicionarSimbolo(simbolo) {
  codigoAtual += simbolo;
  atualizarCodigoNaTela();

  feedback.textContent = "";
  feedback.className = "feedback";
}

function atualizarCodigoNaTela() {
  codigoDigitado.textContent = codigoAtual || "—";
}

function limparCodigo() {
  codigoAtual = "";
  atualizarCodigoNaTela();

  tocarBeep(380, 80);

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
    }, 900);
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
   ÁREA DE SONS DO JOGO
========================= */

function prepararAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function tocarBeep(frequencia = 700, duracao = 120, volume = 0.18) {
  prepararAudio();

  const oscilador = audioContext.createOscillator();
  const ganho = audioContext.createGain();

  oscilador.type = "sine";
  oscilador.frequency.setValueAtTime(frequencia, audioContext.currentTime);

  ganho.gain.setValueAtTime(volume, audioContext.currentTime);
  ganho.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + duracao / 1000
  );

  oscilador.connect(ganho);
  ganho.connect(audioContext.destination);

  oscilador.start();
  oscilador.stop(audioContext.currentTime + duracao / 1000);
}

function tocarAcerto() {
  tocarBeep(660, 90, 0.16);

  setTimeout(() => {
    tocarBeep(880, 130, 0.16);
  }, 100);
}

function tocarErro() {
  tocarBeep(220, 180, 0.2);

  setTimeout(() => {
    tocarBeep(160, 220, 0.18);
  }, 160);
}

function tocarFinalizacao() {
  tocarBeep(520, 100, 0.16);

  setTimeout(() => {
    tocarBeep(660, 100, 0.16);
  }, 110);

  setTimeout(() => {
    tocarBeep(880, 180, 0.16);
  }, 230);
}