let images = {
    img_1: './images/9ae13aef283383d738743dd32f86b657.jpg',
    img_2: './images/06426b1ebab00c9e09f7db30024702de.jpg',
    img_3: './images/25557.jpg',
    img_4: './images/ColorBurst3.jpg',
    img_5: './images/spiral-shapes-abstract-4k_1551646253.jpg'
};
let imagesCounter = 0;


setInterval(() => {
    if (imagesCounter === 5) {
        imagesCounter = 0
    } else {
        document.querySelector('.image').style.backgroundImage = `url(${images[`img_${++imagesCounter}`]})`
    }
}, 2000)