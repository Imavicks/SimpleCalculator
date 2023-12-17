//1. Define prompt so we can respond from our IDE 
const prompt = require('prompt-sync')();

//2. Create a prompt for user to select the type of operation to perform
let operator = prompt('Select an operator, a. Addition, b. Subtraction, c. Division, d. Multiplication: ').toLowerCase();

//3. Create a function that checks the user selection of operator if the operator selected is correct proceed else ask the user to input a correct selector and start Over
function checkOperator() {
    if (operator === 'a' || operator === 'b' || operator === 'c' || operator === 'd' && operator != '') {
    performOperation();
 } else {
    console.log('Please insert a valid input of operator!');
 }
resetOperatorSelection();
}
checkOperator();

//4. create  a function to perform our calculations based on the operator selected by the user
function performOperation() {
    // a. Ask user for first number or input
    let firstInput = parseInt(prompt('Please insert your first number: '));

     //b. Ask user for second number to input
     let secondInput = parseInt(prompt('Please insert your second number: '));

      // c. Perfom the  operation selected on the first and second numbers inputed

      if (operator === 'a'){
        let addition = firstInput + secondInput
        console.log(`The sum is ${addition}`);
        return addition;
      } else if (operator === 'b'){
        let substraction = firstInput - secondInput
        console.log(`The difference is ${substraction}`);
        return substraction;
       } else if (operator === 'c'){
            let division = firstInput / secondInput
            console.log(`The quotient is ${division}`);
            return division;
        } else if (operator === 'd'){
            let multiplication = firstInput * secondInput
            console.log(`The product is ${multiplication}`);
            return multiplication;
        } else{
            console.log('Please insert a valid number or input');
        }
      performOperation();
}
 
//5. create a function to reset the input of operator selection and restart the process when there is a wrong selection of operator
function resetOperatorSelection() {
    operator = prompt('Select an operator, a. Addition, b. Subtractin, c. Division, d. Multiplication: ');
   checkOperator();
   }