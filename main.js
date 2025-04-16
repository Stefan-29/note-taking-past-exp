const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateButtons();
}

// Function to update button states
function updateButtons() {
    prevButton.disabled = currentSlide === 0; // Disable Previous button on the first slide
    nextButton.disabled = currentSlide === slides.length - 1; // Disable Next button on the last slide

    // Hide Next button on slide 7 (last slide)
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'inline-block'; // Show Next button on other slides
    }

    // Hide Previous button on slide 1
    if (currentSlide === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'inline-block'; // Show Previous button on other slides
    }
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});

// Initialize the first slide
showSlide(currentSlide);