document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do carrossel
    const carouselWrapper = document.getElementById('carouselWrapper');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0; // Índice do item atualmente visível
    const totalItems = carouselItems.length; // Número total de itens no carrossel

    /**
     * Atualiza a posição do carrossel para mostrar o item atual.
     * @param {number} index O índice do item a ser exibido.
     */
    function updateCarousel() {
        // Calcula o deslocamento necessário para mostrar o item atual
        // O `offsetWidth` do primeiro item é usado para determinar a largura de cada slide.
        // Isso garante que o carrossel funcione corretamente mesmo com diferentes tamanhos de itens.
        const itemWidth = carouselItems[0].offsetWidth;
        carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    /**
     * Avança para o próximo item no carrossel.
     */
    function showNext() {
        currentIndex = (currentIndex + 1) % totalItems; // Avança para o próximo item, voltando ao início se chegar ao fim
        updateCarousel();
    }

    /**
     * Volta para o item anterior no carrossel.
     */
    function showPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Volta para o item anterior, indo para o fim se chegar ao início
        updateCarousel();
    }

    // Adiciona ouvintes de evento aos botões de navegação
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Adiciona um ouvinte de evento para redimensionamento da janela
    // Isso garante que o carrossel se ajuste se a largura da tela mudar
    window.addEventListener('resize', updateCarousel);

    // Inicializa o carrossel mostrando o primeiro item
    updateCarousel();
});
