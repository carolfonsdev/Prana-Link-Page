/**
 * Prana Studios — Hero Overlap Layout
 *
 * A imagem hero (1080×1920) tem ~69% de área em branco na parte inferior.
 * Este script puxa os cards para cima, sobrepondo essa área, mantendo
 * o layout responsivo a qualquer largura de tela.
 */

const OVERLAP_RATIO = 0.69;

const heroImg  = document.getElementById('hero-img');
const cardsArea = document.getElementById('cards-area');

function applyHeroOverlap() {
  const imgHeight = heroImg.offsetHeight;
  if (!imgHeight) return;

  const pullUp = Math.round(imgHeight * OVERLAP_RATIO);
  cardsArea.style.marginTop = `-${pullUp}px`;
}

/* Aplica imediatamente se a imagem já estiver em cache */
if (heroImg.complete) {
  applyHeroOverlap();
} else {
  heroImg.addEventListener('load', applyHeroOverlap);
}

/* Recalcula ao redimensionar a janela */
window.addEventListener('resize', applyHeroOverlap);