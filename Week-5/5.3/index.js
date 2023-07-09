class customSet{
    constructor(arr){
        this.result=[];
        this.size=0;
        for(let i=0;i<arr.length;i++){
            if(!this.result.includes(arr[i])){
                this.result.push(arr[i]);
                this.size++;
            }
        }
    
    };
}

function hasDuplicates(arr){
    let mySet = new customSet(arr); 
  
    if (mySet.size !== arr.length){
        return true
    }else{
        return false
    }
}

console.log(hasDuplicates([1,5,-1,4]))
console.log(hasDuplicates([1,5,-1,4,1,2]))