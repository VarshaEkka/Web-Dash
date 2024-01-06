function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } 
    else {
        return "Error: Division by zero";
    }
}

function calculator() {
    let operation = prompt("Enter operation (+, -, *, /):");
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));

    switch (operation) {
        case "+":
            console.log(`Result: ${add(num1, num2)}`);
            break;
        case "-":
            console.log(`Result: ${subtract(num1, num2)}`);
            break;
        case "*":
            console.log(`Result: ${multiply(num1, num2)}`);
            break;
        case "/":
            console.log(`Result: ${divide(num1, num2)}`);
            break;
        default:
            console.log("Invalid operation");
    }
}

calculator();
