const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

const turnCard = card => {
  card.classList.toggle('turned');
  console.log("hellooo")
};



const playCards = card => {
  turnCard(card);

  const cardName = card.getAttribute('data-card-name');
  memoryGame.pickedCards.push(cardName);
  if (memoryGame.pickedCards.length == 2) {
    checkPair();
  };
};

const checkPair = () => {
  if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
      updateScore();
      console.log("je suis là");
      if (memoryGame.checkIfFinished()) {
        alert("you win!")
      }
      emptyPickedCards();
  } else {
    updateScore();
    setTimeout(() => { turnPickedCard();}, "1000");
  }
}


const updateScore = () => {
  var PairsClickedSpan = document.getElementById('pairs-clicked');
  var PairsGuessedSpan =  document.getElementById('pairs-guessed');

  PairsClickedSpan.textContent = memoryGame.pairsClicked;
  PairsGuessedSpan.textContent = memoryGame.pairsGuessed;
}

const turnPickedCard = () => {
  console.log("yoooooo");
  const numeroUno = Array.from(document.querySelectorAll(`[data-card-name="${memoryGame.pickedCards[0]}"]`)).find(x => x.className === 'card turned');
  const numeroDos = Array.from(document.querySelectorAll(`[data-card-name="${memoryGame.pickedCards[1]}"]`)).find(x => x.className === 'card turned');
 

 // document.querySelector(`[data-card-name="${memoryGame.pickedCards[0]}"]`) -> modifier pour ajouter turned class
  numeroUno.classList.toggle('turned');
  numeroDos.classList.toggle('turned');
  emptyPickedCards();
}


const emptyPickedCards = () => {
  memoryGame.pickedCards = [];
}

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      playCards(card);
    });
  });
});
