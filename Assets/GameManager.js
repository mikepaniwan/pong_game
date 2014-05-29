#pragma strict

var mainCam : Camera;
static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

static var testTouch1 : float = 0;
static var testTouch2 : float = 0;

var theSkin : GUISkin;

var theBall : Transform;


function Start() {
	theBall = GameObject.FindGameObjectWithTag("Ball").transform;
}
static function Score (wallName : String) {
	if(wallName == "rightWall") {
		playerScore01 += 1;
	}
	else {
		playerScore02 += 1;
	}
	
	Debug.Log("Player score 1 is " + playerScore01);
	Debug.Log("Player score 2 is " + playerScore02);
}

function OnGUI() {
	GUI.skin = theSkin;
	GUI.Label (new Rect(Screen.width/2 - 150-20, 20, 100, 100),"" + playerScore01);
	GUI.Label (new Rect(Screen.width/2 + 150-20, 20, 100, 100),"" + playerScore02);
	
	GUI.Label (new Rect(Screen.width/2 - 150-20, Screen.height - 60, 100, 100),"" + testTouch1);
	GUI.Label (new Rect(Screen.width/2 + 150-20, Screen.height - 60, 100, 100),"" + testTouch2);

	if(GUI.Button(new Rect(Screen.width/2 - 121/2, 20, 121, 53) , "RESET")) {
		playerScore01 = 0;
		playerScore02 = 0;
		theBall.gameObject.SendMessage("ResetBall");
	}

}