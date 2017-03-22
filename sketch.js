// P5 STUFF

var fillR, fillG, fillB;
var circle;
var circleDiameter = 100;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	fill(0);
	stroke(160);
	ellipse(width/2, height/2, 600, 600);

	fillR = floor(random(0,255));
	fillG = floor(random(0,255));
	fillB = floor(random(0,255));

}

function draw() {
	fill(fillR, fillG, fillB);
	circle = ellipse(width/2, height/2, circleDiameter, circleDiameter);

	//send value to the DOM
	document.getElementById('circD').innerHTML = circleDiameter;
		socket.emit('theDiameter',{
			'circleD': circleDiameter
		});

	if (circleDiameter > 100 && circleDiameter < 600){
	  decreaseD();
	  return;
	}
	if(circleDiameter >= 600){
		stopGrowing();
		fill(0);
		textSize(64);
		textAlign(CENTER);
		text("YOU WIN!", width/2,height/2);
		return;
	}
	if(circleDiameter >= 600){
		stopGrowing();
		fill(0);
		textSize(64);
		textAlign(CENTER);
		text("YOU LOSE!", width/2,height/2);
		return;
	}

	socket.emit('theScore',{
		'circleDiameter': circleDiameter
	});



}

function touchStarted(){
	circleDiameter = circleDiameter + 20;

}

function decreaseD(){
	circleDiameter--;
}

function stopGrowing(){
	circleDiameter = 600;
}



 