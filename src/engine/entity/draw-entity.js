import createEntity from './create-entity';

/**
 * draw entity on canvas
 * @params {Object} canvas
 * @params {Object} entity
 */
const drawEntity = (canvas, entity) => {
  if (entity._sprite) {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      entity._sprite,
      entity.pos.x,
      entity.pos.y
    )
  } else if (!entity._creating) {
    createEntity(canvas, entity)
  }
}
