var questionData = [
  {
    "id": 0,
    "question": "Hello Traveller! \n\nWelcome to Bandit Bash. \n\nCan you fend off the beasts that lurk in Kragnar? \n\nAre you wise enough to learn the strongest spells? \n\nDo you have the skill to be the stealthiest assassin ever known? \n\nWill you become a \nSoldier, Wizard or Thief? \n\nTest your luck and find out...",
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
    "picture": "alley.jpg",
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
    "question": "You enter a street and see a house that looks familiar. Try the...",
    "answers": {
      "DOOR": 10,
      "HATCH": 11
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
  },
  {
    "id": 43,
    "question": "After you have bought your weapon, the Blacksmith says to you 'Hey, If you wanna test out your new weapon, I heard they're hosting a training tournament down at the canyon.' The instinct inside of you automatically is on the case. You rush down there with high hopes and glee. But when you arrive, they are floods of civilians sprinting away. Soon you realise... you have encountered an Ice Dragon. Your hero part of you comes into play and plans the strategy. Do you hit in the...",
    "picture": "Dragon.jpg",
    "answers": {
      "NECK": 46,
      "EYE": 47,
      "BELLY": 48
    }
  },
  {
    "id": 44,
    "question": "After you have bought your weapon, the Blacksmith says to you 'Hey, If you wanna test out your new weapon, I heard they're hosting a training tournament down at the canyon.' The instinct inside of you automatically is on the case. You rush down there with high hopes and glee. But when you arrive, they are floods of civilians sprinting away. Soon you realise... you have encountered an Murderous Ogre. You hastily decide to attack by...",
    "picture": "Ogre.jpg",
    "answers": {
      "LEG": 49,
      "CLIMB": 50,
      "TAUNT": 51
    }
  },
  {
    "id": 45,
    "question": "After you have bought your weapon, the Blacksmith says to you 'Hey, If you wanna test out your new weapon, I heard they're hosting a training tournament down at the canyon.' The instinct inside of you automatically is on the case. You rush down there with high hopes and glee. But when you arrive, they are floods of civilians sprinting away. Soon you realise... you have encountered a Wild Hell Hound. Without thought you battle by...",
    "picture": "hellhound.jpg",
    "answers": {
      "MOUTH": 49,
      "FLIP": 50,
      "BURST": 51
    }
  },

  // Example purchasing question
  // Sword...
  {
    "id": 31,
    "question": "You have purchased the Sword.",
    "auto_navigate": 43,
    "inventory": {
      "sword": true,
      "coins": -5
    }
  },
  // Axe...
  {
    "id": 32,
    "question": "You have purchased the Axe.",
    "auto_navigate": 44,
    "inventory": {
      "axe": true,
      "coins": -5
    }
  },
  // Staff...
  {
    "id": 33,
    "question": "You have purchased the Staff.",
    "auto_navigate": 45,
    "inventory": {
      "staff": true,
      "coins": -5
    }
  },
  {
    "id": 19,
    "question": "You head over to the broken door and see the glass shards everywhere. Out in the garden is a tall, buff man with a Cavalier's blade. Behind you is sharpened pickaxe. You can...",
    "picture": "garden.gif",
    "answers": {
      "DISARM": 52,
      "CHARGE": 53,
      "THROW": 54
    }
  },
  {
    "id": 20,
    "question": "You head over to the counter and look at the blood. Suddenly, you hear a bang come from the Bedroom out back. You quickly draw a rifle from behind the counter and walk over. Your choice...",
    "picture": "",
    "answers": {
      "WARNING": 55,
      "WINDOW": 56,
      "WOUND": 57
    }
  }
];
