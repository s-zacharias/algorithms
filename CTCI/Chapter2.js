// LinkedList
const LinkedList = () => {
  this.head = null;
  this.tail = null;
};

const Node = (value) => {
  this.value = value;
  this.next = null;
};

// 2.1 Remove Dups
// Write code to remove duplicates from an unsorted linked list.

LinkedList.prototype.removeDups = () => {
  let head = this.head;
  const values = {};

  while (head.next !== null) {
    if (head.value in values) {
      head.next = head.next.next;
    } else {
      values[head.value] = true;
    }
    head = head.next;
  }

  return head;
};

// no buffer

LinkedList.prototype.removeDupsNoBuffer = () => {
  let current = new Node(this.head);

  while (current !== null) {
    let runner = new Node(current);

    while (runner.next !== null) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
};
