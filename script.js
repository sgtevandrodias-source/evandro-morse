const telaInicial = document.getElementById("telaInicial");
const telaMissao = document.getElementById("telaMissao");
const telaBiblioteca = document.getElementById("telaBiblioteca");
const telaCampanha = document.getElementById("telaCampanha");
const telaLicao = document.getElementById("telaLicao");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");
const telaRanking = document.getElementById("telaRanking");
const telaManipulador = document.getElementById("telaManipulador");

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
const btnBibCaracteresEspeciais = document.getElementById("btnBibCaracteresEspeciais");
const btnBibTreinoAuditivo = document.getElementById("btnBibTreinoAuditivo");
const btnAbrirRanking = document.getElementById("btnAbrirRanking");
const btnAbrirManipulador = document.getElementById("btnAbrirManipulador");
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
const btnMorseManipulador = document.getElementById("btnMorseManipulador");
const btnEspacoLetraManipulador = document.getElementById("btnEspacoLetraManipulador");
const btnEspacoPalavraManipulador = document.getElementById("btnEspacoPalavraManipulador");
const btnLimparManipulador = document.getElementById("btnLimparManipulador");
const btnVoltarInicioManipulador = document.getElementById("btnVoltarInicioManipulador");

const codigoManipulador = document.getElementById("codigoManipulador");
const textoManipulador = document.getElementById("textoManipulador");
const feedbackManipulador = document.getElementById("feedbackManipulador");

const TABELA_MORSE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "/": "-..-.",
  "=": "-...-",
  "+": ".-.-.",
  "@": ".--.-."
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
  W: "ci LA DA",
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
const CONQUISTAS = {
  primeiro_sinal: {
    nome: "📡 Primeiro Sinal",
    descricao: "Envie sua primeira transmissão após o colapso."
  },

  transmissao_limpa: {
    nome: "🎯 Transmissão Limpa",
    descricao: "Conclua uma missão com 100%."
  },

  sinal_rapido: {
    nome: "⚡ Sinal Rápido",
    descricao: "Conclua uma missão em menos de 60 segundos."
  },

  escuta_ativa: {
    nome: "🎧 Escuta Ativa",
    descricao: "Conclua um desafio auditivo."
  },

  operador_escuta: {
    nome: "🎖️ Operador de Escuta",
    descricao: "Conclua a Escuta Operacional."
  },

  canal_estavel: {
    nome: "🔥 Canal Estável",
    descricao: "Alcance 10 acertos consecutivos."
  },

  operador_12wpm: {
    nome: "📻 Operador 12 WPM",
    descricao: "Alcance a meta operacional de 12 WPM."
  },

  rede_restabelecida: {
    nome: "🚨 Rede Restabelecida",
    descricao: "Conclua o modo Iniciante."
  }
};
function getChaveConquistas() {
  return `operadorMorseConquistas_${getChaveOperador()}`;
}

function obterConquistasDesbloqueadas() {
  try {
    return JSON.parse(localStorage.getItem(getChaveConquistas())) || [];
  } catch (erro) {
    return [];
  }
}

function salvarConquistasDesbloqueadas(lista) {
  localStorage.setItem(getChaveConquistas(), JSON.stringify(lista));
}

function desbloquearConquista(idConquista) {
  if (!CONQUISTAS[idConquista]) return false;

  const conquistas = obterConquistasDesbloqueadas();

  if (conquistas.includes(idConquista)) {
    return false;
  }

  conquistas.push(idConquista);
salvarConquistasDesbloqueadas(conquistas);

// mostrarAvisoConquista(idConquista);

return true;
}
let filaAvisosConquista = [];
let exibindoAvisoConquista = false;

function mostrarAvisoConquista(idConquista) {
  const conquista = CONQUISTAS[idConquista];
  if (!conquista) return;

  filaAvisosConquista.push(conquista);
  processarFilaAvisosConquista();
}

function processarFilaAvisosConquista() {
  if (exibindoAvisoConquista || !filaAvisosConquista.length) return;

  exibindoAvisoConquista = true;
  const conquista = filaAvisosConquista.shift();

  const aviso = document.createElement("div");
  aviso.className = "aviso-conquista";
  aviso.innerHTML = `
    <span>Conquista desbloqueada</span>
    <strong>${escaparHtml(conquista.nome)}</strong>
    <small>${escaparHtml(conquista.descricao)}</small>
  `;

  document.body.appendChild(aviso);

  setTimeout(() => {
    aviso.classList.add("visivel");
  }, 50);

  setTimeout(() => {
    aviso.classList.remove("visivel");

    setTimeout(() => {
      aviso.remove();
      exibindoAvisoConquista = false;
      processarFilaAvisosConquista();
    }, 400);
  }, 3000);
}
function mostrarAvisoRapido(titulo, texto) {
  const avisoAntigo = document.querySelector(".aviso-rapido");
  if (avisoAntigo) avisoAntigo.remove();

  const aviso = document.createElement("div");
  aviso.className = "aviso-rapido";
  aviso.innerHTML = `
    <strong>${escaparHtml(titulo)}</strong>
    <small>${escaparHtml(texto)}</small>
  `;

  document.body.appendChild(aviso);

  setTimeout(() => {
    aviso.classList.add("visivel");
  }, 50);

  setTimeout(() => {
    aviso.classList.remove("visivel");
    setTimeout(() => aviso.remove(), 350);
  }, 1800);
}

const MODO_INTERMEDIARIO = "intermediario";
const MODO_AVANCADO = "avancado";

function gerarGruposAvancados(qtd = 200, tamanho = 5) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const grupos = [];

  while (grupos.length < qtd) {
    let grupo = "";

    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      grupo += caracteres[indice];
    }

    if (!grupos.includes(grupo)) {
      grupos.push(grupo);
    }
  }

  return grupos;
}

const BANCO_GRUPOS_AVANCADOS = gerarGruposAvancados(200, 5);
const NIVEIS_AVANCADO = [
  {
    numero: 1,
    patente: "Operador Avançado",
    titulo: "Missão Avançada 01 – Grupos de 5",
    descricao: "Transmita grupos aleatórios de cinco letras e números usando manipulação natural.",
    missoes: BANCO_GRUPOS_AVANCADOS.slice(0, 10)
  }
];
const MENSAGENS_NARRATIVAS_AVANCADO = {
  1: {
    titulo: "📡 Canal avançado estabelecido",
    texto: "A Rede ADR entrou em operação avançada. Grupos de cinco caracteres serão usados para autenticação, rotas e mensagens críticas."
  }
};

const APROVEITAMENTO_MINIMO = 80;
const APROVEITAMENTO_BONUS = 90;
const META_WPM = 12;

const PATENTE_FINAL_INICIANTE = "Mestre Morse";
const PATENTE_FINAL_INTERMEDIARIO = "Operador Intermediário";
const PATENTE_FINAL_AVANCADO = "Operador de Estação";

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
    missoes: ["MISSAO", "COMANDO", "ANTENA", "ESTACAO", "OPERADOR"]
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

const MENSAGENS_NARRATIVAS_INICIANTE = {
  1: {
    titulo: "📡 Primeiro contato confirmado",
    texto: "O rádio respondeu. Ainda há sinal no meio do caos."
  },
  2: {
    titulo: "📡 Canal seguro aberto",
    texto: "A frequência foi estabilizada. A rede começa a respirar."
  },
  3: {
    titulo: "🚨 Rede de emergência ativada",
    texto: "Novas estações começaram a responder aos seus sinais."
  },
  4: {
    titulo: "📨 Mensagem prioritária entregue",
    texto: "Sua transmissão chegou limpa. A confiança na rede aumentou."
  },
  5: {
    titulo: "🔢 Coordenadas recebidas",
    texto: "Os números agora permitem localizar postos e rotas."
  },
  6: {
    titulo: "📻 Operador em teste aprovado",
    texto: "Você demonstrou que consegue reconhecer e transmitir sinais variados."
  },
  7: {
    titulo: "🧭 Dados numéricos confirmados",
    texto: "As transmissões com números já podem ser usadas para horários, rotas e referências."
  },
  8: {
    titulo: "🧠 Grupos táticos reconhecidos",
    texto: "Seu cérebro começa a identificar blocos de sinais, não apenas letras isoladas."
  },
  9: {
    titulo: "📶 Sinal complexo decodificado",
    texto: "Mensagens maiores foram transmitidas sem quebrar o ritmo da rede."
  },
  10: {
    titulo: "🔐 Canal organizado",
    texto: "Letras e números agora viajam juntos pela rede com mais segurança."
  },
  11: {
    titulo: "📡 Protocolos de rádio iniciados",
    texto: "Os primeiros códigos Q entraram em operação. A comunicação ficou mais rápida."
  },
  12: {
    titulo: "✉️ Mensagens curtas entregues",
    texto: "Você já consegue transmitir palavras completas para outros operadores."
  },
  13: {
    titulo: "🌐 Rede regional em expansão",
    texto: "A rede alcança novas estações e começa a formar uma malha de comunicação."
  },
  14: {
    titulo: "🏢 Centro de comunicações ativo",
    texto: "Você assumiu uma posição importante dentro da rede de sobreviventes."
  },
  15: {
    titulo: "🚨 Tráfego prioritário controlado",
    texto: "Mensagens urgentes circularam com precisão. A rede confia mais em você."
  },
  16: {
    titulo: "🧩 Operação coordenada",
    texto: "Palavras e números foram combinados para orientar postos e equipes."
  },
  17: {
    titulo: "🛡️ Posto avançado conectado",
    texto: "A rede alcançou uma área distante. Novos operadores podem receber apoio."
  },
  18: {
    titulo: "📡 Rede de longo alcance",
    texto: "As transmissões cruzaram grandes distâncias e mantiveram a rede viva."
  },
  19: {
    titulo: "🎯 Operador estratégico",
    texto: "Você lidou com mensagens extensas mantendo foco, ritmo e precisão."
  },
  20: {
    titulo: "🚨 Rede restabelecida",
    texto: "As comunicações básicas voltaram a funcionar. O treinamento inicial foi concluído."
  }
};
function getMensagemNarrativaNivel(resultado) {
  if (!resultado) return null;

  if (resultado.modo === "Iniciante") {
    return MENSAGENS_NARRATIVAS_INICIANTE[resultado.nivel] || null;
  }

  if (resultado.modo === "Avançado") {
    return MENSAGENS_NARRATIVAS_AVANCADO[resultado.nivel] || null;
  }

  return null;
}

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
function chaveAvancadoConcluido() {
  return `operadorMorseAvancadoConcluido_${getChaveOperador()}`;
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

btnBibCaracteresEspeciais.addEventListener("click", abrirBibliotecaCaracteresEspeciais);

btnBibTreinoAuditivo.addEventListener("click", abrirBibliotecaTreinoAuditivo);
btnAbrirRanking.addEventListener("click", abrirRanking);

btnAbrirManipulador.addEventListener("click", () => {
  mostrarTela(telaManipulador);
});

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
btnMorseManipulador.addEventListener("pointerdown", iniciarPressionamentoManipulador);
btnMorseManipulador.addEventListener("pointerup", finalizarPressionamentoManipulador);
btnMorseManipulador.addEventListener("pointerleave", finalizarPressionamentoManipulador);
btnMorseManipulador.addEventListener("pointercancel", cancelarPressionamentoManipulador);

btnLimparManipulador.addEventListener("click", limparManipuladorLivre);
btnVoltarInicioManipulador.addEventListener("click", voltarInicio);

document.addEventListener("keydown", (evento) => {
  const estaNoJogo = telaJogo.classList.contains("ativa");
  const estaNoManipulador = telaManipulador.classList.contains("ativa");

  if (!estaNoJogo && !estaNoManipulador) return;

  if (estaNoManipulador) {
    if (evento.code === "Space") {
      if (pressionandoManipulador) return;
      evento.preventDefault();
      iniciarPressionamentoManipulador();
    }

    if (evento.code === "Backspace") {
      evento.preventDefault();
      limparManipuladorLivre();
    }

    return;
  }

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
  const estaNoJogo = telaJogo.classList.contains("ativa");
  const estaNoManipulador = telaManipulador.classList.contains("ativa");

  if (!estaNoJogo && !estaNoManipulador) return;

  if (estaNoManipulador) {
    if (evento.code === "Space") {
      evento.preventDefault();
      finalizarPressionamentoManipulador();
    }

    return;
  }

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
  telaManipulador.classList.remove("ativa");

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
  btnVoltarInicioBiblioteca.style.display = "inline-block";
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
const CARACTERES_ESPECIAIS_MORSE = [
  { codigo: ".", significado: "Ponto final." },
  { codigo: ",", significado: "Vírgula." },
  { codigo: "?", significado: "Interrogação." },
  { codigo: "/", significado: "Barra." },
  { codigo: "=", significado: "Igual / separação." },
  { codigo: "+", significado: "Mais." },
  { codigo: "@", significado: "Arroba." }
];
const PALAVRAS_COMUNS_MORSE = [
  "SOL", "MAR", "RIO", "LUZ", "SOM", "FIO", "RUA", "AR", "REDE", "BASE",
  "RADIO", "MORSE", "SINAL", "TORRE", "POSTO", "ANTENA", "CANAL", "CHAVE", "FONIA", "CABO",
  "MISSAO", "COMANDO", "ORDEM", "ALERTA", "APOIO", "GRUPO", "EQUIPE", "PONTO", "ROTA", "MAPA",
  "ENVIE", "RECEBA", "REPITA", "CONFIRME", "AGUARDE", "COPIE", "CHAME", "ESCUTE", "TRANSMITA", "RESPONDA",
  "NORTE", "SUL", "LESTE", "OESTE", "CENTRO", "AREA", "SETOR", "LINHA", "LOCAL", "TEMPO",
  "COLAPSO", "SOBREVIVA", "ENERGIA", "SISTEMA", "FALHA", "CODIGO", "OPERADOR", "ESTACAO", "EMERGENCIA", "CONTATO",
  "FOCO", "RITMO", "PAUSA", "PONTO", "TRACO", "LETRA", "NUMERO", "PALAVRA", "FRASE", "AUDIO",
  "PATRULHA", "GUARDA", "PONTE", "CAMPO", "ABRIGO", "PORTAO", "VIATURA", "MOTOR", "BATERIA", "ALARME",
  "MENSAGEM", "TRANSMISSAO", "FREQUENCIA", "INTERFERENCIA", "CONFIRMACAO", "LOCALIZACAO", "COORDENADA", "PRIORIDADE", "DESTINO", "ORIGEM",
  "FORTE", "FRACO", "CLARO", "RUIDO", "PRONTO", "SEGURO", "URGENTE", "FINAL", "INICIO", "CAMBIO"
];

const FRASES_OPERACIONAIS_MORSE = [
  "QSL OK",
  "BASE QRV",
  "SINAL OK",
  "RADIO 1",
  "POSTO 2",
  "TORRE QRV",
  "QTC BASE",
  "QRV POSTO",
  "SINAL FORTE",
  "CAMBIO",
  "BASE QSL",
  "RADIO QRV",
  "POSTO QSL",
  "TORRE OK",
  "QRM FORTE",
  "QRN FRACO",
  "QTC SINAL",
  "BASE 1",
  "POSTO 3",
  "RADIO BASE"
];
const MENSAGENS_OPERACIONAIS_MORSE = [
  "QSL RECEBIDO",
  "QRV PARA TRANSMITIR",
  "QAP ESTACAO ALFA",
  "QTH BRASILIA",
  "SOS NECESSITO APOIO",
  "POSTO BRAVO CONFIRMAR",
  "EQUIPE ALFA LOCALIZADA",
  "INICIAR RESGATE",
  "ROTA SEGURA CONFIRMADA",
  "MENSAGEM RECEBIDA",
  "BASE ALFA QRV",
  "CANAL LIVRE PARA QTC",
  "SINAL FRACO REPITA",
  "INTERFERENCIA FORTE",
  "OPERADOR AGUARDE",
  "COORDENADA RECEBIDA",
  "PONTO DE APOIO ATIVO",
  "ABRIGO LOCALIZADO",
  "TRANSMISSAO FINALIZADA",
  "REDE OPERACIONAL"
];

const ESCUTA_OPERACIONAL_BIBLIOTECA = [
  "QSL RECEBIDO",
  "QTH BRASILIA",
  "QRV PARA TRANSMITIR",
  "QAP NA ESCUTA",
  "SOS NECESSITO APOIO",
  "REDE OPERACIONAL",
  "ESTACAO ALFA",
  "ESTACAO BRAVO",
  "ESTACAO CHARLIE",
  "ESTACAO DELTA",
  "COMUNICACAO ESTABELECIDA",
  "TRANSMISSAO FINALIZADA",
  "AGUARDANDO INSTRUCOES",
  "MENSAGEM RECEBIDA",
  "MENSAGEM CONFIRMADA",
  "OPERADOR PRONTO",
  "FREQUENCIA LIVRE",
  "FREQUENCIA OCUPADA",
  "INICIAR TRANSMISSAO",
  "FINALIZAR TRANSMISSAO",
  "QSL COPIADO",
  "QAP PERMANENTE",
  "QTH CONFIRMADO",
  "QRV IMEDIATO",
  "APOIO A CAMINHO",
  "EQUIPE EM DESLOCAMENTO",
  "ROTA SEGURA",
  "BASE OPERACIONAL",
  "PONTO DE CONTROLE",
  "POSTO DE OBSERVACAO",
  "ALVO LOCALIZADO",
  "BUSCA INICIADA",
  "BUSCA FINALIZADA",
  "MATERIAL RECEBIDO",
  "MATERIAL ENTREGUE",
  "COMBUSTIVEL OK",
  "VIATURA PRONTA",
  "OPERACAO INICIADA",
  "OPERACAO CONCLUIDA",
  "SOLICITO APOIO",
  "SOLICITO INFORMACOES",
  "MANTER ESCUTA",
  "MANTER POSICAO",
  "PROSSEGUIR MISSAO",
  "RETORNAR BASE",
  "CHEGADA CONFIRMADA",
  "SAIDA CONFIRMADA",
  "TESTE DE COMUNICACAO",
  "CONTATO ESTABELECIDO",
  "CONTATO PERDIDO"
];
function embaralharArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}
let escutaOperacional = {
  indice: 0,
  acertos: 0,
  erros: 0,
  pontos: 0
};
let ouvirDigitar = {
  indice: 0,
  acertos: 0,
  erros: 0,
  pontos: 0,
  missoes: []
};
let treinoAuditivo = {
  modo: "livre",
  categoria: "letras",
  itens: [],
  itemAtual: null,
  rodada: 0,
  totalRodadas: 10,
  acertos: 0,
  erros: 0,
  pontos: 0,
  sequencia: 0,
  repeticoesItem: 0,
  historico: []
};
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
          <span class="letra">${escaparHtml(item.codigo)}</span>
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
          <span class="letra">${escaparHtml(item.codigo)}</span>
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
          <span class="letra">${escaparHtml(item.codigo)}</span>
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
function abrirBibliotecaCaracteresEspeciais() {
  tituloBiblioteca.textContent = "🔣 Caracteres Especiais";
  descricaoBiblioteca.textContent = "";

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  gridBibliotecaMorse.innerHTML = CARACTERES_ESPECIAIS_MORSE
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item.codigo)}</span>
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
function abrirBibliotecaTreinoAuditivo() {
  tituloBiblioteca.textContent = "";
  descricaoBiblioteca.textContent = "";

  btnVoltarMenuBiblioteca.style.display = "none";
  btnVoltarCodigoQ.style.display = "none";
  btnVoltarInicioBiblioteca.style.display = "none";
  menuBiblioteca.style.display = "none";

  montarMenuTreinoAuditivo();
  mostrarTela(telaBiblioteca);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function iniciarOuvirDigitar() {
  const sorteadas = embaralharArray(
    ESCUTA_OPERACIONAL_BIBLIOTECA
  ).slice(0, 5);

  ouvirDigitar = {
    indice: 0,
    acertos: 0,
    erros: 0,
    pontos: 0,
    missoes: sorteadas
  };

  renderizarOuvirDigitar();
}
function renderizarOuvirDigitar(mostrarResposta = false, mensagem = "") {
  const mensagemCorreta = ouvirDigitar.missoes[ouvirDigitar.indice];

  if (!mensagemCorreta) {
    finalizarOuvirDigitar();
    return;
  }

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo tela-escuta-clean">
      <div class="treino-auditivo-topo">
        <span class="badge">Ouvir e Digitar</span>
        <h2>⌨️ Missão ${ouvirDigitar.indice + 1}/5</h2>
        <p>Ouça a mensagem e digite exatamente o que recebeu.</p>
      </div>

      <div class="botoes-escuta-clean">
        <button id="btnOuvirMensagemDigitada" class="btn principal">
          Ouvir mensagem
        </button>
      </div>

      <div class="campo-resposta-auditiva campo-clean">
        <label for="inputOuvirDigitar">Digite a mensagem recebida</label>

        <input
          id="inputOuvirDigitar"
          type="text"
          autocomplete="off"
          placeholder="Ex: QSL RECEBIDO"
        />

        <button id="btnConfirmarOuvirDigitar" class="btn principal">
          Confirmar
        </button>
      </div>

      <div id="areaRespostaOuvirDigitar" class="resposta-treino resposta-clean">
        ${
          mostrarResposta
            ? `
              <span class="label">Mensagem correta</span>
              <strong>${escaparHtml(mensagemCorreta)}</strong>
              <div class="morse-resposta">${escaparHtml(textoParaMorse(mensagemCorreta))}</div>
            `
            : `
              <span class="label">Mensagem correta</span>
              <strong>—</strong>
            `
        }
      </div>

      <div id="feedbackOuvirDigitar" class="feedback ${mensagem ? "alerta" : ""}">
        ${escaparHtml(mensagem)}
      </div>

      <div class="botoes-resultado">
        ${
          mostrarResposta
            ? `
              <button id="btnProximaOuvirDigitar" class="btn principal">
                Próxima
              </button>
            `
            : ""
        }

        <button id="btnVoltarMenuOuvirDigitar" class="btn secundario">
          Voltar ao Treino Auditivo
        </button>
      </div>
    </div>
  `;

  document
    .getElementById("btnOuvirMensagemDigitada")
    .addEventListener("click", () => {
      tocarSequenciaMorse(textoParaMorse(mensagemCorreta));
    });

  document
    .getElementById("btnConfirmarOuvirDigitar")
    .addEventListener("click", confirmarOuvirDigitar);

  const input = document.getElementById("inputOuvirDigitar");
  if (input) {
    input.focus();

    input.addEventListener("keydown", (evento) => {
      if (evento.code === "Enter") {
        evento.preventDefault();
        confirmarOuvirDigitar();
      }
    });
  }

  const btnProxima = document.getElementById("btnProximaOuvirDigitar");
  if (btnProxima) {
    btnProxima.addEventListener("click", proximaOuvirDigitar);
  }

  document
    .getElementById("btnVoltarMenuOuvirDigitar")
    .addEventListener("click", montarMenuTreinoAuditivo);
}
function confirmarOuvirDigitar() {
  const input = document.getElementById("inputOuvirDigitar");
  if (!input) return;

  const mensagemCorreta = ouvirDigitar.missoes[ouvirDigitar.indice];
  const respostaUsuario = normalizarRespostaAuditiva(input.value);
  const respostaCorreta = normalizarRespostaAuditiva(mensagemCorreta);

  input.blur();

  if (!respostaUsuario) {
    renderizarOuvirDigitar(false, "Digite uma resposta antes de confirmar.");
    return;
  }

  if (respostaUsuario === respostaCorreta) {
    ouvirDigitar.acertos += 1;
    ouvirDigitar.pontos += 25;

    tocarAcerto();
    renderizarOuvirDigitar(true, "Correto! Mensagem recebida com precisão.");
    return;
  }

  ouvirDigitar.erros += 1;

  tocarErro();
  renderizarOuvirDigitar(true, "Incorreto. Confira a mensagem correta.");
}
function proximaOuvirDigitar() {
  ouvirDigitar.indice += 1;
  renderizarOuvirDigitar(false);
}
function finalizarOuvirDigitar() {
  const total = ouvirDigitar.missoes.length || 1;

  const aproveitamento = Math.round(
    (ouvirDigitar.acertos / total) * 100
  );

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-finalizado">
      <span class="badge">Ouvir e Digitar</span>

      <h2>⌨️ Treino concluído</h2>

      <p>
        Você concluiu o modo Ouvir e Digitar, treinando recepção real de mensagens Morse.
      </p>

      <div class="quadro-treino-status">
        <div>
          <span class="label">Aproveitamento</span>
          <strong>${aproveitamento}%</strong>
        </div>

        <div>
          <span class="label">Acertos</span>
          <strong>${ouvirDigitar.acertos}</strong>
        </div>

        <div>
          <span class="label">Erros</span>
          <strong>${ouvirDigitar.erros}</strong>
        </div>

        <div>
          <span class="label">Pontos</span>
          <strong>${ouvirDigitar.pontos}</strong>
        </div>
      </div>

      <div class="relatorio-operacional">
        <div class="relatorio-bloco">
          <span class="label">Situação da escuta</span>
          <h2>🎧 Recepção por digitação</h2>
          <p>
            Você treinou a habilidade de ouvir uma transmissão Morse e registrar a mensagem recebida.
          </p>
        </div>
      </div>

      <div class="botoes-resultado">
        <button id="btnRefazerOuvirDigitar" class="btn principal">
          Refazer treino
        </button>

        <button id="btnVoltarTreinoOuvirDigitarFinal" class="btn secundario">
          Voltar ao Treino Auditivo
        </button>
      </div>
    </div>
  `;

  document
    .getElementById("btnRefazerOuvirDigitar")
    .addEventListener("click", iniciarOuvirDigitar);

  document
    .getElementById("btnVoltarTreinoOuvirDigitarFinal")
    .addEventListener("click", montarMenuTreinoAuditivo);
}
function iniciarEscutaOperacional() {

  const sorteadas = embaralharArray(
    ESCUTA_OPERACIONAL_BIBLIOTECA
  ).slice(0, 5);

  escutaOperacional = {
    indice: 0,
    acertos: 0,
    erros: 0,
    pontos: 0,
    missoes: sorteadas
  };

  renderizarEscutaOperacional();
}
function renderizarEscutaOperacional() {
  const mensagemCorreta = escutaOperacional.missoes[escutaOperacional.indice];

  if (!mensagemCorreta) {
    finalizarEscutaOperacional();
    return;
  }

  const distratores = embaralharArray(
    ESCUTA_OPERACIONAL_BIBLIOTECA.filter((item) => item !== mensagemCorreta)
  ).slice(0, 3);

  const opcoes = embaralharArray([
    mensagemCorreta,
    ...distratores
  ]);

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo tela-escuta-clean">
      <div class="treino-auditivo-topo">
        <span class="badge">Escuta Operacional</span>
        <h2>📡 Missão ${escutaOperacional.indice + 1}/5</h2>
        <p>Ouça a mensagem e escolha a alternativa correta.</p>
      </div>

      <div class="botoes-escuta-clean">
        <button id="btnOuvirEscutaOperacional" class="btn principal">
          Ouvir mensagem
        </button>
      </div>

      <div class="lista-treino-auditivo">
        ${opcoes
          .map((opcao) => `
            <button class="btn secundario btn-opcao-escuta" data-resposta="${escaparHtml(opcao)}">
              ${escaparHtml(opcao)}
            </button>
          `)
          .join("")}
      </div>

      <div id="feedbackEscutaOperacional" class="feedback"></div>

      <div class="botoes-resultado">
        <button id="btnVoltarMenuEscutaOperacional" class="btn discreto">
          Voltar ao Treino Auditivo
        </button>
      </div>
    </div>
  `;

  document
    .getElementById("btnOuvirEscutaOperacional")
    .addEventListener("click", () => {
      tocarSequenciaMorse(textoParaMorse(mensagemCorreta));
    });

  document.querySelectorAll(".btn-opcao-escuta").forEach((botao) => {
    botao.addEventListener("click", () => {
      responderEscutaOperacional(botao.dataset.resposta);
    });
  });

  document
    .getElementById("btnVoltarMenuEscutaOperacional")
    .addEventListener("click", montarMenuTreinoAuditivo);
}

function responderEscutaOperacional(respostaSelecionada) {
  const mensagemCorreta = escutaOperacional.missoes[escutaOperacional.indice];
  const feedback = document.getElementById("feedbackEscutaOperacional");

  if (!mensagemCorreta || !feedback) return;

  const acertou =
    normalizarRespostaAuditiva(respostaSelecionada) ===
    normalizarRespostaAuditiva(mensagemCorreta);

  if (acertou) {
    escutaOperacional.acertos += 1;
    escutaOperacional.pontos += 20;
    tocarAcerto();
    feedback.textContent = "Correto! Mensagem identificada.";
    feedback.className = "feedback sucesso";
  } else {
    escutaOperacional.erros += 1;
    tocarErro();
    feedback.textContent = `Incorreto. A mensagem era: ${mensagemCorreta}`;
    feedback.className = "feedback erro";
  }

  document.querySelectorAll(".btn-opcao-escuta").forEach((botao) => {
    botao.disabled = true;
  });

  setTimeout(() => {
    escutaOperacional.indice += 1;
    renderizarEscutaOperacional();
  }, 1200);
}
function finalizarEscutaOperacional() {
  const aproveitamento = Math.round(
    (escutaOperacional.acertos / escutaOperacional.missoes.length) * 100
  );

  const novaConquista = desbloquearConquista("operador_escuta");

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-finalizado">

      <span class="badge">Escuta Operacional</span>

      <h2>📡 Operação Concluída</h2>

      <p>
        Você concluiu todas as missões de escuta operacional.
      </p>

      <div class="quadro-treino-status">
        <div>
          <span class="label">Aproveitamento</span>
          <strong>${aproveitamento}%</strong>
        </div>

        <div>
          <span class="label">Acertos</span>
          <strong>${escutaOperacional.acertos}</strong>
        </div>

        <div>
          <span class="label">Erros</span>
          <strong>${escutaOperacional.erros}</strong>
        </div>

        <div>
          <span class="label">Pontos</span>
          <strong>${escutaOperacional.pontos}</strong>
        </div>
      </div>

      <div class="relatorio-operacional">
        <div class="relatorio-bloco">
          <span class="label">Situação</span>
          <h2>🎧 Operador de Escuta</h2>
          <p>
            Você demonstrou capacidade de reconhecer mensagens completas em código Morse.
          </p>
        </div>

        <div class="relatorio-bloco">
          <span class="label">Conquistas</span>
          <ul>
            ${
              novaConquista
                ? "<li>🎖️ Operador de Escuta desbloqueado</li>"
                : "<li>Nenhuma nova conquista nesta operação.</li>"
            }
          </ul>
        </div>
      </div>

      <div class="botoes-resultado">
        <button id="btnRefazerEscutaOperacional" class="btn principal">
          Refazer operação
        </button>

        <button id="btnVoltarTreinoEscutaFinal" class="btn secundario">
          Voltar ao Treino Auditivo
        </button>
      </div>
    </div>
  `;

  document
    .getElementById("btnRefazerEscutaOperacional")
    .addEventListener("click", iniciarEscutaOperacional);

  document
    .getElementById("btnVoltarTreinoEscutaFinal")
    .addEventListener("click", montarMenuTreinoAuditivo);
}
function montarMenuTreinoAuditivo() {
  const progressoAuditivo = obterProgressoAuditivo();
  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-menu-clean">
      <div class="treino-auditivo-topo">
        <h2>🎧 Treino Auditivo</h2>
        <div class="painel-progresso-auditivo">
  <div class="progresso-auditivo-card">
    <span class="label">Categorias concluídas</span>
    <strong>${progressoAuditivo.concluidas}/8</strong>
  </div>

  <div class="progresso-auditivo-card">
    <span class="label">Melhor aproveitamento</span>
    <strong>${progressoAuditivo.melhor}%</strong>
  </div>

  <div class="progresso-auditivo-card">
    <span class="label">Treinos realizados</span>
    <strong>${progressoAuditivo.total}</strong>
  </div>
</div>
      </div>
      <div class="card-escuta-operacional">
      <h3>📡 Escuta Operacional</h3>
      <p>Ouça mensagens completas e escolha a alternativa correta.</p>
    
      <button id="btnIniciarEscutaOperacional" class="btn principal">
        Iniciar Escuta Operacional
      </button>
    </div>
    <div class="card-escuta-operacional">
  <h3>⌨️ Ouvir e Digitar</h3>

  <p>
    Escute a mensagem em Morse e digite exatamente o que ouviu.
  </p>

  <button id="btnOuvirDigitar" class="btn principal">
    Iniciar Ouvir e Digitar
  </button>
</div>
      <div class="lista-treino-auditivo">
        ${criarLinhaCategoriaTreino("letras", "ABC / Letras")}
        ${criarLinhaCategoriaTreino("numeros", "Números")}
        ${criarLinhaCategoriaTreino("codigoQ", "Código Q")}
        ${criarLinhaCategoriaTreino("sinais", "Sinais de Serviço")}
        ${criarLinhaCategoriaTreino("abreviacoes", "Abreviações")}
        ${criarLinhaCategoriaTreino("caracteres", "Caracteres Especiais")}
        ${criarLinhaCategoriaTreino("palavras", "Palavras Comuns")}
        ${criarLinhaCategoriaTreino("frases", "Frases Operacionais")}
        ${criarLinhaCategoriaTreino("mensagens", "Mensagens Operacionais")}  
      </div>

      <div class="botoes-resultado bloco-voltar-treino">
        <button id="btnVoltarBibliotecaTreinoMenu" class="btn principal">
          Voltar para Biblioteca
        </button>
      </div>
    </div>
  `;

  document.querySelectorAll(".btn-treino-livre").forEach((botao) => {
    botao.addEventListener("click", () => {
      iniciarTreinoAuditivo(botao.dataset.categoria, "livre");
    });
  });

  document.querySelectorAll(".btn-treino-desafio").forEach((botao) => {
    botao.addEventListener("click", () => {
      iniciarTreinoAuditivo(botao.dataset.categoria, "desafio");
    });
  });

  document
    .getElementById("btnVoltarBibliotecaTreinoMenu")
    .addEventListener("click", abrirBiblioteca);
    const btnEscutaOperacional = document.getElementById("btnIniciarEscutaOperacional");

if (btnEscutaOperacional) {
  btnEscutaOperacional.addEventListener("click", iniciarEscutaOperacional);
}
const btnOuvirDigitar = document.getElementById("btnOuvirDigitar");

if (btnOuvirDigitar) {
  btnOuvirDigitar.addEventListener("click", iniciarOuvirDigitar);
}
}
function criarLinhaCategoriaTreino(categoria, titulo) {
  return `
    <div class="linha-categoria-treino">
      <h3>${escaparHtml(titulo)}</h3>

      <div class="botoes-card-treino">
        <button class="btn secundario btn-treino-livre" data-categoria="${escaparHtml(categoria)}">
          Livre
        </button>

        <button class="btn principal btn-treino-desafio" data-categoria="${escaparHtml(categoria)}">
          Desafio
        </button>
      </div>
    </div>
  `;
}
function iniciarTreinoAuditivo(categoria, modo) {
  treinoAuditivo = {
    modo,
    categoria,
    itens: obterItensTreinoAuditivo(categoria),
    itemAtual: null,
    rodada: 0,
    totalRodadas: modo === "desafio" ? 10 : 0,
    acertos: 0,
    erros: 0,
    pontos: 0,
    sequencia: 0,
    repeticoesItem: 0,
    historico: []
  };

  if (!treinoAuditivo.itens.length) {
    alert("Não há itens cadastrados para esta categoria.");
    return;
  }

  sortearNovoItemTreinoAuditivo();
  renderizarTelaTreinoAuditivo();
}

function obterItensTreinoAuditivo(categoria) {
  const letras = Object.keys(TABELA_MORSE)
    .filter((item) => /^[A-Z]$/.test(item))
    .map((item) => criarItemTreino(item, "Letra", getDicaFonico(item)));

  const numeros = Object.keys(TABELA_MORSE)
    .filter((item) => /^[0-9]$/.test(item))
    .map((item) => criarItemTreino(item, "Número", getDicaFonico(item)));

  const codigoQ = Object.values(CODIGO_Q)
    .flat()
    .map((item) => criarItemTreino(item.codigo, "Código Q", item.significado));

  const sinais = SINAIS_SERVICO
    .map((item) => criarItemTreino(item.codigo, "Sinal de Serviço", item.significado));

  const abreviacoes = ABREVIACOES_MORSE
    .map((item) => criarItemTreino(item.codigo, "Abreviação", item.significado));

  const caracteres = CARACTERES_ESPECIAIS_MORSE
    .map((item) => criarItemTreino(item.codigo, "Caractere especial", item.significado));

  const palavras = PALAVRAS_COMUNS_MORSE
    .map((item) => criarItemTreino(item, "Palavra comum", "Palavra do banco de treino auditivo."));

  const frases = FRASES_OPERACIONAIS_MORSE
    .map((item) => criarItemTreino(item, "Frase operacional", "Frase curta para preparação do modo avançado."));
    const mensagens = MENSAGENS_OPERACIONAIS_MORSE
    .map((item) => criarItemTreino(item, "Mensagem operacional", "Mensagem completa para preparação do modo avançado."));

  if (categoria === "letras") return letras;
  if (categoria === "numeros") return numeros;
  if (categoria === "codigoQ") return codigoQ;
  if (categoria === "sinais") return sinais;
  if (categoria === "abreviacoes") return abreviacoes;
  if (categoria === "caracteres") return caracteres;
  if (categoria === "palavras") return palavras;
  if (categoria === "frases") return frases;
  if (categoria === "mensagens") return mensagens;

  return [
    ...letras,
    ...numeros,
    ...codigoQ,
    ...sinais,
    ...abreviacoes,
    ...caracteres,
    ...palavras,
    ...frases,
    ...mensagens
  ];
}

function criarItemTreino(resposta, tipo, significado) {
  const texto = String(resposta).toUpperCase();

  return {
    resposta: texto,
    tipo,
    significado: significado || "",
    morse: textoParaMorse(texto)
  };
}

function sortearNovoItemTreinoAuditivo() {
  const itensDisponiveis = treinoAuditivo.itens.filter((item) => {
    return !treinoAuditivo.historico.includes(item.resposta);
  });

  const lista = itensDisponiveis.length ? itensDisponiveis : treinoAuditivo.itens;
  const indice = Math.floor(Math.random() * lista.length);

  treinoAuditivo.itemAtual = lista[indice];
  treinoAuditivo.repeticoesItem = 0;

  treinoAuditivo.historico.push(treinoAuditivo.itemAtual.resposta);

  if (treinoAuditivo.historico.length > 8) {
    treinoAuditivo.historico.shift();
  }

  if (treinoAuditivo.modo === "desafio") {
    treinoAuditivo.rodada += 1;
  }
}

function renderizarTelaTreinoAuditivo(mostrarResposta = false, mensagem = "") {
  const item = treinoAuditivo.itemAtual;
  const ehDesafio = treinoAuditivo.modo === "desafio";

  const tituloTela = ehDesafio ? "Desafio" : "Escuta Livre";
  const textoBotaoVoltar = "Voltar ao Treino";

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo tela-escuta-clean">
      <div class="treino-auditivo-topo">
        <h2>${escaparHtml(tituloTela)}</h2>
        <p>${escaparHtml(nomeCategoriaTreino(treinoAuditivo.categoria))}</p>
      </div>

      <div class="botoes-escuta-clean">
        <button id="btnOuvirTreino" class="btn principal">
          Ouvir
        </button>

        ${
          ehDesafio
            ? ""
            : `
              <button id="btnMostrarRespostaTreino" class="btn secundario">
                Mostrar resposta
              </button>
            `
        }
      </div>

      ${
        ehDesafio
          ? `
            <div class="campo-resposta-auditiva campo-clean">
              <label for="inputRespostaAuditiva">Digite o que você ouviu</label>
              <input
                id="inputRespostaAuditiva"
                type="text"
                autocomplete="off"
                placeholder="Ex: A, 7, QSL, BASE"
              />

              <button id="btnConfirmarRespostaAuditiva" class="btn principal">
                Confirmar
              </button>
            </div>
          `
          : ""
      }

      <div id="areaRespostaTreino" class="resposta-treino resposta-clean">
        ${
          mostrarResposta
            ? `
              <span class="label">Resposta</span>
              <strong>${escaparHtml(item.resposta)}</strong>
              <div class="morse-resposta">${escaparHtml(item.morse)}</div>
              <p>${escaparHtml(item.significado || "Sem observação cadastrada.")}</p>
            `
            : `
              <span class="label">Resposta</span>
              <strong>—</strong>
            `
        }
      </div>

      <div id="feedbackTreinoAuditivo" class="feedback ${mensagem ? "alerta" : ""}">
        ${escaparHtml(mensagem)}
      </div>

      <div class="botoes-resultado botoes-final-clean">
        ${
          ehDesafio && mostrarResposta
            ? `
              <button id="btnProximoTreinoAuditivo" class="btn principal">
                Próxima
              </button>
            `
            : !ehDesafio
              ? `
                <button id="btnProximoTreinoAuditivo" class="btn principal">
                  Próxima
                </button>
              `
              : ""
        }

        <button id="btnVoltarMenuTreinoAuditivo" class="btn secundario">
          ${textoBotaoVoltar}
        </button>
      </div>
    </div>
  `;

  document.getElementById("btnOuvirTreino").addEventListener("click", ouvirItemTreinoAuditivo);

  const btnMostrarResposta = document.getElementById("btnMostrarRespostaTreino");
  if (btnMostrarResposta) {
    btnMostrarResposta.addEventListener("click", () => {
      renderizarTelaTreinoAuditivo(true);
    });
  }

  const btnProximo = document.getElementById("btnProximoTreinoAuditivo");
  if (btnProximo) {
    btnProximo.addEventListener("click", proximoItemTreinoAuditivo);
  }

  document
    .getElementById("btnVoltarMenuTreinoAuditivo")
    .addEventListener("click", montarMenuTreinoAuditivo);

  const inputResposta = document.getElementById("inputRespostaAuditiva");
  const btnConfirmar = document.getElementById("btnConfirmarRespostaAuditiva");

  if (inputResposta && btnConfirmar) {
    inputResposta.focus();

    btnConfirmar.addEventListener("click", confirmarRespostaAuditiva);

    inputResposta.addEventListener("keydown", (evento) => {
      if (evento.code === "Enter") {
        evento.preventDefault();
        confirmarRespostaAuditiva();
      }
    });
  }
}
function ouvirItemTreinoAuditivo() {
  if (!treinoAuditivo.itemAtual) return;

  treinoAuditivo.repeticoesItem += 1;
  tocarSequenciaMorse(treinoAuditivo.itemAtual.morse);
}

function confirmarRespostaAuditiva() {
  const input = document.getElementById("inputRespostaAuditiva");
  if (!input) return;

  input.setAttribute("readonly", "readonly");
  input.blur();
  
  setTimeout(() => {
    input.removeAttribute("readonly");
  }, 300);
  const respostaUsuario = normalizarRespostaAuditiva(input.value);
  const respostaCorreta = normalizarRespostaAuditiva(treinoAuditivo.itemAtual.resposta);

  if (!respostaUsuario) {
    renderizarTelaTreinoAuditivo(false, "Digite uma resposta antes de confirmar.");
    return;
  }

  if (respostaUsuario === respostaCorreta) {
    treinoAuditivo.acertos += 1;
    treinoAuditivo.sequencia += 1;

    let pontosGanhos = 10;

    if (treinoAuditivo.repeticoesItem <= 1) pontosGanhos += 5;
    if (treinoAuditivo.sequencia === 3) pontosGanhos += 10;
    if (treinoAuditivo.sequencia === 5) pontosGanhos += 20;

    treinoAuditivo.pontos += pontosGanhos;

    tocarAcerto();

setTimeout(() => {
  renderizarTelaTreinoAuditivo(true, `Correto!`);

  setTimeout(() => {
    const areaResposta = document.getElementById("areaRespostaTreino");
    if (areaResposta) {
      areaResposta.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, 150);
}, 350);

return;
  }

  treinoAuditivo.erros += 1;
  treinoAuditivo.sequencia = 0;

  tocarErro();

setTimeout(() => {
  renderizarTelaTreinoAuditivo(true, `Incorreto.`);

  setTimeout(() => {
    const areaResposta = document.getElementById("areaRespostaTreino");
    if (areaResposta) {
      areaResposta.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, 150);
}, 350);
}

function proximoItemTreinoAuditivo() {
  if (treinoAuditivo.modo === "desafio" && treinoAuditivo.rodada >= treinoAuditivo.totalRodadas) {
    finalizarDesafioAuditivo();
    return;
  }

  sortearNovoItemTreinoAuditivo();
  renderizarTelaTreinoAuditivo(false);
}

function finalizarDesafioAuditivo() {
  const total = treinoAuditivo.acertos + treinoAuditivo.erros;
  const aproveitamento = total > 0
    ? Math.round((treinoAuditivo.acertos / total) * 100)
    : 0;

  let estrelas = "⭐";
  let titulo = "Treino concluído";
  let mensagem = "Você concluiu o desafio auditivo. Continue treinando para fortalecer sua escuta.";

  if (aproveitamento >= 90) {
    estrelas = "⭐⭐⭐";
    titulo = "Escuta de elite";
    mensagem = "Excelente desempenho. Seu ouvido já está reconhecendo os sinais com muita precisão.";
  } else if (aproveitamento >= 80) {
    estrelas = "⭐⭐";
    titulo = "Escuta operacional";
    mensagem = "Bom desempenho. Você já consegue operar com segurança nessa categoria.";
  } else if (aproveitamento >= 70) {
    estrelas = "⭐";
    titulo = "Escuta em formação";
    mensagem = "Você concluiu o treino, mas ainda precisa reforçar essa categoria.";
  }

  salvarResultadoTreinoAuditivo(aproveitamento);

  const novaConquista = desbloquearConquista("escuta_ativa");

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-finalizado">
      <span class="badge">Resultado Auditivo</span>

      <h2>${estrelas}</h2>

      <h3>${escaparHtml(titulo)}</h3>

      <p>${escaparHtml(mensagem)}</p>

      <div class="quadro-treino-status">
        <div>
          <span class="label">Categoria</span>
          <strong>${escaparHtml(nomeCategoriaTreino(treinoAuditivo.categoria))}</strong>
        </div>

        <div>
          <span class="label">Aproveitamento</span>
          <strong>${aproveitamento}%</strong>
        </div>

        <div>
          <span class="label">Acertos</span>
          <strong>${treinoAuditivo.acertos}</strong>
        </div>

        <div>
          <span class="label">Pontos</span>
          <strong>${treinoAuditivo.pontos}</strong>
        </div>
      </div>

      <div class="relatorio-operacional">
        <div class="relatorio-bloco">
          <span class="label">Situação da escuta</span>
          <h2>🎧 Treino Auditivo registrado</h2>
          <p>Esse resultado prepara o operador para as missões avançadas com mensagens recebidas por áudio.</p>
        </div>

        <div class="relatorio-bloco">
          <span class="label">Medalhas e Distintivos</span>
          <ul>
            ${
              novaConquista
                ? "<li>🎧 Escuta Ativa</li>"
                : "<li>Nenhuma nova medalha nesta rodada.</li>"
            }
          </ul>
        </div>
      </div>

      <div class="botoes-resultado">
        <button id="btnRefazerDesafioAuditivo" class="btn principal">
          Refazer desafio
        </button>

        <button id="btnVoltarMenuTreinoFinal" class="btn secundario">
          Voltar ao Treino Auditivo
        </button>

        <button id="btnVoltarBibliotecaTreinoFinal" class="btn discreto">
          Voltar à Biblioteca
        </button>
      </div>
    </div>
  `;

  document.getElementById("btnRefazerDesafioAuditivo").addEventListener("click", () => {
    iniciarTreinoAuditivo(treinoAuditivo.categoria, "desafio");
  });

  document.getElementById("btnVoltarMenuTreinoFinal").addEventListener("click", montarMenuTreinoAuditivo);
  document.getElementById("btnVoltarBibliotecaTreinoFinal").addEventListener("click", abrirBiblioteca);
}
function obterProgressoAuditivo() {
  const dados = JSON.parse(
    localStorage.getItem("edsMorseProgressoAuditivo") || "{}"
  );

  const categorias = Object.keys(dados);

  let melhor = 0;
  let total = 0;

  categorias.forEach((categoria) => {
    const item = dados[categoria];

    if (!item) return;

    total += item.tentativas || 0;

    if ((item.melhor || 0) > melhor) {
      melhor = item.melhor;
    }
  });

  return {
    concluidas: categorias.length,
    melhor,
    total
  };
}
function salvarResultadoTreinoAuditivo(aproveitamento) {
  const dados = JSON.parse(
    localStorage.getItem("edsMorseProgressoAuditivo") || "{}"
  );

  const categoria = treinoAuditivo.categoria;

  if (!dados[categoria]) {
    dados[categoria] = {
      melhor: 0,
      tentativas: 0
    };
  }

  dados[categoria].tentativas += 1;

  if (aproveitamento > dados[categoria].melhor) {
    dados[categoria].melhor = aproveitamento;
  }

  localStorage.setItem(
    "edsMorseProgressoAuditivo",
    JSON.stringify(dados)
  );
}
function obterResultadoTreinoAuditivo() {
  const chave = `operadorMorseTreinoAuditivo_${getChaveOperador()}`;

  try {
    return JSON.parse(localStorage.getItem(chave)) || {};
  } catch (erro) {
    return {};
  }
}

function normalizarRespostaAuditiva(valor) {
  return String(valor || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function nomeCategoriaTreino(categoria) {
  const nomes = {
    letras: "Letras",
    numeros: "Números",
    codigoQ: "Código Q",
    sinais: "Sinais de Serviço",
    abreviacoes: "Abreviações",
    caracteres: "Caracteres Especiais",
    palavras: "Palavras comuns",
    frases: "Frases operacionais",
    mensagens: "Mensagens operacionais",
    misto: "Treino misto"
  };

  return nomes[categoria] || "Treino Auditivo";
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
  if (modo === MODO_AVANCADO) return NIVEIS_AVANCADO;
  if (modo === MODO_INTERMEDIARIO) return NIVEIS_INTERMEDIARIO;
  return NIVEIS_INICIANTE;
}

function getNomeModo(modo = modoAtual) {
  if (modo === MODO_AVANCADO) return "Avançado";
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

  modoAtual = MODO_AVANCADO;
  renderizarCampanha();

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
  const manipulacaoNatural =
    modoAtual === MODO_INTERMEDIARIO || modoAtual === MODO_AVANCADO;

  btnEspacoLetra.style.display = manipulacaoNatural ? "none" : "inline-block";
  btnEspacoPalavra.style.display = manipulacaoNatural ? "none" : "inline-block";

  if (painelRitmo) {
    painelRitmo.classList.toggle("ativo", manipulacaoNatural);
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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

    if (sequenciaAcertos >= 10) {
      desbloquearConquista("canal_estavel");
    }

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
  
    if (modoAtual === MODO_AVANCADO) {
      patenteResultado = PATENTE_FINAL_AVANCADO;
    } else if (modoAtual === MODO_INTERMEDIARIO) {
      patenteResultado = PATENTE_FINAL_INTERMEDIARIO;
    } else {
      patenteResultado = PATENTE_FINAL_INICIANTE;
    }
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
    if (modoAtual === MODO_AVANCADO) {
      localStorage.setItem(chaveAvancadoConcluido(), "sim");
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

  const conquistasNovas = verificarConquistasDoNivel(resultado, campanhaFinalizada) || [];
  const mensagemNarrativa = getMensagemNarrativaNivel(resultado);

  resultadoAproveitamento.textContent = `${resultado.aproveitamento}%`;
  resultadoTempo.textContent = formatarTempo(resultado.tempoSegundos);
  resultadoWpm.textContent = resultado.wpm.toFixed(1);
  resultadoPontos.textContent = resultado.pontos;

  if (!resultado.aprovado) {
    resultadoBadge.textContent = "Repetir nível";
    tituloResultado.textContent = "Missão não concluída";
    resultadoFinal.textContent =
      `Você ficou com ${resultado.aproveitamento}% de aproveitamento. O mínimo é 80%. Repita a missão para manter a rede operacional.`;
    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Repetir nível";
    renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada);
    return;
  }

  if (campanhaFinalizada) {
    resultadoBadge.textContent = `Campanha ${getNomeModo(modoAtual)} concluída`;
    tituloResultado.textContent = "Rede restabelecida";
    resultadoFinal.textContent =
      `Você concluiu o modo ${getNomeModo(modoAtual)} com ${resultado.aproveitamento}% de aproveitamento e ${resultado.wpm.toFixed(1)} WPM aproximado.`;
    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Refazer missão final";
    renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada);
    return;
  }

  resultadoBadge.textContent = resultado.bonus ? "Missão concluída com destaque" : "Missão concluída";
  tituloResultado.textContent = "Relatório da missão";

  resultadoFinal.textContent =
    `Você concluiu a missão com ${resultado.aproveitamento}% de aproveitamento, em ${formatarTempo(resultado.tempoSegundos)}, alcançando ${resultado.wpm.toFixed(1)} WPM aproximado.`;

  btnProximoNivel.style.display = "inline-block";
  btnJogarNovamente.textContent = "Repetir missão";

  renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada);
}
function verificarConquistasDoNivel(resultado, campanhaFinalizada) {
  if (!resultado || !resultado.aprovado) return [];

  const novas = [];

  function tentar(idConquista) {
    const desbloqueou = desbloquearConquista(idConquista);
    if (desbloqueou) novas.push(idConquista);
  }

  tentar("primeiro_sinal");

  if (resultado.aproveitamento === 100) {
    tentar("transmissao_limpa");
  }

  if (resultado.tempoSegundos <= 60) {
    tentar("sinal_rapido");
  }

  if (resultado.wpm >= META_WPM) {
    tentar("operador_12wpm");
  }

  if (campanhaFinalizada && resultado.modo === "Iniciante") {
    tentar("rede_restabelecida");
  }

  return novas;
}

function renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada) {
  const relatorio = document.getElementById("relatorioOperacionalResultado");
  if (!relatorio) return;

  relatorio.style.display = "grid";

  const proximaPromocao = resultado.aprovado
    ? (campanhaFinalizada ? resultado.patente : proximaPatenteTexto())
    : resultado.patente;

  const tituloRelatorio = mensagemNarrativa?.titulo || "📡 Nível concluído";
  const textoRelatorio = mensagemNarrativa?.texto || "A rede avançou para a próxima etapa.";

  const listaConquistas = conquistasNovas.length
    ? conquistasNovas
        .map((id) => {
          const conquista = CONQUISTAS[id];
          if (!conquista) return "";
          return `<li>${escaparHtml(conquista.nome)}</li>`;
        })
        .join("")
    : "<li>Nenhuma nova medalha nesta missão.</li>";

  relatorio.innerHTML = `
    <div class="relatorio-bloco">
      <span class="label">Situação da Rede</span>
      <h2>${escaparHtml(tituloRelatorio)}</h2>
      <p>${escaparHtml(textoRelatorio)}</p>
    </div>

    <div class="relatorio-bloco">
      <span class="label">Promoção</span>
      <strong>${escaparHtml(proximaPromocao)}</strong>
    </div>

    <div class="relatorio-bloco">
      <span class="label">Medalhas e Distintivos</span>
      <ul>${listaConquistas}</ul>
    </div>
  `;
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

  if (modoAtual === MODO_INTERMEDIARIO || modoAtual === MODO_AVANCADO) {
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

    const missao = getMissaoAtual();
    const enviado = normalizarCodigo(codigoAtual);
    const correto = normalizarCodigo(missao.codigo);

    if (enviado === correto) {
      return;
    }

    if (!codigoAtual.endsWith(" ") && !codigoAtual.endsWith("/")) {
      codigoAtual += " ";
      atualizarCodigoNaTela();
      mostrarFeedbackPausa("✓ Letra fechada");
    }
  }, pausaAutoLetraMs);

  temporizadorPalavra = setTimeout(() => {
    if (!codigoAtual.trim()) return;

    const missao = getMissaoAtual();
    const enviado = normalizarCodigo(codigoAtual);
    const correto = normalizarCodigo(missao.codigo);

    if (enviado === correto) {
      return;
    }

    const codigoComBarra = normalizarCodigo(`${codigoAtual.trim()} /`);

    if (!correto.startsWith(codigoComBarra)) {
      return;
    }

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
  return String(codigo || "")
    .trim()
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s+/g, " ")
    .replace(/(?:\s\/\s?)+$/g, "")
    .trim();
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

  const unidade = 1100 / wpmAtual;
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
      atraso += unidade * 2;
    }

    if (simbolo === "-") {
      tocarElementoComSomDaChave(unidade * fatorTraco, atraso);
      atraso += unidade * fatorTraco + unidade;
    }

    if (simbolo === " ") {
      atraso += unidade * 1.6;
    }

    if (simbolo === "/") {
      atraso += unidade * 6;
    }
  });
}
/* =========================
   BOOT DA ESTAÇÃO MORSE - SEM SOM
========================= */

function iniciarBootEstacao() {
  const telaBoot = document.getElementById("telaBoot");
  if (!telaBoot) return;

  let bootFechado = false;

  const fecharBoot = () => {
    if (bootFechado) return;
    bootFechado = true;

    telaBoot.classList.add("sair");

    setTimeout(() => {
      telaBoot.remove();
    }, 800);
  };

  setTimeout(fecharBoot, 5200);

  telaBoot.addEventListener("click", fecharBoot);
}

window.addEventListener("load", iniciarBootEstacao);
/* =========================
   MANIPULADOR LIVRE
========================= */

let codigoLivre = "";
let pressionandoManipulador = false;
let inicioPressionamentoManipulador = 0;
let temporizadorLetraManipulador = null;
let temporizadorPalavraManipulador = null;

function iniciarPressionamentoManipulador() {
  prepararAudio();

  if (pressionandoManipulador) return;

  limparTemporizadoresManipulador();

  pressionandoManipulador = true;
    inicioPressionamentoManipulador = performance.now();

  btnMorseManipulador.classList.add("pressionado");
  iniciarTomMorse();
}

function finalizarPressionamentoManipulador() {
  if (!pressionandoManipulador) return;

  const fim = performance.now();
  const duracao = fim - inicioPressionamentoManipulador;

  pressionandoManipulador = false;
  btnMorseManipulador.classList.remove("pressionado");

  pararTomMorse();

  const simbolo = duracao < limitePontoTracoMs ? "." : "-";

  codigoLivre += simbolo;

  feedbackManipulador.textContent =
    simbolo === "."
      ? `Ponto transmitido (${Math.round(duracao)} ms).`
      : `Traço transmitido (${Math.round(duracao)} ms).`;

  feedbackManipulador.className = "feedback";

  atualizarManipuladorLivre();
  agendarPausasManipulador();
}

function cancelarPressionamentoManipulador() {
  if (!pressionandoManipulador) return;

  pressionandoManipulador = false;
  btnMorseManipulador.classList.remove("pressionado");
  pararTomMorse();
}
function limparTemporizadoresManipulador() {
  if (temporizadorLetraManipulador) clearTimeout(temporizadorLetraManipulador);
  if (temporizadorPalavraManipulador) clearTimeout(temporizadorPalavraManipulador);

  temporizadorLetraManipulador = null;
  temporizadorPalavraManipulador = null;
}

function agendarPausasManipulador() {
  limparTemporizadoresManipulador();

  temporizadorLetraManipulador = setTimeout(() => {
    if (!codigoLivre.trim()) return;

    if (!codigoLivre.endsWith(" ") && !codigoLivre.endsWith("/")) {
      codigoLivre += " ";
      feedbackManipulador.textContent = "Letra fechada automaticamente.";
      feedbackManipulador.className = "feedback sucesso";
      atualizarManipuladorLivre();
    }
  }, pausaAutoLetraMs);

  temporizadorPalavraManipulador = setTimeout(() => {
    if (!codigoLivre.trim()) return;

    codigoLivre = codigoLivre.trim();

    if (!codigoLivre.endsWith("/")) {
      codigoLivre += " / ";
      feedbackManipulador.textContent = "Palavra fechada automaticamente.";
      feedbackManipulador.className = "feedback sucesso";
      atualizarManipuladorLivre();
    }
  }, pausaAutoPalavraMs);
}
function inserirEspacoLetraManipulador() {
  if (!codigoLivre.trim()) return;

  if (!codigoLivre.endsWith(" ")) {
    codigoLivre += " ";
  }

  feedbackManipulador.textContent = "Letra separada.";
  feedbackManipulador.className = "feedback sucesso";

  atualizarManipuladorLivre();
}

function inserirEspacoPalavraManipulador() {
  if (!codigoLivre.trim()) return;

  codigoLivre = codigoLivre.trim();

  if (!codigoLivre.endsWith("/")) {
    codigoLivre += " / ";
  }

  feedbackManipulador.textContent = "Palavra separada.";
  feedbackManipulador.className = "feedback sucesso";

  atualizarManipuladorLivre();
}

function limparManipuladorLivre() {
  codigoLivre = "";

  feedbackManipulador.textContent = "Manipulador limpo.";
  feedbackManipulador.className = "feedback";

  atualizarManipuladorLivre();
}

function atualizarManipuladorLivre() {
  codigoManipulador.textContent = codigoLivre.trim() || "—";
  textoManipulador.textContent = decodificarMorseLivre(codigoLivre) || "—";
}

function decodificarMorseLivre(codigo) {
  const reverso = {};

  Object.keys(TABELA_MORSE).forEach((chave) => {
    reverso[TABELA_MORSE[chave]] = chave;
  });

  return String(codigo || "")
    .trim()
    .split(" / ")
    .map((palavra) => {
      return palavra
        .trim()
        .split(/\s+/)
        .map((letra) => reverso[letra] || "...")
        .join("");
    })
    .join(" ")
    .trim();
}