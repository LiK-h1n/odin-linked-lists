function createNode(data = null) {
  let value = data;
  let nextNode = null;

  return { value, nextNode };
}

function createLinkedList() {
  let _head;
  let _tail;
  let _size = 0;

  const head = () => (_head === undefined ? _head : _head.value);

  const tail = () => (_tail === undefined ? _tail : _tail.value);

  const size = () => _size;

  const prepend = (data) => {
    const node = createNode(data);

    if (_head !== undefined) {
      node.nextNode = _head;
    } else {
      _tail = node;
    }

    _head = node;
    ++_size;
  };

  const append = (data) => {
    const node = createNode(data);

    if (_tail !== undefined) {
      _tail.nextNode = node;
      _tail = node;
    } else {
      _tail = node;
      _head = node;
    }

    ++_size;
  };

  const at = (index) => {
    if (_head === undefined || index < 0 || index >= _size) {
      return;
    }

    let temp = _head;

    for (let i = 0; i < index; ++i) {
      temp = temp.nextNode;
    }

    return temp.value;
  };

  return { head, tail, size, prepend, append, at };
}

export { createNode, createLinkedList };
