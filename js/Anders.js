document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const sidebarMenu = document.querySelector('#sidebarMenu');
  const sbLinks = document.querySelectorAll('.sbLink');
  
  const interval = Math.floor(Math.random() * 3000) + 2000; // generate a random interval between 2 and 5 seconds

  const darkColors = ['#1c1c1c', '#2b2b2b', '#363636', '#444444', '#555555'];
  const yellowColor = '#FFD700';

  function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 56); // generate a random value between 0 and 56
    const g = Math.floor(Math.random() * 56);
    const b = Math.floor(Math.random() * 56);
    return `rgb(${r},${g},${b})`;
  }
  
  function changeColor() {
    const color1 = getRandomDarkColor();
    const color2 = yellowColor;
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    header.style.backgroundImage = gradient;
    sidebarMenu.style.backgroundImage = gradient;
    body.style.backgroundImage = gradient;
    sbLinks.forEach(sbLink => sbLink.style.backgroundImage = gradient);
  }
  setInterval(changeColor, interval); // use the random interval to change the gradient
});


