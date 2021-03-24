// (event listener) window.addEventListener('DOMContentLoaded', (event) => {console.log('DOM fully loaded and parsed'); });

//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');

//this is the variable for the name of the character
var yourname;



//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yourname =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


//this changes the text and puts in your characters name
var changeText = function(words) {
  text.innerHTML = words.replace("your name", yourname);
};

//this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
    images.style.backgroundImage = "url(" + img + ")";
  };
  

//this looks at the number of options we have set and creates enough buttons 
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
    changeImage(s.image)  
    changeText(s.text)
    changeButtons(s.buttons)
};

//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
    one: {
        image: "images/Opening.jpg",  
      text: "Hello Adventurer. You have lived in on fathers farm knowing hard labor when you have come of age to make a name for yourself. You have finally to go on a adventure grab your fathers sword walking out of the door to your . What are you called?",
    },
    two: {
        image: "images/oldhouse.webp",  
        text: "Your walking along the road through a forest and you see a clearing. see an old abandoned house Strangely something pulls you in calling your name, the door is wide open. What do you want to do?",
        buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
    },
    three: {
        image: "images/packofdogs.jpg",
        text: "You had failed to realise an wild gang of wolfs had been stalking you unsure when they started following you. Against your better judgement you enter the creepy house for saftey.",
        buttons: [["continue", "advanceTo(scenario.four)"]]
    },
      four: {
        image: "images/kitchen.jpg",  
        text: "you hear a unplesent sound loudly, into the basement. You wonder what's down there again something pulls you in calling your name. The door hinges jammed when you slammed it behind you. You are going to need something to pry the door open",
        buttons: [["Go Downstairs", "advanceTo(scenario.five)"],[" Search around", "advanceTo(scenario.five)"]]
    },
    five: {
        image: "images/basement.jpg",  
        text: "your heart is racing a voice causes pain in your head saying your name louder then you can bear. What do you do",
        buttons: [["Open Door", "advanceTo(scenario.six)"],[" Turn Around", "advanceTo(scenario.four)"]]
    },    
      six: {
        image: "images/to be continued.webp",  
        text: "TO BE CONTINUED...",
  
    },
    
  };
  
  
  //this is the code that starts the game
  advanceTo(scenario.one);