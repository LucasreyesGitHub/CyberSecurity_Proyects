let lastClick = 0;
const cooldown = 2000;

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", (e) => {
    const now = Date.now();
    if (now - lastClick < cooldown) {
      e.preventDefault();
      alert("Too many requests. Please wait.");
    }
    lastClick = now;
  });
});
