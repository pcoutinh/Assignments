// Create a IIFE
(function() {
	var speakWord = "Good Bye";

	var byeSpeaker = {
		speak: function(name) {
			console.log(speakWord + " " + name);
		}
	};

	// Add byeSpeaker object to Global scope
	window.byeSpeaker = byeSpeaker;

}) ();
