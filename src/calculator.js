class calculator {
    add(a, b) {
        if(typeof a == "number" && typeof b == "number") {
            return a + b;
        }
        else {
            throw new Error();
        }
    }
    subtract(a, b) {
        if(typeof a == "number" && typeof b == "number") {
            return a - b;
        }
        else {
            throw new Error();
        }
    }
    divide(a , b) {
        if(b == 0) {
            throw new Error();
        }
        else if(typeof a == "number" && typeof b == "number") {
            return a / b;
        }
        else {
            throw new Error();
        }
        
    }
}

export default calculator = new calculator();

