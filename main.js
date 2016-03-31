var questionData = [
  {
    "id": 0,
    "question": "Hello Traveller! \n\nWelcome to Bandit Bash. \n\nI hope you fare well in this cruel town!",
    "answers": {
      "BEGIN": 1
    }
  },
  {
    "id": 1,
    "question": "You wake up in a Tavern and on you, you have 5 coins, a small dagger and a key. When you look around you see the bar, a shady person in the corner and the door.",
    "picture": "tavern.jpg",
    "answers": {
      "DRINK": 2,
      "TALK": 3,
      "LEAVE": 4
    }
  },
  {
    "id": 2,
    "question": "You walk over and the man there says a pint is 3 coins.",
    "answers": {
      "PAY": 5,
      "STEAL": 6,
      "BARTER": 7
    }
  },
  {
    "id": 3,
    "question": "The person says 'Hey kid, wanna test this potion I concocted? it's not lethal!'",
    "answers": {
      "TEST": 8,
      "GO": 9
    }
  },
  {
    "id": 4,
    "question": "You enter a street and see a house that looks familiar. Try the...",
    "answers": {
      "DOOR": 10,
      "HATCH": 11
    }
  },
  {
    "id": 5,
    "question": "You take a chug and you begin to feel queasy and then you blackout. When you wake up you are in a prison cell in the Guards Tower. You see a Guard out through the bars, a barred of window and a metal pole on the floor.",
    "answers": {
      "TRICK": 26,
      "LOOK": 27,
      "ESCAPE": 28
    }
  },
  {
    "id": 6,
    "question": "Whilst the bartender has his backturned, You grab the glass and try to sneak it out. Before you get far another man at the bar ,of which is very beefy, says to you 'Oi! You gonna pay for that aren't ya boy? Without thinking you automatically reply with 'Back off!'. The man stands up to you fiercly.",
    "answers": {
      "FIGHT": 29,
      "PLEAD": 30
    }
  },
  {
    "id": 7,
    "question": "You decide that the price is Outrageous! 'That's ridiculous, come on, I have no memory and I just woke up, can't we make a deal?' The bartender leans towards you and stares at you dead in the eye. He says 'GET... OUT...' you leave out the back entrance... Where do you go?",
    "answers": {
      "BLACKSMITH": 12,
      "BUTCHER": 13,
      "LIBRARY": 14
    }
  },
  {
    "id": 8,
    "question": "Sure, why not. Just listen to the creepy guy with the random drink. Anyways you take a gulp and Pass out. Shoulda seen that coming. You wake up in a Dark room and your tied to a chair with rope. Around the room are Flame torches and on the floor is a switch.",
    "answers": {
      "SHUFFLE": 15,
      "KICK": 16
    }
  },
  {
    "id": 9,
    "question": "You decline but as you walk off the man draws a Revolver and shoots you in the back and you collapse to the floor. You regain conciousness and you are in an Infirmary.",
    "answers": {
      "CALL": 17,
      "DITCH": 18
    }
  },
  {
    "id": 10,
    "question": "You put in the key and the door clicks. As you enter everything is trashed. The backdoor is slammed down, there's a blood patch on the counter and a fire.",
    "answers": {
      "CHECK": 19,
      "TEST": 20,
      "TEND": 21
    }
  },
  {
    "id": 11,
    "question": "As you open the trapdoor, you fall down into the pit. When you hit the ground, you're head clangs against a pile of ,surprisingly clean, bones and skulls. As you look around you see a red fiery orb, A shield with arrows lodged inside of it and a Mecidinal root.",
    "answers": {
      "ORB": 23,
      "SHIELD": 24,
      "PLANT": 25
    }
  },
  {
    "id": 12,
    "question": "You enter the Blacksmith's and head towards the till. 'All items on sale, for example, our best sellers are all 5 coins each,' You have the option...",
    "answers": {
      "SWORD": 31,
      "AXE": 32,
      "STAFF": 33
    }
  },
  {
    "id": 13,
    "question": "You walk into the Butcher's and you are greeted by a bunch of jolly people in a group. As you walk by you nod and then talk to the Butcher. 'Alright lad, any piece of meat is 4 coins' You see in the background a 'LOOKING FOR HELP' poster. 'Oh, that. our animals out back get getting attacked by a rabid wolf. We could do with a strong guy like you. I'll pay you 10 coins'",
    "answers": {
      "MEAT": 34,
      "HELP": 35
    }
  },
  {
    "id": 14,
    "question": "You enter a well lit and calm library and search through the shelves. 3 subjects interset you...",
    "answers": {
      "COMBAT": 36,
      "SPELLS": 37,
      "BEASTS": 38
    }
  },
  {
    "id": 15,
    "question": "Precariously, you hop over towards one of the torches on the wall a light the ropes around your hands on fire. Once they've burnt through, you bang on the door and demand answers. A hooded dude like the one you saw in the Tavern approaches you and says 'Wow, you got out, follow me...'",
    "answers": {
      "FOLLOW": 39,
      "HIT": 40
    }
  },
  {
    "id": 16,
    "question": "You swing your leg furiously multiple times and eventually it clicks. You fall through the floor and down a funnel. You land in a pit of corpses and bones. Over in the corner is a vicious rotten ghoul gnawing on a corpse.",
    "answers": {
      "SPLINTER": 41,
      "PLAY": 42
    }
  }
];


// Don't edit below here! :)

var displayQuestion = function (questionId) {
  'use strict';

  var question = questionData[questionId];
  if (question) {
    if (question.answers && Object.keys(question.answers).length) {

      var theQuestion = question.question;
      var questionArea = document.querySelector('.question');


      questionArea.innerText = theQuestion;

      var theAnswers = question.answers;
      var buttonArea = document.querySelector('.buttons');

      buttonArea.innerHTML = '';

      var newButtonHTML = '';
      var answerButton = document.createElement('button');
      for (var answer in theAnswers) {
        var thisButton = answerButton.cloneNode(false);
        thisButton.innerText = answer;
        var thisValue = theAnswers[answer];
        thisButton.setAttribute("onclick","displayQuestion("+thisValue+")", false);
        buttonArea.appendChild(thisButton);
      }

    } else {
      // No answers needed, just show the text!
      document.querySelector('.question').innerText = question.question;
      document.querySelector('.buttons').innerHTML = '';
    }

    // Stuff to always do...
    if (question.picture && question.picture.length) {
      var pictureEl = document.querySelector('#picture');
      var newSrc = "images/" + question.picture;

      pictureEl.src = newSrc;

    }
  } else {
    // That's uh... not a question. Awkward.
    alert("That's not an option Wary Traveller...");
  }
};

displayQuestion(0);
