const cartaTexto = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');
const cartaGerada = document.getElementById('carta-gerada');
const criarCarta = document.getElementById('criar-carta');
const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotationClass = ['rotateleft', 'rotateright'];
const inclinationClass = ['skewleft', 'skewright'];
const cLassesAll = [styleClass[Math.round(Math.random() * (styleClass.length - 1))], sizeClass[Math.round(Math.random() * (sizeClass.length - 1))], rotationClass[Math.round(Math.random() * (rotationClass.length - 1))], inclinationClass[Math.round(Math.random() * (inclinationClass.length - 1))]];

function createdLetter() {
  criarCarta.addEventListener('click', () => {
    const text = cartaTexto.value.split(' ');
    contador.innerText = text.length;
    cartaGerada.innerText = '';
    if (cartaTexto.value.length === 0 || !cartaTexto.value.trim()) {
      cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    }
    for (let i = 0; i < text.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = text[i];
      span.classList.add(cLassesAll[Math.round(Math.random() * (cLassesAll.length - 1))]);
      span.classList.add(cLassesAll[Math.round(Math.random() * (cLassesAll.length - 1))]);
      cartaGerada.appendChild(span);
    }
  });
}
createdLetter();
