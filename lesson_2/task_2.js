var employeeSalaries = {
	Sam : 10000,
	Piter : 12500,
	Sarah : 13800,
	Jack : 8300,
	Monica : 11700
}

var sum = 0;
for ( var key in employeeSalaries) {
	sum += employeeSalaries[key];
}

console.log("The sum of employees' salaries is " + sum);
