
let num1 = window.prompt("Enter a number");
let num2 = window.prompt("Enter another number");
let operator = window.prompt("Enter operator from the list below: +, -, *, /");

num1 = parseFloat(num1);
num2 = parseFloat(num2);



if (operator === "+") {
    window.alert(num1 + num2);
}

else if (operator === "-") {
    window.alert(num1 - num2);
}

else if (operator === "*") {
    window.alert(num1 * num2);
}

else if (operator === "/") {
    window.alert(num1 / num2);
}

else window.alert("Error");

// else {
//     window.alert(Error);
// }


    


