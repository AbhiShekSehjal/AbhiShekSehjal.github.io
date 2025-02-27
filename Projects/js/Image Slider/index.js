let slideIndex = 0;

        function showSlide(index) {
            let slides = document.querySelectorAll('.slider img');
            if (index >= slides.length) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex = index;
            }

            let slideWidth = slides[0].clientWidth;
            let slider = document.querySelector('.slider');
            slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        }

        function moveSlide(step) {
            showSlide(slideIndex + step);
        }

        
        showSlide(slideIndex);

        
        setInterval(() => {
            moveSlide(1);
        }, 3000);