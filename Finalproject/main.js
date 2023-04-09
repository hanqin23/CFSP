// Get all images in the container
const images = document.querySelectorAll('.photos-container img');


// Add event listeners to each image
images.forEach(img => {
  // Add mouseover event listener
  img.addEventListener('mouseover', () => {
    // Increase image size
    img.style.transform = 'scale(2)';
    // Stop animation
    img.style.animationPlayState = 'paused';
  });
  
  // Add mouseout event listener
  img.addEventListener('mouseout', () => {
    // Decrease image size
    img.style.transform = 'scale(1)';
    // Resume animation
    img.style.animationPlayState = 'running';
  });
});

function setTransitionSpeed(speed) {
    const images = document.querySelectorAll('.photos-container img');
    images.forEach(img => {
      img.style.transitionDuration = `${speed}s`;
    });
  }