function createNode() {
  let value = null;
  let nextNode = null;

  return { value, nextNode };
}

function createLinkedList() {
  let _head;
  let _tail;

  const head = () => _head;

  const tail = () => _tail;

  return { head, tail };
}

export { createNode, createLinkedList };
