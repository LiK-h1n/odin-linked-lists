function createNode(data) {
  let value = data;
  let next = null;

  return { value, next };
}

function createLinkedList() {
  let head = null;
  let length = 0;

  const getHead = () => head;

  const size = () => length;

  const append = (data) => {
    const node = createNode(data);

    if (head === null) {
      head = node;
    } else {
      let temp = head;

      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = node;
    }

    ++length;
  };

  const prepend = (data) => {
    const node = createNode(data);

    node.next = head;
    head = node;
    ++length;
  };

  return { getHead, size, append, prepend };
}

export { createNode, createLinkedList };
