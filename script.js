// 🎂 Contador regressivo até o aniversário
const countdownEl = document.getElementById('countdown');
const birthdayDate = { day: 14, month: 6 }; // 0 = Jan, 6 = Jul

function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  let birthday = new Date(year, birthdayDate.month, birthdayDate.day, 0, 0, 0);
  if (birthday <= now) {
    birthday = new Date(year + 1, birthdayDate.month, birthdayDate.day, 0, 0, 0);
  }
  return birthday.getTime();
}

let birthday = getNextBirthday();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    countdownEl.innerHTML = `Feliz Aniversário, minha Lily! 🎉💖`;
    const btnFeliz = document.getElementById('btn-feliz-aniversario');
    if (btnFeliz) btnFeliz.style.display = 'inline-block';
    birthday = getNextBirthday();
    return;
  }

  const btnFeliz = document.getElementById('btn-feliz-aniversario');
  if (btnFeliz) btnFeliz.style.display = 'none';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `Contagem Regressiva para o seu dia:<br>${days} dias, ${hours}h, ${minutes}min e ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ✨ Estrelas cadentes
setInterval(() => {
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');
  estrela.style.left = Math.random() * window.innerWidth + 'px';
  estrela.style.top = '-10px';
  document.body.appendChild(estrela);
  setTimeout(() => estrela.remove(), 5000);
}, 300);

// 💗 Corações flutuantes
setInterval(() => {
  const cora = document.createElement('div');
  cora.classList.add('cora');
  cora.innerText = '💖';
  cora.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(cora);
  setTimeout(() => cora.remove(), 4000);
}, 600);

// 💌 Cartinha Diária com Flores 🌸
function exibirCartinhaDiaria() {
  const agora = new Date();
  const hora = agora.getHours();
  const cartinha = document.getElementById('cartinha-diaria');
  if (hora >= 18 && hora < 24) {
    cartinha.style.display = 'block';
  } else {
    cartinha.style.display = 'none';
  }
}
exibirCartinhaDiaria();
setInterval(exibirCartinhaDiaria, 60 * 1000);

// 💖 Botão do coração com frases fofas
document.addEventListener('DOMContentLoaded', () => {
  const frasesFofoas = [
    "Você é a razão de tudo ficar mais bonito.",
    "Quando você sorri, o mundo se ilumina.",
    "Eu te amo do jeitinho que você é: inteira.",
    "Seu abraço é meu lugar favorito.",
    "Até sua TPM é um charme. (Às vezes um pouco assustadora, mas linda 😳)",
    "Você é meu poema favorito que a vida escreveu.",
    "Nenhuma tristeza dura muito ao seu lado.",
    "Você não precisa ser perfeita. Você já é minha paz (E é perfeita).",
    "A saudade de você é uma forma de amor gritando.",
    "Você transforma o ordinário em extraordinário.",
    "A forma como você cuida... me desmonta todinho.",
    "Seu jeitinho me vicia, me enfeitiça, me amarra.",
    "Até quando está brava, eu te acho maravilhosa.",
    "Você me dá vontade de ser melhor. Por você. Por nós.",
    "Você não precisa fazer nada pra merecer amor. Só ser você.",
    "Você é o pedacino do céu.",
    "Quando você chora, minha alma grita querendo te proteger.",
    "Seu coração é meu lar.",
    "Nada me deixa mais feliz que te fazer sorrir de verdade.",
    "Você é minha tempestade favorita e minha calmaria também.",
    "Mesmo longe, seu jeito me acerta em cheio.",
    "Saber que você existe já me acalma de longe.",
    "Você transforma qualquer dia nublado em céu claro, mesmo à distância."
  ];

  const heartButton = document.getElementById("heartButton");
  const heartPhrases = document.getElementById("heartPhrases");

  if (heartButton && heartPhrases) {
    heartButton.addEventListener("click", () => {
      const fraseAleatoria = frasesFofoas[Math.floor(Math.random() * frasesFofoas.length)];
      heartPhrases.innerText = fraseAleatoria;
      heartPhrases.style.display = "block";
      setTimeout(() => {
        heartPhrases.style.display = "none";
      }, 13000);
    });
  }

  // 🌌 Mostrar quadro mágico ao clicar em “infinito” (somente no dia 14/07)
  const palavra = document.querySelector('.poema .infinito');
  if (palavra) {
    palavra.style.cursor = 'pointer';
    palavra.addEventListener('click', ativarQuadro);
  }
});

// ✨ Função para ativar o quadro mágico apenas no dia 14/07
function ativarQuadro() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth(); // Julho = 6

  if (dia === 14 && mes === 6) {
    const quadro = document.createElement('div');
    quadro.className = 'quadro-magico fade-in';
    quadro.innerHTML = `
      <div class="quadro-conteudo">
        <button class="fechar-quadro" onclick="this.parentElement.parentElement.remove()">✖</button>
        <img src="https://i.ibb.co/Yh1npqW/quadro-lily.png" alt="Quadro do Casal" />
        <p>Você é minha obra-prima. 💖</p>
      </div>
    `;
    document.body.appendChild(quadro);
  } else {
    alert("Esse quadro mágico só pode ser revelado no seu dia especial, meu amor 💫 (14 de julho)!");
  }
}
window.onload = () => {
  const btn = document.getElementById('btnReconfortante');
  const modo = document.getElementById('modoReconfortante');
  const mensagens = [
    "Respira fundo. Você já passou por tanta coisa e venceu todas.",
    "Até o céu nublado é lindo. Hoje pode ser assim também.",
    "Você merece carinho, mesmo nos dias que não acredita nisso.",
    "Seu valor não diminui por estar cansada. Descansar é sabedoria.",
    "Você não está sozinha. Estou aqui com você, sempre.",
    "A flor mais linda também tem seus dias de murchar. E tudo bem.",
    "Deus te ama exatamente como você é. Inteira, quebrada, cansada ou sorridente."
  ];

  btn.addEventListener('click', () => {
    modo.classList.remove('hidden');
    tocarMusicaFundo();
    mostrarMensagemRotativa(mensagens);
  });

  const salvo = localStorage.getItem('diarioLily');
  if (salvo) {
    document.getElementById('textoDiario').value = salvo;
  }
};

function desativarReconfortante() {
  document.getElementById('modoReconfortante').classList.add('hidden');
  pararMusicaFundo();
}

function salvarDiario() {
  const texto = document.getElementById('textoDiario').value;
  localStorage.setItem('diarioLily', texto);
  alert('Seu texto foi salvo com carinho. ✨');
}

function limparDiario() {
  if (confirm('Tem certeza que deseja apagar tudo?')) {
    document.getElementById('textoDiario').value = '';
    localStorage.removeItem('diarioLily');
  }
}

let musicaFundo;

function tocarMusicaFundo() {
  if (!musicaFundo) {
    musicaFundo = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_9ba2a84c65.mp3");
    musicaFundo.loop = true;
    musicaFundo.volume = 0.3;
  }
  musicaFundo.play();
}

function pararMusicaFundo() {
  if (musicaFundo) {
    musicaFundo.pause();
    musicaFundo.currentTime = 0;
  }
}

function mostrarMensagemRotativa(mensagens) {
  const texto = document.getElementById('mensagemRotativa');
  const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
  texto.textContent = msg;
}
document.addEventListener('DOMContentLoaded', () => {
  const cartinha = document.getElementById('cartinha-diaria');
  const btnFechar = cartinha.querySelector('.fechar-cartinha');

  btnFechar.addEventListener('click', () => {
    cartinha.style.display = 'none';
  });
});
