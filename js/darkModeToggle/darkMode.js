const darkM = document.getElementById('darkTheme');

if (darkM) {
  darkM.addEventListener('click', function() {
    const linkKey = 'myLink';
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    newLink.href = 'css/darkModeCss/darkTheme.css';

    // Check local storage for the link key
    const isDarkMode = localStorage.getItem(linkKey) === 'true';

    // If dark mode is enabled, remove the new link and add the old link
    if (isDarkMode) {
      const oldLink = document.querySelector('link[href="css/darkModeCss/darkTheme.css"]');
      if (oldLink) {
        oldLink.remove();
      }

      const defaultLink = document.createElement('link');
      defaultLink.rel = 'stylesheet';
      defaultLink.href = 'css/Skills.css';
      document.head.appendChild(defaultLink);

      // Set the link key to false to disable dark mode
      localStorage.setItem(linkKey, 'false');
    } else {
      // If dark mode is disabled, remove the old link and add the new link
      const oldLink = document.querySelector('link[href="css/Skills.css"]');
      if (oldLink) {
        oldLink.remove();
      }

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
    newLink.href = 'css/darkModeCss/darkTheme.css';
    document.head.appendChild(newLink);
  }
}