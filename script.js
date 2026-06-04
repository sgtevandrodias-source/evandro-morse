const app = document.getElementById("app");

const missoes = [
  { alvo: "A", codigo: ".-", tipo: "Letra" },
  { alvo: "B", codigo: "-...", tipo: "Letra" },
  { alvo: "C", codigo: "-.-.", tipo: "Letra" },
  { alvo: "SOS", codigo: "... --- ...", tipo: "Palavra" },
  { alvo: "RESGATE", codigo: ".-. . ... --. .- - .", tipo: "Palavra" }
];

let indiceMissao = 0;
let codigoDigitado = "";
let pontos = 0;
let erros = 0;
let combo = 0;
let inicioToque = 0;
let intervaloTransmissao = null;

let audioCtx = null;
let oscilador = null;
let ganho = null;

function patenteAtual() {
  if (pontos >= 1500) return "3º Sgt";
  if (pontos >= 900) return "Cabo";
  if (pontos >= 300) return "Soldado";
  return "Recruta";
}

function mostrarInicio() {
  app.innerHTML = `
    <section class="tela">
      <div class="logo">📻</div>
      <h1>Operador Morse</h1>
      <p class="subtitulo">MISSÃO RESGATE</p>

      <div class="card">
        <h2>🎖️ Patentes</h2>
        <p>Suba de Recruta a Sargento conforme ganha pontos.</p>
      </div>

      <div class="card">
        <h2>🏆 Ranking</h2>
        <p>Ao final, salve seu nome no Top 5 local.</p>
      </div>

      <button onclick="iniciarJogo()">INICIAR MISSÃO</button>
      <button onclick="mostrarRanking()">VER RANKING</button>
    </section>
  `;
}

function iniciarJogo() {
  indiceMissao = 0;
  codigoDigitado = "";
  pontos = 0;
  erros = 0;
  combo = 0;
  mostrarMissao();
}

function mostrarMissao() {
  const missao = missoes[indiceMissao];

  app.innerHTML = `
    <section class="tela">
      <h1>Missão ${indiceMissao + 1}</h1>
      <p class="subtitulo">${missao.tipo.toUpperCase()}</p>

      <div class="painel-status">
        <span>⭐ Pontos: ${pontos}</span>
        <span>🎖️ ${patenteAtual()}</span>
        <span>🔥 Combo: x${combo}</span>
      </div>

      <div class="card centro">
        <h2>Transmita:</h2>
        <div class="alvo">${missao.alvo}</div>
        <p>Toque curto = ponto. Toque longo = traço.</p>
      </div>

      <div class="visor" id="visor">...</div>

      <div class="area-transmissao" id="areaTransmissao">
        <strong id="textoTransmissao">PRONTO PARA TRANSMITIR</strong>
        <small>Use apenas a chave circular abaixo</small>

        <button
          class="chave-morse"
          id="chaveMorse"
          onmousedown="iniciarToque(event)"
          onmouseup="finalizarToque(event)"
          onmouseleave="cancelarToque()"
          ontouchstart="iniciarToque(event)"
          ontouchend="finalizarToque(event)"
        >
          📡
        </button>

        <div class="barra-transmissao">
          <div class="barra-progresso" id="barraProgresso"></div>
        </div>
      </div>

      <button onclick="adicionarCodigo(' ')">ESPAÇO ENTRE LETRAS</button>
      <button onclick="verificarCodigo()">VERIFICAR</button>
      <button onclick="limparCodigo()">LIMPAR</button>
      <button onclick="mostrarInicio()">SAIR</button>
    </section>
  `;
}

function iniciarToque(event) {
  if (event) event.preventDefault();

  inicioToque = Date.now();
  iniciarSomMorse();

  const area = document.getElementById("areaTransmissao");
  const chave = document.getElementById("chaveMorse");
  const texto = document.getElementById("textoTransmissao");
  const barra = document.getElementById("barraProgresso");

  if (!area || !chave || !texto || !barra) return;

  area.classList.add("transmitindo");
  chave.classList.add("pressionada");
  texto.textContent = "TRANSMITINDO...";
  barra.style.width = "0%";

  clearInterval(intervaloTransmissao);

  intervaloTransmissao = setInterval(() => {
    const duracao = Date.now() - inicioToque;
    const largura = Math.min((duracao / 600) * 100, 100);
    barra.style.width = largura + "%";
  }, 30);
}

function finalizarToque(event) {
  if (event) event.preventDefault();
  if (!inicioToque) return;

  const duracao = Date.now() - inicioToque;

  pararSomMorse();
  pararIndicadorTransmissao();

  if (duracao < 180) {
    adicionarCodigo(".");
  } else {
    adicionarCodigo("-");
  }

  inicioToque = 0;
}

function cancelarToque() {
  pararSomMorse();
  pararIndicadorTransmissao();
  inicioToque = 0;
}

function pararIndicadorTransmissao() {
  clearInterval(intervaloTransmissao);

  const area = document.getElementById("areaTransmissao");
  const chave = document.getElementById("chaveMorse");
  const texto = document.getElementById("textoTransmissao");
  const barra = document.getElementById("barraProgresso");

  if (area) area.classList.remove("transmitindo");
  if (chave) chave.classList.remove("pressionada");
  if (texto) texto.textContent = "PRONTO PARA TRANSMITIR";
  if (barra) barra.style.width = "0%";
}

function iniciarSomMorse() {
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();

  oscilador = audioCtx.createOscillator();
  ganho = audioCtx.createGain();

  oscilador.type = "sine";
  oscilador.frequency.value = 700;
  ganho.gain.value = 0.25;

  oscilador.connect(ganho);
  ganho.connect(audioCtx.destination);

  oscilador.start();
}

function pararSomMorse() {
  if (oscilador) {
    oscilador.stop();
    oscilador.disconnect();
    oscilador = null;
  }

  if (ganho) {
    ganho.disconnect();
    ganho = null;
  }
}

function adicionarCodigo(simbolo) {
  codigoDigitado += simbolo;
  atualizarVisor();
}

function atualizarVisor() {
  document.getElementById("visor").textContent = codigoDigitado || "...";
}

function limparCodigo() {
  codigoDigitado = "";
  atualizarVisor();
}

function verificarCodigo() {
  const missao = missoes[indiceMissao];

  if (codigoDigitado.trim() === missao.codigo) {
    combo++;
    const ganho = 100 + combo * 20;
    pontos += ganho;

    alert(`Correto! +${ganho} pontos. Combo x${combo}`);

    indiceMissao++;

    if (indiceMissao >= missoes.length) {
      mostrarFimDeJogo();
    } else {
      codigoDigitado = "";
      mostrarMissao();
    }
  } else {
    erros++;
    combo = 0;
    alert("Código incorreto. Tente novamente.");
  }
}

function mostrarFimDeJogo() {
  const estrelas = erros === 0 ? "⭐⭐⭐" : erros <= 2 ? "⭐⭐" : "⭐";

  app.innerHTML = `
    <section class="tela">
      <div class="logo">🏁</div>
      <h1>Missão concluída!</h1>
      <p class="subtitulo">${estrelas}</p>

      <div class="card centro">
        <h2>Resultado</h2>
        <p>Pontuação final: <strong>${pontos}</strong></p>
        <p>Patente alcançada: <strong>${patenteAtual()}</strong></p>
        <p>Erros: <strong>${erros}</strong></p>
      </div>

      <button onclick="salvarPontuacao()">SALVAR NO RANKING</button>
      <button onclick="iniciarJogo()">JOGAR NOVAMENTE</button>
      <button onclick="mostrarInicio()">INÍCIO</button>
    </section>
  `;
}

function salvarPontuacao() {
  const nome = prompt("Digite seu nome para o ranking:");
  if (!nome) return;

  const ranking = JSON.parse(localStorage.getItem("rankingMorse")) || [];

  ranking.push({
    nome,
    pontos,
    patente: patenteAtual(),
    data: new Date().toLocaleDateString("pt-BR")
  });

  ranking.sort((a, b) => b.pontos - a.pontos);
  localStorage.setItem("rankingMorse", JSON.stringify(ranking.slice(0, 5)));

  mostrarRanking();
}

function mostrarRanking() {
  const ranking = JSON.parse(localStorage.getItem("rankingMorse")) || [];

  let conteudo = ranking.length
    ? ranking.map((jogador, index) => `
        <div class="card">
          <h2>${index + 1}. ${jogador.nome}</h2>
          <p>${jogador.patente} - ${jogador.pontos} pontos</p>
          <p>${jogador.data}</p>
        </div>
      `).join("")
    : `<div class="card"><p>Ainda não há pontuações salvas.</p></div>`;

  app.innerHTML = `
    <section class="tela">
      <div class="logo">🏆</div>
      <h1>Ranking Top 5</h1>
      <p class="subtitulo">OPERADORES DE ELITE</p>

      ${conteudo}

      <button onclick="mostrarInicio()">VOLTAR</button>
    </section>
  `;
}

mostrarInicio();