var numSquares = 6;
var colors = [];
var pickedColor;
var h1bg = document.querySelector('h1');
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}
resetButton.addEventListener('click', function(){
	reset();
})
function setUpSquares(){
	for(i = 0; i < squares.length; i++){	
	squares[i].addEventListener('click', function(){

	var clickedColor = this.style.backgroundColor;

	if(clickedColor === pickedColor){
		h1bg.style.backgroundColor = clickedColor;
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
	} else {
		this.style.backgroundColor = '#232323';
		messageDisplay.textContent = 'Try Again';
		}
	});
}
}
function setUpModeButtons(){
	// mode buttons event listeners
	for(i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener('click', function(){
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		
		this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
		// Above is a turnary operator, which does the same as the following if statement:
		// if(this.textContent === 'Easy'){
		// 	numSquares = 3;
		// } else {
		// 	numSquares = 6;
		// }
		reset();
	});
}
}
function reset(){	
	messageDisplay.textContent = '';
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1bg.style.backgroundColor = 'steelblue';
	resetButton.textContent = 'New Colors';	
		for(i = 0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.display = 'block';
				squares[i].style.backgroundColor = colors[i];		
			} else {
				squares[i].style.display = 'none';
			}
	}		
}
function changeColors(color){
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;}
}
function pickColor(){	
	var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}
function generateRandomColors(num){
	var arr = [];
		for(i = 0; i < num; i++){
			arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
		return "rgb(" + r + ", "+ g + ", "+ b + ")"
}