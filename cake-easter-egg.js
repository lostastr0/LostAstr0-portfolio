// cake-easter-egg.js

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const secretCake = document.getElementById('secret-cake');
  const cakeEgg = document.getElementById('cake-easter-egg');

  // Safety check: make sure both elements exist
  if (!secretCake || !cakeEgg) return;

  secretCake.addEventListener('click', () => {
    // Show pop-up
    cakeEgg.style.display = 'block';
    cakeEgg.classList.remove('fade-out');

    // After 4 seconds, start fading out
    setTimeout(() => {
      cakeEgg.classList.add('fade-out');

      // After fade duration (0.5s), hide it completely
      setTimeout(() => {
        cakeEgg.style.display = 'none';
      }, 500);
    }, 4000); // Keeps pop-up visible for 4 seconds before fading out
  });
});
