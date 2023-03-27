const darkM = document.getElementById('darkTheme');

if (darkM) {
darkM.addEventListener('click', function() {
const linkKey = 'myLink';
const newLink1 = document.createElement('link');
newLink1.rel = 'stylesheet';
newLink1.href = 'css/darkModeCss/darkModeSchedule.css';

const newLink2 = document.createElement('link');
newLink2.rel = 'stylesheet';
newLink2.href = 'css/darkModeCss/darkTheme.css';

const newLink3 = document.createElement('link');
newLink3.rel = 'stylesheet';
newLink3.href = 'css/darkModeCss/darkModeDays.css';

// Check local storage for the link key
const isDarkMode = localStorage.getItem(linkKey) === 'true';

// If dark mode is enabled, remove the new links and add the old links
if (isDarkMode) {
  const oldLink1 = document.querySelector('link[href="css/darkModeCss/darkModeSchedule.css"]');
  if (oldLink1) {
    oldLink1.remove();
  }

  const oldLink2 = document.querySelector('link[href="css/darkModeCss/darkTheme.css"]');
  if (oldLink2) {
    oldLink2.remove();
  }

  const oldLink3 = document.querySelector('link[href="css/darkModeCss/darkModeDays.css"]');
  if (oldLink3) {
    oldLink3.remove();
  }

  const defaultLink1 = document.createElement('link');
  defaultLink1.rel = 'stylesheet';
  defaultLink1.href = 'css/Schedule.css';
  document.head.appendChild(defaultLink1);

  const defaultLink2 = document.createElement('link');
  defaultLink2.rel = 'stylesheet';
  defaultLink2.href = 'css/Skills.css';
  document.head.appendChild(defaultLink2);

  const defaultLink3 = document.createElement('link');
  defaultLink3.rel = 'stylesheet';
  defaultLink3.href = 'css/days.css';
  document.head.appendChild(defaultLink3);

  // Set the link key to false to disable dark mode
  localStorage.setItem(linkKey, 'false');
} else {
  // If dark mode is disabled, remove the old links and add the new links
  const oldLink1 = document.querySelector('link[href="css/Schedule.css"]');
  if (oldLink1) {
    oldLink1.remove();
  }

  const oldLink2 = document.querySelector('link[href="css/Skills.css"]');
  if (oldLink2) {
    oldLink2.remove();
  }

  const oldLink3 = document.querySelector('link[href="css/days.css"]');
  if (oldLink3) {
    oldLink3.remove();
  }

  document.head.appendChild(newLink1);
  document.head.appendChild(newLink2);
  document.head.appendChild(newLink3);

  // Set the link key to true to enable dark mode
  localStorage.setItem(linkKey, 'true');
}
});

// Check local storage on page load and toggle the link elements accordingly
const linkKey = 'myLink';
const isDarkMode = localStorage.getItem(linkKey) === 'true';
if (isDarkMode) {
const newLink1 = document.createElement('link');
newLink1.rel = 'stylesheet';
newLink1.href = 'css/darkModeCss/darkModeSchedule.css';
document.head.appendChild(newLink1);

const newLink2 = document.createElement('link');
newLink2.rel = 'stylesheet';
newLink2.href = 'css/darkModeCss/darkTheme.css';
document.head.appendChild(newLink2);

const newLink3 = document.createElement('link');
newLink3.rel = 'stylesheet';
newLink3.href = 'css/darkModeCss/darkModeDays.css';
document.head.appendChild(newLink3);
}
}