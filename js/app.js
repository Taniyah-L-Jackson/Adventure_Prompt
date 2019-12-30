// event.preventDefault();

//Backgrounds
var BG = document.getElementById('background');

//characters
var characterBox = document.getElementById('characterBox');

//starts the order of events
var adventure = 'intro';

//Box for hero stats
var hero_box = document.getElementById('hero_stats');

//Hero Stats
var hero_cattle = document.getElementById('hero_cattle');
var hero_coins = document.getElementById('hero_coins');
var hero_food = document.getElementById('hero_food');

//buttons to press
const story = document.getElementById('storyButton');
const choiceA = document.getElementById('choiceA');
const choiceB = document.getElementById('choiceB');

//Text displayed
const narrator = document.getElementById('narrator');

//--------------------------------------------------------------
//event listeners for buttons //collects user data when clicked
choiceA.addEventListener('click', choose); 
choiceB.addEventListener('click', choose);
story.addEventListener('click', storyline); 

//*the responses vary for left and right choices, so instead of 'yes' or 'no', just choose 'A' or 'B'*

//required variables for function to work
var hero_choice = ''; 
var coins = 0;
var food = 0;
var cattle = 0; 

hero_box.style.visibility = 'hidden'; //hides box until random is summoned

function storyline() {

    //Begin Game
    if (adventure == 'intro') {

        adventure = 'begin'; //leads to next scenario

        //Button track
        story.style.visibility = 'visible'; //show 
        choiceA.style.visibility = 'hidden'; //hide
        choiceB.style.visibility = 'hidden'; //hide

        //BG track
        BG.classList = ''; //for game resart
        BG.classList.add('background');
        BG.classList.add('intro');

        narrator.innerText = "A Casual Adventure. Click 'Start' to Begin";

        story.innerText = 'Start';

        return; //gives control back to user
    }

    //Narrator Intro
    if (adventure == 'begin') { //starts function

        adventure = 'startRoll';  //leads to next scenario

        //Button track
        story.style.visibility = 'hidden';
        choiceA.style.visibility = 'visible';
        choiceB.style.visibility = 'visible';

        // BG track
        BG.classList = '';
        BG.classList.add('background');
        BG.classList.add('grassPath');

        //Characters
        characterBox.classList.add('character'); //for game restart
        characterBox.classList.add('hero');

        narrator.innerText = 'Welcome young traveller! Are you ready to begin a new life journey?';

        choiceA.innerText = 'Yes! I am filled with excitement!';
        choiceB.innerText = 'Today? Nah, maybe later.';

        return;

    }
     
    //Choices of Narrator Intro
    if (adventure == 'startRoll') {

        //Button track
        story.style.visibility = 'visible';
        choiceA.style.visibility = 'hidden';
        choiceB.style.visibility = 'hidden';

        if (hero_choice == 'choiceA') {

            adventure = 'items'; //leads to next scenario

            narrator.innerText = 'Then let us begin! Click the "roll" button to see what items you start off with.';

            story.innerText = 'Roll'; //leads to next scenario

        } else if(hero_choice == 'choiceB') {

            //Character
            characterBox.classList.remove('hero');

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

        adventure = 'stageOneStart'; //leads to next scenario

        random(); //gives user a random amount of certain items to start off with
    
    }

    //Beginning of Stage One
    if (adventure == 'stageOneStart') {

        adventure = 'stageOne';  //leads to next scenario

        //Button track
        story.style.visibility = 'hidden'; //add 'hide' class
        choiceA.style.visibility = 'visible';
        choiceB.style.visibility = 'visible';

        //BG track
        BG.classList = '';
        BG.classList.add('background');
        BG.classList.add('grassPath');

        //Characters
        characterBox.classList.remove('hero');
        characterBox.classList.add('merchant');

        narrator.innerText = 'Day 1: The first day is always filled with promise,(unless you had a really bad roll). As you settle in to your new lifestyle, a merchant comes by and holds up a bag. He says that it has fruit in it. All you have to do is trade 50 coins. Do you accept?';

        choiceA.innerText = 'Sure! Here is your pay, my good man.';
        choiceB.innerText = 'No! I just started this adventure!';

        return;

    }

    //Choices of Stage One
    if (adventure == 'stageOne') {

        adventure = 'stageTwoStart'; //leads to next scenario

        //Button Track
        story.style.visibility = 'visible';
        choiceA.style.visibility = 'hidden';
        choiceB.style.visibility = 'hidden';

        //Characters
        characterBox.classList.remove('merchant');

        if (hero_choice == 'choiceA') {

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
                    characterBox.classList.add('hero_happy');

                    narrator.innerText = ('The merchant thanks you for your purchase and speeds off. However, you begin to wonder if he was lying. Suspicion kicks in and you decide to check the bag. To your relief, it does have a few apples and grapes among other foods. [Food given: ' + food_given + '. Coins: -50] [END OF DAY ONE]');
                    food += food_given; //add to food based on random merch food
                    coins -= 50; //deduct from coins

                    story.innerText = 'Woah. Ok, nice';

                }else { //The merchant can cheat hero

                    //Characters
                    characterBox.classList.add('hero_angry');

                    narrator.innerText = ('The merchant thanks you for your purchase and speeds off. However, you begin to wonder if he was lying. Suspicion kicks in and you decide to check the bag. Sadly, to your disappointment, you\'ve been robbed. [Food given: ' + food_given + '. Coins: -50] [END OF DAY ONE]');
                    food += food_given;
                    coins -= 50;

                    story.innerText = 'Fantastic...';
                
                }


            }
            
        }else if(hero_choice == 'choiceB'){

            //BG track
            BG.classList.remove('grassPath');

            if (cattle > 10) {

                // BG track
                BG.classList.add('burningBarn');    

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

    //Beginning of Stage Two
    if (adventure == 'stageTwoStart') {
        
        adventure = 'stageTwo'; //leads to next scenario

        //Button track
        story.style.visibility = 'hidden'; //add 'hide' class
        choiceA.style.visibility = 'visible';
        choiceB.style.visibility = 'visible';

        //BG Track
        BG.classList = ''; //clears list (for choice scenarios)
        BG.classList.add('background');
        BG.classList.add('farmlands');
    
        //Characters
        characterBox.classList = ''; //clears list (for choice scenarios)
        characterBox.classList.add('character');
        characterBox.classList.add('farmer');

        narrator.innerText = 'Day 2: The second day is always filled with promise, (unless you started on the wrong foot). As you get ready to head off into town, you spot a sullen farmer. He says a person came by and burned all their cattle. The suspect\'s description sounded like the passing merchant, but you shrug it off nonchalantly. He asks if you have any cattle to spare. At least 10 will do. Will you help?';

        choiceA.innerText = 'Here, Glad to help';
        choiceB.innerText = 'There\'s a market nearby. Go buy more.';

        return;

    }

    //Choices of Stage Two
    if (adventure == 'stageTwo') {

        //Characters
        characterBox.classList.remove('farmer');   

        if (hero_choice == 'choiceA') {

            adventure = 'stageThreeStart'; //reset to scene start if an ending is picked

            //Button Track
            story.style.visibility = 'visible';;
            choiceA.style.visibility = 'hidden';
            choiceB.style.visibility = 'hidden';
            
            if (cattle < 10) {

                //BG Track
                BG.classList.remove('farmlands');
                BG.classList.add('barn');

                narrator.innerText = 'You explain to the farmer that you have less than that, and they smile sadly and nod. "That\'s fine, thanks for trying.", and they leave. This is a humbling moment for you, so you took the time to take care of what measly cattle you have, (if you have any). [END OF DAY TWO]' ;

                story.innerText = 'Thanks for reminding me of how broke I am...'; //allows function to go to next scenario upon click

            } else {

                //Characters
                characterBox.classList.add('hero_happy');  

                narrator.innerText = 'Out of the kindness of your heart, you help the farmer. In return for your kindness, he hands you 50 coins! You either feel good about this act of kindness or you\'re salivating over those coins. [Coins +50. Cattle: -10] [END OF DAY TWO]';
                cattle -= 10;
                coins += 50;

                story.innerText = 'What? No, I enjoy helping people! ...for the right price...' ; //allows function to go to next scenario upon click
            }

            hero_coins.innerText = coins;
            hero_cattle.innerText = cattle;
            hero_food.innerText = food;
    
        } else if(hero_choice == 'choiceB') {
 
            //BG Track
            BG.classList.add('blood');
            
            narrator.innerText = 'The farmer starts yelling and spits at you. However, this farmer, doesn\'t know how short your temper is. You blink, and suddenly there\'s a dead farmer and blood on your hands. Not willing to go back to prison, you leave everything behind but the coins you have and head for the hills, never to be seen again. ["YOU KILLED SOMEBODY?!" END (4)]';   

            story.innerText = 'Whoops! My bad, old habits. Need to restart that...'; 

            adventure = 'stageTwoStart'; //Goes back to beginning of scenario

            //Button Track
            story.style.visibility = 'visible';;
            choiceA.style.visibility = 'hidden';
            choiceB.style.visibility = 'hidden';

            return;

        }

        return;

    }

    //Beginning of Stage Three
    if (adventure == 'stageThreeStart') {

        adventure = 'stageThree'; //leads to next scenario

        //Button Track
        story.style.visibility = 'hidden'; //add 'hide' class
        choiceA.style.visibility = 'visible';
        choiceB.style.visibility = 'visible';

        //BG track
        BG.classList = '';
        BG.classList.add('background')
        BG.classList.add('market');

        //Characters
        characterBox.classList = '';
        characterBox.classList.add('character');
        characterBox.classList.add('traders'); 

        narrator.innerText = 'Day 3: The third day is...you know the line. You head off towards the trade market. While there, two traders approch you, selling potions. One tells you that hers grants happiness. The other tells you that hers tastes like grapes and dead fish. You don\'t want either, but since they tell you that they are free samples, you decide to pick one. Which do you choose?';

        choiceA.innerText = 'Yellow! Need a bit of that for this story...';
        choiceB.innerText = 'Purple! Why? ...no seriously, why?';

        return;

    }

    //Choices of Stage Three
    if (adventure == 'stageThree') {

        //Button Track
        story.style.visibility = 'visible';
        choiceA.style.visibility = 'hidden';
        choiceB.style.visibility = 'hidden';

        //BG track
        BG.classList.remove('market');
        
        //Characters
        characterBox.classList.remove('traders'); 

        if (hero_choice == 'choiceA') {

            //BG track
            BG.classList.add('tombstone');

            narrator.innerText = 'So, you won\'t believe this, but the guy with the yellow potion was lying! Crazy right? After drinking it,some crazy events begin to happen. Long story short, you died from poisoning by arsenic and...well...let\'s just say that yellow tint wasn\'t food coloring ok? ["Forbidden lemonade" END (5)]'; 
  
            story.innerText = '*Gurgling Noises*';

            adventure = 'stageThreeStart';
            
            return;

        }else if (hero_choice == 'choiceB') {

            adventure = 'stageFourStart'; //leads to next scenario

            //BG track
            BG.classList.add('nighttime');

            narrator.innerText = 'Turns out the flavor was really Blackberry. But you thanked the trader and went on your way, looking for a spot to start selling. The day was rough, but you managed to sell some items for 10 coins and even bought 50 cattle. As it began to get dark, you head home a bit richer. [Coins: +10] [END OF DAY THREE]';
            coins += 10; //add to coins
            cattle += 50; //add to cattle
            
            hero_coins.innerText = coins;
            hero_cattle.innerText = cattle;
            hero_food.innerText = food;

            story.innerText = 'Partying at the tavern tonight! Whoo!';

        }

        return;
        
    }

    //Beginning of Stage Four
    if (adventure == 'stageFourStart') {

        adventure = 'stageFour';

        //Button Track
        story.style.visibility = 'hidden'; //add 'hide' class
        choiceA.style.visibility = 'visible';
        choiceB.style.visibility = 'visible';

        //BG track
        BG.classList = '';
        BG.classList.add('background');
        BG.classList.add('bedroom');

        //Characters
        characterBox.classList = '';
        characterBox.classList.add('character');

        narrator.innerText = 'Day 4: {Insert line here}. You wake up and get ready for the day. As you\'re cooking breakfast, you hear a knock at the door. You remembered that you weren\'t expecting visitors for another three months. A wave of suspicion hits you like a semi. Should you open the door?';

        choiceA.innerText = 'I\'ll be there in a moment.';
        choiceB.innerText = 'Stranger danger! *Starts dialing 911*';

        return;

    }

    //Choices of Stage Four
    if (adventure == 'stageFour') {

        //Button Track
        story.style.visibility = 'visible';
        choiceA.style.visibility = 'hidden';
        choiceB.style.visibility = 'hidden';

        //BG track 
        BG.classList.remove('bedroom');
        BG.classList.add('kitchen');

        if (hero_choice == 'choiceA') {

            adventure = 'narrator note'; //leads to next scenario

            //Characters
            characterBox.classList.add('granny_happy');

            narrator.innerText = 'Turns out it was just your granny coming to give you some homecooked meals. She heard that you were having a bit of a hard time from your mother, and stopped by to you help out. How kind. [Food: +100] [END OF DAY FOUR]';
            food += 100; //granny came by with fiddles

            hero_coins.innerText = coins;
            hero_cattle.innerText = cattle;
            hero_food.innerText = food;

            story.innerText = 'Thank you Gran Gran!'; //allows function to go to next scenario upon click

        }else if(hero_choice == 'choiceB') {

            //Characters
            characterBox.classList.add('granny_angry');

            narrator.innerText = 'The knocking persists and you start panicking. Suddenly, the door breaks off the hinges, and a masked old lady steps in. Pure rage was on her face, and she lunges at you with a baguette, continuously slapping you with it! As you lose consciousness, you think to yourself: "Grandma?" before blacking out. ["Beaten by Granny\'s Baguette" END (6)]';

            story.innerText = 'Narrator speaking: Gonna open that door now, huh?';
            
            adventure = 'stageFourStart';

            return;  
        
        }

        return;

    }

    //Narrator Note
    if (adventure == 'narrator note') {

        //Button Track
        story.style.visibility = 'visible';

        //Hero Stats
        hero_box.style.visibility = 'hidden';

        // BG track
        BG.classList = '';
        BG.classList.add('background');
        BG.classList.add('lounge');

        //Characters
        characterBox.classList = '';

        narrator.innerText = 'Well, you\'ve reached the end of this story. more will be coming soon hopefully, whether an addition to this or a new game altogether. Enjoy this nice resting area, and feel free to play again and/or give me feedback if you wish. Either way, thank you for your time and see you soon.'; 

        story.innerText = 'Let\'s take it from the top!'; //Game resets when clicked

        adventure = 'intro'; //Game resetter
        
        coins = 0; 
        cattle = 0;
        food = 0;

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

//starts function to enable intro
storyline();