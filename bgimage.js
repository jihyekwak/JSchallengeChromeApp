const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const bgImage = images[Math.floor(Math.random() * images.length)];

// const img = document.createElement("img");
// img.src = `images/${bgImage}`;
// document.body.appendChild(img);

document.body.style.backgroundImage = `url(images/${bgImage})`;