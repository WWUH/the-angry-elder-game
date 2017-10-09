/**
 * move one entity towards another entity
 * @params {Object} entityA - the entity to move
 * @params {Object} entityB - the target entity
 * @params {Number} [speed=0] - move speed
 */
const targetEntity = (entityA, entityB, speed = 0) => {
  const [ posA, posB ] = [entityA, entityB].map(entity => entity.pos);
  const velX = Math.sign(posB.x - posA.x) * speed;
  const velY = Math.sign(posB.y - posA.y) * speed;
  entityA.pos.x += velX;
  entityA.pos.y += velY;
}

export default targetEntity;
