/**
 * Clear canvas
 * @params {Object} canvas - the canvas object
 */
const clear = canvas => {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export default clear;
