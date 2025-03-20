function isValid(s){
    const stack = []
    for(let index = 0 ; index<s.length;index++){
        const char = s[index];
        if(char==="(" || char==="[" || char==="{" ){
            stack.push(char)
        }else if(char===")" || char==="]" || char==="}"){
            if(isEmpty(stack)){
                return false;
            }
            const top = stack.pop()
            if((char===")" && top !=="(") ||
               (char==="]" && top !=="[") ||
               (char==="}" && top !=="{")
            ) {
                return false
            }
        }
    }
    return isEmpty(stack)
}


function isEmpty(stack){
    return stack.length ===0;
}

const string1 = "(]{})"
console.log(isValid(string1))

//Simple Way:-
var isValid = function(s) {
    let stack=[];
    
    for(let char of s){
        if(char==='(' || char==='{' || char ==='['){
            stack.push(char)
        }else{
            if(
                (char===')' && stack[stack.length-1]!=='(') ||
                (char==='}' && stack[stack.length-1]!=='{') ||
                (char===']' && stack[stack.length-1]!=='[') 
                ){
            return false
            }
            stack.pop()
        }
    }
    return stack.length ===0;

};