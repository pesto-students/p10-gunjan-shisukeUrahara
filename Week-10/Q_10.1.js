/* 
Maximum Depth of Binary Tree
Easy
10.7K
175
Companies
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

// import { createTree } from "./Tree";
const {createTree} = require("./Tree");

function getMaxDepth(depth,node){
    if(!node){
        return depth;
    }

    return Math.max(getMaxDepth(depth+1,node.left),getMaxDepth(depth+1,node.right));

}

var getMaxDepthOfTree = function(root) {
   if(!root){
       return 0;
   }
   let depth=1;

   return Math.max(getMaxDepth(depth,root.left),getMaxDepth(depth,root.right));

};

const arr1=[3,9,20,null,null,15,7];
const arr2=[1,null,2]
const tree1=createTree(arr1);
const tree2=createTree(arr2);


console.log("**@ tree1 , max depth is , ",getMaxDepthOfTree(tree1));
console.log("**@ tree2 , max depth is , ",getMaxDepthOfTree(tree2));




