const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
let currentImg = 0;

const prevButton = document.querySelector('.slider_prev');
const nextButton = document.querySelector('.slider_next');
const sliderImg = document.querySelector('.slider_img');

function nextSlide() {
	currentImg++;
	showImg(currentImg);
}

function prevSlide() {
	currentImg--;
	showImg(currentImg);
}

function showImg(index) {
	if (index === 0) {
		prevButton.style.display = 'none';
	}else {
		prevButton.style.display = 'block';
	}
	if (index === images.length - 1){
		nextButton.style.display = 'none';
	}else {
		nextButton.style.display = 'block';
	}
	sliderImg.src = `img/${images[index]}`
}
showImg(currentImg);
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
