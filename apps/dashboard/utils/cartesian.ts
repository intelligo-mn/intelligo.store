/**
 * Cartesian result of multiple arrays
 * @param a array - check the sample input below
 * @returns array of arrays - check the sample out put below
 */
export const cartesian = (...a: any) =>
  a.reduce((a: any, b: any) =>
    a.flatMap((d: any) => b.map((e: any) => [d, e].flat()))
  );

// Cartesian Example
// ==========================================
// INPUT:
// Sample for calling the function:
// cartesian([1,2],[10,20],[100,200,300]) [LG,S],[RED, BLACK],[1KG,5KG]
// ==========================================
// OUTPUT:
// [ [ 1, 10, 100 ],
//   [ 1, 10, 200 ],
//   [ 1, 10, 300 ],
//   [ 1, 20, 100 ],
//   [ 1, 20, 200 ],
//   [ 1, 20, 300 ],
//   [ 2, 10, 100 ],
//   [ 2, 10, 200 ],
//   [ 2, 10, 300 ],
//   [ 2, 20, 100 ],
//   [ 2, 20, 200 ],
//   [ 2, 20, 300 ] ]
