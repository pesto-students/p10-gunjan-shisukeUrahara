function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
     
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    }
    return[increment,log];
}

const[increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?

//  Count is 0 is logged , the explaination is as follows
// createIncrement returns two methods by name of increment and log 
//  createIncrement upon being called also sets the message string to "Count is 0 " since count is 0 initially
//  when we call increment thrice , then it does increment the count value 
//  but it doesnot change the message string which is still set as " Count is 0"
//  so the oputput will still be "Count is 0"
