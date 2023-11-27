class MinStack {
  #limit;
  constructor(customConfig) {
    const config = {
      limit: 1000,
      cmp: Math.min,
      ...customConfig,
    };

    if (config === undefined || config === null || typeof config !== "object") {
      throw new Error("Please pass an appropriate config object");
    }

    if (config.limit === undefined || config.cmp === undefined) {
      throw new Error(
        "Please make sure that the configuration object has the properties limit: number and cmp: a comparison function that returns the minimum of item one and item two"
      );
    }

    this.#limit = config.limit;
    this.stack = [];
    this.cmp = config.cmp;
  }

  push(val) {
    if (this.stack.length < this.#limit) {
      if (this.stack.length === 0) {
        this.stack.push({
          val: val,
          minSoFar: val,
        });
      } else {
        this.stack.push({
          val: val,
          minSoFar: this.cmp(val, this.stack[this.stack.length - 1].minSoFar),
        });
      }
    } else {
      throw new Error(
        `Stack limit of ${
          this.#limit
        } reached. Trying to insert ${val} as the ${this.#limit + 1} element.`
      );
    }
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1].val;
    } else {
      return undefined;
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getMin() {
    if (this.stack.length) {
      return this.stack[this.stack.length - 1].minSoFar;
    } else {
      return undefined;
    }
  }
}

export default MinStack;
