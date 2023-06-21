class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) {
        return current;
      }
      if (val < current.val) {
        if (current.left === null) {
          return false;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          return false;
        } else {
          current = current.right;
        }
      }
    }
  }
  //refactored method for find => contains
  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirst() {
    let q = [];
    let visited = [];
    let current = this.root;

    while (current && current.val) {
      visited.push(current.val);
      if (current.left) {
        q.push(current.left);
      }
      if (current.right) {
        q.push(current.right);
      }

      current = q.shift();
    }
    return visited;
  }

  //refactored breadth first traversal

  bfs() {
    let currentNode = this.root;
    let data = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length) {
      currentNode = queue.shift();
      data.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return data;
  }
  // dfspre() {
  //   let data = [];
  //   let currentNode = this.root;
  //   let visited = this.traverse(currentNode);
  //   return visited;
  // }

  DFSPreOrder() {
    let data = [];
    let currentNode = this.root;
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return data;
  }
  // traverse(node) {
  //   let data = [];
  //   data.push(node.val);
  //   console.log(data);
  //   if (node.left) {
  //     this.traverse(node.left);
  //   }
  //   if (node.right) {
  //     this.traverse(node.right);
  //   }
  //   return data;
  // }

  DFSPostOrder() {
    let data = [];
    let currentNode = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(currentNode);
    return data;
  }

  DFSInOrder() {
    let data = [];
    let currentNode = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return data;
  }
}

let tree = new BinarySearchTree();
// tree.insert(30);
// tree.insert(25);
// tree.insert(28);
// tree.insert(18);
// tree.insert(10);
// tree.insert(11);
// tree.insert(42);
// tree.insert(50);
// tree.insert(38);
// tree.insert(47);
// tree.insert(53);

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
