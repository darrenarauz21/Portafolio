function getGithubImageUrl(fileName) {
  return `https://raw.githubusercontent.com/darrenarauz21/Portafolio/main/images/${encodeURIComponent(fileName)}`;
}

const projects = [
  {
    title: "Diseño de CRUD Dinámico",
    description: "Interfaz para crear formularios reutilizables en React con validaciones dinámicas.",
    imageName: "CrudDinamico.png",
    techStack: "ReactJs, Material UI, MaterialTable"
  },
  {
    title: "Vista de Eventos en Caliente",
    description: "Visualización interactiva de eventos recientes en tiempo real con filtros por categoría.",
    imageName: "Eventos.png",
    techStack: "ReactJs, Material UI"
  },
  {
    title: "Selección de Vistas",
    description: "Diseño para cambiar entre múltiples módulos administrativos desde un solo menú.",
    imageName: "Seleccion de vistas.png",
    techStack: "ReactJs, Material UI"
  }
];

function createGalleryItem(project) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const imageUrl = getGithubImageUrl(project.imageName);

  item.innerHTML = `
    <div class="gallery-image loading">
      <img src="${imageUrl}" alt="${project.title}" onload="handleImageLoad(this)" onerror="handleImageError(this)" style="display: none;" />
      <div class="image-overlay">
        <span class="tech-stack">${project.techStack || 'Desarrollo Web'}</span>
      </div>
    </div>
    <div class="gallery-content">
      <h3 class="gallery-item-title">${project.title}</h3>
      <p class="gallery-item-description">${project.description}</p>
      ${
        project.techStack
          ? `<div class="tech-tags">${project.techStack.split(', ').map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>`
          : ''
      }
    </div>
  `;

  return item;
}

function handleImageLoad(img) {
  const container = img.closest('.gallery-image');
  if (container) {
    container.classList.remove('loading');
    img.style.display = 'block';
  }
}

function handleImageError(img) {
  const container = img.closest('.gallery-image');
  if (container) {
    container.classList.remove('loading');
    container.classList.add('error');
    img.style.display = 'none';
  }
}

const heroSection = document.getElementById('hero-section');
const gallerySection = document.getElementById('gallery-section');
const galleryGrid = document.getElementById('gallery-grid');
const showGalleryBtn = document.getElementById('show-gallery');
const backToHeroBtn = document.getElementById('back-to-hero');

showGalleryBtn.addEventListener('click', () => {
  heroSection.style.display = 'none';
  gallerySection.classList.add('active');
  showGalleryBtn.setAttribute('aria-expanded', 'true');
});

backToHeroBtn.addEventListener('click', () => {
  gallerySection.classList.remove('active');
  heroSection.style.display = 'flex';
  showGalleryBtn.setAttribute('aria-expanded', 'false');
  showGalleryBtn.focus();
});

function loadGallery() {
  galleryGrid.innerHTML = '';
  projects.forEach(project => {
    const item = createGalleryItem(project);
    galleryGrid.appendChild(item);
  });
}

window.addEventListener('DOMContentLoaded', loadGallery);
//
function createGalleryItem(project) {
  const item = document.createElement('div');
  item.className = 'gallery-item';

  const imageUrl = getGithubImageUrl(project.imageName);

  item.innerHTML = `
    <div class="gallery-image loading">
      <img src="${imageUrl}" alt="${project.title}" onload="handleImageLoad(this)" onerror="handleImageError(this)" style="display: none;" />
      <div class="image-overlay">
        <span class="tech-stack">${project.techStack || 'Desarrollo Web'}</span>
        <button class="expand-btn" aria-label="Expandir imagen" data-image="${imageUrl}">🔍</button>
      </div>
    </div>
    <div class="gallery-content">
      <h3 class="gallery-item-title">${project.title}</h3>
      <p class="gallery-item-description">${project.description}</p>
      ${
        project.techStack
          ? `<div class="tech-tags">${project.techStack.split(', ').map(tech => `<span class="tech-tag">${tech}</span>`).join('')}`
          : ''
      }
    </div>
  `;

  return item;
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const modalClose = document.getElementById("modal-close");

  // Suponiendo que las imágenes están dentro del #gallery-grid
  document.getElementById("gallery-grid").addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "IMG") {
      modalImg.src = target.src;
      modal.classList.add("show");
    }
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
    modalImg.src = ""; // Limpia imagen
  });

  // Cierra al hacer clic fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalImg.src = "";
    }
  });
});
