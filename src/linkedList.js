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

  return { getHead, size };
}

export { createNode, createLinkedList };
