/* 
Problem 7.2 Spiral Order Matrix IIProblem Description Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.
Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

// Time complexity Object(N) | Space complexity O(N)
//  Where N is total number of elements in the matrix
const spiralMatrixTraversal=(arr)=>{

    const result=[];
    return traverseSpiralMatrix(arr,0,arr.length-1,0,arr[0].length-1,result)
 }
 
 const traverseSpiralMatrix = (arr,startRow,endRow,startColumn,endColumn,result)=>{
     if(startRow>endRow || startColumn>endColumn){
         return result;
     }
     // traverse the top part
     for(let i=startColumn;i<=endColumn;i++){
         result.push(arr[startRow][i]);
     }
 
     startRow++;
 
     // traverse the right side
     for(let i=startRow;i<=endRow;i++){
         result.push(arr[i][endColumn]);
     }
 
     endColumn--;
 
     // traverse the bottom side
     if(startRow<=endRow){
         for(let i=endColumn;i>=startColumn;i--){
             result.push(arr[endRow][i])
         }
 
         endRow--;
     }
 
     // traverse the left side
     if(startColumn<=endColumn){
         for(let i=endRow;i>=startRow;i--){
             result.push(arr[i][startColumn])
         }
         startColumn++;
     
     }
     return traverseSpiralMatrix(arr,startRow,endRow,startColumn,endColumn,result);
 
 }
 
 const arr=[[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
 console.log(spiralMatrixTraversal(arr));
 
 const arr2=[[1,3,4,5,6],[17,18,20,23,8],[15,27,26,24,9],[13,12,11,10,7]];
 console.log(spiralMatrixTraversal(arr2));
 
 
 const arr3=[[1,2,3],[4,5,6],[7,8,9]]
 console.log(spiralMatrixTraversal(arr3));
 
 const arr4=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 console.log(spiralMatrixTraversal(arr4));