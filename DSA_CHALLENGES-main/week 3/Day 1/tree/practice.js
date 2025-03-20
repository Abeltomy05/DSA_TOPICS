class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }
    isEmpty(){
        return this.root ===null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
        if(root==null){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
   levelOrder(){
    const queue = []
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
   }
   min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
   }
   max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
   }
   isValidBst(){
    return this.validate(this.root,-Infinity,Infinity)
   }
   validate(node,minValue,maxValue){
    if(node===null){
        return true
    }
    if(node.value<minValue||node.value>maxValue) return false
    return this.validate(node.left,minValue,node.value)&&
    this.validate(node.right,node.value,maxValue)
   }
}