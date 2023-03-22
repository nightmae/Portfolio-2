const darkM = document.getElementById('darkTheme');

if (darkM) {
  darkM.addEventListener('click', function() {
    const linkKey = 'myLink';
    const newLink1 = document.createElement('link');
    newLink1.rel = 'stylesheet';
    newLink1.href = 'css/darkModeCss/darkModePortfolio.css';

    // Check local storage for the link key
    const isDarkMode = localStorage.getItem(linkKey) === 'true';

    // If dark mode is enabled, remove the new links and add the old links
    if (isDarkMode) {
      const oldLink1 = document.querySelector('link[href="css/darkModeCss/darkModePortfolio.css"]');
      if (oldLink1) {
        oldLink1.remove();
      }

      const defaultLink1 = document.createElement('link');
      defaultLink1.rel = 'stylesheet';
      defaultLink1.href = 'css/Portfolio.css';
      document.head.appendChild(defaultLink1);

      const defaultLink2 = document.createElement('link');
      defaultLink2.rel = 'stylesheet';
      defaultLink2.href = 'css/Skills.css';
      document.head.appendChild(defaultLink2);

      const portfolioJs = document.querySelector('script[src="js/Anders.js"]');
      if (portfolioJs) {
        portfolioJs.remove();
      }

      // Set the link key to false to disable dark mode
      localStorage.setItem(linkKey, 'false');
    } else {
      // If dark mode is disabled, remove the old links and add the new links
      const oldLink1 = document.querySelector('link[href="css/Portfolio.css"]');
      if (oldLink1) {
        oldLink1.remove();
      }
      document.head.appendChild(newLink1);

      const portfolioJs = document.querySelector('script[src="js/Anders.js"]');
      if (portfolioJs) {
        portfolioJs.remove();
      }

      // Set the link key to true to enable dark mode
      localStorage.setItem(linkKey, 'true');
    }
  });

  // Check local storage on page load and toggle the link elements and Portfolio.js accordingly
  const linkKey = 'myLink';
  const isDarkMode = localStorage.getItem(linkKey) === 'true';
  if (isDarkMode) {
    const newLink1 = document.createElement('link');
    newLink1.rel = 'stylesheet';
    newLink1.href = 'css/darkModeCss/darkModePortfolio.css';
    document.head.appendChild(newLink1);

    const portfolioJs = document.querySelector('script[src="js/Anders.js"]');
    if (portfolioJs) {
      portfolioJs.remove();
    }
  }
}