//-----Normal Stack----------//
// class Stack{
//     constructor(){
//         this.stack = []
//     }
    
//     size(){
//         return this.stack.length
//     }
    
//     isEmpty(){
//         return this.size()===0
//     }
    
//     push(element){
//         this.stack.push(element)
//     }
    
//     pop(){
//         if(this.isEmpty()){
//             return "The stack is Underflow, nothing to pop"
//         }
//         this.stack.pop()
//     }
    
//     peek(){
//         if(this.isEmpty()){
//         return "Stack is Underflow, cannot do Peek "
//          }
//         return this.stack[this.size()-1] 
//     }
    
//     display(){
//         if(this.isEmpty()){
//             return "The Stack is Underflow"
//         }
//         return this.stack
//     }
// }

// const stack = new Stack();
// console.log(stack.display())
// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log("After Added to Stack:\n",stack.display())
// console.log("Stack Top Element:\n",stack.peek())
// stack.pop()
// console.log("After Pop from Stack:\n",stack.display())
// console.log("The Size of Stack Now:\n",stack.size())



//---------Stack Using Linkedlist------------//

// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     Size(){
//         return this.size
//     }

//     isEmpty(){
//         return this.head === null
//     }

//     push(value){
//         const node = new Node(value)
//         node.next = this.head
//         this.head = node
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()){
//             return "Stack is Underflow"
//         }
//         let temp = this.head
//         this.head = temp.next
//         temp = null
//         this.size--
//     }

//     peek(){
//         if(this.isEmpty()){
//             return "Stack is Underflow"
//         }
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             return "Stack is Underflow"
//         }
//         let values = []
//         let current = this.head
//         while(current){
//             values.push(current.value)
//             current = current.next
//         }
//         return values.join("->")
//     }
// }

// const stack = new Stack();

// console.log("Initial Stack:", stack.display());
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log("After Adding to Stack:", stack.display()); 
// console.log("Stack Top Element:", stack.peek());
// stack.pop();
// console.log("After Popping from Stack:", stack.display()); 
// console.log("The Size of Stack Now:", stack.Size()); 


//------Stack Sorting ----------//


// class Stack{
//     constructor() {
//         this.stack = []
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){
//         return this.stack.pop()
//     }
//     sortStack(){
//         let tempstack = []
//         let input = this.stack
//         while(input.length>0){
//             let temp = input.pop()
//             while(tempstack.length>0&&tempstack[tempstack.length-1]>temp){
//                 input.push(tempstack.pop())
//             }
//             tempstack.push(temp)
//         }
//         this.stack = tempstack
//     }
//     print(){
//         console.log(this.stack.join(" -> "));
//     }
// }

// const stack = new Stack();
// stack.push(5);
// stack.push(1);
// stack.push(4);
// stack.push(2);
// stack.push(3);

// console.log("Before sorting:");
// stack.print();

// stack.sortStack()

// console.log("After sorting:");
// stack.print();


//-----------------Reverse a String using Stack-----------------//

// function ReverseWords(s){
//     let splitS = s.split(' ')
//     let stack = []
//     for(let i of splitS){
//         stack.push(i)
//     }
//     let final=''
//     while(stack.length){
//         let current = stack.pop()
//         if(current){
//             final +=' '+current
//         }
//     }
//     return final
// }

// console.log(ReverseWords("The Blue Moon"))


//------Palindrome using Stack-----------//

// function isPalindrome(s){
//     let stack = []
//     for(let i of s){
//         stack.push(i)
//     }
//     for(let i of s){
//         if(i!==stack.pop()){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPalindrome("malayalam"))
// console.log(isPalindrome("rimshan"))



//-----Valid Paranthesis---------//
// function isValid(s){
//     let stack = []
//     for(let char of s){
//         if(char==='('||char==='{'||char==='['){
//             stack.push(char)
//         }else{
//             if(
//                 (char===')'&&stack[stack.length-1]!=='(')||
//                 (char==='}'&&stack[stack.length-1]!=='{')||
//                 (char===']'&&stack[stack.length-1]!=='[')
//             ){
//                 return false
//             }
//             stack.pop()
//         }
//     }
//     return stack.length===0
// }


// console.log(isValid("([]{})"))
// console.log(isValid("([]]][{})"))
// console.log(isValid("([{})"))


