function reverseString(s){
    if(s.length  <=1){
        return s
    }
    return reverseString(s.slice(1))+s[0];
}
    
console.log(reverseString("hello"));
console.log(reverseString("h"));


//sec method
function reverseStringg(str) {
    if (str === '') {
        return '';
    }
    return reverseStringg(str.substring(1)) + str[0];
}

console.log(reverseStringg("hello"));

//Time Complexity: 𝑂(𝑛^2)
//Space Complexity: 𝑂(n)