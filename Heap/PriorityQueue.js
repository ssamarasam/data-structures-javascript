class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let element = new Node(val, priority);
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let parentIdx = 0;

    while (true) {
      parent = this.values[parentIdx];
      let leftIdx = 2 * parentIdx + 1;
      let rightIdx = 2 * parentIdx + 2;
      let swap = null;
      let left;
      let right;

      if (leftIdx < this.values.length) {
        left = this.values[leftIdx];
        if (left.priority < parent.priority) {
          console.log("left");
          swap = leftIdx;
        }
      }

      if (rightIdx < this.values.length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right.priority < parent.priority) ||
          (swap !== null && right.priority < left.priority)
        ) {
          console.log("right");
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      [this.values[parentIdx], this.values[swap]] = [
        this.values[swap],
        this.values[parentIdx],
      ];
      console.log(this.values);
      parentIdx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
