// HEADER
const classes = {
  pinned: 'header__pin',
  unpinned: 'header__unpin',
};

document.addEventListener('scroll', headerHandler);
let lastKnownScrollY = 0;
let currentY = window.pageYOffset;

function headerHandler(e) {
  const header = document.querySelector('.header');
  currentY = window.pageYOffset;

  if (currentY === 0) {
    header.classList.remove(classes.pinned);
    header.classList.remove(classes.unpinned);
  } else if (currentY > lastKnownScrollY) {
    header.classList.remove(classes.pinned);
    header.classList.add(classes.unpinned);
  } else if (currentY < lastKnownScrollY) {
    header.classList.remove(classes.unpinned);
    header.classList.add(classes.pinned);
  }

  lastKnownScrollY = currentY;
}

// Removing scroll possibility when menu is open
document.querySelector('#menuToggle').addEventListener('change', function (e) {
  const check = document.querySelector('#menuToggle');
  const html = document.querySelector('html');

  if (check.checked) {
    html.style.overflow = 'hidden';
  } else {
    html.style.overflow = 'visible';
  }
});
