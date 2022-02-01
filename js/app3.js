//Copy of original app2.js
// event.preventDefault();

//Backgrounds
var BG = document.getElementById('background');

//StoryBox 
var story_box = document.getElementById('story_box');

//characters
// Removed characterss to further develop
var character_box = document.getElementById('characterBox');

//starts the order of events
var adventure = 'begin';

//Box for hero stats
var hero_box = document.getElementById('hero_stats');

//Hero Stats
var health_bar = document.getElementById('health_bar'); //Added a heatlh bar to game
var hero_coins = document.getElementById('hero_coins');
var hero_food = document.getElementById('hero_food');

//buttons to press
const intro_btn = document.getElementById('intro_btn'); //button that appears only at the intro screen
const progress_btn = document.getElementById('progress_button'); //guides the story
const choice_A = document.getElementById('choice_A'); //allows player to choose
const choice_B = document.getElementById('choice_B'); //allows player to choose

//Text displayed
const game_title = document.getElementById('game_title');
const narrator = document.getElementById('narrator');

//--------------------------------------------------------------
//event listeners for buttons //collects user data when clicked
choice_A.addEventListener('click', choose); //triggers choices available
choice_B.addEventListener('click', choose); //triggers choices available
intro_btn.addEventListener('click', theBeginning); //triggers storyline

//*the responses vary for left and right choices, so instead of 'yes' or 'no', just choose 'A' or 'B'*

//required variables for function to work
var hero_choice = ''; 
var coins = 0;
var food = 0;
var cattle = 0; 

//Title Screen

//BG Track
BG.classList.add('background'); //add BG settings
BG.classList.add('intro'); //add the BG itself
BG.classList.add('introBG'); //the Hero BG
character_box.style.display = 'none'; //hide while title screen is on

function theBeginning() {

    //Game Title track
    game_title.style.display = 'none'; //Remove title when the game begins

    //Button track
    intro_btn.style.display = 'none'; //Remove intro button when game begins
    progress_btn.style.visibility = 'visible'; //does not show when choices appear
    choice_A.style.visibility = 'hidden';  //does not show when storyline progresses
    choice_B.style.visibility = 'hidden';  //does not show when storyline progresses   

    // BG track (Add introduction BG)
    BG.classList = '';
    BG.classList.add('background');
    BG.classList.add('grassPath');

    //StoryBox
    story_box.style.display = 'block'; //The box shows up here

    //Characters
    character_box.style.display = 'block'; //show the character
    character_box.src = './media/ChaGB1.png'; //for game restart
    character_box.classList.add('characters'); //all characters used will have the same setup

    narrator.innerText = 'Just testing mechanics and whatnot. Press "Roll" please.';
    progress_btn.innerText = 'Roll';

    //replaces the intro btn to progress with the story
    progress_btn.addEventListener('click', herostats);

}

//Explanation of the game

var speech_of_Lucina = [
    "Hello, my name in Lucina. nice to meet you!",
    "I'll be here to guide you through the game.",
    "To the left, you have a health bar, along with food and coins.",
    "With the food, you can refuel your health. But you can only do so in certain secenarios.",
    "With the coins, you can buy your way through the story. Buying food will be added later.",
    "And lastly, the health bar. You'll need it to progress through the story.",
    "Once your health reaches zero, the screen will go to black (this will also be added later).",
    "That should wrap up a few of the new mechanics, stay tuned for more updates!"
]

var poses_of_Lucina = [
    {image: "./media/ChaGB1.png"}, //regular stance
    {image: "./media/ChaGBSmile.png"} //smiling
]

function storylineA() {
    character_box.src = '';
    //randomize poses of Lucina
    let imageNum = (Math.floor(Math.random() * poses_of_Lucina.length));
    character_box.src = poses_of_Lucina[imageNum].image;
    narrator.innerText = speech_of_Lucina.shift();
    if (speech_of_Lucina.length == 0) {
        narrator.innerText = 'End of array'
    }    
}

//random stats to give hero
// var food_amt = 0;
var coins_amt = 0;
// var cattle_amt = 0;
var health = 100; //Health will always start at 100

function herostats() {

    //add randomizer here. never be less than 10
    // let food_amt = (Math.floor(Math.random() * 10)) * 10; 
    let coins_amt = (Math.floor(Math.random() * 10)) * 10;
    // let cattle_amt = (Math.floor(Math.random() * 10)) * 10;

    // let food_counter = 0;
    let coin_counter = 0;

    //-----------------------------------------------------------------------------------
    // setInterval(function ()  {
    //     if(food_counter <= food_amt){
    //         hero_food.innerText = food_counter++;
    //         return food_counter;
    //     }
    // }, 50)

    setInterval(function ()  {
        if(coin_counter <= coins_amt){
            hero_coins.innerText = coin_counter++;
            return coin_counter;
        }
    }, 50)
    
    hero_box.style.display = 'block';
    // Change the event listener of the progress bar
    progress_btn.removeEventListener('click', herostats);
    progress_btn.addEventListener('click', storylineA);

    return coins_amt; //for use in-game
}

function choose() { //gets value of clicked button (choices only)

    hero_choice = this.value; //'this' refers to 'choices'
       
}

//NEXT: import js files into other js files with:
    //import * as 'file_name' (importing all)
    //import [function_name] as 'file_name' (importing )

//export functions by adding 'export default' in front a function