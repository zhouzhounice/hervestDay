const inquirer = require('inquirer')

inquirer
	.prompt([
		{
			type: "input",
			name:"yourName",
			message:"your name:"
		}
	])
	.then((answers) => {
		console.log(answers.yourName)
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});

// console.log(inquirer)
