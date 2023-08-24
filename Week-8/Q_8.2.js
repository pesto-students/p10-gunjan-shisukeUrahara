/* 
Problem 8.2:
 Rotate Linked ListGiven a singly linked list of size N. 
 The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.
 Example 1:
 Input:N = 5
 value[] = {2, 4, 7, 8, 9}k = 3
 Output: 8 9 2 4 7
 Explanation:Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
 Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

Example 2:Input:N = 8
value[] = {1, 2, 3, 4, 5, 6, 7, 8}k = 4
Output: 5 6 7 8 1 2 3 4

Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 103 1 <= k <= N
*/
const {Node,LinkedList} = require('./LinkedList');
// Time complexity O(N) | SPACE COMPLEXITY O(1)
const rotateLinkedList=(list,n,k)=>{

    if(k>n){
        return;
    }
    
    let temp=list.head;
    let newHead=null;

    //  reach the n+1th node
    let count=1;
    while(count<k){
        temp=temp.next;
        count++;
    }
    newHead=temp.next;
    temp.next=null;
    temp=newHead;

    while(temp.next){
        temp=temp.next;
    }

    temp.next=list.head;
    list.head=newHead;

   

}


const node1= new Node(2);
const node2= new Node(4);
const node3= new Node(7);
const node4= new Node(8);
const node5= new Node(9);

node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;

const list=new LinkedList(node1);
list.printList();
console.log("***********************************************")
rotateLinkedList(list,5,3);
list.printList();

console.log("***********************************************")

const node21= new Node(1);
const node22= new Node(2);
const node23= new Node(3);
const node24= new Node(4);
const node25= new Node(5);
const node26= new Node(6);
const node27= new Node(7);
const node28= new Node(8);

node21.next=node22;
node22.next=node23;
node23.next=node24;
node24.next=node25;
node25.next=node26;
node26.next=node27;
node27.next=node28;

const list2=new LinkedList(node21);
list2.printList();
console.log("***********************************************")
rotateLinkedList(list2,8,4);
list2.printList();