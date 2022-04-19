function calc(expression)
{
    secondnum = expression[expression.length - 1];
    expression = expression.substring(0, expression.length - 1);

    if (secondnum === ')')
    {
        secondnum = calc(expression);
        expression = expression.substring(0, expression.length - 6);
    }

    expression = expression.substring(0, expression.length - 1);

    console.log(expression);
    console.log(secondnum);

    firstnum = expression[expression.length - 1];
    expression = expression.substring(0, expression.length - 1);

    if (firstnum === ')')
    {
        firstnum = calc(expression);
        expression = expression.substring(0, expression.length - 6);
    }

    expression = expression.substring(0, expression.length - 1);

    console.log(expression);
    console.log(firstnum);
    console.log(secondnum);

    operation = expression[expression.length - 1];
    expression = expression.substring(0, expression.length - 3);
    
    switch (operation)
    {
        case '+':
            return Number(firstnum) + Number(secondnum);
        case '*':
            return Number(firstnum) * Number(secondnum);
        case '/':
            return Number(firstnum) / Number(secondnum);
        case '-':
            return Number(firstnum) - Number(secondnum);
    }
    
    console.log(expression);
    console.log(operation);
    console.log(firstnum);
    console.log(secondnum);
    console.log("Ok");
}