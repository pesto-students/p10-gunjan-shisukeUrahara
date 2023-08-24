function memoize(fn){
    const cache = new Map();

   return function(...args){
    const key = JSON.stringify(args);

    if(cache.has(key)){
        return cache.get(key);
    }
    else{
        console.time();
      const sum = fn(...args);
      cache.set(key, sum);
      console.timeEnd();
      return sum;
    }

   }
  
}




//Given reducer method:
function add(...args){
    // return a+b;
    return args.reduce((sum, arg) => sum + arg, 0);
}
//Create a method called memoize such that:
const memoizeAdd=memoize(add);
// //then calling...
console.log("**@ result 1 is , ",memoizeAdd(100,100));//returns 200
console.log("**@ result 2 is , ",memoizeAdd(100));//returns 100
console.log("**@ result 3 is , ",memoizeAdd(100,200))//returns 300
console.log("**@ result 4 is , ",memoizeAdd(100,100))//returns 200 
