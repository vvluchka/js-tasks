class calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        this.result = a + b;
        return this;
    }

    subtract(a, b) {
        this.result = a - b;
        return this;
    }

    multiply(a ,b) {
        this.result = a * b;
        return this;
    }

    divide(a, b) {
        this.result = a/b;
        return this;
    }

}

console.log(new calculator().divide(10, 2));