/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for(let v of s) {
      if(vowels.includes(v))
          console.log(v);
  }
  
  for(let v of s) {
      if(!vowels.includes(v))
          console.log(v);
  }
}
