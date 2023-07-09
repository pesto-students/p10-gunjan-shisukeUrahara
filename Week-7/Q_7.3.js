/*
Problem 7.3 Sort array of 0's,1's and 2's
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascendingorder. 
Example 1:
Input:N = 5
arr[]= {0 2 1 2 0}
Output:0 0 1 2 2
Explanation: 0's 1's and 2's are segregated into ascending order.
Example 2:Input:N = 3
arr[] = {0 1 0}
Output:0 0 1
Explanation: 0s 1s and 2s are segregated into ascending order. 
Time Complexity: O(N)
Expected Auxiliary Space: O(1)
Constraints: 1 <= N <= 10^6 0 <= A[i] <= 2
*/

// Time complexity Object(N) | Space complexity O(1)

const sortZeroesOnesAndTwos= (arr)=>{
    let map= new Map();
    //  count 0s , 1s and 2s
    for(let i=0;i<arr.length;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],1)
        }
        else{
            map.set(arr[i],map.get(arr[i])+1)
        }

    }

    //  rewrite arr and return the output
    let lastCount=0;
    for(let i=0;i<=2;i++){
        let count=map.get(i);
        for(let j=lastCount;j<lastCount+count;j++){
            arr[j]=i;
        }
        lastCount=count+lastCount;
    }

    return arr;

}

let arr1=[0 ,2 ,1 ,2 ,0];
let arr2=[0,1,0];

console.log("**@ answer 1 is , ",sortZeroesOnesAndTwos(arr1));
console.log("**@ answer 2 is , ",sortZeroesOnesAndTwos(arr2));

