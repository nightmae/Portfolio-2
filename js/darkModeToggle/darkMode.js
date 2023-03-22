// Define an array of image file names to update
const imageFileNames = [
  'aboutus.png',
  'kuca.png',
  'projects.webp',
  'icons8-contact-us-24.png',
  'category.png',
  'darkMode.png'
];

// Define the CSS file paths
const defaultCss = 'css/Skills.css';
const darkModeCss = 'css/darkModeCss/darkTheme.css';

// Create a function that will handle the click event
function handleClick(event) {
  // Get the current image source
  let src = event.target.getAttribute('src');

  // Check if the current source ends with "L"
  if (src.endsWith('L')) {
    // If it does, remove the "L" from the end of the source
    src = src.slice(0, -1);
  } else {
    // If it doesn't, add "L" to the end of the source
    src = src + 'L';
  }

  // Update the file name with "L" added to the end
  const fileName = src.split('/').pop();
  const isImageFile = imageFileNames.includes(fileName);
  if (isImageFile) {
    const newFileName = `${fileName.split('.')[0]}L.${fileName.split('.')[1]}`;
    const newSrc = `images/${newFileName}`;
    event.target.setAttribute('src', newSrc);
  }
}

// Add a click event listener to each image
const imageElements = document.querySelectorAll('img');
imageElements.forEach((image) => {
  image.addEventListener('click', handleClick);
});

// Find the dark mode toggle button
const darkM = document.getElementById('darkTheme');

if (darkM) {
  darkM.addEventListener('click', function() {
    const linkKey = 'myLink';

    // Check local storage for the link key
    const isDarkMode = localStorage.getItem(linkKey) === 'true';

    // If dark mode is enabled, remove the new link and add the old link
    if (isDarkMode) {
      const oldLink = document.querySelector(`link[href="${darkModeCss}"]`);
      if (oldLink) {
        oldLink.remove();
      }

      const defaultLink = document.createElement('link');
      defaultLink.rel = 'stylesheet';
      defaultLink.href = defaultCss;
      document.head.appendChild(defaultLink);

      // Set the link key to false to disable dark mode
      localStorage.setItem(linkKey, 'false');
    } else {
      // If dark mode is disabled, remove the old link and add the new link
      const oldLink = document.querySelector(`link[href="${defaultCss}"]`);
      if (oldLink) {
        oldLink.remove();
      }

      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = darkModeCss;
      document.head.appendChild(newLink);

      // Set the link key to true to enable dark mode
      localStorage.setItem(linkKey, 'true');
    }
  });

  // Check local storage on page load and toggle the link element accordingly
  const linkKey = 'myLink';
  const isDarkMode = localStorage.getItem(linkKey) === 'true';
  if (isDarkMode) {
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = darkModeCss;
    document.head.appendChild(newLink);
  }
}