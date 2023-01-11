const cards = document.querySelectorAll(".flip-card");
let foundMatch = 0;

let flipped = false;
let locked = false;
let firstCard, secondCard;

function flipCard() {
  if (locked) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!flipped) {
    // First Click
    flipped = true;
    firstCard = this;

    return;
  }

  // Second Click
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.pokemon === secondCard.dataset.pokemon;
  isMatch ? removeCards() : unflipCards();
}

function removeCards() {
  setTimeout(() => {
    firstCard.style.visibility = "hidden";
    secondCard.style.visibility = "hidden";
    resetBoard();
    foundMatch = foundMatch + 2;
    if (foundMatch === 12) {
      setTimeout(location.reload.bind(location), 1500);
    }
  }, 800);
}

function unflipCards() {
  locked = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 600);
}

function resetBoard() {
  flipped = false;
  locked = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
