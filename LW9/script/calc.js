function calc(expr)
{
	const operations = ['+', '-', '*', '/'];
	if (typeof expr !== 'string') {
		throw new Error(`Argument error: ${expr} is not a string`);
	}
	if (expr.length === 0) {
		throw new Error(`Argument error: empty expression`);
	}

	expr = expr.replace(/[(,)]/g, ' ').replace(/ +/g, ' ').trim().split(' ');

	if (!isOperation(expr[0]))
	{
		throw new Error(`No operator`);
	}
	else
	{
		expr.reverse();
	}

	let numbers = [];
	expr.forEach(element => {
		if (isFinite(element))
		{
			numbers.push(parseFloat(element));
		}
		else if (isOperation(element))
		{
			op1 = numbers.pop();
			op2 = numbers.pop();
			if (isNaN(op2)) 
			{
				throw new Error(`Few arguments`);
			}
			switch (element) 
			{
				case '+':
					numbers.push(op1 + op2);
					break;
				case '-':
					numbers.push(op1 - op2);
					break;
				case '*':
					numbers.push(op1 * op2);
					break;
				case '/':
					numbers.push(op1 / op2);
					break;
			}
		}
		else
		{
			throw new Error(`"${element}" unknown symbol`);
		}
	});
	if (numbers.length == 1)
	{
		return numbers.pop();
	}
	else
	{
		throw new Error(`Extra variables`);
	}

	function isOperation(operator) {
		return operations.includes(operator);
	}
}