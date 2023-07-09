const CustomMap= require("./CustomMap.js");

function isVowel(char){ 
    return"aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap=new CustomMap();
    for(let char of str){
        let lowerCaseChar=char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
            }else{
                vowelMap.set(lowerCaseChar,1);
            }
        }
    }
    return vowelMap.size;

}

console.log(vowelCount("tiger"));
console.log(vowelCount("tstbjhgfe"))