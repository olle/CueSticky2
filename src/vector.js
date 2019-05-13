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
  return { x: a.x + b.x, y: a.y + b.y };
}
export function sub(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}
export function abs(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
}

//     /** Kalyklerar absolutbeloppet av vektorn */
//     public double abs() {
//         return Math.sqrt( x * x + y * y);
//     }

//     /** Multiplicerar vektorn med en konstant c */
//     public CSVector conMult(double c) {
// 	return new CSVector((c * x),(c * y));
//     }

//     /** Ger vektorns värden i text, för lagring av spel i spelfil */
//     public String toString() {
//         return ("" + x + " " + y);
//     }
// }
