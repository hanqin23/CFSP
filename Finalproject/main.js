const photosContainer = document.querySelector('.photos-container');
const sortSelect = document.querySelector('#sort-select');
const numPhotos = 100; 
let photos = [];

// container
for (let i = 1; i <= numPhotos; i++) {
  const img = document.createElement('img');
  img.src = `img/photo (${i}).jpg`;

  // indoor/outdoor 
  if (i >= 1 && i <= 33) {
    img.dataset.category = 'indoor';
  } else {
    img.dataset.category = 'outdoor';
  }

 
   img.addEventListener('mouseover', () => { 
      img.style.transform = 'scale(2)';
      img.style.animationPlayState = 'paused';
    });


  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.animationPlayState = 'running';
  });

  photos.push(img);
  photosContainer.appendChild(img);
}

// sort 
sortSelect.addEventListener('change', () => {
  const selectedValue = sortSelect.value;
  if (selectedValue === 'all') {
    photos.forEach(img => {
      img.style.display = 'block';
    });
  } else {
    photos.forEach(img => {
      if (img.dataset.category === selectedValue) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }
});