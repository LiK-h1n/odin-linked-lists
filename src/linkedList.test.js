import { createLinkedList, createNode } from "./linkedList";

describe("LinkedList - Basics", () => {
  test("Node factory returns value and next as null", () => {
    const node = createNode("test");
    expect(node.value).toBe("test");
    expect(node.next).toBeNull();
  });

  test("New list has null head and size 0", () => {
    const list = createLinkedList();
    expect(list.getHead()).toBeNull();
    expect(list.size()).toBe(0);
  });
});

describe("LinkedList - Growing", () => {
  test("append adds to the end of the list", () => {
    const list = createLinkedList();
    list.append("A");
    list.append("B");
    expect(list.getHead().value).toBe("A");
    expect(list.getHead().next.value).toBe("B");
    expect(list.size()).toBe(2);
  });

  test("prepend adds to the start of the list", () => {
    const list = createLinkedList();
    list.append("B");
    list.prepend("A");
    expect(list.getHead().value).toBe("A");
    expect(list.size()).toBe(2);
  });
});

describe("LinkedList - Accessors", () => {
  let list;
  beforeEach(() => {
    list = createLinkedList();
    list.append("A");
    list.append("B");
    list.append("C");
  });

  test("tail returns the last node", () => {
    expect(list.getTail().value).toBe("C");
  });

  test("at(index) returns node at correct index", () => {
    expect(list.at(0).value).toBe("A");
    expect(list.at(1).value).toBe("B");
    expect(list.at(2).value).toBe("C");
  });

  test("at(index) returns null if index is out of bounds", () => {
    expect(list.at(5)).toBeNull();
  });
});

describe("LinkedList - Search and Remove", () => {
  let list;
  beforeEach(() => {
    list = createLinkedList();
    list.append("apple");
    list.append("banana");
    list.append("cherry");
  });

  test("pop removes the last element", () => {
    list.pop();
    expect(list.size()).toBe(2);
    expect(list.getTail().value).toBe("banana");
    expect(list.getTail().next).toBeNull();
  });

  test("contains returns true if value exists", () => {
    expect(list.contains("banana")).toBe(true);
    expect(list.contains("dragonfruit")).toBe(false);
  });

  test("find returns the correct index or null", () => {
    expect(list.find("apple")).toBe(0);
    expect(list.find("cherry")).toBe(2);
    expect(list.find("dragonfruit")).toBeNull();
  });
});

describe("LinkedList - String Format", () => {
  test("toString prints the correct format", () => {
    const list = createLinkedList();
    list.append("dog");
    list.append("cat");
    list.append("parrot");
    expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> null");
  });

  test("toString handles empty list", () => {
    const list = createLinkedList();
    expect(list.toString()).toBe("null");
  });
});

describe("LinkedList - Extra Credit (Corrected)", () => {
  let list;
  beforeEach(() => {
    list = createLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
  });

  describe("insertAt(index, ...values)", () => {
    test("should insert multiple values at the given index", () => {
      // Starting list: ( 1 ) -> ( 2 ) -> ( 3 )
      list.insertAt(1, 10, 11);
      // Expected: ( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 )
      expect(list.toString()).toBe(
        "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null"
      );
      expect(list.size()).toBe(5);
    });

    test("should insert at index 0 (updating head)", () => {
      list.insertAt(0, 99);
      expect(list.getHead().value).toBe(99);
      expect(list.at(1).value).toBe(1);
    });

    test("should throw RangeError if index is below 0", () => {
      expect(() => list.insertAt(-1, 5)).toThrow(RangeError);
    });

    test("should throw RangeError if index is above list size", () => {
      expect(() => list.insertAt(10, 5)).toThrow(RangeError);
    });
  });

  describe("removeAt(index)", () => {
    test("should remove node at the correct index", () => {
      // List: 1, 2, 3
      list.removeAt(1); // Remove '2'
      expect(list.toString()).toBe("( 1 ) -> ( 3 ) -> null");
      expect(list.size()).toBe(2);
    });

    test("should remove head at index 0", () => {
      list.removeAt(0);
      expect(list.getHead().value).toBe(2);
    });

    test("should throw RangeError if index is out of bounds", () => {
      expect(() => list.removeAt(-1)).toThrow(RangeError);
      expect(() => list.removeAt(5)).toThrow(RangeError);
    });
  });
});
