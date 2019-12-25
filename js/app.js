//Build your own adventure!
//At least four stages
var food_amt = [100, 50, 10, 0]
var coins_amt = [100, 50, 10, 0]
var cattle_amt = [100, 50, 10, 0]

var hero_cattle = document.getElementById('hero_cattle')
var hero_coins = document.getElementById('hero_coins')
var hero_food = document.getElementById('hero_food')
var narrator = document.getElementById('narrator')
var button = document.getElementById('button')
// var narration = document.getElementById('text').value

narrator.innerText = ('Welcome young traveller! Are you ready to begin a new life journey? (Yes / No)')

function userInput(hero) {
  
    let hero_choice = '';

    if (hero_choice != '') {
        
        hero_choice = '';
        //hero_choice = document.getElementById('text').value; //breaks code
    }

    hero_choice = document.getElementById('text').value; 
    button.innerText = 'Continue';
    storyline(hero_choice);

}

function storyline(hero_choice) {
    
    if (hero_choice == 'Yes' || hero_choice == 'yes') {

        narrator.innerText = ('Then let us begin! Type "roll" to see what items you start off with.')
        userInput(new_hero_choice)
        //new_hero_choice = hero_choice; //replacing old choice

        // story_Begins = hero_choice

        if(hero_choice == 'roll') {

            random();

            // console.log('Begin Stage One!')
            narrator.innerText = ('Day 1: The first day is always filled with promise, (unless you had a really bad roll). As you settle in to your new lifestyle, a small merchant comes by and holds up a bag. They say that it has fruit in it. All you have to do is trade 40 coins. Do you accept? (Yes / No).')
            stageOne = prompt(('Yes / No'))

            //Merchant wares: 
            merch_food = [50, 10, 0]

            if (stageOne == 'yes' || stageOne == 'Yes' ) {

                if (coins < 40) { 

                    narrator.innerText = ('You explain to the merchant that you\'re short on cash at the moment, but willing to trade for the fruit. The merchant laughs and says, "Skedaddle, Skedoodle, your cattle\'s now noodles!". He continues on his merry way, leaving you clueless as to what they meant by that. As realization slowly seeps in, you head off towards your barn only to find...spaghetti noodles? [END OF DAY ONE]')
                    food += cattle //add cattle amount to food
                    cattle == 0 //reduce cattle to 0

                } else {

                    var food_given = merch_food[Math.floor(Math.random() * merch_food.length)];

                    if(food_given > 0) {

                        narrator.innerText = ('The merchant thanks you for your purchase and speeds off. You wonder if they were lying and check the bag. To your relief, it does have a few apples and grapes among other foods. [Food given: ' + food_given + '. Coins: -40] [END OF DAY ONE]');
                        food += food_given;
                        coins -= 40;

                    }else {

                        narrator.innerText = ('The merchant thanks you for your purchase and speeds off. You wonder if they were lying and check the bag. Sadly, to your disappointment, you\'ve been robbed. [Food given: ' + food_given + '. Coins: -40] [END OF DAY ONE]');
                        food += food_given;
                        coins -= 40;
                    
                    }

                }

            }else {

                if (cattle > 10){

                    narrator.innerText = ('The merchant went away hanging his head, and you couldn\'t help but feel a sting of pity. However, you continue with your day. As night comes along, you get ready for bed and patiently wait to start your next day. END OF DAY O-, hold up. You smell that? Is...is that...burnt wool? [Cattle -50] [END OF DAY ONE]' );
                    cattle -= 50;            

                }else if (cattle <= 10){
                    narrator.innerText = ('The merchant went away hanging his head, and you couldn\'t help but feel a sting of pity. However, you continue with your day. As night comes along, you get ready for bed and patiently wait for the next morning. Later that night, the merchant comes by with a lighter and gasoline. As he checks your wares however, he sees why you couldn\'t pay anyway and leaves shaking their head. [END OF DAY ONE]'); 
                }

            }

            console.log('Food: ' + food)
            console.log('Cattle: ' + cattle)
            console.log('Coins: ' + coins)

            //console.log('Begin Stage Two!')
            narrator.innerText = ('Day 2: The second day is always filled with promise, (unless you had a really bad roll or got robbed or...nevermind). As you get ready to head off into town, a farmer comes by very distraught. They say a merchant-looking person came by and burned all their cattle. The suspect sounded familar, (but you didn\'t have any problems with them right?) They ask if you have any cattle to spare. At least 10 will do. Will you help? (Yes / No).');


            if (stageTwo == 'yes' || stageTwo == 'Yes') {

                if (cattle < 10) {

                    narrator.innerText = ('You explain to the farmer that you have less than that, and they smile sadly and nod. "That\'s fine, thanks for trying.", and they leave. This is a humbling moment for you, so you took the time to take care of what measly cattle you have, (if you have any). [END OF DAY TWO]' ) 

                } else {

                    narrator.innerText = ('Out of the kindness of your heart, you help the farmer. In return for your kindness, they hand you 50 coins and you both wave goodbye to each other. You either feel good about this act of kindness or you\'re salivating over those coins. [Coins +50. Cattle: -10] [END OF DAY TWO]');
                    cattle -= 10;
                    coins += 50;
                }

                hero_coins.innerText = ('Coins: ' + coins)
                hero_cattle.innerText = ('Cattle: ' + cattle)
                hero_food.innerText = ('Food: ' + food)

                //console.log('Begin Stage Three!')
                narrator.innerText = ('Day 3: The third day is...you know the line. You head off towards the trade market in town, hoping to sell some stuff while you\'re there. While there, you come across two traders selling unusual items. One offers a yellow potion and tells you that it grants happiness. The other tells you of a purple potion that tastes like grapes and dead fish. You don\'t want either, but they both convince you that the samples are free. You, not willing to turn down free samples, decided to pick one. Which do you choose? (Yellow / Purple).');

                if (stageThree == 'yellow' || stageThree == 'Yellow' ) {

                    narrator.innerText = ('So, you won\'t believe this, but the guy with the yellow potion was lying! Crazy right? After drinking it,some crazy events begin to happen. Long story short, you died from poisoning by arsenic and...well...let\'s just say that yellow tint wasn\'t food coloring ok? ["Forbidden lemonade" END]') 
                    console.log('[END 5]')

                }else if(stageThree == 'purple' || stageThree == 'Purple') {

                    narrator.innerText = ('Turns out the flavor was really Blackberry. But you thanked the trader and went on your way, looking for a spot to start selling. The day was rough, but you managed to sell some items for 10 coins and even bought 50 cattle. As it began to get dark, you head home a bit richer. [Coins: +10] [END OF DAY THREE]')
                    coins += 10
                    cattle += 50
                    
                    hero_coins.innerText = ('Coins: ' + coins)
                    hero_cattle.innerText = ('Cattle: ' + cattle)
                    hero_food.innerText = ('Food: ' + food)

                    //console.log('Begin Stage Four!')
                    narrator.innerText = ('Day 4: {Insert line here}. You wake up and get ready for the day. As you\'re cooking breakfast, you hear a knock at the door. You remembered that you weren\'t expecting visitors for another three months. A wave of suspicion hits you like a semi. Should you open the door? (Yes/ No).');

                    if (stageFour == 'yes' || stageFour == 'Yes' ) {

                        narrator.innerText = ('Turns out it was just your granny coming to give you some homecooked meals. She heard that you were having a bit of a hard time from your mother, and stopped by to you help out. How kind. [Food: +100] [END OF DAY FOUR]')
                        food += 100

                        hero_coins.innerText = ('Coins: ' + coins)
                        hero_cattle.innerText = ('Cattle: ' + cattle)
                        hero_food.innerText = ('Food: ' + food)
        
                        narrator.innerText = ('Well, you\'ve reached the end of this story. more will be coming soon hopefully, so please be patient. Thank you for your time and see you soon.') 

                    }else if(stageFour = 'no' || stageFour == 'No') {

                        narrator.innerText = ('The knocking persists and you start to grow more and more fightened. Then, the door breaks off the hinges, and an old lady steps in with a bandanna on. The look on her face was pure rage, and she lunges at you with a baguette, slapping you continuously with it. As you slowly lose consciousness, you think to yourself: "Grandma?" before blacking out. ["Beaten by Granny\'s Baguette" END]')
                        console.log('[END 6]')    
                    
                    }

                }

            }else if (stageTwo == 'no' || stageTwo == 'No'){

                narrator.innerText = ('The farmer starts yelling and spits at you. However, this farmer, doesn\'t know how short your temper is. You blink, and suddenly there\'s a dead farmer and blood on your hands. Not willing to go back to prison, you leave everything behind but the coins you have and head for the hills, never to be seen again. ["YOU KILLED SOMEBODY?!" END]')   
                console.log('[END 4]')
            }   



        }else {

            narrator.innerText = ('You couldn\'t even type "roll" as instructed, so the narrator did you a service and ended this trainwreck before it even began. ["Can\'t Spell" END.]')  
            console.log('[END 2]')

        }

        //-------------------------------------------------------------------------------------------------

    } else if(narrator == 'No' || narrator == 'no') {
        
        narrator.innerText = ('Fast fowarding to your death then. There was no point to remember your name. No one came to the burial, not even the pallbearers. You died with no legacy and in a casket to rot, full of regret and sadness. ["Pointless" END]')
        console.log('[END 1]')

    }
}

function random() {
    //add randomizer here
    var random_food = food_amt[Math.floor(Math.random() * food_amt.length)];

    var random_coins = coins_amt[Math.floor(Math.random() * coins_amt.length)];

    var random_cattle = cattle_amt[Math.floor(Math.random() * cattle_amt.length)];
    //-----------------------------------------------------------------------------------

    if(random_coins != 0 || random_cattle != 0 || random_food != 0) {

        if(random_food > 10){

            alert(random_food + ' food. That\'s a lot of food! better use it wisely')
            var food = random_food

        }else if(random_food == 10){

            alert(random_food + ' food. Ouch, thats a very low number of food, hopefully it gets better for you')
            var food = random_food

        }else {

            alert(random_food + ' food. You know, Leaves are tasty this time of year.')
            var food = random_food
        }

        if(random_cattle > 10){

            alert(random_cattle + ' cattle. That\'s a lot of cattle! Could be helpful.')
            var cattle = random_cattle

        }else if (random_cattle == 10) {

            alert(random_cattle + ' cattle. Thats a low amount of cattle. Better than none I guess.')
            var cattle = random_cattle

        }else {

            alert(random_cattle + ' cattle. A little difficulty never hurts.')
            var cattle = random_cattle

        }

        if(random_coins > 10){

            alert(random_coins + ' coins. It\'s good to have a lot of coins. Spend them wisely')
            var coins = random_coins


        }else if(random_coins == 10) {

            alert(random_coins + ' coins. You can buy, like, half of an apple with that amount.')
            var coins = random_coins

        }else {

            alert(random_coins + ' coins. What? I can\'t help you. Bad rolls happen.')
            var coins = random_coins

        }


    }else if(random_coins == 0 && random_cattle == 0 && random_food == 0){

        alert('Well, this is where your story ends. With nothing to use for trading, buying, or selling, you die a sad and very unlucky death. Your burial was either filled with people laughing at how pathetic you were, or extreme pity and sorrow. Your legacy was not worth remembering, I mean, would you want to remember that? ["Very Unlucky" END.]')
        console.log('[END 3]')

    }
    
    hero_coins.innerText = ('Coins: ' + coins)
    hero_cattle.innerText = ('Cattle: ' + cattle)
    hero_food.innerText = ('Food: ' + food)

    return hero_food, hero_cattle, hero_coins;
}



