/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock andchoosing a different day in the future to sell that stock.
Return the maximum profit youcan achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1: Input: prices = [7,1,5,3,6,4] 
Output: 5
 Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5.
 Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell.
  Example 2: 
  Input: prices =[7,6,4,3,1] 
  Output: 0 
  Explanation: In this case, no transactions are done and the maxprofit = 0
   Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104

*/

// Time complexity O(N) | Space complexity O(1)

const calculateMaxProfit= (arr)=>{
    let maxProfit=0;
    let left=0;
    let right=1;

    while(right<arr.length){
        if(arr[left]<arr[right]){
            let currentProfit=arr[right]-arr[left];
            maxProfit=Math.max(currentProfit,maxProfit);
            right++;

        }else{
            left++;
            right++;

        }

    }

    return maxProfit;

}

const arr1=[7,1,5,3,6,4];
const arr2=[7,6,4,3,1]
console.log("**@ maxProfit for arr1 is , ",calculateMaxProfit(arr1));
console.log("**@ maxProfit for arr2 is , ",calculateMaxProfit(arr2))