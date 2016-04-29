var questionData = [
  {
    "id": 0,
    "question": "Hello Traveller! \n\nWelcome to Bandit Bash. \n\nCan you fend off the beasts that lurk in Kragnar? \n\nAre you wise enough to learn the strongest spells? \n\nDo you have the skill to be the stealthiest assassin ever known? \n\nWill you become a \nSoldier, Wizard or Thief? \n\nTest your luck and find out...",
    "picture": "title.png",
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
    "picture": "cell.jpg",
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
    "picture": "damp-room.jpg",
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
    "picture": "House-Interior.jpg",
    "answers": {
      "CHECK": 19,
      "TEST": 20,
      "TEND": 21
    }
  },
  {
    "id": 11,
    "question": "As you open the trapdoor, you fall down into the pit. When you hit the ground, you're head clangs against a pile of ,surprisingly clean, bones and skulls. As you look around you see a red fiery orb, A shield with arrows lodged inside of it and a Mecidinal root.",
    "picture": "pitted.jpg",
    "answers": {
      "ORB": 23,
      "SHIELD": 24,
      "PLANT": 25
    }
  },
  {
    "id": 12,
    "question": "You enter the Blacksmith's and head towards the till. 'All items on sale, for example, our best sellers are all 5 coins each,' You have the option...",
    "picture": "blacksmith.png",
    "answers": {
      "SWORD": 31,
      "AXE": 32,
      "STAFF": 33
    }
  },
  {
    "id": 13,
    "question": "You walk into the Butcher's and you are greeted by a bunch of jolly people in a group. As you walk by you nod and then talk to the Butcher. 'Alright lad, any piece of meat is 4 coins' You see in the background a 'LOOKING FOR HELP' poster. 'Oh, that. our animals out back get getting attacked by a rabid wolf. We could do with a strong guy like you. I'll pay you 10 coins'",
    "picture": "butcher.jpg",
    "answers": {
      "MEAT": 34,
      "HELP": 35
    }
  },
  {
    "id": 14,
    "question": "You enter a well lit and calm library and search through the shelves. 3 subjects interest you...",
    "picture": "library.jpg",
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
    "question": "You swing your leg furiously multiple times and eventually it clicks. You fall through the floor and down a funnel. You land in a pit of bodies and bones. Over in the corner is a vicious rotten ghoul gnawing on a corpse.",
    "picture": "ghoul-room.jpg",
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
      "MOUTH": 52,
      "FLIP": 53,
      "BURST": 54
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
      "DISARM": 55,
      "CHARGE": 56,
      "THROW": 57
    }
  },
  {
    "id": 20,
    "question": "You head over to the counter and look at the blood. Suddenly, you hear a bang come from the Bedroom out back. You quickly draw a revolver from behind the counter and walk over. Your choice...",
    "picture": "",
    "answers": {
      "WARNING": 58,
      "WINDOW": 59,
      "WOUND": 60
    }
  },
  {
    "id": 21,
    "question": "You grab a small towel and hastily wave it about to stop the flames. After you've messed with the fire, you hear a quiet snigger, echo through the house. It turns out that up the Chimney is a Flame imp.",
    "answers": {
      "WATER": 61,
      "TRAP": 62,
      "SMASH": 63
    }
  },
  {
    "id": 23,
    "question": "You obtain the Fire Orb and make your way through to the next room, in which you discover there is a Wild Monsterous Demon, that can cast fire. Probably not the best choice of weapon but it's too late now. you have entered combat. He's now charging towards you...",
    "picture": "Daemon.jpg",
    "answers": {
      "COUNTER": 64,
      "FALL": 65,
      "WING": 66
    }
  },
  {
    "id": 24,
    "question": "You obtain the Damaged shield and make your way through to the next room, in which you find a Wild Monsterous Demon, that can cast fire. Lucky choice of weapon? Nevermind, focus. He's launching a fireball towards you...",
    "picture": "Daemon.jpg",
    "answers": {
      "DEFEND": 67,
      "DEFLECT": 68,
      "DODGE": 69
    }
  },
  {
    "id": 25,
    "question": "You obtain and consume the Mecidinal Plant, and you feel harder, better, faster, stronger. You body begins to grow bulkier and your muscles pop. You are super buff. With so much adrenaline, you burst into the next room and encounter a Wild Monsterous Demon, that can cast fire. The plant was a good choice. The Demon starts charging towards you, swinging his mace...",
    "picture": "Daemon.jpg",
    "answers": {
      "COUNTER": 70,
      "CRUSH": 71,
      "COWER": 72
    }
  },
  {
    "id": 26,
    "question": "You call out to the Guard 'PSST! Hey!'. Hey walks over demanding an answer to why you have disturbed him. 'Come Closer' You whisper. Once he's bent over you stick the dagger in his throat and he collapses. With lots of precaution, you lean over and snatch the keys then escape. On the wall is a line of a spell called 'The Summon'",
    "answers": {
      "LOOT": 73,
      "SUMMON": 74,
      "BLAZING": 75
    }
  },
  {
    "id": 27,
    "question": "As you stare out of the window, you see the trail of destruction leading up to the tower. You must of been REALLY Hammered. Whilst pondering, you feels the poles rattle, and eventually snap. There is a coil of rope beside you and down on the ground is a hay stack.",
    "answers": {
      "JUMP": 76,
      "REEL": 77,
      "FREE": 78
    }
  },
  {
    "id": 28,
    "question": "You grasp the pole and get to work digging. After about 2 hours, you break through and fall to the next floor. The problem is that you've landed in the Guards quarters. 'HALT!'...",
    "answers": {
      "FIGHT": 79,
      "MERCY": 80,
      "DISTRACT": 81
    }
  },
  {
    "id": 29,
    "question": "The man swings a hard punch towards you, which you block with a bar stool. Then you smash the stool over his head and he stumbles over. The guy lobs a bottle at you, which you kick out of the air LIKE A BOSS. After, you dive at him, lift him and slam onto the counter. The bartender cowers in the corner avoiding the fight. You slam the Bar Hatch on the guys face repeatedly, but you get stopped by a skinny old guy saying 'You sure know how to fight, But you could be better...",
    "answers": {
      "TRUST": 82,
      "LOOT": 83
    }
  },
  {
    "id": 30,
    "question": "You beg for mercy and wish for no harm. The man stops and says 'Hey, I recognize you'. You reply 'Really?' 'Yes you're Maxwell Blighted, Chief officer of the Kragnar's Paladins. I'm Braxxus Ironforge.' You follow him back to the KP's HeadQuarters and meet the others. All around you are strong armour and weapons. They show you their leader, sat on a pile of barrels and torches surrounding him. 'We'd like you to join us and fight off the evil that rots our precious land.'",
    "picture": "armory.jpg",
    "answers": {
      "JOIN": 84,
      "BETRAY": 85
    }
  },
  {
    "id": 34,
    "question": "You hand over the money and take the baggy with the meat outside. When you step out you're greeted by 3 vicious hounds that can clearly smell the Beef, and you can tell that they are particulary hungry this evening...",
    "picture": "alley.jpg",
    "inventory": {
      "meat": true,
      "coins": 1
    },
    "answers": {
      "TOSS": 86,
      "EAT": 87,
      "TAUNT": 88
    }
  },
  {
    "id": 35,
    "question": "Sure, we'll help. The Butcher sends you out back to where they keep the animals and over behind the animals is a large, rabid wolf warrior (As he Stated) gargling down a chicken. Next to it is a large mallet, and behind you is a long stick, string, poles, sharp rocks and feathers. Damn she's ugly.",
    "picture": "Wolf.jpg",
    "answers": {
      "KILL": 89,
      "TRICK": 90,
      "CRAFT": 91
    }
  },
  {
    "id": 36,
    "question": "You read some books on COMBAT and learn some fighting techniques and moves. After months of reading and practising, you hear that a fighting legend is in town and 'Looking for an Apprentice. Anyone that can beat him in a duel will be his new sidekick.' You see what it's all about and enter. ",
    "picture": "Monk.jpg",
    "answers": {
      "FIGHT": 92
    }
  },
  {
    "id": 37,
    "question": "You read some books on SPELLS and learn lots of summons and casting. After months of reading and practising, you travel out far and in your journey you discover a castle. You wander the rooms and floors, hunting for something of worth Until you find the main hall. There's tons of statues, drawings and scribbles everywhere. Eventually you find a Woman levitating and she says to you 'I've been watching you for a while now... You have shown intense concentration and dedication. I will give you the chance to become a master summoner, but first you must challenge me, Archmage Dakota Skullfort.'",
    "picture": "Archmage.jpg",
    "answers": {
      "FIGHT": 93
    }
  },
  {
    "id": 38,
    "question": "You read some books on BEASTS and learn differnt strengths and weaknesses. After months of reading and practising, You travel to another land nearby called Taligoth and meet some people there. Taligoth is famous for the Champion's Arena, created by Paladin Malik Roughclaw, A very well known Soldier and Fighter. Every 10 years they host a competition called 'The Champion's Belt' where a group of fighters will enter and contest to win the belt, but the winner is challenged by Malik for thr belt. You are Determined. Sure it's never been won before but you are different. You can do this.",
    "picture": "paladin.jpg",
    "answers": {
      "FIGHT": 94 
    }
  },
  {
    "id": 39,
    "question": "You follow the guy up a set of stairs to a room full of Gold, gems and riches. It's like heaven. At the end of the room is a Tall man covered in jewellery and weapons. He has smoke bombs and grapple hooks latched onto him and beside him are groups of snatchers. He opens with 'I have spies that have been overlooking you. Even before you lost your memory, Jarrod Crall. You were born into a life of criminals, you grew up as a mischievous child and pickpocket. In fact you were performing a heist when a Guard knocked you senseless. We had to hide you in the Tavern so that you weren't arrested. So, will you join us Jarrod?' You didn't even have to think, you accepted instantly and were part of the group. You all went of snatching, stealing and picking at what riches you could lay your eyes upon. You, Jarrod Crall, The Notorious Larcenist.",
    "picture": "treasure-room.jpg",
    "inventory": {
      "coins": 605
    },
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 40,
    "question": "You smack the guy around the head and steal his grapple hook. After you've got out, you dashed to the Guards Tower of Kragnar and got them to follow you to the place. You and the Guards bust the place and all of the thieves inside, Except for the Thief King who disappeared in a smoke cloud. You track and chase him down until the final fight between the two of you. He begins flipping, jumping, bouncing and hopping around you and trying to tackle you. You brush them all off and dodge like passing wind. He's tired out but still trying. You charge towards him and swing a large axe you found at the Guards Tower and Dismember his left leg. After you say a line like a movie 'Steal This!' and swing downwards and finish him with the chop down the middle of the head. You become a Champion for the Guards and Justice squad And get rewarded a large sum of the money busted. You're a Hero.",
    "picture": "treasure-room.jpg",
    "inventory": {
      "coins": 350,
      "axe": true
    },
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 41,
    "question": "When you landed, the legs of the chair snapped and became sharp. Quickly before the ghoul saw you, you shrugged off the ropes and launched yourself towards the ghoul but got smacked out of the air. Yep, now he's mad. The ghoul charges wildly and you perform a maneuver. You slide underneath it, twist, hop off it's back lef and impale it's head. Defeated. Inside of it's mangled brain, there's a blue stone. You recognize it to be a Necromancer stone. You grab it and make a staff with it. After that you escape and learn the ways of Necromancy.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 42,
    "question": "Hastily, you take cover under the pile of bones (Which smells horrific by the way) and Play Dead, hoping he'll leave you. \n\nWhy? Why did you think that would work? \n\nThe Ghoul sniffs you out from the crowd as your 'Fresh Meat' and begins to devour you viciously. You are in complete agony. It's a Shame... You would have made a great Thief...",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 46,
    "question": "You heed the call and charge galiantly towards the Dragon. With a strong-handed swing, you aim for the neck and slice, but it only cuts so deep, it's gonna take more than one hit. You dash side to side, dodging all frostballs and swings from the Dragon. You get a few more hits in and when you're about half way to decapitation the Dragon catches you with it's wing and drags you towards the edge of the canyon. Before the final powerful hit, your sword is charged with Light, and gains immense strength. The Dragon and it's head tumble off the edge, falling to it's doom. You now make it your goal to fight and conquer all beasts that wish to damage Kragnar.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 47,
    "question": "The Dragon shoots a large Iceball at you and you return by cutting through it, dashing towards the Dragon and landing on it's head. It begins to swing around, swinging and shaking, biting and gnawing but to no Avail. Eventually, it looks directly up at you and breaths out a trail of ice, but just before it hits you, you turn into smoke and teleport under the Dragon's head, dangling from it's chin. Then you twist the sword directly upwards and through the Dragon's eyeball BACKWARDS! (LIKE A FREAKING BOSS). The Dragon collapses and falls alongside you. When you land you are greeted by happy and celebrating civilians. After that you decide to learn about the teleportation that you performed and how to control your smoke abilities.",
    "inventory": {
      "dragonEye": true
    },
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 48,
    "question": "The Dragon sees you and flies up into the air. Unexpected to you, but you begin to fly. Sure you're a bit shaky but your goddamn Flying! Once you get the hang of it, you lift upwards and dodge consistent Frost balls being launched by the Dragon. Next, you charge forwards to the Dragon and aim for it's chest. (Side-bit: What melts ice? Fire!) Randomly, your hands feel a bit warm... then the sword catches a lite and you puncture the Dragon's chest, then fly down and slice open the belly of the beast. Ok, maybe there are Dragon guts splatted all across the ground, but you slayed a Dragon! Later on you study the symptoms that you experienced and learn how to use your powers properly.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 49,
    "question": "You and some other men there all decide that the best option is to trip the Ogre. There was 3 flankers, 3 archers and you, The 'Leg Man'. The Ogre is slamming and crushing around, missing most of them as the archers are sniping at his face. You're hammering away at his leg, chopping th ankle and hitting all of the tendons back there. Suddenly, the Ogre swings a massive blow, knocking away arrows, slaughtering 2 flankers and flying their corpses over to the archers. The Ogre let out a thunderous roar, scaring civilians from miles away. The reason was that you just split his Achille's heel. He trips and smashes into the ground, and you finish him off for good measure.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 50,
    "question": "You quickly decide to dash past the Ogre and cramble up the side of it's large club, onto it's arm and on it's back. The Ogre starts swinging to hit you but keeps hitting himself, causing him to keel over. Now's your chance. Jump and FINISH HIM! Axe Blade + Skull = Dead Ogre. You're a wild warrior at heart. You take it as your destiny to serve and protect Kragnar, and you keep the streets safe from intruders, and allow the civilians to rest well at night. There's a hero a bit like that whose obsessed with bats. Can't remember his name though...",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 51,
    "question": "'HEY YOU BIG GREEN IMBECILE! YEAH YOU!' Your insulting chants grabs his attention and he paces towards you. He's mad. Real mad. He Probably didn't understand what you said but he still doesn't like you. Unfortunately, you've now been pushed to the edge, and he's directly in front of you. Out of random thought, you slam the ground with your axe and the ground around the Ogre cracks, aswell as yours. You shout 'YOU! SHALL NOT! LIVE!', then you push away and your mini rock island floats off and the large cracked rock that the Ogre is on slides and he falls down to his death. You then learn the arts of elemental magic and use it for good.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 52,
    "question": "The Hell Hound roars furiously at you, and it's mouth is just wide enough to lodge the staff down it's throat. It shakes about and you lose your grip on the staff, but it's still int the Hell Hound's neck. Then you realise, this is even better. You hop off of a rock beside you a land on the end of the staff, further propelling it down the throat. After you flip upside down, grasp hold of the handle and cast a Thunder blast inside of the Hell Hound and the Hound EXPLODES. KABOOM! 'Shoulda kept ya mouth shut...' And you slowly walk off into the distance. Later on down the road, you learn fighting techniques with the staff and become a Well-Trained Monk.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 53,
    "question": "At first, the 2 of you just stare at each other. Stone Cold. The Hell Hound proceeds to pounce at you, but you catch one of it's legs with the staff and flip the Hound onto it's back, Defenseless. As you lift the staff, It charges with dark magic, purple energy coiling around the hilt. Your final blow, as you strike it Downwards into the Hell Hound's chest and corrupt it's heart. Almost like a Warlock. You are now striving with Dark Magic and have a craving Blood Lust.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 54,
    "question": "Showdown time. The fight to the death. The Hell Hound makes the first move and spits magma at you which you deflect, followed by a strike across it's face. There's a lot of turn taking until your body starts to feel cool, Your eyes turn really light blue. Your body feels fresh. Next you drive the Staff into the rocky ground and a powerful burst of Water erupts from underneath the Hell Hound. The gush tears through the Hell Hound's body as water is the strongest magic against pyrotechnics. You're a Successor, A Victor, A Hydrocaster.",
    "answers": {
      "FINISH": 121
    }
  }, 
  {
    "id": 55,
    "question": "Hastily, you perform a flip and kick the sword out of his hand, then you uppercut him in the chin. Once he's on the ground, you grab the sword and hold it by his throat, '*cough* I knew it was you' says the intruder, struggling for air. 'What do you mean?' 'You, Hassan Skiff, master assassin and bounty hunter. Killed kings and idols in a blink of an eye. Ironic really, because now there's a bounty on your head.' In Fury, you drive the sword into his head, and decide to ask about to see about this 'Master assassin' Business. After speaking to some people, you seek your previous employers, and get back to work. When you arrive, you are told that every assassin in the group are about to raid the entire Royal Family, and take control over Kragnar, and you're the leader. After, you all go and take out the members One by One and slowly destroy the Dictatorship. In a final battle, you brutally murder the Lead King, and gain Control over Kragnar.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 56,
    "question": "Quickly, you dash towards him and tackle him to the ground. Both of you are are swinging and throwing punches at each other, rolling along the floor and wrestling around. He gets ontop of you and drills the sword through the side of your torso, leaking blood. Your not feeling it for some reason. After you snap it out of your side, drive it through his leg and into the ground. As he screams out in pain, you grip his neck and begin to Interrigate. The classic: 'Who do you work for?', 'Where is your base' and 'Why are you here?'. He ends up informing you that he works for a demon hunter agency. From what you know, Demon Hunters are ruthless monsters that have no remorse for what they destroy whilst chasing Demons. You find them and take them on, In a wild battle of blood and violence. You are Victorious.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 57,
    "question": "Hastily, you grab the pickaxe and launchit towards the stranger. Straight away it pierces his skull and ends him. As his corpse collapses, a small green crystal slips out of his loot bag. Out of curiosity, you obtain it and squeeze it tight in your fist but after, a herd of bramble vines begin to wrap around you. Suddenly, a large pack of other Bandits emerge from the past hedges. For a reason Unbeknownst to you, You feel the urge to start swinging your arms, and it works. Plants and nature begin to manipulate at your will. Swinging vines, whipping legs and crushing under trees, These Bandits are no match for your newly found powers. About a week after the encounter, you visit a storyteller and he tells you all about Geokinesis and the best ways of using it. You spend the majority of your time researching and practising Geokinesis, to become the best caster in all of Kragnar.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 58,
    "question": "Slowly, you creak open the door and see the silhouette over in the corner. You line up the shot and fire at the lamp beside it. It turns out it was a Gnome with a Mechanical suit on and large goggles. 'Woah there Pal! calm down, I mean no harm. In fact I'm here with an offer.' He had a slight lisp which began to bug you. 'I had read your book on Keeping calm and harnessing your inner energy. I thought that with channeling your energy and a bit of technical inhancement, we could potentially create a super-soldier.' You tagged along and followed his steps. In about 3 months time, the two of you created a masterpeice. It was a set of metal armour powered with mystical energy, which allowed the wielder to cast spells and attacks. The 2 of you split the suit between each other, so that you got the top half and he got the bottom half. You then became the gnome's villiage protector.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 59,
    "question": "The best option in your mind is to shoulder charge through the window, and whilst in midair, you pull back the trigger and land a perfect shot int the middle of his forehead. The stranger in the room turns out to be a scavenging troll, rumaging through your personal items. It's too late to find out anything else as you obliterated his skull (Which was awesome by the way) Because of all of the commotion, 2 guards showed up to investigate and you explained what had happened to them. After hearing about your epic shot, they recruited you to the royal guards and soon you became one of their best Marksman. Congrats.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 60,
    "question": "Hastily, you kick down the door and blast a shot into the shoulder of the stranger. It turns out that he is a Blood Elf that was tracking down a Beast Hunter that had gone rogue. The reason he was at your place though was that you had previous experiences with him and very recently spend time with him in a local Tavern. Apparently he is well known for being a backstabber and a horrible friend. Then you get hit with memories flushing back to you. Then you also realise that all of your valuables and belongings are missing. Bastard. Now you decide that it was time for some freaking revenge. You join the search party and hunt down the crook. In a final showdown, he begs for mercy of which you give none, break his arm and loot him, then give him over to the search party so they can have their violent fun.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 61,
    "question": "Nothing beats fire better then a good splash of H2O. Steam pours out of the chimney and the flame imp rolls across the floor in pain and panic. Suddenly a pack of other little imps scurry out of the chimney, agitated. Water seemed to be effective the first time, why not again. You grab a small stick of dynamite and lead the Imps to a water tower by the cliff side. Then you destroy the side and the Aquatic materials gush out and cause the Imps to perish. Unfortunately you are violently hit aswell. When you wake up from intense recovery, your palms are wet and your fingers are dripping with water. But as you reach for a towel, a Hydro pump erupts from your hands, and you realise that you have gained the power of Aquakinesis.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 62,
    "question": "Cleverly, you see the fire container that stops the flames from lighting the rest of the house on fire by shutting out the chimney. With haste, you slam it shut and ignite the fireplace, with literal Gallons of Gasoline. Inferno rages upwards and pulverises the Imps, and your home. The explosion destroyed all of your belongings and almost your life. After getting out of intense recovery, your fingers catch alight, and you set the bedside table on fire. You then realise that you have gained the ability of Pyrokinesis.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 63,
    "question": "With fury, you grab the Imp by it's ankle, pull it down and begin slamming it against the wall. Then you hear scuttling from further up the chimney. When you take a look there are even fiercer Imps that are enraged. You quickly chase them up there, giving them a foul stare the entire time. Once you get to the roof, It is raining heavily. One of the Imps is holding your metal fire poker. First you kick that Imp and grab the poker, then go on a beat down on the rest. They don't stand a chance. All of them are exhausted and bewiddled on the floor after. In victory you raise the poker into the sky. Unfortunately that attracts a lightning strike and you are hit by violent Thunder and the roof is caved in. You wake up, after intense recovery. The ends of your fingers are zapping and you feel pins and needles in your hands. You realise that you have gained Fulgurkinesis.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 64,
    "question": "The Demon is charging head on, and your reaction is to also run towards it. But before the two of you clash, You throw a twisting fireball upwards and hitting him in the chin. He is sent flying into the air, and enraged. Again it dashes towards you and with another fireball you smash it's face into the ground, making a small, demon-head sized crater in the floor. Before it has the chance to recover, you continuously slam flame blasts into the back of it's skull. It's body slowly digs deeper and deeper. With one final blow, it's conquered. Behind him is a shaky pathway back to the surface.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 65,
    "question": "The Demon is charging head on, and your reaction is to crash the orb into the ground, so that you are ducked down in a small trench. The demon trips and tumbles across the floor. Then, with the orb in hand, you furiously uppercut the demon and send him crashing into the wall behind him. After you throw the Orb towards him. Whilst in mid-air, the ball lights on fire and then smashes into the Demon's stomach. He is defeated. You see behind him is a shaky pathway back to the surface.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 66,
    "question": "The Demon is charging head on, and your reaction is to run towards him, and dive holding the orb in front of you. Both you and the orb set aflame, like a crashing meteor, and tear through it's left wing. The Demon tries intensly to fly but keeps falling. Whilst it's caught off guard, You viciously drive the Orb through the back of it's chest, bursting through it's ribcage. It is (obviouly) defeated. Behind the Demon is a shaky pathway that leads back up to the surface.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 67,
    "question": "You start running towards it and hit the fireball head on. When it crashes into the shield, the flames curve around and you only have a slight recoil. After you got through a couple fireballs, The shield slams into his chest and then you smack him up the chin, causing him to stumble over. Once he's on his knees, you begin to batter him with the side of the shield. One of his horns snap off and he howls in Pain. Hastily, you grab the broken horn, and stab his in the neck repeatedly. Now that he's dead, you see behind him is a shaky pathway that leads back up to the surface.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 68,
    "question": "The fireball hits the shield at a certain angle and deflects back towards him. It hits him in the wing and he starts to trip and stumble. That was cool. Enraged, he shoots another one. Except this time, you weren't ready and forgot how you did it last time. You just got lucky. Either way, the furious fireball destroys your shield and tears through your chest. Splattered across the wall and hunching on the floor, you last breaths are taken from you as the Demon drags you away to hungry Flame beasts. YOU LOST",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 69,
    "question": "Like a boss, you run to the wall, jump and kick off of it, and dodge the fireball. In a landing that is similar to Spiderman's, you hit the floor and in the same motion you hurl the shield towards the Demon. The shield smashes him in the head and he falls to one knee. Quickly, you dash over towards him and swing kick him across the face. Behind him is a shaky pathway that leads back up to the surface.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 70,
    "question": "Look at him, he's smaller than you, he's probably weaker than you. You can take him. Instantly, you dash towards him as well. As you enter combat, you are wrecking him. Violent punches and hits across the face, on the chin, cracking elbows; He stands no chance. Beaten up, the Demon tries to crawl away, but there's no way your giving mercy. You leap towards him and land on top of him. Brutally, you pummel his face with a flurry of fists. His face is swollen to the point that it can't be any more bruised. With one final hit, the crack of his skull implies that he is dead. Behind him you see a shaky pathway that leads to the surface. Before you leave, you grab a few more stems and seeds of the plant.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 71,
    "question": "Before he could even reach you, you slam the ground with both fists and cause a large quake. The cave is crumbling around you and a barrage of rocks and boulders collapse from the ceiling and they all land the Demon. He is crushed and near death. The Demon is scarcely exhaling his trapped air. Standing over him, you finish him with a stomp on the back of his skull. CRACK. Behind him you see a shaky pathway that leads up to the surface. Before you leave you grab a couple seeds and stems of the plant.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 72,
    "question": "He looks freaking huge, you can't take him. You lay on your knees and beg for mercy. It worked. He stops and stands over you. His shadow is empowering. His straight face turns into a worrying grimace. He lifts the mace in the air, ready to drop it... right? He's totally gonna drop it. Just after he swings it down and 'SMASH'. Ah. He's just dented your skull. That's a lot of blood... He batters in your head with his mace until you die. YOU LOST. Turns out that you could have easily taken him. Remember that you have massive pulsating muscles and incredible strength? Anyways you're dead.",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 73,
    "question": "Like some kind of spy, you snatch his guards outfit and get into disguise. You march down the stairs with the musket placed on your shoulder and keep in character. Before you get out, you are stopped by a general. 'Borofski!' That's the name of the person you just killed and dressed into his clothes. 'Yes Sir' you reply scrappily. 'I need you to take this inmate to his appropriate cell' You: 'Why of course sir' You just lead him outside and let him roam free, doesn't matter to you, you just escaped a prison. Weeks later, you hear spreading around that a Mass murderer that has a kill count of over 450 is out of prison and killing again. Last seen with Ferencia Borofski. You feel very guilty, but hey, you're free aren't you?",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 74,
    "question": "You read out the spell on the wall out loud and within soon a large fire dragon appears and heeds to your call. Well, what else would you do except get on it, right? A bit shaky at first but you get the hang of it. Once you got out, you found the art of Summoning awesome and interesting and learn there ways with Arcane Magic. Within soon you become an Amateur summoner and get into challenges and fights frequently. Sweet.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 75,
    "question": "You start to rummage through some cupboards and storage unit until you find an entire cabinet full of Muskets. With protective armor on and a bunch of loaded guns, you charge down the stairs, guns blazing. Turn one corner, BLAM he's dead. Turn another corner BOOM headshot, another corner, another life taken. You're wreaking havoc and mayhem, and also spreading gunpowder and blood across all of the walls. It's a gory and epic mess. You walk out feeling like a badass with smoke gushing out of the barrels that you're holding.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 76,
    "question": "Before the Guard can notice you, you launch yourself out of the window and land into the haystack. You neck is Fricking killing. It's actually really uncomfortable. You roll out and make a dash away. Not long after, a herd of Guards in horse carriages come from all directions. You get hit with recovering memory that you were a master criminal and a bounty hunter drugged you and hid you in the Tavern for the Guards to get you, but they actually work for a rival crime boss. But the drugs wore off to quickly and you escaped, into prison, the wrong one. These in front of you are the fake ones. Quickly, you leap onto one of the carriages and it tries to swing you off. You grab a musket and start sniping the other riders. Once you've got control of the carriage, you ride around shooting the others and then make a quick getaway. You meet up with your previous partners and get back to work",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 77, 
    "question": "You tie the knots and slowly propell yourself down. But out of nowhere, snipers with crossbowes run out and shoot at you. One arrow hits you in the leg and you lose balance. You begin riding downt he rope at intense speeds, causing serious rope burn on your palms. The pain is excrutiating. you land on the haystack and roll off it. As you look up, ready to dash, you get hit by an arrow right between the eyes. You're dead. YOU LOST",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 78,
    "question": "You crawl along the side of the building and get to the window of another cell. You grind through the feeble bars and free him. He joins you on the outside as you free other inmates aswell. Once there is 5 of you, you make your way into the hallway and tagteam the Patrolling Guard. Now you've got a key set. You free all of the others prisoners; Murderers, Arsonists, Kidnappers, Thieves, the whole lot. The whole lot of you riot and charge the prison down. Tied up and killed all of the guards, stolen all of the weapons and valuables, and get out. The Guards of another nearby city and the main Officers and Guards of Kragnar start a manhunt and track down the escapees. You just lay low and now don a Trench coat and large headpiece.",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 79,
    "question": "You raise your fists and prepare for conflict. Kicks and flips, taking them down and jumping between them, you're like a freaking ninja. You quickly grab a sword and as more Guards pour out of the doors you slaughter them. Slicing, Stabbing, Slashing. More and More officers flooding in, and getting demolished by the edge of your mighty blade. The room is gushing with blood. A brutal massacre. After you have killed about 50 people, you just stand there, dripping with bodily fluids. For some reason, after the indescribibly horrible thing you've done, you feel good.",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 80,
    "question": "You scream in panic, get on your knees and raise your hands. Maybe they'll be nice on you. Nope. Instead they batter you in with batons and then throw into Solitary Confinement in the underground cellar for life. Pretty much, Unless you're a lawful citizen and believe that that was the fair and correct way to go about it, then YOU LOST",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 81,
    "question": "'Huh! Look over there! There's a cannonball heading straight for us!' Good Idea. No seriously, That was smart. Anyways, they all act gullible and turn to the location that you pointed as you grab a heavy musket and bash them all round the back of the head with it. After you literally just walk out. Nailed It.",
    "answers": {
      "FINISH": 122
    }
  },
  {
    "id": 82,
    "question": "Oh? He leads you down the alley and to the library. Behind one of the bookcases is a secret sanctuary. After going down about 10 flights of stairs you enter a large temple with 10's of other wizards, necromancers and sorcerors walking about and talking. You see som ebudding and new one training in the corner. He turns to you and says 'From what I can read see from your past, you would make a brilliant Telekinetic. How can I tell that? I use Telepathy. Telekinesis is the form of mental magic which allows you to control objects around you using your powerful mind.' Within soon, you are practising magic and training hard and getting exams. After not much training you can lift entire pillars and launch them across rooms. You are now a master.",
    "picture": "library.jpg",
    "answers": {
      "FINISH": 121
    }
  },
  {
    "id": 83,
    "question": "You ignore him, I mean, he's just a stupid old person you just met. You search the unconscious guy's pockets and find an invitation to a Fight training session for newcomers and the chance to become a skilled martial artist. Sounds interesting, and you did just literally wreck a guy in seconds. So you go along and see what's up. All of the other contestants seem weak and feeble. You finally get to a mentor and he says that before any training, he wants to see what you're like. You go mental with a flip, then an uppercut, after a hit to the collarbone, then a furious grip of his cuff and you slam him into the ground. He's incredibly inpressed. You're in. Straight away. In fact, inless than 2 weeks you're a mentor and teching others how to fight opponents. You're a Natural.",
    "picture": "gym-tank.jpg",
    "answers": {
      "FINISH": 122
      }
    },
    {
      "id": 84,
      "question": "This sounds awesome and the right thing to do, I mean, serving Justice and kicking ass, what could be better. You join on and are rewarded with a golden hammer and get signed on to the first mission on the board which just so happens to be 'The Winter Hunt', which is where they travel over 200 miles to the snowy regions and hunt down some of the most ruthless killers and monsters on the wanted list. The five of you are drifting throught the lands faster than expected. The average time to get there is 4 days, you made it in one night. Patrolling around, you get you first sighting. As a team, you completely wreck the entire wanted list in less than a week and the group of you become rich and famous. Bossed it.",
      "picture": "outpost.jpg",
      "inventory": {
        "coins": 54000,
        "axe": true
      },
      "answers": {
        "FINISH": 120
      }
    },
    {
      "id": 85,
      "question": "You pretend to play along, and when they're preparing for a long trip, you get a hidden carriage and fill it to the brim with weapons, gold and armor. After you head to their nemesis, the Demon Hunters and try to sign up. They're suspicious at first but then you show them your carriage and you're in. After, you go on a trip with them and go slaying Monsterous demons and wrecking havoc in te process. It's the most fun you've had. But whilst on one of your hunting trips, you encounter the Paladins and they look exhausted and belittled. Braxxus recognises you instantly and declares war. Some of your guys die, Some of their guys die. In a final conflict, you are challenged by Braxxus. You go head to head hitting each other and clashing blades. You get him on the floor and have the sword to his neck. You're ruthless and savage, but you can't do it. You bash him with the hilt and leave him unconscious. You then carry on in the Demon Hunters",
      "picture": "clash.jpg",
      "inventory": {
        "coins": 20000,
        "sword": true
      },
      "answers": {
        "FINISH": 122
      }
    },
    {
      "id": 86,
      "question": "In panic, you toss the meat onto the ground and watery blood leaks out of the bag. The hounds devour it, and they now seem to like you. You say a random command and they follow it. 'Sit' and they sit. 'Jump' and they jump. 'Roll Over!' Ok now that's just pushing it. Anyways you walk away and feel happy, then realise that the dogs are following you. When you go to see a Wisdom teller, he says that you have the ability of Therionology. For clarification, that means you can control animals with you're mind. You then become an official hunter and join a pack, that goes on trips and fights, the whole lot. After a couple years, you hounds are now all adults, large and vicious. You have grown old and grumbly, but still a badass and master with you're dogs. You are a drifting Traveller and hunter, with the aincent magic of Therionology.",
      "picture": "wolf-guy.jpg",
      "inventory": {
        "meat": false
      },
      "answers": {
        "FINISH": 121
      }
    },
    {
      "id": 87,
      "question": "You paid 4/5 of your cash for that meat slab, you ain't just gonna throw it away. Instead you devour it quickly in front of their faces. Oh, what's that behind you. It's their MOTHER. She's huge, She's vicious, She's Hungry and she's goddamn angry. Then she pounces on you and mauls you to death. Good one. YOU LOST",
      "answers": {
        "RETRY": 0
      }
    },
    {
      "id": 88,
      "question": "Shaking it in your hand, you lead them down another alley, making sure that when they jump at you that they don't reach you. You pass a gate for waste and leftovers next to the Tavern and lock it. Acting all cocky and grinning, you walk off and eat the meat. You were overly confident though as you remember you're supposed to cook the meat first, and go on to be sick for the next few weeks. But hey, that shows them. You can only imaging the suprise the next time that the bartender takes out the trash. Feeling proud of that event makes you sign up to performer and you now do entertainment shows with animals and beasts. At least it pays well.",
      "inventory": {
        "coins": 65
      },
      "answers": {
        "FINISH": 122
      }
    },
    {
      "id": 89,
      "question": "Doing the right thing. It depends on the situation. Killing a wild, violent wolf is partially justifiable. You dash over and grab the large mallet, swing and smash along the side of his jaw. Now he's really mad. You batter his head in a bit more then he swings his sword, and it gets lodged in the head of the mallet. You pull it away, then push it back to him and hit him in the stomach and his sword drives right through it's neck. His face freezes and he very slowly collapses backwards. You felt like a hero. After that situation you become a hero in the streets, for all of those whose situation is wrongly justified or wasn't treated to by the royal guards. You're pretty much a powerless superman.",
      "inventory": {
        "coins": 15
      },
      "answers": {
        "FINISH": 120
      }
    },
    {
      "id": 90,
      "question": "You whistle and try to lead him into a pen. He just stares at you and says 'Uhh... What are you doing?' You explain that you're ending his villainous reign and he replies saying that he's actually just trying to put the owner out of business as he's a scummy trader and always puts people in bad situations. Realising how dumb you seem now, you join his side and slaughter the rest of the chickens and go back to the Wolf's hangout. There is an entire pack of Wolf Barabarians investigating and shutting down criminals. You are so happy. You've dicovered freaking Wolf Detectives. How awesome is that. Anyways you then become a lead investigator and solve cases.",
      "picture": "detective.jpg",
      "answers": {
        "FINISH": 121
      }
    },
    {
      "id": 91,
      "question": "Hastily, you mix together all of the equpment and Ingredients and have made a kickass bow and set of arrows. From afar you shoot multiple arrows and hit in the: Knee, Shoulder and other eye. Howling in pain, the wolf collapses to the floor. A passerby shouts to you 'Nice Shot pal!' You walk over and start talking. He mentions that he's part of an archer group that fight in wars and smaller battles, and that they're proffesionals. He also mentions that they're looking for new members. You sign on and learn sniping tricks and all about angles and tilting of the bow. Finally, before heading into a huge battle, you are gifted with a golden and jewelled bow. After the successful war, you are now part of the group. You are an Archer and Marksman.",
      "picture": "archer.png",
      "answers": {
        "FINISH": 122
      }
    },
    {
    "id": 92,
    "question": "Once it's your turn you prepare to duel. Both of you dash towards each other and swing a kick. It's about to go down. Fists and kicks and blocks and flips getting traded. You uppercut him, he dunks you to the ground. Your performance is formidable. All other contestants would have been out by now. You're getting beat quite hard but you stay up. Master Feren Chau is barely standing. He uses his final hit, No-one in his entire career has lasted past his Chau-Smash. He swings, Swings hard... You stop it and the crowd go silent... You trip and punch him and he's defeated. The crowd go insane. Feren stands up and shakes your hand. 'You, my friend are more then worthy, Congrats, You're In.",
    "answers": {
      "FINISH": 122
    }
    },
    {
    "id": 93,
      "question": "The 2 of you prepare and launch energy blasts at each other. The fight is filled with spirit creatures, elemental spells, freezing, lightning blots being thrown at both of you. 'You have lasted long, but you aren't a match to my Necromancy...' Then Dakota furiously cackles whilst resurrecting dead warriors and they charge at you. They're armed with swords and blades. You're firing blasts and casting flames. Finally, you begin to use an Aincent Spell which is unknown to you if it even works. Dakota recognizes it instantly. 'No, That's not Fair' She begins trembling and casting random abilities in a flurry of Panic. The room fill with light as you summon a giant lightning beast that slams the ground and creates a large explosion, entirely destroying the castle. Dakota arises from the rubble, beaten, and hands you a mage's staff. 'Well Done, you've earned this, the Crystal Staff. I hope to see you again.'",
      "answers": {
        "FINISH": 121
      }
    },
    {
    "id": 94,
    "question": "You enter the competition with your Griffin, Tyrell, and go through rounds of fighters and beasts and successfully win all of the rounds with a breeze. But now it's the final round. The most important part. Malik Roughclaw. The Big Deal. He enters the arena from the shadows with his Frost Lynx. 'LET THE BATTLE, COMMENCE!' Tyrell dahes into the sky, trying to flank but is instantly frozen but the Frost Lynx and falls out of the air. Meanwhile, you are charging towards Malik and waving your Gold Battle Axe around, but to no Avail. Malik is craftily dodging and ducking past all swings and countering them. You get the idea to trick him, fake swing and get rough. You go fists swinging, smashing Malik hard. He has no clue what to do. The Lynx tries to get involved but you grab and use it as a weapon against Malik. He calls apon a Beam of Light, a last resort. The energy crashes down from the skies, wrecking the Terrain. But Malik doesn't know that you have prepared for this, You are Ready. You get yourself in a position and take the hit. It's unbelieveable. Absorbing so much energy would kill a regular person. You are not regular. You blast all of it back at Malik. You practically obliverate him. On his last breath he says the words. 'You, with no doubt, are the Champion. A better Champion than I was. Well Fought...'",
    "answers": {
      "FINISH": 120
    }
  },
  {
    "id": 120,
    "question": "Congratulations. You have Played well and your final Outcome is... \n\nSOLDIER \n\nThanks for Playing!",
    "picture": "soldier.jpg",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 121,
    "question": "Congratulations. You have Played well and your final Outcome is... \n\nWIZARD \n\nThanks for Playing!",
    "picture": "wiz.jpg",
    "answers": {
      "RETRY": 0
    }
  },
  {
    "id": 122,
    "question": "Congratulations. You have Played well and your final Outcome is... \n\nTHIEF \n\nThanks for Playing!",
    "picture": "thief.jpg",
    "answers": {
      "RETRY": 0
    }
  }
];
