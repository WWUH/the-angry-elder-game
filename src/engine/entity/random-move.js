import shuffle from '../math/shuffle';

const randomMove = (
  entity, speed = 0, config = { height: 512, width: 512, tileSize: 32 }
) => {
  const { pos, vel } = entity;
  entity.tick -= 1;

  if (entity.tick <= 0) {
    entity.direction = shuffle(['x', 'y'])[0];
    entity.tick = Math.random() * 50 | 0;
  }

  if (pos.x + vel.x > config.width - config.tileSize * 2) {
    vel.x = -speed;
  }

  if (pos.x + vel.x < config.tileSize / 2) {
    vel.x = speed;
  }

  if (pos.y + vel.y > config.height - config.tileSize * 2) {
    vel.y = -speed;
  }

  if (pos.y + vel.y < config.tileSize / 2) {
    vel.y = speed;
  }

  entity.pos.x += entity.direction === 'x' ? vel.x : 0;
  entity.pos.y += entity.direction === 'y' ? vel.y : 0;
}

export default randomMove;
