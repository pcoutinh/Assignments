// Create a IIFE
( function () {
	var speakWord = "Hello";

	var helloSpeaker = {
		speak: 
			function(name) {
				console.log(speakWord + " " + name);
			}
	};

	// Add helloSpeaker object to Global scope
	window.helloSpeaker = helloSpeaker;
})();