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
