class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

 class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    printList(){
       let currentNode=this.head;

       while(currentNode){
        console.log(currentNode.data);
        currentNode=currentNode.next;
       }
    }
}

module.exports={
    Node,
    LinkedList
}