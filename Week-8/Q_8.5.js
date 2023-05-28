/* 
Problem 8.5: Next Greater ELementGiven an array arr{} of size N having distinct elements,
 the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element.
 If there does not exist next greater of currentelement, then next greater element for current element is -1. 
 
 For example, next greaterof the last element is always -1.
 
 Example 1:Input:N = 4, arr[] = [1 3 2 4]
 Output:3 4 4 -1
 Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
 
 Example 2:
 Input: N = 5, arr[] [6 8 0 1 3]
 Output: 8 -1 1 3 -1
 Explanation:In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,for 1 it is 3 and then for 3 there is no larger element on right and hence -1.
 Expected Time Complexity : O(N) Expected Auxilliary Space : O(N)Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018
*/

const nextGreaterElement= (arr)=>{
    let result=[];

    result[arr.length-1]=-1;

    for(let i=arr.length-2;i>=0;i--){
        if(arr[i+1]>arr[i]){
            result[i]=arr[i+1];
        }
        else if(result[i+1]>arr[i]){
            result[i]=result[i+1];
        }
        else{
            result[i]=-1;
        }

    }

    return result;

}

let arr=[6 ,8 ,0 ,1 ,3];
let arr2=[1,3,2,4]

console.log("**@ result 1 is , ",nextGreaterElement(arr));
console.log("**@ result 2 is , ",nextGreaterElement(arr2))