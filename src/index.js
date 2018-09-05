import Game from './Game.js';

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
const root = document.getElementById('root');

root.appendChild(canvas);

const game = new Game(canvas, ctx);

// window.addEventListener('resize', function(){
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });


//correct

