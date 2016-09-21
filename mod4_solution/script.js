/* So, the final output on the console should look like this:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// Create a IIFE
(function () {
  // Define an array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop thru the names array
  for (var n in names) {

    // Get the first letter from the current array element
    letter = names[n].charAt(0).toLowerCase();

    // If the first letter is J/j, invoke the bye method, else 
    // invoke the hello method
    if ( letter === "j") {
      byeSpeaker.speak(names[n]);
    }
    else {
      helloSpeaker.speak(names[n]);
    }
  } 
})();