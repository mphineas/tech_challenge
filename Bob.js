module.exports = {
	hey: input => {
		try {
			input = input.trim();
			if (input.length === 0)
				console.log("Fine. Be that way!");
			else if(input[input.length - 1] == "?")
				console.log("Sure.");
			else if (input.toUpperCase() == input && isNaN(input))
				console.log("Whoa, chill out!");
			else
				console.log("Whatever.");
		}catch (error){
			console.log("Whatever.");
		}
	}
}