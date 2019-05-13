/**
 * A vector (math) implementation.
 */
export function dotx(a, b) {
  return a.x * b.x + a.y * b.y;
}

// /**
//  * CSCSVector.java - Projektuppgift HT2004
//  *
//  * En vektor-klass som hanterar den grundläggande aritmetiken för vektorer.
//  * Implementerad för att användas i projektuppgiften "biljardspel" HT2004.
//  *
//  * @version 1.2
//  * @date 2004-11-12
//  */
// public class CSVector {

//     /** Retunerar skalärprodukten av vektorn och v */
//     public double dotProd(CSVector v) {
//         return v.getX() * x + v.getY() * y;
//     }

//     /** Adderar Vektorn och v */
//     public CSVector add(CSVector v) {
// 	return new CSVector((v.getX() + x), (v.getY() + y));
//     }

//     /** Subtraherar Vektorn och v */
//     public CSVector sub(CSVector v) {
//         return new CSVector((x - v.getX()), (y - v.getY()));
//     }

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
