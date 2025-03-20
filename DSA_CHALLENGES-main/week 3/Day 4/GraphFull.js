class Graph{
    constructor() {
        this.adjList = new Map()
    }

    addNode(value){
        if(this.adjList.has(value)){
            console.log("The Value Already Exist")
            return
        }
        this.adjList.set(value,[])
        console.log("Node Added Successfully")
    }
    addEdges(node1,node2){
        if(!this.adjList.has(node1)){
            this.addNode(node1)
        }
        if(!this.adjList.has(node2)){
            this.addNode(node2)
        }
        if(!this.adjList.get(node1).includes(node2)){
            this.adjList.get(node1).push(node2) 
        }
        if(!this.adjList.get(node2).includes(node1)){
            this.adjList.get(node2).push(node1) 
        }
    }
    removeEdge(node1,node2){
        if(this.adjList.has(node1)&&this.adjList.has(node2)){
            this.adjList.set(
                node1,
                this.adjList.get(node1).filter((adj)=>adj!==node2)
            )
            this.adjList.set(
                node2,
                this.adjList.get(node2).filter((adj)=>adj!==node1)
            )
        }
        console.log("The Edge Removed Successfully..")
    }
    removeNode(node){
        if(!this.adjList.has(node)){
            console.log("The Node Doesn't Exist");
            return
        }
        for(let adj of this.adjList.get(node)){
            this.removeEdge(adj,node)
        }
        this.adjList.delete(node)
        console.log("The node Deleted Successfully")
    }
    bfs(startNode){
        if (!this.adjList.has(startNode)) {
            console.log("Start node does not exist in the graph.");
            return null;
        }
        let bfs = []
        let queue = []
        let visited = new Set()
        queue.push(startNode)
        visited.add(startNode)
        while(queue.length>0){
            let curr = queue.pop()
            bfs.push(curr)
            for(let val of this.adjList.get(curr)){
                if(!visited.has(val)){
                    visited.add(val)
                    queue.push(val)
                }
            }
        }
        return bfs
    }
    dfs(startNode, visited = new Set(), result = []) {
        if (!this.adjList.has(startNode)) {
            console.log("Start Node Does not exist");
            return [];
        }
        visited.add(startNode);
        result.push(startNode); 
        for (let val of this.adjList.get(startNode)) { 
            if (!visited.has(val)) { 
                this.dfs(val, visited, result); 
            }
        }
        return result; 
    }
    display(){
        console.log(this.adjList)
    }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.display();
graph.removeEdge("A", "B");
graph.display();
graph.removeNode("A");
graph.display();
console.log("BFS Traversal:", graph.bfs("B"));
console.log("DFS Traversal:", graph.dfs("B"));