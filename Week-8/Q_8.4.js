/* 
Problem 8.4: Parenthesis CheckerGiven an expression string x.
Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
Example 1:Input:{([])}Output:trueExplanation:{ ( [ ] ) }. 
Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.
Example 2:Input:()Output:trueExplanation:(). 
Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balancedway.

Example 3:Input:([]Output:falseExplanation:([]. Here square bracket is balanced but the small bracket is not balanced and 
    Hence , the output will beunbalanced.
    Expected Time Complexity: O(|x|)
     Expected Auixilliary 
     Space: O(|x|)
     Constraints: 1 ≤ |x| ≤ 32000
*/

const isMatchingBracket = (result,current)=>{
    if(!result.length){
        return false;
    }
    let top=result[result.length-1];

    if(top=='[' && current==']'){
        return true;
    }
    else if(top=='{' && current=='}'){
        return true;
    }
    else if(top=='(' && current==')'){
        return true;
    }

    return false;

}

const paranthesisChecker= (s)=>{
    if(!s.length){
        return true;
    }

    let result=[];
    result.push(s.charAt(0));

    for(let i=1;i<s.length;i++){
        let current= s.charAt(i);

        if(isMatchingBracket(result,current)){
            result.pop();
        }
        else{
            result.push(current);
        }
    }

    return result.length==0;

}

const str1='[]';
const str2='[{}]';
const str3='[({})]';
const str4='[({)]';

console.log(`${str1} is in ${paranthesisChecker(str1)?'Correct':'Incorrect'} order`)
console.log(`${str2} is in ${paranthesisChecker(str2)?'Correct':'Incorrect'} order`)
console.log(`${str3} is in ${paranthesisChecker(str3)?'Correct':'Incorrect'} order`)
console.log(`${str4} is in ${paranthesisChecker(str4)?'Correct':'Incorrect'} order`)