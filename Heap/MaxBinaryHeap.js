class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  extractMax() {
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
        if (left > parent) {
          console.log("left");
          swap = leftIdx;
        }
      }

      if (rightIdx < this.values.length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right > parent) ||
          (swap !== null && right > left)
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

let heap = new MaxBinaryHeap();
// 41 39 33 18 27 12
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// sinkDown() {
//   let parentIdx = 0;
//   parent = this.values[parentIdx];

//   while (
//     parentIdx >= 0 &&
//     parentIdx !== this.values.length - 1 &&
//     parentIdx !== null
//   ) {
//     let leftIdx = 2 * parentIdx + 1;
//     let left = this.values[leftIdx];
//     let rightIdx = 2 * parentIdx + 2;
//     let right = this.values[rightIdx];
//     // if (parentIdx === this.values.length - 1) break;
//     if (left > parent && left > right && left !== undefined) {
//       [this.values[leftIdx], this.values[parentIdx]] = [
//         this.values[parentIdx],
//         this.values[leftIdx],
//       ];
//       console.log("left", this.values);
//       parentIdx = leftIdx;
//     } else if (right > parent && right > left && right !== undefined) {
//       [this.values[rightIdx], this.values[parentIdx]] = [
//         this.values[parentIdx],
//         this.values[rightIdx],
//       ];
//       console.log("right", this.values);
//       parentIdx = rightIdx;
//     } else {
//       parentIdx = null;
//     }
//   }
// }
