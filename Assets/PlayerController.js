	#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var speed : float = 100;
var player : GameObject;
var mainCam : Camera;

function Update () 
{
	if(Input.GetKey(moveUp)) {
		rigidbody2D.velocity.y = speed;
	}
	else if(Input.GetKey(moveDown)) {
		rigidbody2D.velocity.y = speed * -1;
	}
	else {
		if(Input.touchCount > 0) {
		
			for(var i = 0 ; i < Input.touchCount ; i++) {
				if(Input.GetTouch(i).phase == TouchPhase.Moved || Input.GetTouch(i).phase == TouchPhase.Began ) {
				
					var touchDeltaPosition : Vector2 = Input.GetTouch(i).deltaPosition;
					var yPos = Input.GetTouch(i).position.y;
					
					GameManager.testTouch1 = yPos;
					
					
					if(Input.GetTouch(i).position.x < Screen.width/2)
						player = GameObject.Find("Player01");
					else 
						player = GameObject.Find("Player02");
					
					
					player.transform.position.y = mainCam.ScreenToWorldPoint(new Vector3(0,yPos,0)).y;
					//player.rigidbody2D.velocity.y = touchDeltaPosition.y * 30;		
									
				}
			}
		}
		else {
			rigidbody2D.velocity.y = 0;
		}
	} 
	rigidbody2D.velocity.x = 0;
}