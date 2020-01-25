import "colors";

const eventHandlers = {
	validateInput: function(input) {
		if (input.length < 1) {
			console.log("missing input".red);
			return false;
		} else {
			return true;
		}
	}
};

export default eventHandlers;
