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

// click to guess
squares.forEach((s, i) => {
  s.onclick = () => {
    if (s.classList.contains('cooldown')) return; // Ignore clicks during cooldown

    if (i === active) {
      const img = s.firstElementChild;
      img.src = 'jump.jpg'; // Correct guess,
    } else {
      const img = s.firstElementChild;
      img.src = 'rest.jpg'; // Wrong guess
    }

    squares.forEach(square => square.classList.add('cooldown')); // Add cooldown class

    setTimeout(() => {
      showAllStand();
      pickRandomSquare();
      squares.forEach(square => square.classList.remove('cooldown')); // Remove cooldown class
    }, 2000);
  };
});

showAllStand();
pickRandomSquare();
