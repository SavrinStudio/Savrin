document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Fermer les autres
      cards.forEach(c => {
        if (c !== card) c.classList.remove('open');
      });
      // Toggle sur celle qu’on clique
      card.classList.toggle('open');
    });
  });
});
