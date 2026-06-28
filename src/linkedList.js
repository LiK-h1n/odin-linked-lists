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

  const pop = () => {
    let popped = null;

    if (head === null) {
      return popped;
    } else if (head === tail) {
      popped = head;
      head = null;
      tail = null;
    } else {
      let temp = head;

      while (temp.next !== tail) {
        temp = temp.next;
      }

      popped = tail;
      temp.next = null;
      tail = temp;
    }

    --length;

    return popped;
  };

  const contains = (data) => {
    let temp = head;

    while (temp !== null) {
      if (temp.value === data) {
        return true;
      }

      temp = temp.next;
    }

    return false;
  };

  const find = (data) => {
    let temp = head;
    let index = 0;

    while (temp !== null) {
      if (temp.value === data) {
        return index;
      }

      temp = temp.next;
      ++index;
    }

    return null;
  };

  const toString = () => {
    let string = "";
    let temp = head;

    while (temp !== null) {
      string += `( ${temp.value} ) -> `;

      temp = temp.next;
    }

    string += "null";

    return string;
  };

  const insertAt = (index, ...values) => {
    if (index < 0 || index >= length) {
      throw new RangeError("Invalid index to insert at");
    }

    if (index === 0) {
      values.forEach((value) => {
        prepend(value);
      });
    } else if (index === length - 1) {
      values.forEach((value) => {
        append(value);
      });
    } else {
      let temp = head;

      for (let i = 0; i < index - 1; ++i) {
        temp = temp.next;
      }

      let next = temp.next;

      values.forEach((value) => {
        let node = createNode(value);
        temp.next = node;
        temp = temp.next;
      });

      temp.next = next;
      length += values.length;
    }
  };

  return {
    getHead,
    getTail,
    size,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
  };
}

export { createNode, createLinkedList };
