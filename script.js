
let num1 = window.prompt("Enter a number");
let num2 = window.prompt("Enter another number");
let operator = window.prompt("Enter operator from the list below: +, -, *, /");

num1 = parseFloat(num1);
num2 = parseFloat(num2);



if (operator === "+") {
    document.write(num1 + num2);
}

else if (operator === "-") {
    document.write(num1 - num2);
}

else if (operator === "*") {
    document.write(num1 * num2);
}

else {
    document.write(num1 / num2);
}


    


