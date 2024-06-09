let messageIndex = 0;

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

function changeMessage() {
  const messages = [
    "Hola 👉👈",
    "Alta vergüencita pero...",
    "🌟Feliz año nuevo🌟",
    "Sos una persona increíble para mí :3",
    "Me das alegría cada día desde que te conocí",
    "Me alegro mucho de haberte conocido, sos lo mejor del 2023",
    "Cada día qué jugue con vos fueron los mejores :3",
    "Perdóname también por haber sido un mogolik y tóxiquito del orto UnU",
    "Soy bien nulo pero lo qué siento por vos es puro cómo la falopa que dejo sin nariz a voldemort",
    "😛",
    "Gracias por todo lo que me ayudaste e hiciste, significas mucho para mí 💗",
    "Me aguantaste un montón, ojalá pueda devolverte lo mismo y ser mejor persona para vos",
    "Ya no sé cómo seguir demostrandote 😖",
    "Pero te quiero mucho reina ❤️",
    "Pero mucho bastante :3",
    "Bueno ahora si...",
    "Te dejo algo más también :3",
    "igualmente es mucho ¿no?",
    "La vida es una ya fue 😛",
    "Ahora sí, te dejo con lo último"
  ];

  const messageElement = document.getElementById('message');
  const messageButton = document.querySelector('.boton');
  const audioButton = document.querySelector('.boton-audio');
  const imagenElement = document.getElementById('imagen');

  const progressBar = document.getElementById('progreso');
  const progressValue = ((messageIndex + 1) / messages.length) * 100; 
  progressBar.value = progressValue;

  messageElement.innerHTML = messages[messageIndex];

  if (messageIndex === messages.length - 1) {
    messageButton.style.display = 'none';
    audioButton.style.display = 'inline-block';
    messageElement.innerHTML = "Te dedico este temón (clic)";
    preloadImage('https://c.tenor.com/tDpqZQe2SuUAAAAC/tenor.gif'); 
    imagenElement.src = 'https://c.tenor.com/tDpqZQe2SuUAAAAC/tenor.gif';
  }

  messageIndex = (messageIndex + 1) % messages.length;
}

const emojis = ['🤓', '', '', '', '']; 

function reproducirAudio() {
  const audio = document.getElementById('Musica');
  audio.play();
  isMusicPlaying = true;
  intervaloCorazones = setInterval(crearCorazon, 200); 
}

function crearCorazon() {
  const emoji = document.createElement('div');
  const selectedEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.innerHTML = selectedEmoji; 
  emoji.className = 'emoji-lluvia';
  emoji.style.left = Math.random() * window.innerWidth + 'px';
  document.querySelector('.lluvia-corazones').appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 4000);
}

/*Esta parte si qué me gusto, estuvo interesante hacerla :v */
/*Espero qué te haya gustado :3 */ 