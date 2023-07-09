/*
roblem 7.1: Max Sum Contiguous SubarrayFind the contiguous subarray within an array, A of length N which has the largest sum.
Input Format:The first and the only argument contains an integer array, A.
 Output Format: Return aninteger representing the maximum possible sum of the contiguous subarray.
 Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000 
 For example:
 Input 1: A = [1, 2, 3, 4, -10]4
 Output 1: 10
 Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 10.
 
 Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
 Output 2: 6
 Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 
*/

// Time complexity Object(N) | Space complexity O(1)
const maxSum=  (arr)=>{
    let maxSum=arr[0];
    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
        maxSum=Math.max(sum,maxSum);
        if(sum<0){
            sum=0;
        }
    }

    return maxSum;

}

let arr1=[1, 2, 3, 4, -10];
let arr2= [-2, 1, -3, 4, -1, 2, 1, -5, 4] ;

console.log("**@ answer 1 is , ",maxSum(arr1));
console.log("**@ answer 2 is , ",maxSum(arr2));
