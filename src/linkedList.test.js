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
