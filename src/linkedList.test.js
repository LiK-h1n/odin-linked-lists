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