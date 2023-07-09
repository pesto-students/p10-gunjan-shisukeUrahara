/* 

*/
const {createTree}= require("./Tree");

var levelOrderTraversal = function(root) {
    if(!root){
        return [];
    }
 
    let result=[];
    let queue=[root]
     
     while(queue.length){
         let levelSize=queue.length;
         let currentLevel=[];
 
         for(let i=0;i<levelSize;i++){
             let currentNode=queue.shift();
              currentLevel.push(currentNode.value)
 
             if(currentNode.left!==null){
                 queue.push(currentNode.left);
             }
 
              if(currentNode.right!==null){
                 queue.push(currentNode.right);
             }
 
 
 
         }
 
         result.push(currentLevel);
     }
 
     return result;
 };

 const arr1=[3,9,20,null,null,15,7];
const arr2=[1]
const tree1=createTree(arr1);
const tree2=createTree(arr2);


console.log("**@ tree1 , level order traversal is , ",levelOrderTraversal(tree1));
console.log("**@ tree2 , level order traversal is , ",levelOrderTraversal(tree2));