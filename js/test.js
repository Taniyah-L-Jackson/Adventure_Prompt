//starts the order of events
let adventure = 'intro';

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

//-----------------------------------------------------------------------
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

function storyline() {

    //Begin Game
    if (adventure == 'intro') {

        //Button track
        story.classList.remove('storyBtn') //remove 'hide' class

        adventure = 'begin'; //leads to next scenario
        narrator.innerText = "Click 'Start' to Begin";

        story.innerText = 'Start';

        return; //gives control back to user
    }

    //Narrator Intro
    if (adventure == 'begin') { //starts function

        //Button track
        story.classList.add('storyBtn'); //hide to show other buttons
        choiceA.classList.remove('choiceBtn'); //remove 'hide' class
        choiceB.classList.remove('choiceBtn'); //remove 'hide' class

        adventure = 'startRoll';  //leads to next scenario

        narrator.innerText = 'Welcome young traveller! Are you ready to begin a new life journey?';

        choiceA.innerText = 'Yes! I am filled with excitement!';
        choiceB.innerText = 'No, ask me tomorrow or something.';

        return;

    }
     
    //Choices of Narrator Intro
    if (adventure == 'startRoll') {

        //Button track
        story.classList.remove('storyBtn'); //remove 'hide' class
        choiceA.classList.add('choiceBtn'); //add 'hide' class
        choiceB.classList.add('choiceBtn'); //add 'hide' class
        
        if (hero_choice == 'choiceA') {

            adventure = 'items'; //leads to next scenario

            narrator.innerText = 'Then let us begin! Click the "roll" button to see what items you start off with.';

            story.innerText = 'roll'; //leads to next scenario

        } else if(hero_choice == 'choiceB') {
            
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
        story.classList.add('storyBtn'); //add 'hide' class
        choiceA.classList.remove('choiceBtn'); //remove 'hide' class
        choiceB.classList.remove('choiceBtn'); //remove 'hide' class

        narrator.innerText = 'Day 1: The first day is always filled with promise, (unless you had a really bad roll). As you settle in to your new lifestyle, a merchant comes by and holds up a bag. He says that it has fruit in it. All you have to do is trade 50 coins. Do you accept?';

        choiceA.innerText = 'Sure! Here is your pay, my good man.';
        choiceB.innerText = 'No! I just started this adventure!';

        return;

    }

    //Choices of Stage One
    if (adventure == 'stageOne') {

        adventure = 'stageTwoStart'; //leads to next scenario

        //Button Track
        story.classList.remove('storyBtn') //remove 'hide' class;
        choiceA.classList.add('choiceBtn') //add 'hide' class
        choiceB.classList.add('choiceBtn') //add 'hide' class

        if (hero_choice == 'choiceA') {

            //Merchant Food: 
            merch_food = [50, 10, 0];

            if (coins < 50) {

                narrator.innerText = ('You explain to the merchant that you\'re short on cash at the moment, but willing to trade for the fruit. The merchant frowns and says, "Hope you like noodles". Before you could ask what he meant by that, he continued on his way. As realization slowly seeps in, you head off towards your barn only to find...spaghetti noodles? [END OF DAY ONE]')

                food += cattle //add cattle amount to food
                cattle -= cattle //reduce cattle to 0

            }else {

                //What hero gets from merchant is randomized
                var food_given = merch_food[Math.floor(Math.random() * merch_food.length)]; 

                if(food_given > 0) {

                    narrator.innerText = ('The merchant thanks you for your purchase and speeds off. However, you begin to wonder if he was lying. Suspicion kicks in and you decide to check the bag. To your relief, it does have a few apples and grapes among other foods. [Food given: ' + food_given + '. Coins: -50] [END OF DAY ONE]');
                    food += food_given; //add to food based on random merch food
                    coins -= 50; //deduct from coins

                    story.innerText = 'Woah. Ok, nice'; //allows function to go to next scenario upon click 

                }else { //The merchant can cheat hero

                    narrator.innerText = ('The merchant thanks you for your purchase and speeds off. However, you begin to wonder if he was lying. Suspicion kicks in and you decide to check the bag. Sadly, to your disappointment, you\'ve been robbed. [Food given: ' + food_given + '. Coins: -50] [END OF DAY ONE]');
                    food += food_given;
                    coins -= 50;

                    
                    story.innerText = 'Fantastic...'; //allows function to go to next scenario upon click 
                
                }


            }
            
        }else if(hero_choice == 'choiceB'){

            if (cattle > 10) {

                narrator.innerText = 'The merchant went away hanging his head, and you couldn\'t help but feel a sting of pity. However, you continue with your day. As night comes along, you get ready for bed and patiently wait to start your next day. END OF DAY O-, hold up. You smell that? Is...is that...burnt wool? [Cattle -50] [END OF DAY ONE]';
                cattle -= 50; //merchat "takes out" cattle           

            }else if (cattle <= 10) { //doesn't take anything if hero is cattle-broke

                narrator.innerText = 'The merchant went away hanging his head, and you couldn\'t help but feel a sting of pity. However, you continue with your day. As night comes along, you get ready for bed and patiently wait for the next morning. Later that night, the merchant comes by with a lighter and gasoline. As he checks your wares however, he sees why you couldn\'t pay anyway and leaves shaking their head. [END OF DAY ONE]'; 
            }

            story.innerText = 'Wait what?'; //allows function to go to next scenario upon click

        }

        hero_coins.innerText = ('Coins: ' + coins);
        hero_cattle.innerText = ('Cattle: ' + cattle);
        hero_food.innerText = ('Food: ' + food);
  
        return;

    } 

    //Beginning of Stage Two
    if (adventure == 'stageTwoStart') {
        
        adventure = 'stageTwo'; //leads to next scenario

        //Button track
        story.classList.add('storyBtn'); //add 'hide' class
        choiceA.classList.remove('choiceBtn'); //remove 'hide' class
        choiceB.classList.remove('choiceBtn'); //remove 'hide' class

        narrator.innerText = 'Day 2: The second day is always filled with promise, (unless you had a really bad roll or got robbed or...nevermind). As you get ready to head off into town, a farmer comes by very distraught. He says a merchant-looking person came by and burned all their cattle. The suspect sounded familar, (but you didn\'t have any problems with them right?) He asks if you have any cattle to spare. At least 10 will do. Will you help?';

        choiceA.innerText = 'Here, Glad to help';
        choiceB.innerText = 'There\'s a market nearby. Go buy more.';

        return;

    }

    //Choices of Stage Two
    if (adventure == 'stageTwo') {

        if (hero_choice == 'choiceA') {

            adventure = 'stageThreeStart'; //reset to scene start if an ending is picked

            //Button Track
            story.classList.remove('storyBtn'); //remove 'hide' class;
            choiceA.classList.add('choiceBtn'); //add 'hide' class
            choiceB.classList.add('choiceBtn'); //add 'hide' class
            
            if (cattle < 10) {

                narrator.innerText = 'You explain to the farmer that you have less than that, and they smile sadly and nod. "That\'s fine, thanks for trying.", and they leave. This is a humbling moment for you, so you took the time to take care of what measly cattle you have, (if you have any). [END OF DAY TWO]' ;

                story.innerText = 'Thanks for reminding me of how broke I am...'; //allows function to go to next scenario upon click

            } else {

                narrator.innerText = 'Out of the kindness of your heart, you help the farmer. In return for your kindness, he hands you 50 coins and you both wave goodbye to each other. You either feel good about this act of kindness or you\'re salivating over those coins. [Coins +50. Cattle: -10] [END OF DAY TWO]';
                cattle -= 10;
                coins += 50;

                story.innerText = 'What? No, I enjoy helping people! ...for the right price...' ; //allows function to go to next scenario upon click
            }

            hero_coins.innerText = ('Coins: ' + coins);
            hero_cattle.innerText = ('Cattle: ' + cattle);
            hero_food.innerText = ('Food: ' + food);


    
        } else if(hero_choice == 'choiceB') {
            
            narrator.innerText = 'The farmer starts yelling and spits at you. However, this farmer, doesn\'t know how short your temper is. You blink, and suddenly there\'s a dead farmer and blood on your hands. Not willing to go back to prison, you leave everything behind but the coins you have and head for the hills, never to be seen again. ["YOU KILLED SOMEBODY?!" END (4)]';   

            story.innerText = 'Whoops! My bad, old habits. Need to restart that...'; 

            adventure = 'stageTwoStart'; //Goes back to beginning of scenario

            //Button Track
            story.classList.remove('storyBtn'); //remove 'hide' class;
            choiceA.classList.add('choiceBtn'); //add 'hide' class
            choiceB.classList.add('choiceBtn'); //add 'hide' class

            return;

        }

        return;

    }

    //Beginning of Stage Three
    if (adventure == 'stageThreeStart') {

        //Button Track
        story.classList.add('storyBtn'); //add 'hide' class
        choiceA.classList.remove('choiceBtn'); //remove 'hide' class
        choiceB.classList.remove('choiceBtn'); //remove 'hide' class
        
        adventure = 'stageThree'; //leads to next scenario

        narrator.innerText = 'Day 3: The third day is...you know the line. You head off towards the trade market in town, hoping to sell some stuff while you\'re there. While there, you come across two traders selling unusual items. One offers a yellow potion and tells you that it grants happiness. The other tells you of a purple potion that tastes like grapes and dead fish. You don\'t want either, but they both convince you that the samples are free. You, not willing to turn down free samples, decided to pick one. Which do you choose?';

        choiceA.innerText = 'Yellow! I need some of that for this trainwreck...';
        choiceB.innerText = 'Purple! Why? ...no seriously, why?';

        return;

    }

    //Choices of Stage Three
    if (adventure == 'stageThree') {

        //Button Track
        story.classList.remove('storyBtn'); //remove 'hide' class;
        choiceA.classList.add('choiceBtn'); //add 'hide' class
        choiceB.classList.add('choiceBtn'); //add 'hide' class

        if (hero_choice == 'choiceA') {

            //Enable a go-back button here
            narrator.innerText = 'So, you won\'t believe this, but the guy with the yellow potion was lying! Crazy right? After drinking it,some crazy events begin to happen. Long story short, you died from poisoning by arsenic and...well...let\'s just say that yellow tint wasn\'t food coloring ok? ["Forbidden lemonade" END (5)]'; 
  
            story.innerText = '*Gurgling Noises*';

            adventure = 'stageThreeStart';
            
            return;

        }else if (hero_choice == 'choiceB') {

            adventure = 'stageFourStart'; //leads to next scenario

            narrator.innerText = 'Turns out the flavor was really Blackberry. But you thanked the trader and went on your way, looking for a spot to start selling. The day was rough, but you managed to sell some items for 10 coins and even bought 50 cattle. As it began to get dark, you head home a bit richer. [Coins: +10] [END OF DAY THREE]';
            coins += 10; //add to coins
            cattle += 50; //add to cattle
            
            hero_coins.innerText = ('Coins: ' + coins);
            hero_cattle.innerText = ('Cattle: ' + cattle);
            hero_food.innerText = ('Food: ' + food);

            story.innerText = 'Partying at the tavern tonight! Whoo!';

        }

        return;
        
    }

    //Beginning of Stage Four
    if (adventure == 'stageFourStart') {

        adventure = 'stageFour';

        //Button Track
        story.classList.add('storyBtn'); //add 'hide' class
        choiceA.classList.remove('choiceBtn'); //remove 'hide' class
        choiceB.classList.remove('choiceBtn'); //remove 'hide' class

        narrator.innerText = 'Day 4: {Insert line here}. You wake up and get ready for the day. As you\'re cooking breakfast, you hear a knock at the door. You remembered that you weren\'t expecting visitors for another three months. A wave of suspicion hits you like a semi. Should you open the door?';

        choiceA.innerText = 'I\'ll be there in a moment.';
        choiceB.innerText = 'Stranger danger! *Starts dialing 911*';

        return;

    }

    //Choices of Stage Four
    if (adventure == 'stageFour') {

        //Button Track
        story.classList.remove('storyBtn'); //remove 'hide' class
        choiceA.classList.add('choiceBtn'); //add 'hide' class
        choiceB.classList.add('choiceBtn'); //add 'hide' class

        if (hero_choice == 'choiceA') {

            adventure = 'narrator note'; //leads to next scenario

            narrator.innerText = 'Turns out it was just your granny coming to give you some homecooked meals. She heard that you were having a bit of a hard time from your mother, and stopped by to you help out. How kind. [Food: +100] [END OF DAY FOUR]';
            food += 100; //granny came by with fiddles

            hero_coins.innerText = ('Coins: ' + coins);
            hero_cattle.innerText = ('Cattle: ' + cattle);
            hero_food.innerText = ('Food: ' + food);

            story.innerText = 'Thank you Gran Gran!'; //allows function to go to next scenario upon click

        }else if(hero_choice == 'choiceB') {

            narrator.innerText = 'The knocking persists and you start to grow more and more fightened. Then, the door breaks off the hinges, and an old lady steps in with a mask on. The look on her face was pure rage, and she lunges at you with a baguette, slapping you continuously with it. As you slowly lose consciousness, you think to yourself: "Grandma?" before blacking out. ["Beaten by Granny\'s Baguette" END (6)]';

            story.innerText = 'Narrator speaking: Gonna open that door now, huh?';
            
            adventure = 'stageFourStart';

            return;  
        
        }

        return;

    }

    if (adventure == 'narrator note') {

        //Button Track
        story.classList.remove('storyBtn') //remove 'hide' class   

        narrator.innerText = 'Well, you\'ve reached the end of this story. more will be coming soon hopefully, whether an addition to this or a new game altogether. Thank you for your time and see you soon.'; 

        story.innerText = 'Let\'s take it from the top!'; //Game resets when clicked

        adventure = 'intro'; //Game resetter
    
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
  
    hero_coins.innerText = ('Coins: ' + coins);
    hero_cattle.innerText = ('Cattle: ' + cattle);
    hero_food.innerText = ('Food: ' + food);

    return food, cattle, coins; //for use in-game
}

function choose() { //gets value of clicked button (choices only)

    hero_choice = this.value; //'this' refers to 'choices'
    storyline(); //continues storyline
       
}

//starts function to enable intro
storyline();