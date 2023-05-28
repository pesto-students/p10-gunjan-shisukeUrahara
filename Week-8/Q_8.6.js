// Enqueue operation Time complexity O(1) | SPACE COMPLEXITY O(N)
// Dequeue operation Time complexity O(N) | SPACE COMPLEXITY O(N)

class queueUsingTwoStacks{

    constructor(){
        this.s1=[];
        this.s2=[];
    }

    enqueue(x){
        this.s1.push(x);
    }

    dequeue(){
        if(this.s1.length==0 && this.s2.length==0){
           return -1;
        }
        else{
            if(this.s2.length==0){
                while(this.s1.length>0){
                    const el=this.s1.pop();
                    this.s2.push(el);
                }
                return this.s2.pop();
            }
            else{
                return this.s2.pop();
            }
        }
    }

}

const printQueryResult=(arr)=>{

    let i=0;
    const q= new queueUsingTwoStacks();

    while(i<arr.length){
        if(arr[i]==1){
            q.enqueue(arr[i+1]);
            i++;
        }
        else{
            console.log(q.dequeue());
        }
        i++;
    }

}

const arr1=[1,2,1,3,2,1,4,2];
printQueryResult(arr1)
const arr2=[1,2,2,2,1,4];
printQueryResult(arr2)