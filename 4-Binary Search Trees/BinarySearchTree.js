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
}

let tree = new BinarySearchTree();
tree.insert(30);
tree.insert(25);
tree.insert(28);
tree.insert(18);
tree.insert(10);
tree.insert(11);
tree.insert(42);
tree.insert(50);
tree.insert(38);
tree.insert(47);
tree.insert(53);
