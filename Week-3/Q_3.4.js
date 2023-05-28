function createStack() {
    return {
        items:[],
        push(item){
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5 
console.log(stack.items);// => [10]
stack.items= [10,100,1000];// Encapsulationbroken!
console.log(stack.items);
console.log("*****************************************************************")

// ***********************************************************
const  createNewStack= (function() {
    // Write your code here...
    const items=[];
    const  push= function(item){
       items.push(item);
    }

    const pop= function() {
        return  items.pop();
    }

    const getItems= function(){
        return items;
    }


    return {
       push,
       pop,
       getItems
    };

}())
    const newStack=createNewStack;
    newStack.push(10);
    newStack.push(5);
    newStack.pop();// => 5
    console.log(newStack.items);// => undefined
    newStack.items= [10,100,1000];// Encapsulationbroken!
console.log(newStack.items);
newStack.push(10);
newStack.push(5);
console.log(newStack.getItems());
console.log(newStack.items);

console.log("*****************************************************************")


