/**
 * A vector (math) implementation, bleh!
 */
export function neu(a, bi) {
  return { a: a, bi: bi };
}
export function dot(v1, v2) {
  return v1.a * v2.a + v1.bi * v2.bi;
}
export function add(v1, v2) {
  return neu(v1.a + v2.a, v1.bi + v2.bi);
}
export function sub(v1, v2) {
  return neu(v1.a - v2.a, v1.bi - v2.bi);
}
export function abs(v1) {
  return Math.sqrt(v1.a * v1.a + v1.bi * v1.bi);
}
export function mul(v1, u) {
  return neu(v1.a * u, v1.bi * u);
}
