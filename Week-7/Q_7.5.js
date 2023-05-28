/* 
Problem 7.5: Pair With Given DifferenceGiven an one-dimensional unsorted array A containing N integers.
You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.
Return 1 if any such pair exists else return 0. 
Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105
Input Format First argument is an integer array A of size N. 
Second argument is aninteger B.Output Format Return 1 if any such pair exists else return 0.
Example Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78 Input 2: A = [-10, 20] B = 30
Example Output Output 1: 1 Output 2: 1
Example Explanation Explanation 1: Pair (80, 2) gives a difference of 78. 
Explanation 2:Pair (20, -10) gives a difference of 30 i.e 20 - (-10) => 20 + 10 => 30

*/

// Time complexity O(N) | Space complexity O(N)
const pairWithGivenDifference=(arr,diff)=>{
    let map=new Map();

   for(let i=0;i<arr.length;i++){
    let temp=Math.abs(diff-arr[i])
    if(map.has(temp)){
        return 1;
    }
    else{
        map.set(arr[i],true);
    }

   }

   return 0

}

const arr1=[5, 10, 3, 2, 50, 80];
const arr2=[20, -10];

console.log("**@ answer 1 is , ",pairWithGivenDifference(arr1,78));
console.log("**@ answer 2 is , ",pairWithGivenDifference(arr2,30))