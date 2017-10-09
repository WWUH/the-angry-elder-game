const setImage = (ctx, image) => {
  ctx.drawImage(image, 0, 0);
}

/**
 * @params {Object} canvas - the canvas object
 * @params {String} imageSrc - image source
 */
const loadImage = (canvas, imageSrc) => {
  const bgImage = new Image();
  bgImage.src = imageSrc;
  bgImage.onload = () => {
    setImage(canvas.getContext('2d'), bgImage);
  }
}

export default loadImage;
