/*
	https://www.codewars.com/kata/586dd26a69b6fd46dd0000c0/solutions/javascript
	
  * task *

  make a interpreter for a esolang

  there are only two commands

  +: increase the memory cell from 0 - 256 (wraps)
  .: gets the current memory cell length and converts to ascii

*/

// pseudo code

/*
1. store the string into an array.
2. loop through array and keep count how many + there have been starting from zero.
3. if a "." is spotted get the current number of "+" counted and transfrom to ascii code.
	3a. String.fromCharCode() use this method to get the ascii code

*/


function myFirstInterpreter(code) {
	console.log(code);
	code = code.replace(/([^.+])/g, "");
	console.log(code);
	var arr = code.split("");
	var count = 0;
	var output = "";
	arr.forEach(function (char) {
		if (char === ".") {
			output += String.fromCharCode(count);
		} else if (char === "+") {
			count++;
		}

		if (count >= 256) {
			count = 0;
		}
	});

  return output;
}

  // Hello World Program - outputs the string "Hello, World!"
myFirstInterpreter("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++.+++++++..+++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++.+++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.") // "Hello, World!");
  // Outputs the uppercase English alphabet
