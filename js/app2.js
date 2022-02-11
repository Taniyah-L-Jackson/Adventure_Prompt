// event.preventDefault();
//Change to react file
//Backgrounds
var BG = document.getElementById('background');
var transititon = document.getElementById('transition');

//StoryBox 
var story_box = document.getElementById('story_box');

//characters
// Removed characterss to further develop
var character_box = document.getElementById('character_box');

//starts the order of events
var adventure = 'begin';

//Box for hero stats
var hero_stats = document.getElementById('hero_stats');

//Hero Stats
var health_bar = document.getElementById('health_bar'); //Added a heatlh bar to game
var hero_coins = document.getElementById('hero_coins');

//buttons to press
const title_btn = document.getElementById('title_btn'); //button that appears only at the title screen
const progress_btn = document.getElementById('progress_button'); //guides the story
const choice_A = document.getElementById('choice_A'); //allows player to choose
const choice_B = document.getElementById('choice_B'); //allows player to choose
const transitionBtn = document.getElementById('transition_button'); //button only shown during transition

//Text displayed
const game_title = document.getElementById('game_title');
const narrator = document.getElementById('narrator');

//--------------------------------------------------------------
//event listeners for buttons //collects user data when clicked
choice_A.addEventListener('click', choose); //triggers choices available
choice_B.addEventListener('click', choose); //triggers choices available
title_btn.addEventListener('click', theIntroduction); //triggers storyline

//*the responses vary for left and right choices, so instead of 'yes' or 'no', just choose 'A' or 'B'*

//required variables for heroStats function to work
var hero_choice = ''; 
var coins = 0;

//Title Screen

//BG Track
BG.classList.add('titleScreen'); //add the BG title screen (BG's are added as classes)
character_box.style.display = 'none'; //hide while title screen is on

//---------------------------------------------------
//Begnning the game, along with starting info
//---------------------------------------------------
//args for the letterSplitter
var narration = '';     //contains all the lines that will be used for the game (from the narrator's perspective)
var buttonText = '';    //contains all the lines that will be used for this part of the game (from the player's perspective)
var storyFunction = ''; //holds the current scenario function
function theIntroduction() {

    //change the BG's height to accomodate for the storyBox
    if (BG.style.height != '70vh') {
        BG.style.height = '70vh';
    }

    //store current function into a variable (for letterSplitter)
    storyFunction = theIntroduction;

    //current scene's script
    let sceneNarration = {

        narrator: [
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
        "Really! And that's about it. Let us begin this unfamilar tale..."
        ],

        user: [
            "???",
            "...Hey?",
            "Oh, nice",
            "Oooo",
            "Can't wait",
            "This 'Roll' button here?",
            "Wow, that IS new",
            "Ah, ok",
            "That explains this button then",
            "Really?",
            "Well alright then!"
        ]

    };

    //if the narration var is clear, add script arrs
    if (narration == '') {
        narration = sceneNarration.narrator;
        buttonText = sceneNarration.user;
    };

    //Game Title track
    game_title.style.display = 'none'; 
    //Remove title when the game begins, show only for title and transition

    //Button track
    title_btn.style.display = 'none'; //Remove title button when game begins
    progress_btn.style.visibility = 'visible'; //does not show when choices appear
    choice_A.style.visibility = 'hidden';  //does not show when storyline progresses
    choice_B.style.visibility = 'hidden';  //does not show when storyline progresses   

    // BG track (Add introduction BG)
    BG.classList = ''; //this resets classLists
    BG.classList.add('grassPath');

    //StoryBox
    story_box.style.display = 'block'; //The box shows up here

    //Character Setup
    character_box.classList.add('characters'); //all characters used will have the same setup

    //Dialouge
    //hard coded to show always the first index of the narration and user arr
    narrator.innerText = narration[0]; 
    progress_btn.innerText = buttonText[0];

    //add the progress_btn to replace the intro btn (for progressing the story)
    //also, give the progress_btn an event listener 
    progress_btn.addEventListener('click', letterSplitter);
       
    //NOTE: An 'if' statement does not seem to work to prevent duplicate event listeners

    //show the health bar once the text lines up with the scene narration. Again, hard-coded.
    if (narrator.innerText == sceneNarration.narrator[5]) {
        progress_btn.removeEventListener('click', letterSplitter);
        progress_btn.addEventListener('click', heroStats)
    }

    //when the last text line is used, fire the next function for the story
    if (narration.length == 1) {
        progress_btn.removeEventListener('click', letterSplitter);
        progress_btn.addEventListener('click', transitionFunction);
        storyFunction = dayOne;
    }
}

function transitionFunction() {

    //transition setup
    transititon.style.display = 'block';
    transititon.classList.add('transitionStyle');
    //add text to the transition that tells days of travel

    //Game Title (used for transition as well)
    game_title.classList.remove('gameTitleIntro');
    game_title.classList.add('titleTransition');
    game_title.style.display = 'block';
    game_title.innerText = 'Days of travel: 1';

    //Transition button leads to next scene
    transitionBtn.addEventListener('click', storyFunction)

}

function dayOne() {
    //current scene's script
    //store current function into a variable (for letterSplitter)
    storyFunction = dayOne;

    //current scene's script
    let sceneNarration = [
        "Good morning! This is your daily inner narrator here to guide you through the day.",
        "I see some of your things got lost in the move, but we can always find more items at the market nearby",
        "Now let's see....where do we go from here....?",
        "Well, we could try-",
        "Hello! How are you today?",


    ];

    

    //if the narration var is clear, add script arr
    if (narration == '') {
        narration = sceneNarration;
    };

    //Game Title track
    game_title.style.display = 'none'; //Remove title when the game begins

    //Button track
    title_btn.style.display = 'none'; //Remove intro button when game begins
    progress_btn.style.visibility = 'visible'; //does not show when choices appear
    choice_A.style.visibility = 'hidden';  //does not show when storyline progresses
    choice_B.style.visibility = 'hidden';  //does not show when storyline progresses   

    // BG track (Add introduction BG)
    BG.classList = '';
    BG.classList.add('background');
    BG.classList.add('barn');

    //StoryBox
    story_box.style.display = 'block'; //The box shows up here

    //Character Setup
    character_box.style.display = 'block';
    character_box.src = './media/ChaGB1.png'; //for game restart
    character_box.classList.add('characters'); //all characters used will have the same setup

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
var coinsAvailable = 0;
var health = 100; //Health will always start at 100

function heroStats() {

    //display hero stats
    hero_stats.style.display = 'block';

    //remove function after execution
    progress_btn.removeEventListener('click', heroStats);

    //Add randomizer here. Range of mumbers
    let coinsAvailable = (Math.floor(Math.random() * (300 - 100 + 1)));

    //Set coin counter to 0 at the start
    let coin_counter = 0;

    //add coins to counter in increments that will appear on the screen
    setInterval(function ()  {
        if(coin_counter <= coinsAvailable){
            hero_coins.innerText = coin_counter++;
            return coin_counter;
        }
    }, 50)
    
    //disable the progress_btn for 5s
    //also change the event listener of the progress bar
    //the timer will use the randomized coinsAvailable var, the time the coin_counter var
    //increments, and adds 850ms. This dynamically sets the time for the setTimeout and allows a small delay
    //so that the setInterval function can finish running
    setTimeout(() => {
        progress_btn.ariaDisabled = 'true';
        progress_btn.addEventListener('click', letterSplitter);
    }, (coinsAvailable * 50) + 850);

    return coinsAvailable;
    //return the coin amount for use in game and continue with the dialog using the letterSplitter
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
    buttonText.shift();
    //remove the previous EventListener
    //do this until the arr is empty
    progress_btn.removeEventListener('click', letterSplitter); 
    //fire previous function so that the button doesnt need to be double-clicked
    return narration, buttonText, storyFunction();

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
