// 🎂 Contador regressivo até o aniversário
const countdownEl = document.getElementById('countdown');
const birthdayDate = { day: 14, month: 6 }; // hoje


function getNextBirthday() {
  const now = new Date();
  let year = now.getFullYear();
  // Aniversário dura o dia inteiro até 23:59:59
  let birthdayStart = new Date(year, birthdayDate.month, birthdayDate.day, 0, 0, 0);
  let birthdayEnd = new Date(year, birthdayDate.month, birthdayDate.day, 23, 59, 59);

  if (now > birthdayEnd) {
    // Já passou o dia todo? Vai para o próximo ano
    birthdayStart = new Date(year + 1, birthdayDate.month, birthdayDate.day, 0, 0, 0);
  }

  return birthdayStart.getTime();
}


let birthday = getNextBirthday();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    countdownEl.innerHTML = `Feliz Aniversário, minha Lily! 🎉💖`;
    const btnFeliz = document.getElementById('btn-feliz-aniversario');
    if (btnFeliz) btnFeliz.style.display = 'inline-block';
    // Adiciona o botão "Feliz Aniversário" quando o cronômetro zera
btnFeliz.onclick = () => {
  document.querySelector('.overlay').classList.add('ocultar');
  document.getElementById('novoMundo').classList.remove('hidden');
  document.body.classList.add('modo-mundo-novo');
};


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

});

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
const frasesFlor = [
  "Você é a flor mais rara do meu jardim.",
  "Mesmo nas noites mais frias, você floresce.",
  "Teu perfume é amor. Teu toque, abrigo.",
  "Te encontrar foi como primavera depois de um inverno longo.",
  "Você tem o dom de fazer tudo florescer.",
  "Seu sorriso é o sol que faz minhas flores abrirem.",
  "Até o silêncio do seu olhar floresce dentro de mim.",
  'Até nos dias mais dificeis você continua sendo a minha luz',
  'Eu sempre vou te querer por perto',
  'No fim sempre será eu e você',
  'As vezes nem tudo se resume em estar proximo',
  'To ficando sem ideia no que falar, mas eu te amo',
  'Quando tu achar que ninguem te entende, lembra de mim que te fiz rir ate nos piores dias',
  'Se as coisas estiverem dificeis pode me falar que vou te responder com um (oi, diva💅)'
];

function mostrarFlorMensagem() {
  const florDiv = document.getElementById('mensagemFlor');
  const frase = frasesFlor[Math.floor(Math.random() * frasesFlor.length)];
  florDiv.textContent = frase;
  florDiv.classList.add('fade-in');
}

function mensagemBorboleta() {
  alert("Mesmo quando tudo muda, você continua sendo meu lugar seguro. 🦋");
}
function mostrarSurpresaJardim() {
  const div = document.getElementById("surpresaJardim");
  if (div) {
    div.style.display = div.style.display === "none" ? "block" : "none";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  // Mostra direto o texto da homenagem (sem precisar clicar em nada)
  const textoHomenagem = document.getElementById("textoHomenagem");
  if (textoHomenagem) {
    textoHomenagem.classList.remove("hidden");
  }
});
// ✨ Efeito máquina de escrever no mundo novo
document.addEventListener("DOMContentLoaded", () => {
  const textoDigitado = document.getElementById("textoDigitado");
  const mensagem = "Lily...\n\nEu sei que você nem tava tão animada pro seu aniversário esse ano.\nE tá tudo bem... eu entendo. Você já passou por tanta coisa, né?\nMesmo assim, você sempre tenta sorrir.\n\nMas hoje, nesse lugar feito só pra você, eu queria te lembrar de uma coisa:\nVocê continua aqui. E isso já é muita coisa.";

  let i = 0;
  function escrever() {
    if (i < mensagem.length) {
      textoDigitado.innerHTML += mensagem.charAt(i) === '\n' ? "<br>" : mensagem.charAt(i);
      i++;
      setTimeout(escrever, 50);
    }
  }

  // Quando o "novoMundo" aparecer, iniciar a digitação
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.target.classList.contains("fade-in") && !m.target.classList.contains("hidden")) {
        escrever();
        observer.disconnect();
      }
    }
  });
  const alvo = document.getElementById("novoMundo");
  if (alvo) observer.observe(alvo, { attributes: true });
});

// 🌟 Mostrar mais conteúdo
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("mostrarMais");
  const conteudo = document.getElementById("conteudoExtra");

  if (botao && conteudo) {
    botao.addEventListener("click", () => {
      conteudo.classList.remove("hidden");
      botao.style.display = "none";
    });
  }
});// 🎤 Botão com play/pause para o áudio da voz real
document.addEventListener("DOMContentLoaded", () => {
  const botaoAudio = document.getElementById("btnAudio");
  const audio = document.getElementById("audioMensagem");

  if (botaoAudio && audio) {
    botaoAudio.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => {
          botaoAudio.innerText = "⏸️ Pausar minha voz";
          botaoAudio.classList.remove("pausado");
        }).catch((err) => {
          console.error("Erro ao tocar áudio:", err);
          botaoAudio.innerText = "Erro ao tocar 😢";
        });
      } else {
        audio.pause();
        botaoAudio.innerText = "▶️ Retomar minha voz";
        botaoAudio.classList.add("pausado");
      }
    });

    audio.addEventListener("ended", () => {
      botaoAudio.innerText = "▶️ Ouvir de novo";
      botaoAudio.classList.remove("pausado");
    });
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formQuiz");
  const resultado = document.getElementById("resultadoFlor");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const respostas = new FormData(form);
      const pontuacoes = { esperanca: 0, sensibilidade: 0, paixao: 0, resiliencia: 0 };

      for (let [_, valor] of respostas.entries()) {
        pontuacoes[valor]++;
      }

      let tipo = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);
      let flor = "", explicacao = "";

      if (tipo === "esperanca") {
        flor = "🌻 Girassol";
        explicacao = "Você escolheu caminhos que olham pro alto mesmo em dias nublados. O girassol é você quando, sem perceber, continua se virando pra luz.";
      } else if (tipo === "sensibilidade") {
        flor = "🥀 Flor da Chuva";
        explicacao = "Você sente o mundo profundamente. Sua lágrima é poesia, e seu silêncio é música pra quem sabe escutar.";
      } else if (tipo === "paixao") {
        flor = "🌹 Flor Ardente";
        explicacao = "Você ama com coragem, se entrega com força. Seu coração pulsa mesmo quando dói.";
      } else {
        flor = "🌼 Flor da Alma Forte";
        explicacao = "Você permanece mesmo nas tempestades. Cresce em silêncio e segue com ternura.";
      }

      resultado.innerHTML = `<h3>${flor}</h3><p>${explicacao}</p>`;
      resultado.scrollIntoView({ behavior: "smooth" });
    });
  }
});
