let memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
let memory_values = [];
let memory_tile_id = [];
let tiles_flipped = 0;
let output = '';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

memory_array = shuffle(memory_array);
