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

  const insertAt = (index, ...values) => {
    if (index < 0 || index > _size) {
      throw new RangeError("Invalid index to insertAt");
    } else {
      if (index === 0) {
        for (let i = values.length - 1; i > -1; --i) {
          prepend(values[i]);
        }
      } else if (index === _size) {
        values.forEach((value) => {
          append(value);
        });
      } else {
        let temp = _head;

        for (let i = 0; i < index - 1; ++i) {
          temp = temp.nextNode;
        }

        const next = temp.nextNode;

        values.forEach((value) => {
          const node = createNode(value);

          temp.nextNode = node;
          temp = temp.nextNode;
          ++_size;
        });

        temp.nextNode = next;
      }
    }
  };

  const removeAt = (index) => {
    if (index < 0 || index >= _size) {
      throw new RangeError("Invalid index for removeAt");
    } else if (_size === 0) {
      return;
    } else if (index === 0) {
      pop();
    } else {
      let temp = _head;

      for (let i = 0; i < index - 1; ++i) {
        temp = temp.nextNode;
      }

      temp.nextNode = temp.nextNode.nextNode;

      if (index === _size - 1) {
        _tail = temp;
      }

      --_size;
    }
  };

  return {
    head,
    tail,
    size,
    prepend,
    append,
    at,
    pop,
    findIndex,
    toString,
    insertAt,
    removeAt,
  };
}

export { createNode, createLinkedList };
