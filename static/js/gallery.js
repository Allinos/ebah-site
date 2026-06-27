const galleryImages = [
  {
    src: 'img/u/projects/interior/saved_resource.png',
    title: 'Interior Harmony',
    caption: 'Contemporary interior design with warm wooden textures and soft lighting.'
  },
  {
    src: 'img/u/projects/exterior/saved_resource.jpg',
    title: 'Exterior Facade',
    caption: 'A modern exterior facade with clean lines and balanced proportions.'
  },
  {
    src: 'img/u/projects/art/art1_mgwg.png',
    title: 'Abstract Art',
    caption: 'Dynamic strokes and contrasting colors for a bold visual statement.'
  },
  {
    src: 'img/u/projects/interior/saved_resource(1).png',
    title: 'Lounge Ambience',
    caption: 'Minimal lounge area designed for comfort and refined elegance.'
  },
  {
    src: 'img/u/projects/exterior/saved_resource(5).jpg',
    title: 'Entry Landscape',
    caption: 'Inviting entryway with architectural landscaping and striking geometry.'
  },
  {
    src: 'img/u/projects/art/art9_ervg.png',
    title: 'Crafted Expression',
    caption: 'A fine art composition that celebrates form and texture.'
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderGallery() {
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;
  const items = shuffleArray([...galleryImages]);

  grid.innerHTML = items.map(item => {
    const caption = `${item.title}<br>${item.caption}`;

    return `
      <article class="gallery-item">
        <a href="${item.src}" data-fancybox="gallery" data-caption="${caption}">
          <img src="${item.src}" alt="${item.title}">
        </a>
        <div class="gallery-item__label">
          <h3 class="gallery-item__title">${item.title}</h3>
          <p class="gallery-item__caption">${item.caption}</p>
        </div>
      </article>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderGallery);
