/* RANDOM TEXT ANIMATION */
/*RANDOM TEXT No1*/

$(document).ready(documentReady);

function documentReady()
{

	var characterCollection 	= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];

	var currentText 			= $(".effect h1").text();

	var currentTextCollection 	= new Array();

	var characterCount			= 0;

	var characterSpeed			= 500;

	pushCurrentTextChrachters();

	function pushCurrentTextChrachters () {

		for(var i = 0; i < currentText.length; i++)
		{

			var currentCharacter = currentText.slice(i, i+1);

			currentTextCollection.push(currentCharacter);

		}

	}

	var characterCountIncreaseInterval = setInterval(characterCountIncrease, characterSpeed);

	function characterCountIncrease () {

		if (characterCount == currentTextCollection.length)
		{

			clearInterval(characterCountIncreaseInterval);

			clearInterval(setRandomTextInterval);

		}

		characterCount++;

	}

	function getRandomText () {

		var result = "";

		if(characterCount == 0)
		{

			for(var i = 0; i < currentTextCollection.length; i++)
			{

				var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

				result += randomCharacter;

			}

		}
		else
		{

			result = currentText.slice(0, characterCount);

			for(var i = 0; i < currentTextCollection.length - characterCount; i++)
			{

				var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

				result += randomCharacter;

			}

		}

		return result;

	}

	var setRandomTextInterval = setInterval(setRandomText, 50);

	function setRandomText () {

		console.log(getRandomText());

		$(".effect h1").text(getRandomText());

	}

}
/*RANDOM TEXT No.2*/
$(document).ready(documentReady1);

function documentReady1()
{

	var characterCollection 	= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y", "Z"];

	var currentText 			= $(".effect1 h1").text();

	var currentTextCollection 	= new Array();

	var characterCount			= 0;

	var characterSpeed			= 500;

	pushCurrentTextChrachters();

	function pushCurrentTextChrachters () {

		for(var i = 0; i < currentText.length; i++)
		{

			var currentCharacter = currentText.slice(i, i+1);

			currentTextCollection.push(currentCharacter);

		}

	}

	var characterCountIncreaseInterval = setInterval(characterCountIncrease, characterSpeed);

	function characterCountIncrease () {

		if (characterCount == currentTextCollection.length)
		{

			clearInterval(characterCountIncreaseInterval);

			clearInterval(setRandomTextInterval);

		}

		characterCount++;

	}

	function getRandomText () {

		var result = "";

		if(characterCount == 0)
		{

			for(var i = 0; i < currentTextCollection.length; i++)
			{

				var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

				result += randomCharacter;

			}

		}
		else
		{

			result = currentText.slice(0, characterCount);

			for(var i = 0; i < currentTextCollection.length - characterCount; i++)
			{

				var randomCharacter = characterCollection[ Math.floor( Math.random() * characterCollection.length ) ];

				result += randomCharacter;

			}

		}

		return result;

	}

	var setRandomTextInterval = setInterval(setRandomText, 50);

	function setRandomText () {

		console.log(getRandomText());

		$(".effect1 h1").text(getRandomText());

	}

}
/*-------*/
/*BACKGROUND*/
$(function() {
  var canvas = document.getElementById('nodes'),
      ctx = canvas.getContext('2d'),
      color = 'rgba(255, 255, 255, .5)'
      width = window.innerWidth,
      height = window.innerHeight;
  
  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = color;
  
  var dots = {
    num: 100,
    distance: 200,
    d_radius: 200,
    velocity: -.9,
    array: []
  };
  
  function Dot(){
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    
    this.vx = dots.velocity + Math.random();
    this.vy = dots.velocity + Math.random();
    
    this.radius = Math.random() * 2;
  }
  
  Dot.prototype = {
    create: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },
    
    animate: function() {
      for(var i = 0; i < dots.num; i++) {
        
        var dot = dots.array[i];
        
        if(dot.x < 0 || dot.x > width) {
          dot.vx = - dot.vx;
          dot.vy = dot.vy;
        } else if(dot.y < 0 || dot.y > height) {
          dot.vx = dot.vx;
          dot.vy = - dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }
  };
  
  function createDots() {
    ctx.clearRect(0, 0, width, height);
    for(var i = 0; i < dots.num; i++) {
      dots.array.push(new Dot());
      dot = dots.array[i];
      dot.create();
    }
    dot.animate();
  }
  
  setInterval(createDots, 1000/30);
  
  $(document).on('resize', function() {
    canvas.width = width;
    canvas.height = height;
  });
});
