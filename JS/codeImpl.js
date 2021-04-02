/*
* codeImpl - stands for code implemations
* This file will containe the implemantions of the functions - since a JSON file can't contain multiline texts
* - And I can't read the text from a file, since there are security problems, blocking the browser from reading files - and of course from writing files
*/

var code_c1f1 = `
int init(int) {
	/*
	* Inits a function and sets the required variables
	*/
	int i = 0;
	for (i = 0; i < 5; i++) {
		if (i == 2) {
			Serial.println("Value was found at index i and I don't know what I'm writing loal");
		}
	}
}
`;


/*
* ---------------
* | Button class |
* ---------------
*/
/* Saves a summary of the data - just optionary data. Used in the JSON class decleration. */
var button_decleration = [
`
		<span class="sub_title">
			המחלקה אחראית על ניהול הפונקציות של הכפתור. לכול כפתור יש 3 מצבים:	
		</span>
		<ul>
			<li>1) משוחרר.</li>
			<li>2) לחוץ.</li>
			<li>3) לחיצה מלאה – לחיצה ושחרור.</li>
		</ul>
`,
`
			<ul class="catagory_listing listing_ltr">
				<li>int isPressedd();</li>
				<li>int isClicked();</li>
				<li>void init();</li>
				<li>void init(int);</li>
			</ul>
`,
`
			<ul class="catagory_listing listing_ltr">
				<li>int buttonPin;</li>
				<li>int isSwitch;</li>
			</ul>
`
];

var button_constr = `
Button::Button(int buttonPin) {
	this->buttonPin = buttonPin;
}
`;

var button_isPressedd = `
int Button::isPressed(int buttonPin) {
	/*
	* Checks if a button is PRESSED - not CLICKED
	*/
	int button = digitalRead(buttonPin); // Reading the button state
	if (isSwitch) { // It's a switch, need to reverse the output
		if (!button == HIGH) { // Pressed, using "!" to reverse the output
			return 1;
		} else {
			return 0;
		}
	} else { // Just a normal button, return the value that is being returned from the button
		if (button == HIGH) { // Pressed
			return 1;
		} else {
			return 0;
		}
	}
}
`;

var button_isClicked = `
int Button::isClicked() {
  /*
   * Description:
   *  Returns BUTTON_OK if a button was fully clicked.
   *  Fully clicked: pressed, and then released
   * Parameters:
   *  buttonPin - the button pin, to read the data
   * Return value:
   *  0: Button is released
   *  1: Button is pressed
   *  BUTTON_OK: Button was fully clicked
  */
  int pressed = isPressed(this->buttonPin); // Reading the button
  static int progress = 0; // To indicate whether a button was previously pressed. Can be either static, or golobal)
  if (pressed) { // Pressed
    progress = 1;
	return 0;
  } else { // Not pressed
    if (progress == 1) { // Checks if the button was already pressed - means it is now a full click (press and release)
      progress = 0;
      return 1; // Button was fully clicked - pressed and released
    }
  }
  return 0; // Just to use outside the function, not so useful
}
`;

var button_init1 = `
void Button::init() {
	pinMode(this->buttonPin, INPUT);
}
`;

var button_init2 = `

void Button::init(int isSwitched) {
	/*
	* Sets the required pinMode
	* Paraneters:
	* 	isSwitched:
	* 		If it's true, then it is a switch (like a joystick button-switch)
	* 		And then it's needed to reverse the output - because a switch returns 1 when released (not pressed), and 0 when pressed
	* 		I give it a value of the #define SWITCH - which is simply "1", but.. more readable and better
	*/
	if (isSwitched) {
		pinMode(this->buttonPin, INPUT_PULLUP); // Switch
		this->isSwitch = 1; // To indicate whether it's a button or a switch - to know to reverse the output later
	// } else { // Well, why would you use this constructor then? just use the one without the parameter. But just in case
	} else { // Just a normal button
		pinMode(this->buttonPin, INPUT);
		this->isSwitch = 0;
	}
	
}
`;



/*
* ------------------
* | JOYSTICK CLASS |
* ------------------
*/

var joystick_decleration = [
`
		<span class="sub_title">
			המחלקה אחראית על ניהול ג'ויסטיק. לכול ג'ויסטיק יש 3 דברים שצריך לנהל:
		</span>
		<ul>
			<li>1) ציר x.</li>
			<li>2) ציר y.</li>
			<li>3) כפתור.</li>
		</ul>
`,
`
			<ul class="catagory_listing">
				<li>Joystick(int, int, int);</li>
				<li>void init();</li>
				<li>int getPureX();</li>
				<li>int getPureY();</li>
				<li>int getX();</li>
				<li>int getY();</li>
			</ul>
`,
`
			<ul class="catagory_listing">
				<li>int xPin;</li>
				<li>int yPin;</li>
				<li>int swPin;</li>
				<li>int x;</li>
				<li>int y;</li>
				<li>int sw;</li>
			</ul>
`
];

var joystick_constr = `
Joystick::Joystick(int x, int y, int sw) : Button(sw) {
	/*
	* Just initing te variables - not the pinModes
	*/
	this->xPin = x;
	this->yPin = y;
	this->swPin = sw;
}
`;

var joystick_init = `
void Joystick::init() {
	/*
	* Setting the pins to be the correct pinMode.
	* 	The switch pin (sw for switch) requires INPUT_PULLUP - same as resistor, need to write about it in the documentation
	*/
	pinMode(this->xPin, INPUT);
	pinMode(this->yPin, INPUT);
	
	// pinMode(this->swPin, INPUT_PULLUP); // OLD - Should be replaced with the button constructor
	Button::init(SWITCH);
	// Calls the init function of the parent Button class - because it knows how to handle also switches - using the parameter.
	// Handling a switch is just to reverse the returned value, because the switch returns a reversed output
	// A switch returns 1 when released, and 0 when pressed.
	// SWITCH (1) is a #define. It is used to indicate that it is a switch - and therefore it is required to reverse its returned value.
}
`;

var joystick_getPureX = `
int Joystick::getPureX() {
	return analogRead(this->xPin);
}
`;

var joystick_getPureY = `
int Joystick::getPureY() {
	return analogRead(this->yPin);
}
`;

var joystick_getX = `
int Joystick::getX() {
	return map(this->getPureX(), 0, 1023, 0, 100);
}
`;

var joystick_getY = `
int Joystick::getX() {
	return map(this->getPureY(), 0, 1023, 0, 100);
}
`;