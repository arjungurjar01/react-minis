import { useEffect, useRef, useState, useCallback } from "react";
import "./Carousel.css";

function Carousel({ children, autoPlayInterval = 2000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselBoxRef = useRef(null);
    const intervalRef = useRef(0);
    const isTransitioning = useRef(false);

    const getSlidesInfo = useCallback(() => {
        const carouselBox = carouselBoxRef.current;
        if (!carouselBox) return { slides: [], count: 0 };
        const slides = Array.from(carouselBox.children);
        return { slides, count: slides.length };
    }, []);

    const updateSlides = useCallback((newIndex, direction) => {
        const { slides } = getSlidesInfo();
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[newIndex];

        // Remove all transition classes first
        slides.forEach(slide => {
            slide.classList.remove('show', 'hide', 'show-previous');
        });

        if (direction === 'next') {
            currentSlide.classList.add('hide');
            nextSlide.classList.add('show');
        } else {
            currentSlide.classList.add('hide');
            nextSlide.classList.add('show-previous');
        }

        // Update active states
        slides.forEach((slide, index) => {
            slide.setAttribute('data-active', index === newIndex);
        });
    }, [currentIndex, getSlidesInfo]);

    const startSlider = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            if (!isTransitioning.current) {
                const { count } = getSlidesInfo();
                const newIndex = (currentIndex + 1) % count;
                isTransitioning.current = true;
                updateSlides(newIndex, 'next');
                setTimeout(() => {
                    setCurrentIndex(newIndex);
                    isTransitioning.current = false;
                }, 1000);
            }
        }, autoPlayInterval);
    }, [currentIndex, getSlidesInfo, updateSlides, autoPlayInterval]);


    useEffect(() => {
        const { slides } = getSlidesInfo();
        if (slides.length > 0) {
            slides[0].setAttribute('data-active', true);
            startSlider();
        }
        return () => clearInterval(intervalRef.current);
    }, [getSlidesInfo, startSlider]);


    const handleNavigation = useCallback((direction) => {
        if (isTransitioning.current) return;
        
        clearInterval(intervalRef.current);
        const { count } = getSlidesInfo();
        
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % count
            : (currentIndex - 1 + count) % count;

        isTransitioning.current = true;
        updateSlides(newIndex, direction);
        
        setTimeout(() => {
            setCurrentIndex(newIndex);
            isTransitioning.current = false;
            startSlider();
        }, 1000);
    }, [currentIndex, getSlidesInfo, updateSlides, startSlider]);

    const handleStepperClick = useCallback((newIndex) => {
        return () => {
            if (isTransitioning.current || newIndex === currentIndex) return;
            
            clearInterval(intervalRef.current);
            isTransitioning.current = true;
            
            const direction = newIndex > currentIndex ? 'next' : 'prev';
            updateSlides(newIndex, direction);
            
            setTimeout(() => {
                setCurrentIndex(newIndex);
                isTransitioning.current = false;
                startSlider();
            }, 1000);
        };
    }, [currentIndex, updateSlides, startSlider]);
    

    const handleMouseEnter = useCallback(() => {
        clearInterval(intervalRef.current);
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (!isTransitioning.current) {
            startSlider();
        }
    }, [startSlider]);

    return (
        <div className="carousel">
            <div 
                ref={carouselBoxRef}
                className="carousel-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>
            <div className="carousel-controls">
                
                <button 
                    className="carousel-button prev"
                    onClick={() => handleNavigation('prev')}
                    disabled={isTransitioning.current}
                >
                    Previous
                </button>
                <button 
                    className="carousel-button next"
                    onClick={() => handleNavigation('next')}
                    disabled={isTransitioning.current}
                >
                    Next
                </button>
               
                </div>

                {/* carousel dots */}
                <div className="carousel-dots">
                    {Array.from(children).map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={handleStepperClick(index)}
                            disabled={isTransitioning.current}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
               
        </div>
    );
}

export default Carousel;

