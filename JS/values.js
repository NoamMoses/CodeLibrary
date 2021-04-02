/*
 * values.js
 * -----------
 * Contains a JSON-array with all of the information - like a DB
 * The structore:
 * 		class: (JSON index)
 * 			class' name (JSON property)
 * 			class' explnation (JSON property)
 * 			class' functions (JSON INDEX)
 * 				function's name (JSON PROPERTY)
 * 				function's signature (**)
 * 				function's explnation (**)
 * 				function's explntion (**)
 * 				function's code (**)
 * ----------------------------------------------
 * All of the information is hard-coded here, except for the code value, which is saved in another external JS file, as a variable
 * - Just so it will be more readable and the file won't be too long
*/

var classes = {
	"Button": {
		"name": "button",
		"nameCap": "Button",
		"exp": button_decleration[0],
		"functionsSum": button_decleration[1],
		"varsSum": button_decleration[2],
		"extraInfo": "",
		"vars": [
			{
				"name": "buttonpin",
				"nameCap": "buttonPin",
				"sign": "int buttonPin;",
				"explain": "חיבור של הכפתור"
			},
			{
				"name": "isswitch",
				"nameCap": "isSwitch",
				"sign": "int isSwitch;",
				"explain": "אינדיקטור אם הכפתור הוא סוויטצ'"
			},
		],
		"functions": [
			{
				"name": "button",
				"nameCap": "Button",
				"sign": "explicit Button(int);",
				"explain": "בודק אם הכפתור לחוץ ומוחזק.",
				"param": "",
				"return": "0 במידה והכפתור לא לחוץ, 1 במידה והכפתור לחוץ (מוחזק).",
				"info": "",
				"code": button_constr
			},
			{
				"name": "ispressedd",
				"nameCap": "isPressedd",
				"sign": "int isPressedd();",
				"explain": "בודק אם הכפתור לחוץ ומוחזק.",
				"param": "",
				"return": "0 במידה והכפתור לא לחוץ, 1 במידה והכפתור לחוץ (מוחזק).",
				"info": "",
				"code": button_isPressedd
			},
			{
				"name": "isclicked",
				"nameCap": "isClicked",
				"sign": "int isClicked();",
				"explain": "בודק אם הכפתור סיים לחיצה מלאה -לחיצה, וחשרור.",
				"param": "",
				"return": "מחזיר 1 במידה והכפור סיים לחיצה מלאה. אחרת, 0.",
				"info": "",
				"code": button_isClicked
			},
			{
				"name": "init1",
				"nameCap": "init1",
				"sign": "int init();",
				"explain": "מאתחל את ה pinMode.",
				"param": "",
				"return": "",
				"info": "",
				"code": button_init1
			},
			// BE CAREFUL, if I have two , then it gives "null", and the loop will read 0, 1, 2, 3, 5 - and skip the null, aka the 4th element
			{
				"name": "init2",
				"nameCap": "init2",
				"sign": "int init(int);",
				"explain": "מאתחל את ה pinMode. מצפה לקבל פרמטר שאומר שהכפתור הזה הוא סוויטצ'.",
				"param": "",
				"return": "",
				"info": "",
				"code": button_init2
			},
		]
	},
	
	
	
	
	
	"Joystick": {
		"name": "joystick",
		"nameCap": "Joystick",
		"exp": joystick_decleration[0],
		"functionsSum": joystick_decleration[1],
		"varsSum": joystick_decleration[2],
		// "varsSum": joystick_decleration[2],
		"extraInfo": "המחלקה יורשת את <a target='_blank' href='" + WEBSITE_URL + "/viewClass.html?class=button" + "'>מחלקת הכפתור.</a>",
		"vars": [
			{
				"name": "xpin",
				"nameCap": "xPin",
				"sign": "int xPin;",
				"explain": "חיבור של ציר x."
			},
			{
				"name": "ypin",
				"nameCap": "yPin",
				"sign": "int yPin;",
				"explain": "חיבור של ציר y."
			},
			{
				"name": "swpin",
				"nameCap": "swPin",
				"sign": "int swPin;",
				"explain": "חיבור של הכפתור.."
			},
			{
				"name": "x",
				"nameCap": "x",
				"sign": "int x;",
				"explain": "ערך של ציר x."
			},
			{
				"name": "y",
				"nameCap": "y",
				"sign": "int y;",
				"explain": "ערך של ציר y."
			},
			{
				"name": "sw",
				"nameCap": "sw",
				"sign": "int sw;",
				"explain": "ערך של הכפתור (0 לא לחוץ, 1 לחוץ)."
			},
		],
		"functions": [
			{
				"name": "joystick",
				"nameCap": "Joystick",
				"sign": "Joystick(int, int, int);",
				"explain": "פונקציית אתחול, קונסטרקטור של המחלקה.",
				"param": "שלושת החיבורים של הג'ויסטיק - ציר x, ציר y, והכפתור.",
				"return": "",
				"info": "",
				"code": joystick_constr
			},
			{
				"name": "init",
				"nameCap": "init",
				"sign": "void init();",
				"explain": "מגדיר את ה pinMode של החיבורים.",
				"param": "",
				"return": "",
				"info": "",
				"code": joystick_init
			},
			{
				"name": "getpurex",
				"nameCap": "getPureX",
				"sign": "int getPureX();",
				"explain": "מחזיר את הערך הנקי של ציר ה x. בטווח של 0-1023.",
				"param": "",
				"return": "מספר שלם",
				"info": "",
				"code": joystick_getPureX
			},
			{
				"name": "getpurey",
				"nameCap": "getPureY",
				"sign": "int getPureY();",
				"explain": "מחזיר את הערך הנקי של ציר ה y. בטווח של 0-1023.",
				"param": "",
				"return": "מספר שלם",
				"info": "",
				"code": joystick_getPureY
			},
			{
				"name": "getx",
				"nameCap": "getX",
				"sign": "int getX();",
				"explain": "מחזיר את הערך של ציר x, לאחר מיפוי - כלומר מחזיר ערך בטווח הרצוי, לדוגמא בטווח של 0-100.",
				"param": "",
				"return": "מספר שלם",
				"info": "",
				"code": joystick_getX
			},
			{
				"name": "gety",
				"nameCap": "getY",
				"sign": "int getY();",
				"explain": "מחזיר את הערך של ציר y, לאחר מיפוי - כלומר מחזיר ערך בטווח הרצוי, לדוגמא בטווח של 0-100.",
				"param": "",
				"return": "מספר שלם",
				"info": "",
				"code": joystick_getY
			},
		]
	},
	
	
	
	"class2": {
		"name": "class2",
		"exp": "this is some explnation test about class2",
		"functions": [
			{"name": "c2_f1", "title": "c2_f1()", "exp": "some explnation text about func1 in class2", "code": "Some code"},
			{"name": "c2_f2", "title": "c2_f2()", "exp": "some explnation text about func2 in class2", "code": "Some code"},
			{"name": "c2_f3", "title": "c2_f3()", "exp": "some explnation text about func3 in class2", "code": "Some code"},
		]
	}
}



/*
At first it was like:

	"class1": [{
		"name": "class1",
		"exp": "this is some explnation test about class1",
		"functions": [
			{"name": "c1_f1", "title": "c1_f1()", "exp": "some explnation text about func1 in class1"},
			{"name": "c1_f2", "title": "c1_f2()", "exp": "some explnation text about func2 in class1"},
			{"name": "c1_f3", "title": "c1_f3()", "exp": "some explnation text about func3 in class1"},
		]
	}],

With:
	"class1": [{
And now it's:
	"class1": [
Otherwise I always had to write [0] when accessing an index - which is useless
- I think I just always created an array of 1 (0) indexes
*/