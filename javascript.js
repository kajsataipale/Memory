let memory_values = [];  // Empty variables and my array
let cardsImage = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
let memory_tile_id = [];
let tiles_flipped = 0;
let output = '';
let cards = [];
const board = document.querySelector('.memory-board');


function shuffle(a) {    // This function takes the memory_array and return a random letter.
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
        //
        arrayDiv[i].innerHTML = `<span class="hidden" data-id="${cardsImage[i]}"></span>`;
        arrayDiv[i].childNodes[0].style.backgroundImage = `url('images/${cardsImage[i]}.jpg')`;

         document.querySelector(".memory-board").appendChild(arrayDiv[i]);
   }


   const Flipcards = document.querySelectorAll('.cards');

Array.from(Flipcards).forEach( (Flipcards) =>{
   Flipcards.addEventListener('click', () => {

     Flipcards.classList.toggle('card-flipped');

   })

})
