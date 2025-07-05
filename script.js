const countdownEl = document.getElementById('countdown');
const birthday = new Date('2025-07-14T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthday - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `Contagem Regressiva para o seu dia:<br>${days} dias, ${hours}h, ${minutes}min e ${seconds}s`;
}
setInterval(updateCountdown, 1000);

function showLoveMessage() {
  alert('Te amo, cachinhos de caramelo! 💖');
}

setInterval(() => {
  const estrela = document.createElement('div');
  estrela.classList.add('estrela');
  estrela.style.left = Math.random() * window.innerWidth + 'px';
  estrela.style.top = '-10px';
  document.body.appendChild(estrela);
  setTimeout(() => estrela.remove(), 5000);
}, 300);
// corações flutuantes
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
document.addEventListener('DOMContentLoaded', () => {
  const frasesFofoas = [
    "Você é a razão de tudo ficar mais bonito.",
    "Quando você sorri, o mundo se ilumina.",
    "Eu te amo do jeitinho que você é: inteira.",
    "Seu abraço é meu lugar favorito.",
    "Até sua TPM é um charme. (Às vezes um pouco assustadora, mas linda 😳)",
    "Você é meu poema favorito que a vida escreveu.",
    "Nenhuma tristeza dura muito ao seu lado.",
    "Você não precisa ser perfeita. Você já é minha paz.",
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
    "Você é a razão de tudo ficar mais bonito.",
  "Quando você sorri, o mundo se ilumina, mesmo daqui.",
  "Eu te amo exatamente como você é, em cada detalhe.",
  "Saber que você existe já me acalma de longe.",
  "Até sua TPM é parte da sua beleza única.",
  "Você é meu poema favorito que a vida escreveu.",
  "Mesmo longe, seu jeito me acerta em cheio.",
  "Você não precisa ser perfeita. Você já é minha paz.",
  "A saudade de você é só mais uma forma de amar com intensidade.",
  "Você transforma qualquer dia nublado em céu claro, mesmo à distância.",
    // pode continuar até 100!
  ];

  const heartButton = document.getElementById("heartButton");
  const heartPhrases = document.getElementById("heartPhrases");

  heartButton.addEventListener("click", () => {
    const fraseAleatoria = frasesFofoas[Math.floor(Math.random() * frasesFofoas.length)];
    heartPhrases.innerText = fraseAleatoria;
    heartPhrases.style.display = "block";

    setTimeout(() => {
      heartPhrases.style.display = "none";
    }, 10000);
  });
});
// 🧚 Mostrar quadro e tocar música ao clicar em “infinito”
document.addEventListener('DOMContentLoaded', () => {
  const palavra = document.querySelector('.poema span.infinito');
  const quadro = document.getElementById('quadro-magico');
  const audio = document.getElementById('audio-magico');

  if (palavra) {
    palavra.style.cursor = 'pointer';
    palavra.addEventListener('click', () => {
      quadro.classList.remove('hidden');
      audio.play();
    });
  }
});
// 🌟 Mostrar quadro mágico e tocar música ao clicar em “infinito”
document.addEventListener('DOMContentLoaded', () => {
  const palavra = document.querySelector('.poema .infinito');
  const quadro = document.getElementById('quadro-magico');
  const audio = document.getElementById('audio-magico');

  if (palavra) {
    palavra.style.cursor = 'pointer';
    palavra.addEventListener('click', () => {
      quadro.classList.remove('hidden');
      quadro.classList.add('fade-in');
      audio.play();
    });
  }
});
