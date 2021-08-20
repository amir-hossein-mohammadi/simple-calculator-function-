function getNumbers() {
    let n1 = parseInt(prompt("first number: "))
    let n2 = eval(prompt("second number: "))
    let op = prompt("what would operator be: ")
    let calculator = calculate(n1 , n2, op)

    alert(calculator)
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+" :
            return(num1 + num2)
            break;
        case "-" :
            return(num1 - num2)   
            break;
        case "*" :
            return(num1 * num2)
            break;
        case "/" :
            return(num1 / num2)
            break;    
    }
}