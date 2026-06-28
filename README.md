# Odin: Linked Lists

## Description

A full-featured implementation of a linear Linked List data structure built using JavaScript factory functions and ES6 modules. This project focuses on the fundamental mechanics of computer science data structures, specifically pointer management and manual memory-like linking. The implementation includes a comprehensive suite of methods for manipulating the list, searching for data, and handling out-of-bounds errors, all verified through strict Test-Driven Development (TDD) using the Jest framework.

## Skills Demonstrated

- **Data Structure Architecture:** Building a non-indexed linear collection using independent Node objects and head/tail pointers.
- **Algorithmic Efficiency ($O(1)$ vs $O(n)$):** Optimizing the `append` operation to constant time complexity by maintaining a persistent reference to the list's tail.
- **Manual Pointer Management:** Implementing complex logic for `insertAt` and `removeAt` that requires precisely re-routing `nextNode` references without breaking the chain.
- **Test-Driven Development (TDD):** Utilizing Jest to write robust unit tests for every requirement, ensuring 100% logic accuracy before implementation.
- **Error Handling:** Utilizing the native `RangeError` object to provide professional-grade feedback when accessing invalid list indices.
- **Functional Array Methods:** Leveraging modern JavaScript methods like `.filter()` and `.find()` to simplify internal list traversal and search logic.

## Functionality Overview

- `append(value)` / `prepend(value)`: Add items to the start or end of the list.
- `size()`: Returns total node count.
- `head()` / `tail()`: Access values of the first and last nodes.
- `at(index)`: Retrieve the value of a node at a specific position.
- `pop()`: Remove the head node and return its value.
- `findIndex(value)`: Search for data within the list.
- `toString()`: Visual representation of the list in `( value ) -> ( value ) -> null` format.
- **Extra Credit:** `insertAt(index, ...values)` for bulk middle-insertion and `removeAt(index)` for targeted deletion.
