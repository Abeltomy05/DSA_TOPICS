function isPalindrome(s){
    const stack = []
    for(let char of s){
        stack.push(char)
    }
    for(let char of s){
        if(char!==stack.pop()){
            return false
        }
    }
    return true
}
console.log(isPalindrome("malayalam"))
console.log(isPalindrome("rimshan"))