//-----Normal Queue----------//
// class Queue{
//     constructor(){
//         this.queue = []
//     }
//     size(){
//         return this.queue.length
//     }
//     isEmpty(){
//         return this.size()===0
//     }
//     enqueue(element){
//         this.queue.push(element)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "The Queue is Empty"
//         }
//         return this.queue.shift()
//     }
//     front(){
//         if(this.isEmpty()){
//             return "no Elements"
//         }
//         return this.queue[0]
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty")
//             return
//         }
//         let queueString = ''
//         for(let i=0;i<this.size();i++){
//             queueString+=this.queue[i]+"|"
//         }
//         console.log(queueString)
//     }
// }

// const queuelist = new Queue()
// console.log("Before Add:")
// queuelist.print()
// queuelist.enqueue(23)
// queuelist.enqueue(12)
// queuelist.enqueue(56)
// console.log("After Add to Queue:\n")
// queuelist.print()
// console.log("After Remove to Queue:\n")
// queuelist.dequeue()
// queuelist.print()


//--------Queue using linkedlist---------------//

// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null
//         this.rear = null
//         this.size = 0
//     }

//     Size(){
//         return this.size
//     }
//     isEmpty(){
//         return this.Size()===0
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.front = this.rear = node
//         }else{
//             this.rear.next = node
//             this.rear = node
//         }
//         this.size++
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             console.log("empty queue")
//             return 
//         }
//         let removedValue = this.front.value
//         this.front = this.front.next
//         this.size--
//         if(this.isEmpty()){
//             this.rear= null
//         }
//         console.log("Removed data:", removedValue);
//         return removedValue
//     }
//     print(){
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//           return;
//         } 
//         let curr = this.front
//         let Element = []
//         while(curr){
//             Element.push(curr.value)
//             curr = curr.next
//         }
//         console.log(Element.join("->"))
//     }
// }

// const newQueue = new Queue();

// newQueue.enqueue(1);
// newQueue.enqueue(2);
// newQueue.enqueue(3);
// newQueue.print();

// newQueue.dequeue();
// newQueue.print();


//---------Circular Queue--------------//

// class circularQueue{
//     constructor(size) {
//         this.queue = new Array(size)
//         this.size = size
//         this.front = -1
//         this.rear = -1
//     }

//     isEmpty(){
//         return this.front === -1
//     }

//     isFull(){
//         return (this.rear+1)%this.size ===this.front
//     }

//     enqueue(value){
//         if(this.isFull()){
//             console.log("The Queue is full");
//             return
//         }
//         if(this.isEmpty()){
//             this.front=0
//         }
//         this.rear = (this.rear+1)%this.size
//         this.queue[this.rear] = value
//     }

//     dequeue(){
//         if(this.isEmpty){
//             console.log("Queue is Empty");
//             return null;
//         }
//         const removeElement = this.queue[this.front]
//         if(this.front===this.rear){
//             this.front = -1
//             this.rear = -1
//         }else{
//             this.front = (this.front+1)%this.size
//         }
//         console.log("removed element:",removeElement)
//         return removeElement
//     }

//     peek(){
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//             return null;
//         }
//         return this.queue[this.front]
//     }

//     print(){
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//             return null;
//         }
//         let curr = this.front
//         let result = ''
//         while(true){
//             result+=this.queue[curr]+" "
//             if(curr===this.rear){
//                 break
//             }
//             curr = (curr+1)%this.size
//         }
//         console.log(result)
//     }
// }

// const cq = new circularQueue(6); 

// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.enqueue(70);
// cq.print(); 
// cq.enqueue(90);
// cq.print(); 
// cq.dequeue();
// cq.print(); 

// cq.enqueue(50);
// cq.enqueue(60);
// cq.print(); 

// cq.enqueue(70);  
// cq.dequeue();
// cq.enqueue(70);
// cq.print(); 


//----------Stack To Queue-----------//

// class StackToQueue{
//     constructor() {
//         this.stack1 = []
//         this.stack2 = []
//     }

//     enqueue(value){
//         this.stack1.push(value)
//     }

//     dequeue(){
//         if(!this.stack2.length){
//             while(this.stack1.length){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         if(!this.stack2.length){
//             console.log("the Queue is Empty")
//             return null
//         }
//         return this.stack2.pop()
//     }

//     display(){
//         if (!this.stack1.length && !this.stack2.length) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let queue =[]
//         for(let i=this.stack2.length-1;i>=0;i--){
//             queue.push(this.stack2[i])
//         }
//         for(let i=0;i<this.stack1.length;i++){
//             queue.push(this.stack1[i])
//         }
//         console.log(queue.join("->"))
//     }
// }

// let queue = new StackToQueue();
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.display();
// queue.dequeue();
// queue.display();
// queue.dequeue();
// queue.display();
// queue.dequeue();
// queue.display(); 


// class circularQueue{
//     constructor(size) {
//         this.queue= new Array(size)
//         this.size = size
//         this.front = -1
//         this.rear = -1
//     }
//     isEmpty(){
//         return this.front === -1;
//     }
//     isFull(){
//         return (this.rear+1)%this.size === this.front
//     }
//     enqueue(value){
//         if(this.isFull()){
//             console.log("Queue is Full");
//             return;
//         }
//         if(this.isEmpty()){
//             this.front = 0;
//         }
//         this.rear = (this.rear+1)%this.size
//         this.queue[this.rear] = value
//     }
//     dequeue(){
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//             return null;
//         }
//         const removeElement = this.queue[this.front]
//         if(this.front===this.rear){
//             this.front =-1
//             this.rear = -1
//         }else{
//             this.front = (this.front+1)%this.size;
//         }
//         return removeElement
//     }
//     peek() {
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//             return null;
//         }
//         return this.queue[this.front];
//     }
//     printQueue(){
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//             return;
//         }
//         let i = this.front;
//         let result = '';
//         while(true){
//             result +=this.queue[i]+ ' '
//             if(i===this.rear){
//                 break
//             }
//             i=(i+1)%this.size
//         }
//         console.log(result.trim())
//     } 
// }


// const cq = new circularQueue(5); 

// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.printQueue(); 

// cq.dequeue();
// cq.printQueue(); 

// cq.enqueue(50);
// cq.enqueue(60);
// cq.printQueue(); 

// cq.enqueue(70);  
// cq.dequeue();
// cq.enqueue(70);
// cq.printQueue(); 