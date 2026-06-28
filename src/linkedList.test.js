import { createLinkedList, createNode } from "./linkedList";

describe("LinkedList - Basics", () => {
  test("Node factory has null defaults", () => {
    const node = createNode();
    expect(node.value).toBeNull();
    expect(node.nextNode).toBeNull();
  });

  test("Empty list returns undefined for head and tail values", () => {
    const list = createLinkedList();
    expect(list.head()).toBeUndefined();
    expect(list.tail()).toBeUndefined();
  });
});

describe("LinkedList - Growing & Size", () => {
  test("append and prepend update head and tail values", () => {
    const list = createLinkedList();
    list.append("B");
    list.prepend("A");
    expect(list.head()).toBe("A");
    expect(list.tail()).toBe("B");
    expect(list.size()).toBe(2);
  });
});

describe("LinkedList - at(index)", () => {
  test("at(index) returns the value at that index", () => {
    const list = createLinkedList();
    list.append("zero");
    list.append("one");
    expect(list.at(0)).toBe("zero");
    expect(list.at(1)).toBe("one");
    expect(list.at(2)).toBeUndefined();
  });
});
