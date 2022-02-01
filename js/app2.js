// event.preventDefault();

//Backgrounds
var BG = document.getElementById('background');

//StoryBox 
var story_box = document.getElementById('story_box');

//characters
// Removed characterss to further develop
var character_box = document.getElementById('character_box');

//starts the order of events
var adventure = 'begin';

//Box for hero stats
var hero_box = document.getElementById('hero_stats');

//Hero Stats
var health_bar = document.getElementById('health_bar'); //Added a heatlh bar to game
var hero_coins = document.getElementById('hero_coins');

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
intro_btn.addEventListener('click', theIntroduction); //triggers storyline

//*the responses vary for left and right choices, so instead of 'yes' or 'no', just choose 'A' or 'B'*

//required variables for heroStats function to work
var hero_choice = ''; 
var coins = 0;

//Title Screen

//BG Track
BG.classList.add('background'); //add BG settings
BG.classList.add('intro'); //add the BG itself
BG.classList.add('introBG'); //the Hero BG
character_box.style.display = 'none'; //hide while title screen is on

//---------------------------------------------------
//Begnning the game, along with starting info
//---------------------------------------------------
//args for the letterSplitter
var narration = '';     //contains all the lines that will be used for the game (from the narrator's perspective)
var buttonText = '';    //contains all the lines that will be used for this part of the game (from the player's perspective)
var storyFunction = ''; //holds the current scenario function
function theIntroduction() {

    //store current function into a variable (for letterSplitter)
    storyFunction = theIntroduction;

    //current scene's script
    let sceneNarration = [
        "Testing, one, two",
        "Ah, Hello!",
        "Welcome to the second version of this game 'A Casual Adventure'",
        "New mechanics have been added, and also new characters!",
        "As the game grows, more features will be added, but that's for a later time",
        "For now, let's go over a few mechanics, hit the 'Roll' button to see what I mean.",
        "Now, the health bar above shows how much health you will have throughout the game",
        "Also, you start off with a few coins, useful for buying your way through the game",
        "The button you are currently clicking on will display choices every now and then",
        "What you decide will determine your progression through the game",
        "And that's about it. Let us begin this unfamilar tale..."
    ];

    //if the narration var is clear, add script arr
    if (narration == '') {
        narration = sceneNarration;
    };

    //Game Title track
    game_title.style.display = 'none'; //Remove title when the game begins

    //Button track
    intro_btn.style.display = 'none'; //Remove intro button when game begins
    progress_btn.style.visibility = 'visible'; //does not show when choices appear
    choice_A.style.visibility = 'hidden';  //does not show when storyline progresses
    choice_B.style.visibility = 'hidden';  //does not show when storyline progresses   

    // BG track (Add introduction BG)
    BG.classList = ''; //this resets classLists
    BG.classList.add('background');
    BG.classList.add('grassPath');

    //StoryBox
    story_box.style.display = 'block'; //The box shows up here

    //Character Setup
    character_box.classList.add('characters'); //all characters used will have the same setup

    //hard coded to show only the first index of the narration arr
    narrator.innerText = narration[0]; 
    progress_btn.innerText = 'Roll';

    //replaces the intro btn to progress with the story
    progress_btn.addEventListener('click', letterSplitter);

    //show the health bar once the text lines up with the scene narration. Again, hard-coded.
    if (narrator.innerText == sceneNarration[5]) {
        progress_btn.removeEventListener('click', letterSplitter);
        progress_btn.addEventListener('click', heroStats)
    }

    //when the last text line is used, fire the next function for the story
    if (narration.length == 1) {
        progress_btn.removeEventListener('click', letterSplitter);
        progress_btn.addEventListener('click', sceneOne)
    }


}

function sceneOne() {
    BG.classList = ''; //BG resetter
    BG.classList.add('background');
    BG.classList.add('blackScreen')
}

function dayOne() {
    //current scene's script
    //store current function into a variable (for letterSplitter)
    storyFunction = dayOne;

    //current scene's script
    let sceneNarration = [
        "",
    ];

    //if the narration var is clear, add script arr
    if (narration == '') {
        narration = sceneNarration;
    };

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

    //Character Setup
    character_box.classList.add('characters'); //all characters used will have the same setup

    //Narration
    // if (narration.length == 0) {
    //     narrator.innerText = 'End of array'
    // } 
    

    //what i want to do:
    //store the current script into a narration var
    //once the narration var is empty, call new function

    //hard coded to show only the first index of the narration arr
    narrator.innerText = narration[0]; 
    progress_btn.innerText = 'Roll';

    //replaces the intro btn to progress with the story
    progress_btn.addEventListener('click', letterSplitter);

    //when the last text line is used, fire the next function for the story
    if (narration.length == 1) {
        progress_btn.removeEventListener('click', letterSplitter);
        progress_btn.addEventListener('click', dayOne)
    }


}

//random stats to give hero
var coins_amt = 0;
var health = 100; //Health will always start at 100

function heroStats() {

    //Add randomizer here. Multiples of 10
    let coins_amt = (Math.floor(Math.random() * 10)) * 10;

    //Set coin counter to 0 at the start
    let coin_counter = 0;

    //-----------------------------------------------------------------------------------
    setInterval(function ()  {
        if(coin_counter <= coins_amt){
            hero_coins.innerText = coin_counter++;
            return coin_counter;
        }
    }, 50)
    
    hero_box.style.display = 'block';
    // Change the event listener of the progress bar
    progress_btn.removeEventListener('click', heroStats);
    progress_btn.addEventListener('click', letterSplitter);

    return coins_amt; //for use in-game
}

function choose() { //gets value of clicked button (choices only)

    hero_choice = this.value; //'this' refers to 'choices'
       
}

//to avoid firing the function below too early, the event listeners do not take params
function letterSplitter() {

    //show sentences one at at time (work on letters later)
    //go though arr of text lines

    //remove the first textline after use
    narration.shift(); 
    //remove the previous EventListener and reset event listener to the previous function 
    //do this until the arr is empty
    progress_btn.removeEventListener('click', letterSplitter); 
    progress_btn.addEventListener('click', storyFunction)
    //fire previous function so that the button doesnt need to be double-clicked
    return narration, storyFunction();

    // let splitted = []; //stores the splitted arr
    // for (let i = 0; i < arr.length; i++) {
    //     splitted = arr[i].split('');

    //     //push one letter after a certain amt of time has passed
    //     setInterval(() => {
    //         for (let j = 0; j < splitted.length; j++) {
    //             textLine.push(splitted[j])
                
    //         }
    //         return textLine;
    //     }, 100);
    //     return splitted
    // }
    // narrator.innerText = narration.shift();
    // setInterval(() => {
    //    let split_arr = arr.split('');
    //     return split_arr;
    // }, 5000);
    // return split_arr
}


//NEXT: import js files into other js files with:
    //import * as 'file_name' (importing all)
    //import [function_name] as 'file_name' (importing )

//export functions by adding 'export default' in front a function