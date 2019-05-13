/**
 * A vector (math) implementation, bleh!
 */
export function neu(xVal, yVal) {
  return { x: xVal, y: yVal };
}
export function dot(a, b) {
  return a.x * b.x + a.y * b.y;
}
export function add(a, b) {
  return neu(a.x + b.x, a.y + b.y);
}
export function sub(a, b) {
  return neu(a.x - b.x, a.y - b.y);
}
export function abs(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
}
export function mul(a, k) {
  return neu(k * a.x, k * a.y);
}
