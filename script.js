const telaInicial = document.getElementById("telaInicial");
const telaMissao = document.getElementById("telaMissao");
const telaBiblioteca = document.getElementById("telaBiblioteca");
const telaCampanha = document.getElementById("telaCampanha");
const telaLicao = document.getElementById("telaLicao");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");
const telaRanking = document.getElementById("telaRanking");

const inputNomeOperador = document.getElementById("inputNomeOperador");

const btnEntrarCampanha = document.getElementById("btnEntrarCampanha");
const btnAbrirMissao = document.getElementById("btnAbrirMissao");
const btnVoltarInicioMissao = document.getElementById("btnVoltarInicioMissao");
const btnIniciarPelaMissao = document.getElementById("btnIniciarPelaMissao");
const btnAbrirBiblioteca = document.getElementById("btnAbrirBiblioteca");
const btnBibAlfabeto = document.getElementById("btnBibAlfabeto");
const btnBibNumeros = document.getElementById("btnBibNumeros");
const btnBibCodigoQ = document.getElementById("btnBibCodigoQ");
const btnBibSinaisServico = document.getElementById("btnBibSinaisServico");
const btnBibAbreviacoes = document.getElementById("btnBibAbreviacoes");
const btnBibTreinoAuditivo = document.getElementById("btnBibTreinoAuditivo");
const btnAbrirRanking = document.getElementById("btnAbrirRanking");const btnVoltarInicioCampanha = document.getElementById("btnVoltarInicioCampanha");
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
const gridBibliotecaMorse = document.getElementById("gridBibliotecaMorse");
const menuBiblioteca = document.querySelector(".menu-biblioteca");
const tituloBiblioteca = document.getElementById("tituloBiblioteca");
const descricaoBiblioteca = document.getElementById("descricaoBiblioteca");
const btnVoltarMenuBiblioteca = document.getElementById("btnVoltarMenuBiblioteca");
const btnVoltarCodigoQ = document.getElementById("btnVoltarCodigoQ");
const btnVoltarInicioBiblioteca = document.getElementById("btnVoltarInicioBiblioteca");
const gridNiveis = document.getElementById("gridNiveis");
const statusIniciante = document.getElementById("statusIniciante");
const labelModoAtual = document.getElementById("labelModoAtual");
const tituloLicao = document.getElementById("tituloLicao");
const descricaoLicao = document.getElementById("descricaoLicao");
const gridCartoesLicao = document.getElementById("gridCartoesLicao");
const btnIniciarTreinoLicao = document.getElementById("btnIniciarTreinoLicao");
const btnVoltarMapaLicao = document.getElementById("btnVoltarMapaLicao");

const cardModoIniciante = document.getElementById("cardModoIniciante");
const cardModoIntermediario = document.getElementById("cardModoIntermediario");
const cardModoAvancado = document.getElementById("cardModoAvancado");

const painelRitmo = document.getElementById("painelRitmo");
const valorWpm = document.getElementById("valorWpm");
const valorPausaLetra = document.getElementById("valorPausaLetra");
const valorPausaPalavra = document.getElementById("valorPausaPalavra");
const botoesWpm = document.querySelectorAll(".btn-wpm");
const botoesTomLicao = document.querySelectorAll(".btnTom");
const botoesWpmLicao = document.querySelectorAll(".btnWpm");

const btnMenosLetra = document.getElementById("btnMenosLetra");
const btnMaisLetra = document.getElementById("btnMaisLetra");
const btnMenosPalavra = document.getElementById("btnMenosPalavra");
const btnMaisPalavra = document.getElementById("btnMaisPalavra");

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

const DICAS_FONICAS = {
  A: "mi DÁ",
  B: "GOL de bi bi",
  C: "BÁ ti BÁ ti",
  D: "GOL de di",
  E: "bi",
  F: "fi ti PAL di",
  G: "PAI DÉ gua",
  H: "pi pi pi pi",
  I: "pi pi",
  J: "vem CÁ JO SÉ",
  K: "DÁ ki DÁ",
  L: "mi DÁ li li",
  M: "MA RÉ",
  N: "NÁ ri",
  O: "TO RO RÓ",
  P: "si NAL VER di",
  Q: "QUEM VEM di LÁ",
  R: "ci DA di",
  S: "si ri ri",
  T: "TÁ",
  U: "u ru BU",
  V: "ma ra ca NÃ",
  W: "ci la DA",
  X: "LEI tí com CHÁ",
  Y: "GOL di VA VA",
  Z: "ZÁ ZÁ li li",

  1: "vem CA JO SA FÁ",
  2: "ca pi TÃO GAL VÃO",
  3: "co pa ca BA NA",
  4: "pe ga pa ca PA",
  5: "pe ga pa ca pi",
  6: "GOL si ri pi pi",
  7: "SAU DA di di ti",
  8: "VAL DE MAR di di",
  9: "VAL DE MAR NA ri",
  0: "VAL DE MAR MA RE"
};

function getDicaFonico(alvo) {
  const texto = String(alvo).toUpperCase();

  if (/^[A-Z0-9]$/.test(texto)) {
    return DICAS_FONICAS[texto] || "Mnemônico em cadastro";
  }

  return "Transmita no ritmo correto, usando as pausas naturais.";
}

const MODO_INICIANTE = "iniciante";
const MODO_INTERMEDIARIO = "intermediario";

const APROVEITAMENTO_MINIMO = 80;
const APROVEITAMENTO_BONUS = 90;
const META_WPM = 12;

const PATENTE_FINAL_INICIANTE = "Mestre Morse";
const PATENTE_FINAL_INTERMEDIARIO = "Operador Intermediário";

let frequenciaSidetone = Number(localStorage.getItem("operadorMorseTomHz") || "650");
const VOLUME_MORSE = 0.22;

let wpmAtual = Number(localStorage.getItem("operadorMorseWpm") || "12");

let unidadeMorseMs = 1200 / wpmAtual;
let pausaAutoLetraMs = Math.round(unidadeMorseMs * 3);
let pausaAutoPalavraMs = Math.round(unidadeMorseMs * 7);
let limitePontoTracoMs = unidadeMorseMs * 2;

const NIVEIS_INICIANTE = [
  {
    numero: 1,
    patente: "Noob",
    titulo: "Missão 01 – Primeiro Contato",
    descricao: "Você ainda é um Noob. Após o colapso das comunicações, encontrou um rádio funcional. Aprenda os primeiros sinais.",
    missoes: ["F", "G", "H", "J", "M", "R", "U"]
  },
  {
    numero: 2,
    patente: "Novato",
    titulo: "Missão 02 – Canal Seguro",
    descricao: "Agora você é um Novato. Uma frequência segura foi encontrada e precisa ser explorada.",
    missoes: ["B", "D", "K", "N", "T", "V", "Y"]
  },
  {
    numero: 3,
    patente: "Aprendiz",
    titulo: "Missão 03 – Rede de Emergência",
    descricao: "Outros sobreviventes começaram a responder. Amplie sua capacidade de comunicação.",
    missoes: ["C", "E", "I", "L", "S", "W", "O"]
  },
  {
    numero: 4,
    patente: "Explorador",
    titulo: "Missão 04 – Mensagem Prioritária",
    descricao: "As primeiras mensagens importantes estão chegando. Um erro pode custar caro.",
    missoes: ["A", "P", "Q", "X", "Z", "4", "5"]
  },
  {
    numero: 5,
    patente: "Conectado",
    titulo: "Missão 05 – Último Sinal",
    descricao: "Os números são essenciais para coordenadas e horários. Domine-os para permanecer conectado.",
    missoes: ["1", "2", "3", "6", "7", "8", "9", "0"]
  },
  {
    numero: 6,
    patente: "Decodificador",
    titulo: "Missão 06 – Teste de Operador",
    descricao: "Hora de provar que você consegue reconhecer e transmitir os sinais aprendidos.",
    missoes: ["F", "B", "C", "A", "J", "K", "O", "X"]
  },
  {
    numero: 7,
    patente: "Operador Júnior",
    titulo: "Missão 07 – Teste Numérico",
    descricao: "As transmissões agora incluem números operacionais. A precisão é fundamental.",
    missoes: ["1", "5", "9", "0", "2", "6", "8", "3"]
  },
  {
    numero: 8,
    patente: "Caçador de Sinais",
    titulo: "Missão 08 – Grupos Táticos I",
    descricao: "Os sinais estão ficando mais complexos. Identifique padrões rapidamente.",
    missoes: ["FGH", "JMR", "BDK", "NTV", "CEI"]
  },
  {
    numero: 9,
    patente: "Hacker do Rádio",
    titulo: "Missão 09 – Grupos Táticos II",
    descricao: "Grandes blocos de sinais exigem memória, atenção e velocidade.",
    missoes: ["LWS", "APQ", "XYZ", "MOR", "RUT"]
  },
  {
    numero: 10,
    patente: "Técnico de Rede",
    titulo: "Missão 10 – Canal Criptografado",
    descricao: "Misture letras e números para manter a rede segura e organizada.",
    missoes: ["A1", "B2", "C3", "D4", "E5", "F6"]
  },
  {
    numero: 11,
    patente: "Operador de Emergência",
    titulo: "Missão 11 – Protocolos de Rádio",
    descricao: "Aprenda os códigos utilizados pelos operadores para agilizar a comunicação.",
    missoes: ["QRA", "QTH", "QSL", "QTC", "QRV", "QRM"]
  },
  {
    numero: 12,
    patente: "Mensageiro",
    titulo: "Missão 12 – Mensagens Curtas",
    descricao: "Chegou a hora de transmitir palavras completas para outros operadores.",
    missoes: ["SOS", "RIO", "MAR", "SOL", "REDE", "SINAL"]
  },
  {
    numero: 13,
    patente: "Especialista",
    titulo: "Missão 13 – Rede Regional",
    descricao: "As mensagens estão ficando maiores. Mantenha o ritmo e a precisão.",
    missoes: ["MORSE", "RADIO", "TORRE", "POSTO", "BASE", "FOCO"]
  },
  {
    numero: 14,
    patente: "Pro",
    titulo: "Missão 14 – Centro de Comunicações",
    descricao: "Você já opera uma estação importante da rede de sobreviventes.",
    missoes: ["MISSÃO", "COMANDO", "ANTENA", "ESTAÇÃO", "OPERADOR"]
  },
  {
    numero: 15,
    patente: "Elite",
    titulo: "Missão 15 – Tráfego Prioritário",
    descricao: "Mensagens urgentes estão circulando. Não há espaço para distrações.",
    missoes: ["QSL OK", "BASE QRV", "SINAL OK", "RADIO 1", "POSTO 2"]
  },
  {
    numero: 16,
    patente: "Mestre dos Sinais",
    titulo: "Missão 16 – Operação Coordenada",
    descricao: "Coordene informações usando palavras e números com fluidez.",
    missoes: ["BASE 1", "POSTO 2", "TORRE 3", "QTC 5", "RADIO 9"]
  },
  {
    numero: 17,
    patente: "Guardião da Rede",
    titulo: "Missão 17 – Posto Avançado",
    descricao: "A rede depende da sua habilidade para manter os postos conectados.",
    missoes: ["QTC BASE", "QSL RADIO", "QRV POSTO", "SINAL FORTE", "BASE QRV"]
  },
  {
    numero: 18,
    patente: "Lenda Digital",
    titulo: "Missão 18 – Rede Nacional",
    descricao: "As transmissões atravessam longas distâncias. A margem para erro desapareceu.",
    missoes: ["RADIO BASE 1", "POSTO QRV 2", "QTC SINAL 3", "BASE QSL 4", "TORRE QRV 5"]
  },
  {
    numero: 19,
    patente: "Herói do Sinal",
    titulo: "Missão 19 – Operador Estratégico",
    descricao: "Mensagens extensas exigem foco total. Sua concentração será testada.",
    missoes: ["OPERADOR MORSE", "RADIO BASE QRV", "QTC SINAL FORTE", "POSTO QSL 123"]
  },
  {
    numero: 20,
    patente: "Mestre Morse",
    titulo: "Missão 20 – O Último Sinal",
    descricao: "A sobrevivência da rede depende de você. Prove que domina o código Morse.",
    missoes: ["OPERADOR MORSE QRV", "QTC BASE SINAL 12", "RADIO POSTO QSL 9", "TRANSMISSAO OK 5"]
  }
];

const NIVEIS_INTERMEDIARIO = [
  { numero: 1, patente: "Operador em Treinamento", titulo: "Sem Rodinhas", descricao: "Letras simples sem botões de espaço.", missoes: ["E", "T", "A", "N", "M"] },
  { numero: 2, patente: "Operador Aprendiz", titulo: "Pausa entre Letras", descricao: "A pausa média separa automaticamente as letras.", missoes: ["I", "S", "O", "R", "K"] },
  { numero: 3, patente: "Operador Auxiliar", titulo: "Ritmo Fônico I", descricao: "Reconheça o desenho sonoro das letras.", missoes: ["D", "U", "C", "P", "L"] },
  { numero: 4, patente: "Operador de Rede", titulo: "Ritmo Fônico II", descricao: "Padrões longos exigem memória auditiva.", missoes: ["F", "G", "H", "V", "B", "Z"] },
  { numero: 5, patente: "Operador de Posto", titulo: "Palavras Curtas", descricao: "A pausa longa vira separação de palavra.", missoes: ["SOS", "QSL", "QTH", "QRA", "QRV"] },
  { numero: 6, patente: "Operador Tático", titulo: "Palavras Médias", descricao: "Agora o cérebro começa a ouvir blocos.", missoes: ["RADIO", "SINAL", "TORRE", "POSTO", "MORSE"] },
  { numero: 7, patente: "Operador de Mensagem", titulo: "Frases Curtas", descricao: "Separe palavras apenas com pausa.", missoes: ["QSL OK", "BASE QRV", "SINAL OK", "RADIO 1", "POSTO 2"] },
  { numero: 8, patente: "Operador Chefe", titulo: "Frases Operacionais", descricao: "Pouco apoio visual. Mais escuta e ritmo.", missoes: ["QTC BASE", "RADIO QRV", "POSTO QSL", "SINAL FORTE", "TORRE OK"] },
  { numero: 9, patente: "Instrutor Morse", titulo: "Mensagem Operacional", descricao: "Mensagens maiores, sem botão auxiliar.", missoes: ["RADIO BASE QRV", "QTC SINAL 3", "POSTO QSL 2", "BASE RADIO OK", "TORRE SINAL 9"] },
  { numero: 10, patente: "Especialista Morse", titulo: "Missão Final Intermediária", descricao: "Transmissão completa por ritmo e pausa.", missoes: ["OPERADOR QRV", "QTC BASE SINAL", "RADIO POSTO QSL", "SINAL FORTE OK", "MISSAO INTERMEDIARIA"] }
];

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

function recalcularTemposPorWpm() {
  unidadeMorseMs = 1200 / wpmAtual;
  pausaAutoLetraMs = Math.round(unidadeMorseMs * 3);
  pausaAutoPalavraMs = Math.round(unidadeMorseMs * 7);
  limitePontoTracoMs = unidadeMorseMs * 2;
}

function selecionarWpm(novoWpm) {
  wpmAtual = Number(novoWpm);
  localStorage.setItem("operadorMorseWpm", String(wpmAtual));
  recalcularTemposPorWpm();
  atualizarPainelRitmo();

  feedback.textContent =
    `WPM ajustado para ${wpmAtual}. Letra: ${pausaAutoLetraMs} ms • Palavra: ${pausaAutoPalavraMs} ms.`;
  feedback.className = "feedback alerta";
}

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
btnAbrirMissao.addEventListener("click", abrirMissao);
btnVoltarInicioMissao.addEventListener("click", voltarInicio);
btnIniciarPelaMissao.addEventListener("click", entrarCampanha);
btnEntrarCampanha.addEventListener("click", entrarCampanha);
btnAbrirBiblioteca.addEventListener("click", abrirBiblioteca);
btnBibAlfabeto.addEventListener("click", abrirBibliotecaAlfabeto);
btnBibNumeros.addEventListener("click", abrirBibliotecaNumeros);

btnBibCodigoQ.addEventListener("click", abrirBibliotecaCodigoQ);

btnBibSinaisServico.addEventListener("click", abrirBibliotecaSinaisServico);

btnBibAbreviacoes.addEventListener("click", abrirBibliotecaAbreviacoes);

btnBibTreinoAuditivo.addEventListener("click", () => {
  alert("Treino Auditivo em construção.");
});
btnAbrirRanking.addEventListener("click", abrirRanking);
btnVoltarInicioBiblioteca.addEventListener("click", voltarInicio);
btnVoltarMenuBiblioteca.addEventListener("click", abrirBiblioteca);
btnVoltarCodigoQ.addEventListener("click", abrirBibliotecaCodigoQ);
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
btnIniciarTreinoLicao.addEventListener("click", () => {
  iniciarNivel(nivelAtualIndex);
});

btnVoltarMapaLicao.addEventListener("click", entrarCampanha);

cardModoIniciante.addEventListener("click", abrirModoIniciante);
cardModoIntermediario.addEventListener("click", abrirModoIntermediario);
cardModoAvancado.addEventListener("click", abrirModoAvancado);

botoesWpm.forEach((botao) => {
  botao.addEventListener("click", () => {
    selecionarWpm(botao.dataset.wpm);
  });
});

botoesTomLicao.forEach((botao) => {
  botao.addEventListener("click", () => {
    frequenciaSidetone = Number(botao.dataset.hz);
    localStorage.setItem("operadorMorseTomHz", String(frequenciaSidetone));

    botoesTomLicao.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

botoesWpmLicao.forEach((botao) => {
  botao.addEventListener("click", () => {
    selecionarWpm(botao.dataset.wpm);

    botoesWpmLicao.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

if (btnMenosLetra) btnMenosLetra.style.display = "none";
if (btnMaisLetra) btnMaisLetra.style.display = "none";
if (btnMenosPalavra) btnMenosPalavra.style.display = "none";
if (btnMaisPalavra) btnMaisPalavra.style.display = "none";

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

carregarPreferencias();
recalcularTemposPorWpm();
atualizarPainelRitmo();

function carregarPreferencias() {
  const nomeSalvo = localStorage.getItem("operadorMorseNome");

  if (nomeSalvo) {
    nomeOperador = nomeSalvo;
    inputNomeOperador.value = nomeSalvo;
  }

  modoAtual = MODO_INICIANTE;
  nivelAtualIndex = obterNivelLiberado(MODO_INICIANTE);
}

function mostrarTela(tela) {
  telaInicial.classList.remove("ativa");
  telaMissao.classList.remove("ativa");
  telaBiblioteca.classList.remove("ativa");
  telaCampanha.classList.remove("ativa");
  telaLicao.classList.remove("ativa");
  telaJogo.classList.remove("ativa");
  telaFinal.classList.remove("ativa");
  telaRanking.classList.remove("ativa");

  tela.classList.add("ativa");
}

function voltarInicio() {
  mostrarTela(telaInicial);
}
function abrirMissao() {
  mostrarTela(telaMissao);
}
function abrirBiblioteca() {
  tituloBiblioteca.textContent = "📚 Biblioteca Morse";
  descricaoBiblioteca.textContent = "Escolha uma área de estudo. Consulte, ouça e pratique os sinais.";

  gridBibliotecaMorse.innerHTML = "";
  btnVoltarMenuBiblioteca.style.display = "none";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "grid";

  mostrarTela(telaBiblioteca);
}

function montarCardsBiblioteca(itens) {
  gridBibliotecaMorse.innerHTML = itens
    .map((item) => {
      const morse = TABELA_MORSE[item];
      const fonico = DICAS_FONICAS[item] || "Mnemônico em cadastro";

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(fonico)}</span>
          <span class="ouvir">Toque para ouvir</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });
}

function abrirBibliotecaAlfabeto() {
  tituloBiblioteca.textContent = "🔤 Alfabeto Morse";
  descricaoBiblioteca.textContent = "Consulte as letras, seus códigos e mnemônicos fônicos. Toque em um card para ouvir.";

  const letras = Object.keys(TABELA_MORSE).filter((item) => /^[A-Z]$/.test(item));
  montarCardsBiblioteca(letras);

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  menuBiblioteca.style.display = "none";
  telaBiblioteca.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function abrirBibliotecaNumeros() {
  tituloBiblioteca.textContent = "🔢 Números em Morse";
  descricaoBiblioteca.textContent = "Consulte os números, seus códigos e mnemônicos fônicos. Toque em um card para ouvir.";

  const numeros = Object.keys(TABELA_MORSE).filter((item) => /^[0-9]$/.test(item));
  montarCardsBiblioteca(numeros);

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  menuBiblioteca.style.display = "none";
  telaBiblioteca.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function abrirBibliotecaCodigoQ() {
  tituloBiblioteca.textContent = "📡 Código Q";

  descricaoBiblioteca.textContent =
    "Selecione uma categoria do Código Q.";

  gridBibliotecaMorse.innerHTML = `
    <button class="cartao-caractere categoria-q" id="btnQOperacao">
      <span class="letra">📡</span>
      <span class="morse">Operação</span>
      <span class="fonico">
        Comunicação entre operadores
      </span>
    </button>

    <button class="cartao-caractere categoria-q" id="btnQEstacao">
      <span class="letra">🏠</span>
      <span class="morse">Estação</span>
      <span class="fonico">
        Localização e identificação
      </span>
    </button>

    <button class="cartao-caractere categoria-q" id="btnQQualidade">
      <span class="letra">📶</span>
      <span class="morse">Qualidade</span>
      <span class="fonico">
        Sinais, ruídos e interferências
      </span>
    </button>

    <button class="cartao-caractere categoria-q" id="btnQTrafego">
      <span class="letra">📨</span>
      <span class="morse">Tráfego</span>
      <span class="fonico">
        Mensagens e radiogramas
      </span>
    </button>
  `;

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  document
    .getElementById("btnQOperacao")
    .addEventListener("click", abrirQOperacao);

  document
    .getElementById("btnQEstacao")
    .addEventListener("click", abrirQEstacao);

  document
    .getElementById("btnQQualidade")
    .addEventListener("click", abrirQQualidade);

  document
    .getElementById("btnQTrafego")
    .addEventListener("click", abrirQTrafego);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
const CODIGO_Q = {
  operacao: [
    { codigo: "QRL", significado: "A frequência está ocupada." },
    { codigo: "QRM", significado: "Sofro interferência de outra estação." },
    { codigo: "QRN", significado: "Sofro interferência atmosférica." },
    { codigo: "QRO", significado: "Aumente a potência de transmissão." },
    { codigo: "QRP", significado: "Diminua a potência de transmissão." },
    { codigo: "QRQ", significado: "Transmita mais depressa." },
    { codigo: "QRS", significado: "Transmita mais devagar." },
    { codigo: "QRT", significado: "Cesse a transmissão." },
    { codigo: "QRV", significado: "Estou preparado." },
    { codigo: "QRX", significado: "Aguarde. Chamarei novamente." },
    { codigo: "QSY", significado: "Mude para outra frequência." }
  ],

  estacao: [
    { codigo: "QRA", significado: "Qual é o nome da sua estação?" },
    { codigo: "QRB", significado: "Qual a distância entre nossas estações?" },
    { codigo: "QRG", significado: "Qual é minha frequência exata?" },
    { codigo: "QRH", significado: "Minha frequência varia?" },
    { codigo: "QRZ", significado: "Quem está me chamando?" },
    { codigo: "QTH", significado: "Qual é sua localização?" },
    { codigo: "QTR", significado: "Qual é a hora certa?" }
  ],

  qualidade: [
    { codigo: "QRI", significado: "Qual é a tonalidade da minha transmissão?" },
    { codigo: "QRK", significado: "Qual é a inteligibilidade dos meus sinais?" },
    { codigo: "QSA", significado: "Qual é a intensidade dos meus sinais?" },
    { codigo: "QSB", significado: "Seus sinais estão variando." },
    { codigo: "QSD", significado: "Minha transmissão está defeituosa?" },
    { codigo: "QSK", significado: "Posso ouvir entre seus sinais." }
  ],

  trafego: [
    { codigo: "QSL", significado: "Confirmo o recebimento." },
    { codigo: "QSM", significado: "Repita a última mensagem." },
    { codigo: "QSN", significado: "Você me escutou?" },
    { codigo: "QSO", significado: "Posso comunicar diretamente." },
    { codigo: "QSP", significado: "Retransmitirei a mensagem." },
    { codigo: "QSR", significado: "Repita sua chamada." },
    { codigo: "QSS", significado: "Frequência de trabalho." },
    { codigo: "QSU", significado: "Transmita ou responda nesta frequência." },
    { codigo: "QSV", significado: "Transmita uma série de V." },
    { codigo: "QSW", significado: "Transmitirei nesta frequência." },
    { codigo: "QSX", significado: "Escutarei em outra frequência." },
    { codigo: "QTA", significado: "Cancele a mensagem anterior." },
    { codigo: "QTC", significado: "Tenho mensagem para transmitir." },
    { codigo: "QRU", significado: "Não tenho nada para você." },
    { codigo: "QSJ", significado: "Valor ou taxa da comunicação." }
  ]
};
const SINAIS_SERVICO = [
  { codigo: "AR", significado: "Fim da transmissão." },
  { codigo: "AS", significado: "Espere." },
  { codigo: "BT", significado: "Separação entre partes da mensagem." },
  { codigo: "C", significado: "Certo. Confirmativo." },
  { codigo: "DE", significado: "De. Indica a estação que está transmitindo." },
  { codigo: "HH", significado: "Erro. Vou corrigir." },
  { codigo: "IMI", significado: "Repita. Interrogação ou pedido de repetição." },
  { codigo: "K", significado: "Câmbio. Transmita." },
  { codigo: "KN", significado: "Câmbio apenas para a estação chamada." },
  { codigo: "NR", significado: "Número." },
  { codigo: "R", significado: "Recebido." },
  { codigo: "RPT", significado: "Repita." },
  { codigo: "SK", significado: "Fim do contato." },
  { codigo: "VA", significado: "Fim de trabalho." },
  { codigo: "U", significado: "Urgente." },
  { codigo: "UU", significado: "Urgentíssimo." },
  { codigo: "WA", significado: "Palavra após." },
  { codigo: "WB", significado: "Palavra antes." }
];
const ABREVIACOES_MORSE = [
  { codigo: "AGN", significado: "Novamente." },
  { codigo: "ANT", significado: "Antena." },
  { codigo: "BK", significado: "Interrompa / volte a transmitir." },
  { codigo: "CQ", significado: "Chamando qualquer estação." },
  { codigo: "CUL", significado: "Até logo. Nos vemos depois." },
  { codigo: "DE", significado: "De. Indica quem está transmitindo." },
  { codigo: "DX", significado: "Comunicação a longa distância." },
  { codigo: "FER", significado: "Por / para." },
  { codigo: "GA", significado: "Boa tarde." },
  { codigo: "GB", significado: "Adeus." },
  { codigo: "GE", significado: "Boa noite." },
  { codigo: "GL", significado: "Boa sorte." },
  { codigo: "GM", significado: "Bom dia." },
  { codigo: "GUD", significado: "Bom." },
  { codigo: "HI", significado: "Risada em telegrafia." },
  { codigo: "HR", significado: "Aqui." },
  { codigo: "HW", significado: "Como você copia?" },
  { codigo: "OM", significado: "Operador / amigo operador." },
  { codigo: "OP", significado: "Operador." },
  { codigo: "PSE", significado: "Por favor." },
  { codigo: "RIG", significado: "Equipamento de rádio." },
  { codigo: "RPT", significado: "Repita." },
  { codigo: "RST", significado: "Relatório de sinal: legibilidade, intensidade e tom." },
  { codigo: "RX", significado: "Receptor / receber." },
  { codigo: "TX", significado: "Transmissor / transmitir." },
  { codigo: "TNX", significado: "Obrigado." },
  { codigo: "TU", significado: "Obrigado." },
  { codigo: "UR", significado: "Seu / sua." },
  { codigo: "WX", significado: "Tempo / clima." },
  { codigo: "YL", significado: "Jovem senhora / operadora." },
  { codigo: "XYL", significado: "Esposa." },
  { codigo: "73", significado: "Saudações / cordial abraço." },
  { codigo: "88", significado: "Abraços e beijos." }
];
function mostrarCategoriaQ(titulo, itens) {
  tituloBiblioteca.textContent = titulo;

  descricaoBiblioteca.textContent =
    "Toque em um cartão para ouvir o código e consultar o significado.";

  btnVoltarMenuBiblioteca.style.display = "none";
  btnVoltarCodigoQ.style.display = "inline-block";
  menuBiblioteca.style.display = "none";

  gridBibliotecaMorse.innerHTML = itens
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">📡 ${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">Toque para ouvir</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });
}
function abrirQOperacao() {
  mostrarCategoriaQ(
    "📡 Código Q — Operação",
    CODIGO_Q.operacao
  );
}

function abrirQEstacao() {
  mostrarCategoriaQ(
    "🏠 Código Q — Estação",
    CODIGO_Q.estacao
  );
}

function abrirQQualidade() {
  mostrarCategoriaQ(
    "📶 Código Q — Qualidade",
    CODIGO_Q.qualidade
  );
}

function abrirQTrafego() {
  mostrarCategoriaQ(
    "📨 Código Q — Tráfego",
    CODIGO_Q.trafego
  );
}
function abrirBibliotecaSinaisServico() {
  tituloBiblioteca.textContent = "⚡ Sinais de Serviço";

  descricaoBiblioteca.textContent =
    "Sinais usados para controlar, corrigir e organizar a comunicação Morse.";

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  gridBibliotecaMorse.innerHTML = SINAIS_SERVICO
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">⚡ ${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">Toque para ouvir</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function abrirBibliotecaAbreviacoes() {
  tituloBiblioteca.textContent = "📚 Abreviações Morse";

  descricaoBiblioteca.textContent =
    "Abreviações comuns usadas em comunicação Morse e rádio.";

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  gridBibliotecaMorse.innerHTML = ABREVIACOES_MORSE
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">📚 ${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">Toque para ouvir</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

function rolarParaMapaCampanha() {
  const mapa = document.querySelector(".mapa-campanha");
  if (!mapa) return;

  mapa.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function abrirModoIniciante() {
  salvarNomeOperador();
  modoAtual = MODO_INICIANTE;
  renderizarCampanha();
  setTimeout(rolarParaMapaCampanha, 100);
}

function abrirModoIntermediario() {
  salvarNomeOperador();

  if (!modoInicianteConcluido()) {
    alert("Conclua o modo Iniciante para liberar o Intermediário.");
    return;
  }

  modoAtual = MODO_INTERMEDIARIO;
  renderizarCampanha();
  setTimeout(rolarParaMapaCampanha, 100);
}
function abrirModoAvancado() {
  salvarNomeOperador();

  if (!modoIntermediarioConcluido()) {
    alert("Conclua o modo Intermediário para liberar o Avançado.");
    return;
  }

  alert("Modo Avançado será a próxima grande missão: tempo limite, menos dicas e mensagens operacionais.");
setTimeout(rolarParaMapaCampanha, 100);
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

  if (painelRitmo) {
    painelRitmo.classList.toggle("ativo", intermediario);
  }

  atualizarPainelRitmo();
}

function atualizarPainelRitmo() {
  if (valorWpm) valorWpm.textContent = `${wpmAtual} WPM`;
  if (valorPausaLetra) valorPausaLetra.textContent = `${pausaAutoLetraMs} ms`;
  if (valorPausaPalavra) valorPausaPalavra.textContent = `${pausaAutoPalavraMs} ms`;

  botoesWpm.forEach((botao) => {
    botao.classList.toggle("ativo", Number(botao.dataset.wpm) === wpmAtual);
  });
}

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

  if (labelModoAtual) {
    labelModoAtual.textContent = `Modo ${getNomeModo(modoAtual)}`;
  }

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

function abrirCartaoLicao(index) {
  const niveis = getNiveisModo(modoAtual);
  const nivel = niveis[index];

  nivelAtualIndex = index;

  tituloLicao.textContent = `${getNomeModo(modoAtual)} ${nivel.numero} — ${nivel.titulo}`;
  descricaoLicao.textContent = nivel.descricao;

  gridCartoesLicao.innerHTML = nivel.missoes
    .map((item) => {
      const texto = String(item).toUpperCase();
      const morse = textoParaMorse(texto);

      if (/^[A-Z0-9]$/.test(texto)) {
        return `
          <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
            <span class="letra">${escaparHtml(texto)}</span>
            <span class="morse">${escaparHtml(morse)}</span>
            <span class="fonico">${escaparHtml(getDicaFonico(texto))}</span>
            <span class="ouvir">Toque para ouvir</span>
          </button>
        `;
      }

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(texto)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">Treino de grupo</span>
          <span class="ouvir">Toque para ouvir</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  mostrarTela(telaLicao);
}

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

  const dicaFonico = getDicaFonico(missao.alvo);

  if (/^[A-Z0-9]$/.test(String(missao.alvo).toUpperCase())) {
    dicaMissaoEl.innerHTML = `
      <span>Código: ${missao.codigo}</span><br>
      <span>Mnemônico: ${dicaFonico}</span>
    `;
  } else {
    dicaMissaoEl.textContent = `Código: ${missao.codigo}`;
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
    wpmConfigurado: wpmAtual,
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
      `Excelente! Você concluiu o modo ${getNomeModo(modoAtual)} com ${resultado.aproveitamento}% e ${resultado.wpm.toFixed(1)} WPM aproximado.`;
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
    return modoAtual === MODO_INTERMEDIARIO ? PATENTE_FINAL_INTERMEDIARIO : PATENTE_FINAL_INICIANTE;
  }

  return niveis[nivelAtualIndex + 1].patente;
}

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

  const simbolo = duracao < limitePontoTracoMs ? "." : "-";

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
      mostrarFeedbackPausa("✓ Letra fechada");
    }
  }, pausaAutoLetraMs);

  temporizadorPalavra = setTimeout(() => {
    if (!codigoAtual.trim()) return;

    codigoAtual = codigoAtual.trim();

    if (!codigoAtual.endsWith("/")) {
      codigoAtual += " / ";
      atualizarCodigoNaTela();
      mostrarFeedbackPausa("✓ Palavra fechada");
    }
  }, pausaAutoPalavraMs);
}

function mostrarFeedbackPausa(texto) {
  feedback.innerHTML = `<span class="feedback-pausa">${texto}</span>`;
  feedback.className = "feedback alerta";
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
  osciladorMorse.frequency.setValueAtTime(frequenciaSidetone, audioContext.currentTime);

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

function tocarSequenciaMorse(codigoMorse) {
  prepararAudio();

  const unidade = 9999 / wpmAtual;
  const fatorTraco = 3.6;
  let atraso = 0;

  function tocarElementoComSomDaChave(duracaoMs, atrasoMs) {
    setTimeout(() => {
      iniciarTomMorse();

      setTimeout(() => {
        pararTomMorse();
      }, duracaoMs);
    }, atrasoMs);
  }

  String(codigoMorse).split("").forEach((simbolo) => {
    if (simbolo === ".") {
      tocarElementoComSomDaChave(unidade, atraso);
      atraso += unidade * 1.5;
    }

    if (simbolo === "-") {
      tocarElementoComSomDaChave(unidade * fatorTraco, atraso);
      atraso += unidade * fatorTraco + unidade;
    }

    if (simbolo === " ") {
      atraso += unidade * 1.1;
    }

    if (simbolo === "/") {
      atraso += unidade * 6;
    }
  });
}
