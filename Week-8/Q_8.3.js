/* 
Problem 8.3: Detect loop in a linked listGiven a linked list of N nodes. 
The task is to check if the linked list has a loop. 
Linkedlist can contain self loop.

Example 1:
Input:N = 3
value[] = {1,3,4} x = 2
Output: TrueExplanation: In above test case N = 3.The linked list with nodes N = 3 is given. 
Then value of x=2 is givenwhich means last node is connected with xth node of linked list. 
Therefore, there exists a loop.

Example 2:
Input:N = 4
value[] = {1,8,3,4}
x = 0
Output: False 

Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not containsany loop.
Expected Time Complexity: O(N) Expected Auxiliary Space: O(1)

Constraints: 1 ≤ N ≤ 104 1 ≤ Data on Node ≤ 103

*/
const {Node,LinkedList} = require('./LinkedList');
// Time complexity O(N) | SPACE COMPLEXITY O(1)

const linkedListContainsLoop = (list)=>{

    if(!list.head){
        return false;
    }

    let slow=list.head;
    let fast=list.head;

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;

        if(slow==fast){
            return true;
        }

    }

    return false;
}

const node1= new Node(2);
const node2= new Node(4);
const node3= new Node(7);
const node4= new Node(8);
const node5= new Node(9);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node2;
// node5.next=node3

const list=new LinkedList(node1);
console.log("***********************************************")
console.log("**@ loop exist , ",linkedListContainsLoop(list))


// const node1= new Node(2);
// const node2= new Node(4);
// const node3= new Node(7);
// const node4= new Node(8);
// const node5= new Node(9);

// node1.next=node2;
// node2.next=node3;
// node3.next=node4;
// node4.next=node5;

// const list=new LinkedList(node1);
// console.log("***********************************************")
// console.log(linkedListContainsLoop(list));
// // list.printList();

// console.log("***********************************************")