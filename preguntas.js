// --- LÓGICA DE PREGUNTAS FRECUENTES (FAQ) ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    
    questionBtn.addEventListener('click', () => {
        // Cierra los demás ítems abiertos (efecto acordeón exclusivo)
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Alterna el estado del ítem seleccionado
        item.classList.toggle('active');
    });
});