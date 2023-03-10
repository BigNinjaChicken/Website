document.addEventListener('DOMContentLoaded', function() {
    // define an array of image names
    const images = ['Dino.jpg', 'Spaceship.jpg', 'Statue.jpg'];

    // get the element with the bg-img class
    const bgImg = document.querySelector('.bg-img');

    // define a variable to keep track of the current image index
    let currentImgIndex = 0;

    // define a function to change the background image
    function changeBgImg() {
      // get the next image name from the array
      const nextImg = images[currentImgIndex];

      // update the background image of the element
      bgImg.style.backgroundImage = `url(${nextImg})`;

      // increment the current image index, looping back to 0 if needed
      currentImgIndex = (currentImgIndex + 1) % images.length;
    }

    // call the changeBgImg function every 5 seconds
    setInterval(changeBgImg, 5500);
  });
