// event.preventDefault();

//Backgrounds
var BG = document.getElementById('background');

//StoryBox 
var story_box = document.getElementById('story_box');
story_box.style.display = 'none'; //The box shows up after the intro

//characters
// Removed characterss to further develop
// var characterBox = document.getElementById('characterBox');

//starts the order of events
var adventure = 'begin';

//Box for hero stats
var hero_box = document.getElementById('hero_stats');
hero_box.style.visibility = 'hidden'; //hides box until random is summoned

//Hero Stats
var hero_cattle = document.getElementById('hero_cattle');
var hero_coins = document.getElementById('hero_coins');
var hero_food = document.getElementById('hero_food');

//buttons to press
const game_bab = document.getElementById('game_bab'); //the 'bab' is an acronym
const story = document.getElementById('story_button'); //shows after title screen
const choice_A = document.getElementById('choice_A');
const choice_B = document.getElementById('choice_B');

//Text displayed
const game_title = document.getElementById('game_title');
const narrator = document.getElementById('narrator');

//--------------------------------------------------------------
//event listeners for buttons //collects user data when clicked
choice_A.addEventListener('click', choose); 
choice_B.addEventListener('click', choose);
story.addEventListener('click', storyline); 

//*the responses vary for left and right choices, so instead of 'yes' or 'no', just choose 'A' or 'B'*

//required variables for function to work
var hero_choice = ''; 
var coins = 0;
var food = 0;
var cattle = 0; 


// function intro() {

//     //Begin Game
//     if (adventure == 'intro') {

//         adventure = 'begin'; //leads to next scenario

//         //Button track
//         story.style.visibility = 'visible'; //show 
//         choice_A.style.visibility = 'hidden'; //hide
//         choice_B.style.visibility = 'hidden'; //hide

//         //BG track
//         BG.classList = ''; //for game resart. NOTE: ALL classes are cleared, even presets
//         BG.classList.add('background'); //add BG settings
//         BG.classList.add('intro'); //add the BG itself

//         narrator.innerText = "Greetings, and welcome to to version 2 of 'A Casual Adventure'. The storyline will be slightly different from the first, with more changes to come. For now, enjoy!";

//         story.innerText = 'Start';

//         return; //gives control back to user
//     }

//     storyline() //Begin the game!!
// }


//Title Screen

//BG Track
BG.classList.add('background'); //add BG settings
BG.classList.add('intro'); //add the BG itself
BG.classList.add('introBG'); //the Hero BG

//Remove h1 and button after clicked



function storyline() {

    //Narrator Intro
    if (adventure == 'begin') { //starts function

        adventure = 'start_roll';  //leads to next scenario

        //Button track
        story.style.visibility = 'hidden';
        choice_A.style.visibility = 'visible';
        choice_B.style.visibility = 'visible';

        // BG track
        BG.classList = '';
        BG.classList.add('background');
        BG.classList.add('grassPath');

        //StoryBox
        story_box.style.display = 'block'; //The box shows up here

        //Characters
        // characterBox.classList.add('character'); //for game restart
        // characterBox.classList.add('hero');

        narrator.innerText = 'Welcome young traveller! Are you ready to begin a new life journey?';

        choice_A.innerText = 'Yes! I am filled with excitement!';
        choice_B.innerText = 'Today? Nah, maybe later.';

        return;

    }
     
    //Choices of Narrator Intro
    if (adventure == 'start_roll') {

        //Button track
        story.style.visibility = 'visible';
        choice_A.style.visibility = 'hidden';
        choice_B.style.visibility = 'hidden';

        if (hero_choice == 'choice_A') {

            adventure = 'items'; //leads to next scenario

            narrator.innerText = 'Then let us begin! Click the "roll" button to see what items you start off with.';

            story.innerText = 'Roll'; //leads to next scenario

        } else if(hero_choice == 'choice_B') {

            //Character
            // characterBox.classList.remove('hero');

            //BG track
            BG.classList.remove('grassPath')
            BG.classList.add('tombstone');
            
            narrator.innerText = 'Fast fowarding to your death then. There was no point to remember your name. No one came to the burial, not even the pallbearers. You died with no legacy and in a casket to rot, full of regret and sadness. ["Pointless" END (1)]'; 

            story.innerText = 'Woah wait! Let me change my answer!';
            adventure = 'begin'; //Goes back to start

        }

        return;

    }

    //Roll stats
    if(adventure == 'items') {

        adventure = 'stage_one_start'; //leads to next scenario

        random(); //gives user a random amount of certain items to start off with
    
    }

    //Beginning of Stage One
    if (adventure == 'stage_one_start') {

        adventure = 'stage_one';  //leads to next scenario

        //Button track
        story.style.visibility = 'hidden'; //add 'hide' class
        choice_A.style.visibility = 'visible';
        choice_B.style.visibility = 'visible';

        //BG track
        BG.classList = '';
        BG.classList.add('background');
        BG.classList.add('grassPath');

        // //Characters
        // characterBox.classList.remove('hero');
        // characterBox.classList.add('merchant');

        narrator.innerText = 'Day 1: The first day is always filled with promise,(unless you had a really bad roll). As you settle in to your new lifestyle, a merchant comes by and holds up a bag. He says that it has fruit in it. All you have to do is trade 50 coins. Do you accept?';

        choice_A.innerText = 'Sure! Here is your pay, my good man.';
        choice_B.innerText = 'No! I just started this adventure!';

        return;

    }

    //Choices of Stage One
    if (adventure == 'stage_one') {

        adventure = 'stage_two_start'; //leads to next scenario

        //Button Track
        story.style.visibility = 'visible';
        choice_A.style.visibility = 'hidden';
        choice_B.style.visibility = 'hidden';

        //Characters
        // characterBox.classList.remove('merchant');

        if (hero_choice == 'choice_A') {

            //Merchant Food: 
            merch_food = [50, 10, 0];

            if (coins < 50) {

                // BG track
                BG.classList.remove('grassPath');
                BG.classList.add('noodles');

                narrator.innerText = ('You explain to the merchant that you\'re short on cash at the moment, but willing to trade for the fruit. The merchant frowns and says, "Hope you like noodles". Before you could ask what he meant by that, he continued on his way. As realization slowly seeps in, you race off towards your barn only to find...spaghetti noodles? [END OF DAY ONE]')

                food += cattle //add cattle amount to food
                cattle -= cattle //reduce cattle to 0

            }else {

                //What hero gets from merchant is randomized
                var food_given = merch_food[Math.floor(Math.random() * merch_food.length)]; 

                if(food_given > 0) {

                    //Characters
                    // characterBox.classList.add('hero_happy');

                    narrator.innerText = ('The merchant thanks you for your purchase and speeds off. However, you begin to wonder if he was lying. Suspicion kicks in and you decide to check the bag. To your relief, it does have a few apples and grapes among other foods. [Food given: ' + food_given + '. Coins: -50] [END OF DAY ONE]');
                    food += food_given; //add to food based on random merch food
                    coins -= 50; //deduct from coins

                    story.innerText = 'Woah. Ok, nice';

                }else { //The merchant can cheat hero

                    //Characters
                    // characterBox.classList.add('hero_angry');

                    narrator.innerText = ('The merchant thanks you for your purchase and speeds off. However, you begin to wonder if he was lying. Suspicion kicks in and you decide to check the bag. Sadly, to your disappointment, you\'ve been robbed. [Food given: ' + food_given + '. Coins: -50] [END OF DAY ONE]');
                    food += food_given;
                    coins -= 50;

                    story.innerText = 'Fantastic...';
                
                }


            }
            
        }else if(hero_choice == 'choice_B'){

            //BG track
            BG.classList.remove('grassPath');

            if (cattle > 10) {

                // BG track
                BG.classList.add('burning_barn');    

                narrator.innerText = 'The merchant went away hanging his head, and a sting of pity fills your heart. However, you continue with your day. As night approaches, you get ready for bed and wait for the next day. END OF DAY O-, hold up. You smell that? Is...is that...burnt wool? [Cattle -50] [END OF DAY ONE]';
                cattle -= 50; //merchat "takes out" cattle           

            }else if (cattle <= 10) { //doesn't take anything if hero is cattle-broke

                // BG track
                BG.classList.add('nighttime');  

                narrator.innerText = 'The merchant went away hanging his head, and you couldn\'t help but feel a sting of pity. However, you continue with your day. As night comes along, you get ready for bed and patiently wait for the next morning. Later that night, the merchant comes by with a lighter and gasoline. As he checks your wares however, he sees why you couldn\'t pay anyway and leaves shaking their head. [END OF DAY ONE]'; 
            }

            story.innerText = 'Wait what?'; //allows function to go to next scenario upon click

        }

        hero_coins.innerText = coins;
        hero_cattle.innerText = cattle;
        hero_food.innerText = food;
  
        return;

    } 

}

//random stats to give hero
var food_amt = [150, 100, 50, 10];
var coins_amt = [150, 100, 50, 10];
var cattle_amt = [150, 100, 50, 10];

function random() {

    //add randomizer here
    var random_food = food_amt[Math.floor(Math.random() * food_amt.length)];

    var random_coins = coins_amt[Math.floor(Math.random() * coins_amt.length)];

    var random_cattle = cattle_amt[Math.floor(Math.random() * cattle_amt.length)];
    //-----------------------------------------------------------------------------------

    if(random_food > 10){

        alert(random_food + ' food. That\'s a lot of food! better use it wisely');
        food = random_food; //assign random food stats

    }else if(random_food == 10){

        alert(random_food + ' food. Ouch, thats a very low number of food, hopefully it gets better for you');
        food = random_food;

    }else {

        alert(random_food + ' food. You know, Leaves are tasty this time of year.');
        food = random_food;
    }

    if(random_cattle > 10){

        alert(random_cattle + ' cattle. That\'s a lot of cattle! Could be helpful.');
        cattle = random_cattle; //assign random cattle stats

    }else if (random_cattle == 10) {

        alert(random_cattle + ' cattle. Thats a low amount of cattle. Better than none I guess.');
        cattle = random_cattle; 

    }else {

        alert(random_cattle + ' cattle. What, did you scare them?');
        cattle = random_cattle;

    }

    if(random_coins > 10){

        alert(random_coins + ' coins. It\'s good to have a lot of coins. Spend them wisely');
        coins = random_coins; //assign random coin stats


    }else if(random_coins == 10) {

        alert(random_coins + ' coins. Time to penny pinch.');
        coins = random_coins;

    }else {

        alert(random_coins + ' coins. What? I can\'t help you. Bad rolls happen.')
        coins = random_coins;

    }
  
    hero_coins.innerText = coins;
    hero_cattle.innerText = cattle;
    hero_food.innerText = food;
    
    hero_box.style.visibility = 'visible';

    return food, cattle, coins; //for use in-game
}

function choose() { //gets value of clicked button (choices only)

    hero_choice = this.value; //'this' refers to 'choices'
    storyline(); //continues storyline
       
}
