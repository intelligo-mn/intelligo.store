/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let first = 0, second = 0;
    for (const elm of nums) {
        if (elm > first) {
            second = first;
            first = elm;
        }
        else if (elm > second && elm < first) {
            second = elm;
        }
    }
    return second;
}
