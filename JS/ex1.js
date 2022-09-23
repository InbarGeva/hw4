console.log("Example 1");

const num1 = Number(prompt("please enter the first number:"));

const num2 = Number(prompt("please enter the second number:"));

const mathOperation = String(prompt("please pick a mathematical operation such as +, -, *, / "));

switch (true) {
    case (mathOperation === '+'):
        const addition = num1 + num2;
        alert(`${num1} ${mathOperation} ${num2} = ${addition}`);
        break;
    case (mathOperation === '-'):
        const subtraction = num1 - num2;
        alert(`${num1} ${mathOperation} ${num2} = ${subtraction}`);
        break;
    case (mathOperation === '*'):
        const multiplication = num1 * num2;
        alert(`${num1} ${mathOperation} ${num2} = ${multiplication}`);
        break;
    case (mathOperation == '/'):
        const division = num1 / num2;
        alert(`${num1} ${mathOperation} ${num2} = ${division}`);
        break;
    default:
        if ((isNaN(num1)) && (isNaN(num2))) {
            alert(`${num1}, ${num2} are not numbers.`);
        } 
        else if ((isNaN(num1)) || (isNaN(num2))) {
            alert(`${num1}, ${num2}: One of these is not a number.`);
        }
  
}