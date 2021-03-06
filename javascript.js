let memory_values = [];  // Empty variables and my array
let cardsImage = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
let tiles_flipped = [];

const board = document.querySelector('.memory-board');


function shuffle(a) {    // This function takes the cardsImage and return a random image.
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

cardsImage = shuffle(cardsImage);


const boardDiv = document.querySelector('.memory-board'); // This function will generate all the cards in the board.

var arrayDiv = new Array();
for (var i = 0; i <cardsImage.length; i++) {
  arrayDiv[i] = document.createElement('div');
  arrayDiv[i].className = 'cards';
  arrayDiv[i].dataset.id=cardsImage[i];
  arrayDiv[i].innerHTML = `<span class="hidden" data-id="${cardsImage[i]}"></span>`;
  arrayDiv[i].childNodes[0].style.backgroundImage = `url('images/${cardsImage[i]}.jpg')`;

  document.querySelector(".memory-board").appendChild(arrayDiv[i]);
}


const Flipcards = document.querySelectorAll('.cards'); // Here´s where I add a class to all the cards to make them flip.





Array.from(Flipcards).forEach( (card) =>{
  card.addEventListener('click', () => {
    card.classList.add('card-flipped');  // here I add a class so that the clicked card can´t be clicked when it's flipped
    memory_values.push(card);

    if (memory_values.length === 2)   {        // here I set so you only can press two cards at time
      const frame = document.querySelector('.memory-board');
      frame.classList.add('hold');



      if (memory_values.length===2){
        if (memory_values[0].dataset.id===memory_values[1].dataset.id) {
          tiles_flipped++;
          memory_values= [];
          frame.classList.remove('hold');
        }
        else  {


          setTimeout(function () {
            memory_values[0].classList.remove('clicked');       // here I add a class so that the matched cards can´t be clicked
            memory_values[1].classList.remove('clicked');
            memory_values[0].classList.remove('card-flipped');        // if the cards don´t match the cards flip back after 1.5 sec.
            memory_values[1].classList.remove('card-flipped');
            frame.classList.remove('hold');

            memory_values= [];
          }, 1500)
        }


        if (tiles_flipped===8) {

          setTimeout(function(){
            alert('Congrats you win, press the Refresh button to play again');
            tiles_flipped=0;

          }, 1500)
        }

      }

    }
  })
});



const Refresh = document.querySelector('.reset'); // My reset function, when you click on the button it mixes the images.


Refresh.addEventListener('click', (a) => {

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  cardsImage = shuffle(cardsImage);

  tiles_flipped=0;
  for (var i = 0; i <cardsImage.length; i++) {
    arrayDiv[i].classList.remove('card-flipped');
    arrayDiv[i].dataset.id=cardsImage[i];
    arrayDiv[i].innerHTML = `<span class="hidden" data-id="${cardsImage[i]}"></span>`;
    arrayDiv[i].childNodes[0].style.backgroundImage = `url('images/${cardsImage[i]}.jpg')`;

  }
})
