/* 
Given an array S of n integers, find three integers in S such that the sum is closest to agiven number, 
target.Return the sum of the three integers.Assume that there will only beone solution.
Example: given array S = {-1 2 1 -4}, and target = 1. The sum that is closest to thetarget is 2.
 (-1 + 2 + 1 = 2)Assignment Introduction:●Calculate the time and space complexity for the set of questions .
 A set of  Problem statement based on array that would help student how toiterate and process an array

*/


// Time complexity O(N^2) | Space complexity O(1)
const closestThreeSum = (arr,targetSum)=>{
    arr.sort();
    let closestSum=arr[0]+arr[1]+arr[2];
    
    for(let i=0;i<arr.length-2;i++){
        let left=i+1;
        let right=arr.length-1;

        while(left<right){
           let currentSum= arr[i]+arr[left]+arr[right];

           if(Math.abs(currentSum-targetSum)<Math.abs(targetSum-closestSum)){
            closestSum=currentSum;
           }

           if(currentSum>targetSum){
            right--;
           }
           else{
            left++
           }

        }

    }

    return closestSum;

}

const arr1=[-1 ,2 ,1 ,-4];
console.log("**@ answer 1 is , ",closestThreeSum(arr1,1))