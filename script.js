/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {   
    let leftSum = 0;
    let rightSum = arr.reduce((a, b) => a + b) - arr[0];
    let idx = 0;
    while(idx < arr.length) {
      if(leftSum === rightSum) {
        return 'YES';
      }
      leftSum +=arr[idx];
      idx++;
      rightSum -=arr[idx];
    }
    return 'NO';
}
