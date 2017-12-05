let memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H']; // Empty variables and my array
let memory_values = [];
let memory_tile_id = [];
let tiles_flipped = 0;
let output = '';

function shuffle(a) {    // This function takes the memory_array and return a random letter.
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

memory_array = shuffle(memory_array);

console.log(memory_array);

var boardDiv = document.querySelector('.memory-board'); // This function will generate all the cards in the board.

function newBoard() {
  for (var i = 0; i < 16; i++) {
 tiles_flipped = 0;
 var output = '';
   newBoard= document.createElement('div');
   newBoard.className = 'cards';
 output += '<div id="tile_'+ index +'" onclick="FlipTile(this,\''+ memory_array_value +'\')"></div>';
 };
 document.querySelector('.memory-board');



}
console.log(newBoard);
