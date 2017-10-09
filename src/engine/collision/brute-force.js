export default function(entityA, entityB, size = 12) {
  const { x:xa, y:ya } = entityA.pos;
  const { x:xb, y:yb } = entityB.pos;

  return (
    xa <= xb + size &&
    xb <= xa + size &&
    ya <= yb + size &&
    yb <= ya + size
  )
}
