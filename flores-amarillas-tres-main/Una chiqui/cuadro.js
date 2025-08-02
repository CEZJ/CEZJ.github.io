const recuadro = document.getElementById('recuadroFlotante');

let timeout;
recuadro.addEventListener('pointermove', (e) => {
  // Movimiento relativo al puntero
  recuadro.style.transform = `translate(${e.movementX * 0.5}px, ${e.movementY * 0.5}px)`;

  // Resetear después de 200ms sin movimiento
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    recuadro.style.transform = 'translate(0, 0)';
  }, 200);
});
