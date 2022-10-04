class calculator {
    constructor() {
        this.result = 0;
    }

    Add(a, b) {
        this.result = a + b;
        return this;
    }

    Subtract(a, b) {
        this.result = a - b;
        return this;
    }

    Multiply(a ,b) {
        this.result = a * b;
        return this;
    }

    Divide(a, b) {
        this.result = a/b;
        return this;
    }

}

console.log(new calculator().Add(7, 8).result);