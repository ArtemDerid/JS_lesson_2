function mathOperation(firstNumber, secondNumber, operationType) {
	try {
		if (operationType == "plus") {
			result = firstNumber + secondNumber;
		}

		if (operationType == "subtract") {
			result = firstNumber - secondNumber;
		}

		if (operationType == "multiply") {
			result = firstNumber * secondNumber;
		}

		if (operationType == "divide") {
			result = firstNumber / secondNumber;
		}
		console.log("The result is " + result);
	} catch (err) {
		console.log("Wrong input! firstNumber and secondNumber should be of type Number, and operationType of type String!!!");
		console.log("There are four operations available: plus, subtract, multiply and divide");
	}
}

mathOperation(5, 6, "divide");