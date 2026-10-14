// Base de datos de información para cada materia
const subjectData = {
    "programacion": {
        title: "Programación (4to Año)",
        category: "Fundamentos",
        description: "Aprenderás las bases de la lógica computacional, algoritmos y estructuras de control. Te iniciarás en lenguajes de programación estructurada y orientada a objetos, desarrollando tus primeras aplicaciones y resolviendo problemas mediante código eficiente."
    },
    "eie": {
        title: "EIE (Espacio de Investigación y Experimentación)",
        category: "Robótica y Práctica",
        description: "Espacio enfocado en el desarrollo de proyectos tecnológicos integrales. Aquí combinarás la teoría con la práctica mediante prototipado electrónico, uso de microcontroladores (como Arduino), sensores y actuadores para dar solución a problemas del mundo real."
    },
    "desarrollo-web": {
        title: "Desarrollo Web (5to Año)",
        category: "Tecnologías Frontend y Backend",
        description: "Dominarás la creación de sitios y aplicaciones web modernas. Trabajarás con HTML5, CSS3 avanzado y JavaScript interactivo, además de frameworks y buenas prácticas de diseño responsivo y experiencia de usuario (UX/UI)."
    },
    "ia": {
        title: "Inteligencia Artificial (6to Año)",
        category: "Tecnologías Avanzadas",
        description: "Explorarás los conceptos fundamentales del aprendizaje automático (Machine Learning), procesamiento de datos y redes neuronales. Aprenderás a integrar modelos de IA en aplicaciones prácticas para automatizar tareas y crear sistemas inteligentes."
    },
    "domotica": {
        title: "Domótica (6to Año)",
        category: "Automatización y Robótica",
        description: "Te especializarás en la automatización de viviendas y edificios inteligentes. Diseñarás sistemas interconectados de control de iluminación, seguridad, climatización y electrodomésticos mediante interfaces móviles y redes de sensores IoT."
    }
};

// Referencias a elementos del DOM
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const infoButtons = document.querySelectorAll('.info-btn');
const closeButtons = document.querySelectorAll('.close-modal, .close-modal-btn');

// Función para abrir el modal con la información correspondiente
function openModal(subjectKey) {
    const data = subjectData[subjectKey];
    if (data) {
        modalTitle.textContent = data.title;
        modalCategory.textContent = data.category;
        modalDescription.textContent = data.description;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll de fondo
    }
}

// Función para cerrar el modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event Listeners para los botones de interrogación
infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const subject = button.getAttribute('data-subject');
        openModal(subject);
    });
});

// Event Listeners para cerrar el modal
closeButtons.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

// Cerrar al hacer clic fuera del contenido del modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Cerrar con la tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});