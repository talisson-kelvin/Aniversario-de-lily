
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
