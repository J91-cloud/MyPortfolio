// cardAnimation.ts (or inside your component file)
export const handleCardAnimation = () => {
  const cards = document.querySelectorAll(".card");
  let currentIndex = 0;
  let isAnimating = false;

  // Set initial stacking order
  cards.forEach((card, index) => {
    card.style.zIndex = (cards.length - index).toString();
  });

  document.addEventListener("wheel", (event) => {
    if (isAnimating) return;

    if (event.deltaY > 0 && currentIndex < cards.length - 1) {
      // Scroll down
      isAnimating = true;
      let currentCard = cards[currentIndex];
      currentCard.style.transform = "translateY(-120%) scale(0.9)";
      currentCard.style.opacity = "0";

      setTimeout(() => {
        currentCard.style.zIndex = "1"; // Send it to the back
        currentIndex++;
        isAnimating = false;
      }, 600);
    } else if (event.deltaY < 0 && currentIndex > 0) {
      // Scroll up
      isAnimating = true;
      currentIndex--; // Move index down first
      let previousCard = cards[currentIndex];

      previousCard.style.zIndex = cards.length.toString(); // Bring it to the front
      previousCard.style.transform = "translateY(0) scale(1)";
      previousCard.style.opacity = "1";

      // Reset all other cards behind it
      for (let i = currentIndex + 1; i < cards.length; i++) {
        cards[i].style.zIndex = (cards.length - i).toString(); // Restore stacking
      }

      setTimeout(() => {
        isAnimating = false;
      }, 600);
    }
  });
};
