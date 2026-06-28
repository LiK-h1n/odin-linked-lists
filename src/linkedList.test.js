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

describe("LinkedList - Pop and Search", () => {
  let list;
  beforeEach(() => {
    list = createLinkedList();
    list.append("A");
    list.append("B");
  });

  test("pop() removes head and returns its value", () => {
    const val = list.pop();
    expect(val).toBe("A");
    expect(list.head()).toBe("B");
    expect(list.size()).toBe(1);
  });

  test("findIndex returns index or -1", () => {
    expect(list.findIndex("B")).toBe(1);
    expect(list.findIndex("Z")).toBe(-1);
  });
});

describe("LinkedList - toString", () => {
  test("toString returns empty string when list is empty", () => {
    const list = createLinkedList();
    expect(list.toString()).toBe("");
  });

  test("toString matches required format", () => {
    const list = createLinkedList();
    list.append("apple");
    list.append("banana");
    expect(list.toString()).toBe("( apple ) -> ( banana ) -> null");
  });
});
