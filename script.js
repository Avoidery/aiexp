// Very small, easy-to-read DOM implementation
const squares = document.querySelectorAll('.square');
let active = -1;

function showAllStand() {
  squares.forEach(s => {
    const img = s.firstElementChild;
    img.style.width = '120px'; // Downsize images to 120px
    img.style.height = '120px';
    img.src = 'stand.jpg';
  });
}

function pickRandomSquare() {
  active = Math.floor(Math.random() * squares.length);
}

function startCooldown() {
  squares.forEach(square => square.classList.add('cooldown'));
  setTimeout(endCooldown, 2000);
}

function endCooldown() {
  showAllStand();
  pickRandomSquare();
  squares.forEach(square => square.classList.remove('cooldown'));
}

// click to guess
squares.forEach((s, i) => {
  s.onclick = () => {
    if (s.classList.contains('cooldown')) return; // Ignore clicks during cooldown

    s.firstElementChild.src = (i === active) ? 'jump.jpg' : 'rest.jpg';

    startCooldown();
  };
});

showAllStand();
pickRandomSquare();
