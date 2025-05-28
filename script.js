document.addEventListener('DOMContentLoaded', () => {
    
    const carouselWrapper = document.getElementById('carouselWrapper');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0; 
    const totalItems = carouselItems.length;

   
    function updateCarousel() {
       s.
        const itemWidth = carouselItems[0].offsetWidth;
        carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    Next() {
        currentIndex = (currentIndex + 1) % totalItems; 
        updateCarousel();
    }

    
    function showPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; 
        updateCarousel();
    }

    
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

   
    window.addEventListener('resize', updateCarousel);

    
    updateCarousel();
});
