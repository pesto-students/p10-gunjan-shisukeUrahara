//  call
const Animals={
    saySomething(){
        return `Hi i am ${this.name} and i ${this.talk}`
    }
}

const animal1= {name:'Horse' , talk:'neigh'}
const animal2= {name:'Dog' , talk:'bark'}
const animal3= {name:'Lion' , talk:'roar'}

console.log(Animals.saySomething.call(animal1));
console.log(Animals.saySomething.call(animal2));
console.log(Animals.saySomething.call(animal3));
console.log("************************************************************")

//  bind examples

const WildAnimal= {
    name:'Lion',
    talk:'roar',
    saySomething(){
        return `Hi i am ${this.name} and i ${this.talk}`
    }
}

console.log(WildAnimal.saySomething());
const newAnimal = {
    name:"Tiger",
    talk: "roar",
  }

  const newAnimalSpeech=WildAnimal.saySomething.bind(newAnimal)
  
console.log(newAnimalSpeech());
console.log(WildAnimal.saySomething());

console.log("************************************************************")

//  apply examples
const numbers=[1,2,3,4,5];
const min = Math.min.apply(null,numbers);
const max = Math.max.apply(null,numbers);

console.log("**@ min is , ",min);
console.log("**@ max is , ",max);

