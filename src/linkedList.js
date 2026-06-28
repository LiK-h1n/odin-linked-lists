function createNode(data) {
  let value = data;
  let next = null;

  return { value, next };
}

function createLinkedList() {
  let head = null;
  let tail = null;
  let length = 0;

  const getHead = () => head;

  const getTail = () => tail;

  const size = () => length;

  const append = (data) => {
    const node = createNode(data);

    if (head === null) {
      head = node;
      tail = node;
    } else {
      let temp = head;

      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = node;
      tail = node;
    }

    ++length;
  };

  const prepend = (data) => {
    const node = createNode(data);

    node.next = head;
    head = node;
    ++length;
  };

  const at = (index) => {
    let temp = head;

    for (let i = 0; i < index; ++i) {
      if (temp === null) {
        return null;
      }

      temp = temp.next;
    }

    return temp;
  };

  return { getHead, getTail, size, append, prepend, at };
}

export { createNode, createLinkedList };
