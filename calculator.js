const [num1,operetor , num2] = process.argv.slice(2);
let result = 0;
switch (operetor) {
    case '+':
         result = parseInt(num1) + parseInt(num2);
        console.log(result);
        break;
        case '-':
        result =  parseInt(num1) - parseInt(num2);
        console.log(result);
        break;
        case '*':
         result =  parseInt(num1) * parseInt(num2);
        console.log(result);
        break;
        case '/':
         result =  parseInt(num1) / parseInt(num2);
        console.log(result);
        break;

    default:
        break;
}