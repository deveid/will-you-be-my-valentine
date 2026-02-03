const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️'; // you can use 💕 or 💖

  // Random position and size
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (16 + Math.random() * 24) + 'px';
  heart.style.color = '#ff2e63';

  // Random speed
  const duration = 3 + Math.random() * 3; // 3s to 6s
  heart.style.animationDuration = duration + 's';

  heartsContainer.appendChild(heart);

  // Remove after animation completes
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Create multiple hearts continuously
setInterval(createHeart, 300);
