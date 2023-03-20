const headerovi = document.querySelector('.Headerovi');
const content = document.querySelector('.content');

if (headerovi && content) {
  content.style.visibility = 'hidden'; // Hide the content initially

  headerovi.addEventListener('click', function() {
    // Get the width and height of the screen
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Set the styles for the content element to cover the screen
    content.style.position = 'absolute';
    content.style.top = 0;
    content.style.left = 0;
    content.style.width = `${width}px`;
    content.style.height = `${height}px`;
    content.style.backgroundColor = 'white';

    // Set the animation styles for the content element
    content.style.animation = 'fadeContent 1s ease-in-out forwards';

    // Hide the Headerovi element
    headerovi.style.display = 'none';

    // Show the content element
    content.style.visibility = 'visible';
  });

  // Define the keyframe animation for the content element
  const fadeContent = `
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  // Add the keyframe animation to the stylesheet
  const styleSheet = document.styleSheets[document.styleSheets.length - 1];
  styleSheet.insertRule(`@keyframes fadeContent { ${fadeContent} }`, styleSheet.cssRules.length);
} else {
  console.error('Could not find either .Headerovi or .content element');
}
