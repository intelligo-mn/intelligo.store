/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions;

    const b = Math.sqrt((p * p) - 16 * a);

    const x1 = (p + b) / 4;
    const x2 = (p - b) / 4; 
    return ([x2, x1]);
}
