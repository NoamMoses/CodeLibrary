$(document).ready(function(){
});

function analyse(jsonObj, className, funcName) {
	var arrSize = Object.keys(jsonObj.Button.functions[0]).length; // Takes a sample from the first class, first function - but should be always the same - 3
	var classFound = false, funcFound = false; // To indicate whether a class/function was found or not
	
	var DATA = [];
	
	/* Indexing the classes */
	var classesI = []; // Will containe the classes names
	for (var currentClass in jsonObj) {
		classesI.push(currentClass); // Contains the names of the classes (aka json indexes) - useful for later on comparing the names, when searching for a specific class
	}
	
	
	var numOfClasses = classesI.length; // Number of classes, aka number of JSON indexes
	var i = 0, classFoundI = 0, funcFoundI = 0; // Loop counter, and to save the index where the class/function was found at, for later use
	
	for (i = 0; i < numOfClasses; i++) { // Searching for a class
		var currentRow = jsonObj[classesI[i]].name; // Current function name, to check if there is a match
		if (currentRow == className) {  // Class was found
			classFoundI = i; // Saving the index where the function was found, for later access
			classFound = true;
			break; // No need to continue searching
		} else { // Class wasn't found
		}
	}
	
	for (i = 0; i < arrSize; i++) { // Searching for a function
		try {
			/*
			* Can occur just when searching for a function (and not when searching for a class) because when searching for a function,
			* I use the class, and can search for a function in the wrong class - which will cause "undefined" error.
			* However I can't get this error when searching for a class, because a class-search is independent, and doesn't have as many variables as fucntion-search has
			*/
			var currentRow = jsonObj[classesI[classFoundI]].functions[i].name; // Current function name, to check if there is a match
		} catch (e) { // Error handling, empty for now
		}
		if (currentRow == funcName) { // Function was found
			funcFoundI = i; // Saving the index where the function was found, for later access
			funcFound = true;
			break;
		} else { // Function wasn't found
		}
	}
	
	
	// classFound == false ? printErr("CLASS WASNT FOUND", 1) : printOK("CLASS WAS FOUND", 1);
	// funcFound == false ? printErr("FUNCTION WASNT FOUND", 1) : printOK("FUNCTION WAS FOUND", 1);
	
	if (classFound && funcFound) {
		var desiredClass = jsonObj[classesI[classFoundI]];
		var desiredFunc = jsonObj[classesI[classFoundI]].functions[funcFoundI];
		DATA = {
			"class": desiredClass,
			"func": desiredFunc // Technically, this variable is useless, since it inherit from its parent, but just to make it easier for me
		};
		return DATA;
	} else {
		printErr("PROBLEM WHEN GETTING DATA", 1);
		return -1;
	}
}


function analyseClass(jsonObj, className) {
	var arrSize = Object.keys(jsonObj.Button.functions[0]).length; // Takes a sample from the first class, first function - but should be always the same - 3
	var classFound = false, funcFound = false; // To indicate whether a class/function was found or not
	
	var DATA = [];
	
	/* Indexing the classes */
	var classesI = []; // Will containe the classes names
	for (var currentClass in jsonObj) {
		classesI.push(currentClass); // Contains the names of the classes (aka json indexes) - useful for later on comparing the names, when searching for a specific class
	}
	
	var numOfClasses = classesI.length; // Number of classes, aka number of JSON indexes
	var i = 0, classFoundI = 0, funcFoundI = 0; // Loop counter, and to save the index where the class/function was found at, for later use
	
	for (i = 0; i < numOfClasses; i++) { // Searching for a class
		var currentRow = jsonObj[classesI[i]].name; // Current function name, to check if there is a match
		if (currentRow == className) {  // Class was found
			classFoundI = i; // Saving the index where the function was found, for later access
			classFound = true;
			break; // No need to continue searching
		} else { // Class wasn't found
		}
	}
		
	if (classFound) {
		var desiredClass = jsonObj[classesI[classFoundI]];
		return desiredClass;
	} else {
		printErr("PROBLEM WHEN GETTING CLASS DATA", 1);
		return -1;
	}
}

function getAllClassesNames(jsonObj) {
	/*
	 * Returns an array of all the classes' names - useful because JSON can be accessed also via string
	 * For example: myJson["className"] is equal to myJson.className
	*/
	var classesI = []; // Will containe the classes names
	for (var currentClass in jsonObj) {
		classesI.push(currentClass);
	}
	// document.write("classesI: " + classesI + "<br />");
	return classesI;
}

function getFuncNamesByClass(jsonObj, className) {
	/*
	* Returnsa ar array of all of the functions' names, of the required class - given by the parameter
	*/
	var allClasses = getAllClassesNames(jsonObj);
	var found = false;
	var currentClassFunc; // The required class as JSON
	var allFunctions = []; // All of the functions' NAMES
	for (var i in allClasses) {
		var currentClassName = jsonObj[allClasses[i]].name;
		if (currentClassName == className) {
			currentClassFunc = jsonObj[allClasses[i]].functions; // Json of all the functions
			found = true;
			break;
		}
	}
	for (var i in currentClassFunc) {
		allFunctions.push(currentClassFunc[i].name);
	}
	if (found) {
		return currentClassFunc;
	} else {
		return -1;
	}
}