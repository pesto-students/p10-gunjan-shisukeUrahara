/* 
Validate Binary Search Tree
Medium
14.6K
1.2K
Companies
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/

const {createTree}= require('./Tree');

const validateBST=(root,min,max)=>{

    if((!root)){
             return true;
         }
         
    
        if((root.value<=min)||(root.value>=max) ){
            return false;
        }
        if( !root.left && !root.right){
           return true;
        }
    
         return validateBST(root.left,min,root.value)&&validateBST(root.right,root.value,max);
     }
    
    var isValidBST = function(root) {
        return validateBST(root,Number.NEGATIVE_INFINITY ,Number.POSITIVE_INFINITY);
    };


const arr1=[2,1,3];
const arr2=[5,1,4,null,null,3,6]
const tree1=createTree(arr1);
const tree2=createTree(arr2);


console.log("**@ tree1 , validation is , ",isValidBST(tree1));
console.log("**@ tree2 ,validation is , ",isValidBST(tree2));