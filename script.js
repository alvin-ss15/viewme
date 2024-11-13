document.addEventListener('DOMContentLoaded', () => {
  const alphabetBox = document.querySelector('.alphabet-box');
  const gridView = document.getElementById('grid-view');
  const contentView = document.getElementById('content-view');
  const content = document.getElementById('content');
  const contentContainer = document.getElementById('content-container');
  const backButton = document.getElementById('back-button');
  const header = document.querySelector('header');

  // Generate buttons for A to Z
  for (let i = 0; i < 3; i++) { // Number of menu
    const letter = String.fromCharCode(65 + i); // Convert ASCII code to letter
    const letterLink = document.createElement('a');
    letterLink.classList.add('letter-link');
    letterLink.href = "#"; // No navigation
    letterLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      showContent(letter); // Show content for the letter
    });

    const letterBox = document.createElement('div');
    letterBox.classList.add('letter-box');
    letterBox.textContent = letter;

    letterLink.appendChild(letterBox);
    alphabetBox.appendChild(letterLink);
  }

  // Show content for the selected letter
  async function showContent(letter) {
    gridView.classList.add('hidden'); // Hide grid view
    contentView.classList.remove('hidden'); // Show content view
    header.classList.add('hidden'); // Hide the header

    // Clear previous content
    content.innerHTML = '';
    contentContainer.innerHTML = '';

    const contentLink = document.createElement('a');
    contentLink.textContent = `Go to ${letter}`;
    contentLink.classList.add('content-link');

    if (letter === 'A') {
      // Load page for "A"
      const iframe = document.createElement('iframe');
      iframe.src = 'https://alvin-ss15.github.io/simplependulum/';
      iframe.width = window.innerWidth;
      iframe.height = window.innerHeight;
      iframe.style.border = 'none';
      contentContainer.appendChild(iframe);
    } else if (letter === 'B') {
      // Load page for "B"
      const iframe = document.createElement('iframe');
      iframe.src = 'https://alvin-ss15.github.io/simpleinvertedpendulum/';
      iframe.width = window.innerWidth;
      iframe.height = window.innerHeight;
      iframe.style.border = 'none';
      contentContainer.appendChild(iframe);
    } else if (letter === 'C') {
      // Display text with animation on top of the iframe for "C"
      const contentText = document.createElement('div');
      contentText.id = 'content-text';
      contentText.textContent = `Have a nice day!`;
      contentText.classList.add('zoom-in'); // Add zoom-in animation
      contentContainer.appendChild(contentText);

      const iframe = document.createElement('iframe');
      iframe.src = "https://www.youtube.com/embed/GtL1huin9EE?autoplay=1&controls=0&disablekb=1";
      iframe.allow = "autoplay";
      iframe.width = window.innerWidth;
      iframe.height = window.innerHeight;
      iframe.style.border = 'none';
      contentContainer.appendChild(iframe);
    } else {
      contentLink.href = `https://example.com/${letter.toLowerCase()}`;
      contentLink.target = '_blank';
      content.appendChild(contentLink);
    }
  }

  // Back button to return to the alphabet grid
  backButton.addEventListener('click', () => {
    contentView.classList.add('hidden'); // Hide content view
    gridView.classList.remove('hidden'); // Show grid view
    header.classList.remove('hidden'); // Show the header
    contentContainer.innerHTML = ''; // Clear content container
  });
});
