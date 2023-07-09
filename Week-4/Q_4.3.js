// creating fibonnaci series with iterators

const Fibonacci= {
    n1: 0, 
    n2: 1, 
    temp: 0,
    setIndex(value){
        _i=value;

    },
    [Symbol.iterator]:function(){
        return this;

    },
    next(){ 
        this.temp = this.n2; 
        this.n2 = this.temp + this.n1; 
        this.n1 = this.temp; 
        return {value: this.n2} 
    } 
}


for(const el of Fibonacci){
    console.log("**@ el is , ",el);
    if(el>500){
        break;
    }


}