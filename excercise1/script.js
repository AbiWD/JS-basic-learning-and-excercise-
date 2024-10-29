var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfTheName = name.slice(1,name.length);
var lowerCaseRestOfTheName = restOfTheName.toLowerCase();
var finalName = upperCaseFirstChar+lowerCaseRestOfTheName;
alert("Hello "+finalName);