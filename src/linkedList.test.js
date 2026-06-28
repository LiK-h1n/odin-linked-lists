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
