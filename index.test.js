import MinStack from "./index";

describe("MinStack push operations", () => {
  it("MinStack must be created with default configurations", () => {
    const myStack = new MinStack();

    expect(myStack.limit === 1000);
    expect(myStack.cmp === Math.min);
  });

  it("MinStack must be created with only limit modified", () => {
    const myStack = new MinStack({
      limit: 5,
    });

    expect(myStack.limit === 5);
    expect(myStack.cmp === Math.min);
  });

  it("MinStack must be created with only cmp modified", () => {
    const myStack = new MinStack({
      cmp: Math.max,
    });

    expect(myStack.limit === 5);
    expect(myStack.cmp === Math.max);
  });

  it("Invalid config object must be caught", () => {
    try {
      const myStack = new MinStack(null);
    } catch (error) {
      expect(error.message).toBe("Please pass an appropriate config object");
    }

    try {
      const myStack = new MinStack(undefined);
    } catch (error) {
      expect(error.message).toBe("Please pass an appropriate config object");
    }

    try {
      const myStack = new MinStack(1);
    } catch (error) {
      expect(error.message).toBe("Please pass an appropriate config object");
    }

    try {
      const myStack = new MinStack("test");
    } catch (error) {
      expect(error.message).toBe("Please pass an appropriate config object");
    }

    try {
      const myStack = new MinStack([]);
    } catch (error) {
      expect(error.message).toBe("Please pass an appropriate config object");
    }

    try {
      const myStack = new MinStack(1, 2);
    } catch (error) {
      expect(error.message).toBe("Please pass an appropriate config object");
    }
  });

  it("MinStack must allow insertions till limit and then throw error", () => {
    try {
      const myStack = new MinStack({
        limit: 5,
      });

      expect(myStack.limit === 5);
      expect(myStack.cmp === Math.min);

      myStack.push(1);
      myStack.push(2);
      myStack.push(3);
      myStack.push(4);
      myStack.push(5);
      myStack.push(6);
    } catch (error) {
      expect(error.message).toBe(
        "Stack limit of 5 reached. Trying to insert 6 as the 6 element."
      );
    }
  });

  it("MinStack must pop correctly", () => {
    const myStack = new MinStack({
      limit: 3,
    });

    expect(myStack.limit === 3);

    myStack.pop();

    myStack.push(1);
    myStack.push(2);

    expect(myStack.getMin()).toBe(1);
    expect(myStack.peek()).toBe(2);

    myStack.pop();
    myStack.pop();
    myStack.pop();

    expect(myStack.isEmpty()).toBe(true);
    expect(myStack.getMin()).toBe(undefined);
    expect(myStack.peek()).toBe(undefined);
  });
});
