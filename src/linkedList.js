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

    if (_size !== 0) {
      node.nextNode = _head;
    } else {
      _tail = node;
    }

    _head = node;
    ++_size;
  };

  const append = (data) => {
    const node = createNode(data);

    if (_size !== 0) {
      _tail.nextNode = node;
      _tail = node;
    } else {
      _tail = node;
      _head = node;
    }

    ++_size;
  };

  const at = (index) => {
    if (_size === 0 || index < 0 || index >= _size) {
      return;
    }

    let temp = _head;

    for (let i = 0; i < index; ++i) {
      temp = temp.nextNode;
    }

    return temp.value;
  };

  const pop = () => {
    if (_size === 0) {
      return;
    } else {
      const popped = _head.value;

      if (_size !== 1) {
        _head = _head.nextNode;
      } else {
        _head = undefined;
        _tail = undefined;
      }

      --_size;

      return popped;
    }
  };

  const findIndex = (data) => {
    if (_size === 0) {
      return -1;
    }

    let index = 0;
    let temp = _head;

    while (temp !== null) {
      if (temp.value === data) {
        return index;
      }

      temp = temp.nextNode;
      ++index;
    }

    return -1;
  };

  const toString = () => {
    let string = "";

    if (_size === 0) {
      return string;
    } else {
      let temp = _head;

      while (temp !== null) {
        string += `( ${temp.value} ) -> `;
        temp = temp.nextNode;
      }

      string += "null";

      return string;
    }
  };

  return { head, tail, size, prepend, append, at, pop, findIndex, toString };
}

export { createNode, createLinkedList };
