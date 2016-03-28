var questionData = [
// This is one question
  {
    "id": 1,
    "question": "You wake up in a Tavern and on you, you have 5 coins, a small dagger and a key. When you look around you see the bar, a shady person in the corner and the door.",
// If you want to give a choice, add some answers like this
    "answers": {
// The numbers must match another question
      "DRINK": 2,
      "TALK": 3,
      "LEAVE": 4
    }
  },
// This is the end of the question

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
    }
  },
  {
    "id": 6,
    "question": "Whilst the bartender has his backturned, You grab the glass and try to sneak it out. Before you get far another man at the bar ,of which is very beefy, says to you 'Oi! You gonna pay for that aren't ya boy? Without thinking you automatically reply with 'Back off!'. The man stands up to you fiercly.",
    "answers": {
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
    "question": "Sure, drink it. What could go wrong? oh, oh dear. You're struggling for oxygen and collapse. Your last sight was a dark mysterious figure laughing..."
  },
  {
    "id": 9,
    "question": "Screw that! Don't trust a stranger, especially when they offer you beverages. You leave to explore and keep your life. Good for you!"
  },
  {
    "id": 10,
    "question": "You put in the key... You twist it... It snaps. GODDAMN! well, uh... It's a bit chilly out isn't it?"
  },
  {
    "id": 11,
    "question": "You open the trapdoor and jump in! hold on... you're still falling. It's there's no flo- SPLAT! Good One, Idiot."
  },
  {
    "id": 12,
    "question": "blacksmith..."
  },
  {
    "id": 13,
    "question": "butcher..."
  },
  {
    "id": 14,
    "question": "library..."
  }
];


// Don't edit below here! :)

var displayQuestion = function (questionId) {
  var question = questionData[questionId];
  if (question) {
    // Cool let's show the question then.
    if (question.answers && Object.keys(question.answers).length) {
      // var questionText = question.question + "\n";
      // for (var answer in question.answers) {
      //   var i = Object.keys(question.answers).indexOf(answer)
      //   // This sticks the answer options together
      //   // For example: [SECOND], [THIRD], [FOURTH]
      //   questionText += "["+answer+"]";

      //   if (i !== (Object.keys(question.answers).length - 1)) {
      //     // This let's us stick a comma after all but the last option
      //     questionText += " or ";
      //   }
      // };
      // var query = (prompt(questionText)||"").toUpperCase();



      // var queryId = question.answers[query] - 1;
      // displayQuestion(queryId);


      var theQuestion = question.question;
      var questionArea = document.querySelector('.question');


      questionArea.innerText = theQuestion;

      var theAnswers = question.answers;
      var buttonArea = document.querySelector('.buttons');

      buttonArea.innerHTML = '';

      var newButtonHTML = '';

      for (var answer in theAnswers) {
        var i = Object.keys(theAnswers).indexOf(answer)
        var answerButton = document.createElement('button');
        answerButton.innerText = answer;
        answerButton.value = i;

        answerButton.onclick = function () {
          displayQuestion(i);
        };


        buttonArea.appendChild(answerButton);
      }

    } else {
      // No answers needed, just show the text!
      alert(question.question);
    }
  } else {
    // That's uh... not a question. Awkward.
    alert("That's not an option Wary Traveller...");
  }
};

displayQuestion(0);
