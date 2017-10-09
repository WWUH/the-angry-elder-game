import drawEntity from './draw-entity';

const createEntity = (entity) => {
  entity.id = Math.random() * 2;
  entity._creating = true;

  const entityImage = new Image();
  entityImage.src = entity.image;
  entityImage.onload = () => {
    entity._sprite = entityImage;
  }
}
