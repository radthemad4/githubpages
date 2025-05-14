import { JSX, useState } from 'react';
import { FaFile, FaStepBackward, FaFastBackward } from 'react-icons/fa';
import './App.css';

function App() {

  const [state, setState] = useState({ page: 1, prevPages: [1] });

  const { page, prevPages } = state;

  const setPage = (page: number) => {
    setState((state) => ({
      page: page,
      prevPages: [...state.prevPages, state.page],
    }));
  };

  const map: { [key: number]: JSX.Element } = {
    1: <>

      <div>The gates to the Dwarvish halls strain as the fiendish allies of the Durzagons pound with their infernal battering rams. As cracks begin to appear, fire imps begin squeezing through. The call to arms is put out and you rush to battle. You are going to assist in the defense of the Dwarvish halls by...
        <ul>
          <li onClick={() => setPage(2)} className='listlink'>Personally slaying the imps before they can torch the defenses.</li>
          <li onClick={() => setPage(3)} className='listlink'>Providing support for the defenders of the hall.</li>
          <li onClick={() => setPage(4)} className='listlink'>Switching up between supporting the defenders and attacking the imps as circumstances dictate.</li>
        </ul>
      </div>
    </>,
    2: <>

      <div>The imps are running around wildly, leaving trails of cinders in their wake. You're going to try to keep imps from being able to escape You begin by...
        <ul>
          <li onClick={() => setPage(5)} className='listlink'>Charge for the door and try to hold the line.</li>
          <li onClick={() => setPage(8)} className='listlink'>Stay back and take out marauding imps from range.</li>
          <li onClick={() => setPage(11)} className='listlink'>Stay around the edges skirmishing to make sure none of the imps get anywhere dangerous.</li>
        </ul>
      </div>
    </>,
    3: <>

      <div>The best way for you to assist in the defense of the stronghold is to use your support abilities to tip the tide of battle in your favor. This is because...
        <ul>
          <li onClick={() => setPage(6)} className='listlink'>By rallying the defenders, the attack can be thwarted.</li>
          <li onClick={() => setPage(9)} className='listlink'>By distracting the fiends, the attack can be thwarted.</li>
          <li onClick={() => setPage(12)} className='listlink'>By bringing in more troops, the attack can be thwarted.</li>
        </ul>
      </div>
    </>,
    4: <>

      <div>At any given moment, you might be aiding your allies or you might be attacking the imps. What is the crucial difference one moment to the next?
        <ul>
          <li onClick={() => setPage(7)} className='listlink'>It depends on what abilities you've already used.</li>
          <li onClick={() => setPage(10)} className='listlink'>It depends on the unpredictable state of magic at the time.</li>
          <li onClick={() => setPage(13)} className='listlink'>It depends on which abilities you prepared in advance fit the current situation.</li>
        </ul>
      </div>
    </>,
    5: <>

      <div>The door bursts asunder and the fire demon lurches into view. You've put yourself in harm's way, right in the middle of the path of the enemy leader. This is perfect because...
        <ul>
          <li onClick={() => setPage(21)} className='listlink'>You're the protagonist, and more able to survive this onslaught than your compatriots.</li>
          <li onClick={() => setPage(20)} className='listlink'>You've placed a ward on your shield that can hold the demon for a few crucial moments.</li>
          <li onClick={() => setPage(16)} className='listlink'>You're powered by rage, and nothing gets you angrier than being set on fire.</li>
          <li onClick={() => setPage(26)} className='listlink'>You have a sacred mission and your divine inspiration may only be helpful up close to the enemy.</li>
          <li>The ancestor spirits which guide and protect you approve of bravery. The Tengu and Human Samurai are in <strong className="text-strong">Peaches and Pearls</strong>.</li>
          <li>It would be a waste to swear a blood oath to slay a lesser foe than this. The Grimlock and Orcish Avenger are in <strong className="text-strong">Setting Suns</strong>.</li>
        </ul>
      </div>
    </>,
    6: <>

      <div>You need to raise the spirits of your allies. You are going to do this by...
        <ul>
          <li onClick={() => setPage(17)} className='listlink'>Casting a spell that grants them divine protection.</li>
          <li onClick={() => setPage(23)} className='listlink'>Give a rallying cry and point out a weakness in the enemy assault.</li>
          <li onClick={() => setPage(15)} className='listlink'>Speak a word of power while drawing your own weapon to inspire the others.</li>
          <li>Burning some of your own blood to give strength to your compatriots. The Aaracockra and Hobgoblin Blood Magus are in <strong className="text-strong">Setting Suns</strong>.</li>
        </ul>
      </div>
    </>,
    7: <>

      <div>When are you going to be attacking with your weapon?
        <ul>
          <li onClick={() => setPage(27)} className='listlink'>When you've used up your reserves of psionic power.</li>
          <li onClick={() => setPage(15)} className='listlink'>While you are building up power words to unleash a spellsong crescendo.</li>
          <li onClick={() => setPage(17)} className='listlink'>If you've exhausted the patience of the gods and spirits and you cannot yet cast another spell.</li>
          <li onClick={() => setPage(26)} className='listlink'>Whenever your divine inspiration suggests no better option.</li>
          <li>All the time. But you have trick arrows and more traditional arrows. The Lizardfolk and Elven Seeker are in <strong className="text-strong">Setting Suns</strong>.</li>
          <li>Hardly ever. If your battlefield altering secrets have been exhausted, you can still pick off enemies with your shadowbolts. The Dark One and Human Shadowcaster are in <strong className="text-strong">Sandstorm</strong>.</li>
        </ul>
      </div>
    </>,
    8: <>

      <div>You maintain your distance and begin dropping foes. You do this by...
        <ul>
          <li onClick={() => setPage(14)} className='listlink'>Accurately picking off imps from a hiding place with your crossbow and your own deadly accuracy.</li>
          <li onClick={() => setPage(30)} className='listlink'>Your own dark magic, with minor curses to snuff out minor opponents and draining yourself to use more powerful invocations against stronger one.</li>
          <li onClick={() => setPage(28)} className='listlink'>Harrying their flanks with a great many arrows as you continue to move into a flanking position.</li>
          <li onClick={() => setPage(31)} className='listlink'>Using the deadly spells you prepared to cut them down.</li>
          <li onClick={() => setPage(19)} className='listlink'>Drawing upon the elemental forces that are available to channel at the moment to rain destruction on your enemies.</li>
        </ul>
      </div>
    </>,
    9: <>

      <div>You need to do something to break up the enemy assault.
        <ul>
          <li onClick={() => setPage(22)} className='listlink'>That's why you prepared a magical trick to create illusions to confuse them all.</li>
          <li onClick={() => setPage(29)} className='listlink'>You spring a trap on the forward imps, forcing the rest to proceed with caution.</li>
          <li onClick={() => setPage(25)} className='listlink'>You draw power out of your undead servants to fear the hearts of the imps with fear.</li>
          <li onClick={() => setPage(30)} className='listlink'>You curse the imps and possibly even drain yourself by putting some of your own blood into your magical pact.</li>
          <li>You freeze the ground underneath the imps or make it begin to snow inside. The Frostling and Elven Snowscaper are in <strong className="text-strong">Frostburn</strong>.</li>
        </ul>
      </div>
    </>,
    10: <>

      <div>You draw your magic from...
        <ul>
          <li onClick={() => setPage(18)} className='listlink'>The camaraderie of totemic spirits of Nature.</li>
          <li onClick={() => setPage(19)} className='listlink'>The arcane flow of elemental powers.</li>
          <li onClick={() => setPage(26)} className='listlink'>Fleeting glimpses of divine inspiration.</li>
          <li>The whisperings of nearby spirits. The Draconian and Goblin Shaman are in <strong className="text-strong">Flesh and Sand</strong>.</li>
        </ul>
      </div>
    </>,
    11: <>

      <div>The best way to skirmish your opponents is to...
        <ul>
          <li onClick={() => setPage(29)} className='listlink'>Lay traps that limit enemy options.</li>
          <li onClick={() => setPage(28)} className='listlink'>Switch between ranged weapons and melee weapons as needed as you move into position.</li>
          <li onClick={() => setPage(24)} className='listlink'>Move quickly and hit and run with innovative combat styles to stun and cripple your opponents.</li>
          <li>Fight defensively, parrying strikes and drawing your opponents out of position. The Changeling and Drow Swashbuckler are in <strong className="text-strong">Stormwrack</strong>.</li>
          <li>Use your ninja magic to become virtually invisible and pick off enemies one backstab at a time. The Nezumi and the Halfling Ninja are in <strong className="text-strong">Peaches and Pearls</strong>.</li>
        </ul>
      </div>
    </>,
    12: <>

      <div>Your soldiers are...
        <ul>
          <li onClick={() => setPage(23)} className='listlink'>Loyal to you because of your great cunning and leadership skills.</li>
          <li onClick={() => setPage(25)} className='listlink'>Loyal to you because they are skeletons and ghosts given life and form through the power of your spirit.</li>
          <li onClick={() => setPage(18)} className='listlink'>Loyal to you because they are plants and animals and you are an anointed speaker for Nature.</li>
          <li>Loyal to you because your business acumen and administration skills pay their wages. The Mongrelfolk Merchant and Halfling Merchant are in <strong className="text-strong">Stormwrack</strong>.</li>
          <li>Beyond questions of loyalty because they are clockwork constructs and golems that you created. The Clockwork and Dwarven Artificer are in <strong className="text-strong">Sandstorm</strong>.</li>
        </ul>
      </div>
    </>,
    13: <>

      <div>There is a limit to how many abilities can be prepared. That's because...
        <ul>
          <li onClick={() => setPage(29)} className='listlink'>There are only so many traps and tricks that even someone like you can hide about your person.</li>
          <li onClick={() => setPage(31)} className='listlink'>There are only so many spells you can memorize at a time.</li>
          <li>There are only so many potions you can consume before it all goes out of balance. The Vanara and Gnome Alchemist are in <strong className="text-strong">Peaches and Pearls</strong>.</li>
        </ul>
      </div>
    </>,
    14: <>

      <div>You are an Assassin. Patience, precision, poison, and play most foul are in your professional parlance. By studying your opponents, you can find their weaknesses and take them out with extreme prejudice. You are not crassly destructive, you're a scholar of death. You don't just have a crossbow and a black cloak, you are also learned in a smattering of alchemy, necromancer, medicine, and shadow magic - anything to give you the edge in your chosen profession. Provided are:
        <ul>
          <li>The Orcish Assassin. During the Reign of the Eye, all leaders served their masters until they died, creating a need for careful and exacting killers to mediate political disputes. The Great Betrayal was only possible because demonic loyalists were carefully and swiftly removed from the hierarchy. The assassin cults are very prestigious in Orcish society, and you have every intention of living up to the hype. Not that your targets will ever know who you are.</li>
          <li>The Drow Assassin. Even after joining the Accord of the Free Peoples, Drow society has politics that are brutal in the extreme. Many of the heads of the demon houses are unaging, and the only means of advancement is sometimes the death of a superior. To this day, a &ldquo;Drow Promotion&rdquo; is the term given for advancing in one's social status or career after the death of the previous holder of the position. Assassins are sponsored by all the major houses. The Drow are the source of many of the world's most innovative poisons and subtlest hand crossbows, and that is the kind of legacy of quality that you represent.</li>
        </ul>
      </div>
    </>,
    15: <>

      <div>You are a Bard. Bards are part of an oral tradition and are able to speak many languages and know many stories and songs. But they are also warriors and magicians. You have mighty spell songs and great skill at arms. You have short words of power that you can use whilst fighting that inspire your allies and curse your enemies, and using them builds up towards a spellsong crescendo where you can stop fighting and sing to produce more powerful effects such as sonic explosions or mass confusion. Provided are:
        <ul>
          <li>The Gnomish Bard. Gnomes have very keen senses and many of them have perfect pitch in addition to their famously good sense of smell. This natural affinity for tones matches an affinity for magic and makes the Gnome Bard a well known facet of their culture. Gnomish Bards rely heavily on their songs and trickery over their weapons, but they can and do still crack a whip or thrust a short sword.</li>
          <li>The Orcish Bard. Many of the Orcish tribes have few literate people in them, and the role of the oral historian and storyteller is hugely important in Orcish life. Orcish Bards are expected to defend the histories not only by telling and retelling them, but by physically beating those who would destroy them. The Orcs consider Bards to be very real and very martial defenders of the knowledge of their people and you take this responsibility and honor very seriously indeed.</li>
        </ul>
      </div>
    </>,
    16: <>

      <div>You are a Berserker. A Berserker's greatest abilities are fueled by fury, and their fury is fueled by pain and destruction. Your place is on the front lines, because that is where you can most easily hurt and be hurt, the two things that provoke you to acts of greater courage. It's not all hitting things with an ax. You might turn into a bear or call upon the spirits of your ancestors if you have shown enough prowess in battle.
        <ul>
          <li>The Orcish Berserker. Rage comes easily to the tusked folk, and wanton destruction is your path to heroism. Orcs break things. They are good at breaking things. You are good at breaking things and you are good at not being broken. The spirits show you favor because you show courage. You show courage because you are an Orc, and because even other Orcs think you are kind of crazy.</li>
          <li>The Dwarven Berserker. Dwarves dedicate themselves to totems of wrath for all kinds of reasons. Some of them do it to seek a death for themselves to atone for shame. Some of them do it because they wish to protect others more than they wish to protect themselves. There are several schools of Dwarvish Berserkers, with attitudes ranging from deathseeking to death dealing, and you are a product of one of them.</li>
        </ul>
      </div>
    </>,
    17: <>

      <div>You are a Cleric. You can call upon spiritual aid, which mostly comes in the form of divination, healing, and protection. You cannot ask for any particular favor too often, however, and your individual powers must be rationed lest they exceed the patience of the gods. Of course, even without your magic, you're still able to hold a shield and raise a spear, you're nothing like helpless even when the gods leave you to your own devices. Provided are:
        <ul>
          <li>The Human Cleric. Many see Humans a the leaders of the Free Peoples, having successfully liberated more lands from the Demon Lords than any other force. Certainly, Humans have shown that they are not satisfied to merely throw off the yoke of their oppressors and have been taken by a zeal to spread their way of life to the corners of the world still infested with demon loyalists. Many Humans turn to the power of the spirits and the gods to help them in their quest, and you are one of them.</li>
          <li>The Drow Cleric. The most respected people in Drow society are the priestesses of Lolth. Even Drow from low houses or no houses at all can rise in status by becoming favored by the demon goddess. Most Drow Clerics are women, though there is an occasional male chosen as well. Whatever your origins, you are a natural leader. You've been chosen by the Queen of Spiders to be someone who must be listened to.</li>
        </ul>
      </div>
    </>,
    18: <>

      <div>You are a Druid. You have the power to command natural forces. Roots and wind, birds and stone come to your aid. Nature is fickle, and from moment to moment you seldom know what tools you have available to you. But Nature does provide, and it falls to you to determine how to use what is available to fullest effect. Maybe it's time for those roots to grow into thorn brambles? Maybe it's time for it to rain inside. Plants, beasts, earth, and weather, the four poles of the natural world ebb and flow, but <em className="text-italics">something</em> is always available to the resourceful Druid. Provided are:
        <ul>
          <li>The Goblin Druid. Some would call the Goblins completely uncivilized, but they prefer to think of themselves as being more attuned to nature. Certainly, <em className="text-italics">you</em> are attuned to nature, you're a Druid. Most Goblins are on speaking terms with Worgs, and you are on speaking terms with all manner of beasts. And also on speaking terms with rocks and trees and the clouds in the sky.</li>
          <li>The Elvish Druid. The trees protected the Unconquered by providing them places to hide from aggressors and food while they were besieged. Veneration of nature runs deep in Elvish culture, and Druids are turned to as leaders and champions. You have a strong connection to the forest, both historically and personally, and the defenders of the woods will expect great things of you.</li>
        </ul>
      </div>
    </>,
    19: <>

      <div>You're an Elementalist. You have control over the elements, though the power of each of the elements ebbs and flows chaotically. When an element is in ascendancy an Elementalist attuned to that element can do amazing things, and when that element is not... it may be best to use a different element for a while. Each Elementalist has two elements that they specialize in, and their access to either element is determined randomly each round. Thus with some time to wait for the flows to align you can pull off a wide variety of things, but in the middle of battle you may find yourself bending the elements in surprising ways.
        <ul>
          <li>The Kobold Elementalist. You've long suspected that the mighty blood of dragons flows in your veins stronger than it does in other Kobolds. When you found yourself able to breathe fire, your suspicions were confirmed. You may be small, but you are scaly and destructive. The elements are yours to command, and your enemies will burn.</li>
          <li>The Dwarven Elementalist. Tied as they are to the earth and flame, Dwarves have a natural affinity for elemental magic. Still, some Dwarves draw upon the power of the Giants to use other elements, and it is not unheard of for Dwarven elementalists to specialize in water or air.</li>
        </ul>
      </div>
    </>,
    20: <>

      <div>You are an Enchanter. You can place magical enchantments on things to improve them. You can make wards that protect things and enhancements that improve things in other ways. When one of your enchantments is ongoing, you can burn it to get an impressive instant effect, but it will take some time to put your enchantment back together once you've broken it. You fight with magically enhanced weapons and are protected by magically enhanced armor, and can discharge your enhancements to produce instantaneous effects.
        <ul>
          <li>The Dwarven Enchanter. Dwarves have long taken an interest in crafting and forging, so it is almost cliche for one to take up enchantment. The runes you place onto your weapons are a mix of spells that are centuries old and new and innovative ones that have been custom made by you.</li>
          <li>The Gith Enchanter. Traditionally, Gith Enchanters place their wards into gems and beads which they tie into their hair or strap to their armor. This makes them easy to reach when they need to be discharged. The silver swords crafted by Gith Enchanters are justifiably famous.</li>
        </ul>
      </div>
    </>,
    21: <>

      <div>You are a Hero. You are a warrior and a leader. You can perform incredible feats of strength and skill, and people turn to you for inspiration. You're highly resistant to most things, being passively hard to take out with swords and sorcery.You don't have to track much of anything in combat, because your specialty maneuvers can be used whenever you want. As the protagonist of the story, you also simply get more Narrative Imperative than other characters, so go out and take some chances! Provided are:
        <ul>
          <li>The Hobgoblin Hero. The Khans demand just one thing: excellency. And you have it. You're able to excel at everything you put your mind to because you have cunning, strength, and steel on your side.</li>
          <li>The Gnomish Hero. Giants are among the greatest foes of the Gnomes, and Gnomish champions who can face these daunting foes are worthy of songs and stories. You are such a Gnome. You use your bravery, mobility, and maybe a bit of luck to fell foes many times your size, and earn applause from your people.</li>
        </ul>
      </div>
    </>,
    22: <>

      <div>You are an Illusionist. You can create all manner of things, just so long as those things aren't real. You control the vertical and the horizontal, but only for a short period of time. An Illusionist prepares tricks that are expended when used. Once gone, it takes time to prepare new tricks. But each of an Illusionist's tricks are, at least potentially, very impressive. Minds can be changed, dangerous shadow beasts can be summoned. Some say that reality is an illusion, but to an Illusionist their illusions are reality. Provided are:
        <ul>
          <li>The Gnome Illusionist. Gnomes take to illusion like an overwrought metaphor to poetic thingies. Gnomes don't just have extensive experience with the Shadow Realms and the Mirror Realms from which Illusion magic flow, they culturally regard trickery and deception as praiseworthy. Great schools of Illusionism are in the Gnome Warrens, and as a Gnome Illusionist you probably come from one. And even if you didn't, you can still prove that you did.</li>
          <li>The Tiefling Illusionist. While officially accepted, Tieflings are by their very nature still a bitter reminder of hundreds of years of occupation and atrocity. Through no fault of their own, Tieflings were literally born to be blamed for crimes committed generations before they were even alive. It is no surprise then that many Tieflings turn to the magic of trickery and deception to more easily live in a society that is deeply ambivalent about their existence.</li>
        </ul>
      </div>
    </>,
    23: <>

      <div>You are a Marshal. Blessed with a talent for tactics and strategy, you are a natural leader. As the battlefield changes, you can spot openings and shout timely commands to your troops. You attract a retinue of men at arms, and excel at logistics. Provided are:
        <ul>
          <li>The Human Marshal. Among all the Free Peoples, Humans are most frequently tapped as military leaders. Humans are just very good at figuring out ways to kill people, and many soldiers expect to follow a Human commander.</li>
          <li>The Kobold Marshal. Kobolds are the smallest of the Free Peoples, and it only through military discipline and clever tactics that the Kobolds have managed to hold onto their warrens against incursion from larger foes. The tactical acumen of Kobold Marshals is legendary, and your allies are eager to hear your plans.</li>
        </ul>
      </div>
    </>,
    24: <>

      <div>You are a Monk. You follow a mystical warrior tradition that emphasizes the clarity of mind over raw physical strength. You have mastered many styles of combat that allow you to fight with or without weapons. In combat, you fight like a predator &ndash; moving quickly and debilitating enemies with carefully placed strikes. Your mystical discipline makes you resistant to magic and many of the hazards of the world. Provided are:
        <ul>
          <li>The Hobgoblin Monk. The nomadic Hobgoblins regularly travel across the great plains and have frequent contact with the Bakemono of the Pearl Empire. Martial traditions of the Hobgoblins are mixtures of many styles from many lands, and you have mastered several. You can get where you need to be and disable enemies with your bare hands.</li>
          <li>The Gith Monk. Having freed themselves from the tentacled Mind Lords, the Gith consider themselves to be the first of the Free Peoples. The quest to eradicate their old masters is for some Gith all encompassing, and the path of the warrior Monk is well respected and well trod in Gith culture. The war monasteries of the Gith teach martial discipline and focusing of the mind. Most of them are located off-world, on floating islands in the void of Limbo. Monks have been on the front line of the war against the tentacled masters, and you are going to be invaluable against other threats in the future.</li>
        </ul>
      </div>
    </>,
    25: <>

      <div>You are a Necromancer. You have a pool of Essentia that you can dynamically distribute between your necromantic minions. They can use the power that you give them to be stronger, tougher, or faster. But you can also use the power yourself to assist your minions with curses or to defend yourself. After all, death is nothing new for your minions, but you are not so easy to replace. Provided are:
        <ul>
          <li>The Drow Necromancer. In many societies, necromancy is closely associated with the Demon Lords and has something of a bad name. In Drow society, that is not quite the stigma that it is among the other Free Peoples. Necromantic power is encouraged when it is seen among the youth of Drow settlements, and the powers of shadow are seen as aesthetically pleasing to the Dark Elves.</li>
          <li>The Human Necromancer. Few peoples think as deeply about death as Humans do. While necromancy has a poor reputation among Humans, the draw of necromancy to humanity is undeniable. Humans fear death, and they fear the magic of death. And they are drawn to it like moths to a flame. Others may not approve of your choices, but you know that they also envy you.</li>
        </ul>
      </div>
    </>,
    26: <>

      <div>You are a Paladin. A Paladin is a knight armed and armored in steel and devotion. Paladins are warriors, but they also have magical maneuvers in addition to martial ones. A Paladin can heal and protect, but they cannot effectively plan ahead. Divine inspiration simply comes as it likes to, and the Paladin must make do with whatever is available at the time. A Paladin goes into the thick of it, making But if you have faith, the spirits will provide enough to achieve victory. Probably.
        <ul>
          <li>The Goblin Paladin. You have heavy armor, a heavier duty, and mount with claws and fangs. The Goblins have a long relationship with the Worgs and many Goblins ride wolves. Goblin Paladins are usually cavaliers who ride ravenous beasts into battle, trusting in their divine mission to protect themselves and their allies as they charge their foes with lance and jaws.</li>
          <li>The Tiefling Paladin. Those demon houses which defected to the Accord have produced some of the most passionate crusaders for the Free Peoples. The Paladins of House Alu are well known for their devotion. Every Tiefling must ultimately choose to align themselves with their fiendish or their mortal ancestors, and you fight for the mortals with the zeal that only those who have chosen a side can possess.</li>
        </ul>
      </div>
    </>,
    27: <>

      <div>You are a Psion. You can move things with your mind. Strict discipline and mental focus give you a reserve of mental power that you can use to affect yourself and the world around you. Psionic power deals in telepathy, telekinesis, and probability travel. Psions use weapons and usually use martial discipline to focus their mental techniques. A Psion who has exhausted their mental powers can regain them through rest and meditation, or they can fall back on their considerable skill with a weapon. Provided are:
        <ul>
          <li>The Gith Psion. Since the revolution against their tentacled masters, the Gith have relied upon two things: their undaunted will and metal blades. Gith Psions have a rich tradition of psionic discipline and young Gith who show promise are trained to focus their swords with their minds &ndash; and to focus their minds with their swords. These psionic knights are well respected in Gith culture.</li>
          <li>The Goblin Psion. Most Goblins have little inclination towards psionic power. However, a small minority are <em className="text-italics">very</em> gifted psionically and begin hearing the thoughts of those around them before they learn to speak. These Goblins are almost universally self-taught as Psions and have idiosyncratic methods. Psionic Goblins are called Blues by other Goblins, as most of them have blue birth marks somewhere on their skin. Some of them are born with skin that is entirely blue.</li>
        </ul>
      </div>
    </>,
    28: <>

      <div>You are a Ranger. People turn to you for your abilities as a scout and also for your battlefield prowess. You use your mobility to put distance between you and enemies who want to close, and to close the distance with enemies who want some alone time. You're equally at home with a scimitar or a bow and often switch weapons quickly as the tactical needs change. Provided are:
        <ul>
          <li>The Elvish Ranger. Long at home in the forests, Elves are known as great trackers and fletchers - and it's Elves like you who establish that stereotype. You come from the deepest parts of the forests, the never conquered Old Groves. You have sharp eyes and a quiet step, both of which serve you well when you draw your old growth recurve bow.</li>
          <li>The Halfling Ranger. Halflings are not traditionally considered a fast people, yet in times of war they rely upon skirmishing and harrying their foes. Halflings use stealth and terrain, but also make significant use of mounts such as riding dogs and even great eagles. As a Halfling Ranger, you can ride a pony or a riding dog, getting all the mobility of your longer legged compatriots and more.</li>
        </ul>
      </div>
    </>,
    29: <>

      <div>You are a Rogue. You are adept at stealth, scouting, and the finding and creation of traps. The contents of your knapsack may seem to just be ball bearings, some rags, a bottle of cider, and some string - but in your hands that is a deadly arsenal. Also you have like ten knives hidden about your person that they didn't notice. Provided are:
        <ul>
          <li>The Halfling Rogue. The Halflings took great pride in liberating themselves with partisan activity during the scouring, and now sabotage and stealthy mayhem are elevated in Halfling culture to high art. You may be small and homey looking, but your innocent appearance hides a mind that quickly evaluates everything it sees as a potential threat.</li>
          <li>The Hobgoblin Rogue. Hobgoblins are a naturally quiet people. You use stealth and subtlety to accomplish your goals, and are very good at it. Even for a Hobgoblin.</li>
        </ul>
      </div>
    </>,
    30: <>

      <div>You are a Warlock. You channel power from otherworldly sources. Each day you can draw up a new pact, which gives you different powers you can use. But the most powerful spells of your pact carry a price, they drain you physically, mentally, or spiritually to channel that much power. That's the pact, that's the "payment." All the power you get for free is to try to entice you to draw down just a little more power than you can handle. But you're too smart for that.
        <ul>
          <li>The Tiefling Warlock. During the occupation, some people interbred with the conquerors. Your ancestors from this world did, and sometimes people are jerks to you about it. But having infernal blood in your veins isn't just about getting the stink eye from anti-demon zealots, it also makes it easy (or at least eas<em className="text-italics">ier</em>) to channel infernal power. You'll fight for this world, it's where you're from, it's where you keep all your stuff. But you'll use the infernal powers to do it. That's ironic, not merely unfortunate.</li>
          <li>The Halfling Warlock. During the occupation, infernal artifacts were left all over the Halfling lands. The Great Ironworks and the Blood Spire are the most famous, but every Halfling city is full of reminders of their time under Dispater's hoof. Using the magic of demons isn't easy for Halflings, nor is it thought well of by your countrymen, but it's <em className="text-italics">available</em>. Always and everywhere. You reached out and grabbed the dark power, and now you will show them that you can be the hero no one believed you could be.</li>
        </ul>
      </div>
    </>,
    31: <>

      <div>You're a wizard. You have a spellbook out of which you can prepare a limited number of spells and cast them to your heart's content. Given time, you can memorize different spells. Wizard spells are useful in a lot of circumstances, and run the gamut from simple destruction to minor creation. Wizard spell books are written in ancient magical languages like Elvish, Infernal, and Draconic. As a Wizard, you are well versed in book learning and can translate texts written before the occupation. Depending on what spells you prepare, you could contribute to combat as a blaster or a support character, or something in between. Provided are:
        <ul>
          <li>The Elvish Wizard. Hailing from a people with inborn magical talent, wizardry comes easily to you. Spellbooks have been written in High Elvish for centuries, and if you have anything to say about it they are going to continue.</li>
          <li>The Kobold Wizard. You were able to read the oldest language of magic shortly after hatching from your egg. Modern Kobold is <em className="text-italics">spoken</em> differently from Ancient Draconic, but it's <em className="text-italics">written</em> exactly the same. You've been studying the ancient lore since you were a small child, and you are a qualified expert on the subject. And you can go through your notes and prepare some spells that will literally knock peoples' socks off.</li>
        </ul>
      </div>
    </>,
  };

  return (
    <div className="App">
      <div className="App-header">
        <div style={{
          backgroundColor: 'white',
          maxWidth: '85%',
          borderColor: '#E6E9ED',
          border: '1px solid transparent',
          borderRadius: '8px',
          padding: '15px',
          textAlign: 'left',
        }}>
          <div style={{
            backgroundColor: '#E1EBF2',
            padding: '5px 10px',
            marginBottom: '4px',
            borderRadius: '7px',
            lineHeight: '1.48em',
          }}>
            <h1 style={{
              fontSize: '17px',
              lineHeight: '21.25px',
              marginBottom: '5.1px',
              paddingTop: '2px',
            }}>
              <a className='Link1' target='_blank' href="https://www.tgdmb.com/phpBB3/viewtopic.php?p=433750">Why no Classplosion in 5e?</a>
            </h1>
            <p style={{
              lineHeight: '12px',
              marginBottom: '6px',
              color: 'rgb(51, 51, 51)',
              fontSize: '10px',
              fontWeight: 'normal',
            }}
            >
              <a target='_blank' href='https://www.tgdmb.com/phpBB3/viewtopic.php?p=433750#p433750'><FaFile color='#999999' /></a> by <a target='_blank' href={`https://www.tgdmb.com/phpBB3/memberlist.php?mode=viewprofile&u=9`} className="Link1">Username17</a>  » Wed Apr 08, 2015 8:45 pm
            </p>

            <div className='Content'>
              <p>We mentioned when talking about 4th edition what a fucking travesty it was that there wasn't a <a className="postlink" target='_blank' href="https://www.tgdmb.com/viewtopic.php?t=50923&amp;view=previous">Classplosion</a>. Simply put: 4e's game system simply couldn't handle there <em className="text-italics">not</em> being over a hundred classes. 4e fucking killed itself by not bringing out the new classes fast and furious.<br /><br />Now 5th edition is a crap game. But one of the ways it is <em className="text-italics">better</em> than 4th edition is that it does not <em className="text-italics">need</em> dozens of new classes. But it still needs <em className="text-italics">something</em>. They went to print with 12 classes. And that was minimally sufficient to be more than the 3e PHB and make it look like they gave a shit. It did not repeat the mistakes of 4e of producing only 8 classes on release. But after doing that, there's fucking <em className="text-italics">nothing</em> on the schedule. No new classes.<br /><br />The claim seems to be that producing new sorcerous origins and class kits and shit. This is bullshit. Obviously, they'd need to do something like this:</p>
              <br />
              {map[page]}
              <br />
              {page !== 1 && <div>
                <div>
                  <button className='listlink' onClick={() => setState({ page: prevPages[prevPages.length - 1], prevPages: prevPages.slice(0, -1) })}><div style={{ display: 'inline-flex', alignItems: 'center' }}><FaStepBackward /> Back</div></button>
                </div>
                <div>
                  <button className='listlink' onClick={() => setState({ page: 1, prevPages: [1], })}><div style={{ display: 'inline-flex', alignItems: 'center' }}><FaFastBackward /> Restart</div></button>
                </div>
              </div>}
              <br />
              - Username17
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
