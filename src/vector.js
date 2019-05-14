/**
 * A vector (math) implementation, bleh!
 */
export function neu(a, bi) {
  return { a: a, bi: bi };
}
export function dot(x, y) {
  return x.a * y.a + x.bi * y.bi;
}
export function add(x, y) {
  return neu(x.a + y.a, x.bi + y.bi);
}
export function sub(x, y) {
  return neu(x.a - y.a, x.bi - y.bi);
}
export function abs(x) {
  return Math.sqrt(x.a * x.a + x.bi * x.bi);
}
export function mul(x, k) {
  return neu(k * x.a, k * x.bi);
}
