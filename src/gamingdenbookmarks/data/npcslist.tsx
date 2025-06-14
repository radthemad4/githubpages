import { MonsterEntry } from "../../entry";

export const npcs: MonsterEntry[] = [
    ...[
        { name: 'Sub-Chief Grugrik, Half-Orc Chieftain 1', challengeRating: 1 },
        { name: 'Tribal Guard, Orc Warrior 1', challengeRating: 1 },
        { name: 'Chief Grugrik, Half-Orc Chieftain 5', challengeRating: 5 },
        { name: 'Honor Guard Warrior, Orc Warrior 4', challengeRating: 4 },
        { name: 'Honor Guard Adept, Half-Orc Adept 4', challengeRating: 4 },
        { name: 'Maldrissa, Human Summoner 1', challengeRating: 1 },
    ].map(({ name, challengeRating }) => {
        return {
            name,
            author: 'IGTN',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=106250#p106250',
            challengeRating: challengeRating
        };
    }),
    {
        name: 'Commoner',
        author: 'virgil',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=165139',
        challengeRating: 1 / 6
    },
    {
        name: 'Olga, Neutral Evil Human Witch 6',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=103097#p103097',
        challengeRating: 6
    },
    {
        name: 'Arnir, Male human Rogue 5/Shadowdancer 2',
        author: 'Surgo',
        link: 'https://dnd-wiki.org/wiki/Shadowdancer,_Tome_(3.5e_Prestige_Class)',
        challengeRating: 7
    },
    {
        name: 'Hakor, CE Catharz Conduit 9',
        author: 'Surgo?',
        link: 'https://dnd-wiki.org/wiki/Conduit_of_the_Lower_Planes_(3.5e_Class)#Conduits_in_the_Game',
        challengeRating: 9
    },
    {
        name: 'Volodni Stormlord',
        author: 'PhaedrusXY',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=134347#p134347',
        challengeRating: 10
    },
    ...[
        {
            name: 'Town Guard',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=446296#p446296',
            challengeRating: 1,
        },
        {
            name: 'Bandit',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=420973#p420973',
            challengeRating: 2,
        },
        {
            name: 'Cultist',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=455982#p455982',
            challengeRating: 2,
        },
        {
            name: 'Orc Warrior',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=446997#p446997',
            challengeRating: 2,
        },
        {
            name: 'Battlemage',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=422066#p422066',
            challengeRating: 5,
        },
        {
            name: 'Thri-Kreen Hunter',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=432510#p432510',
            challengeRating: 5,
        },
        {
            name: 'Tiefling Fighter',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=420898#p420898',
            challengeRating: 5,
        },
        {
            name: 'Pyromancer',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=446292#p446292',
            challengeRating: 6,
        },
        {
            name: 'Drow Archpriestess',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=446301#p446301',
            challengeRating: 13,
        },
        {
            name: 'Thri-Kreen Hunter',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=432510#p432510',
            challengeRating: 5,
        },
        {
            name: 'Dremora Warrior 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=573531#p573531',
            challengeRating: 0.5,
        },
        {
            name: 'Human Warrior 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575001#p575001',
            challengeRating: 0.5,
        },
        {
            name: 'Eladrin Warrior 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=564282#p564282',
            challengeRating: 0.5,
        },
        {
            name: 'Haunt Wizard 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=574835#p574835',
            challengeRating: 0.5,
        },
        {
            name: 'Matoran Expert 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=468716#p468716',
            challengeRating: 0.5,
        },
        {
            name: 'Planetouched Commoner 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=428664#p428664',
            challengeRating: 0.5,
        },
        {
            name: 'Witch Wizard 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=424325#p424325',
            challengeRating: 1,
        },
        {
            name: 'Garif Barbarian 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=564282#p564282',
            challengeRating: 1,
        },
        {
            name: 'Gria Ranger 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=457540#p457540',
            challengeRating: 1,
        },
        {
            name: 'Kappa Gadgeteer 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=489536#p489536',
            challengeRating: 1,
        },
        {
            name: 'Moogle Rogue 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=313514#p313514',
            challengeRating: 1,
        },
        {
            name: 'Nu Mou Wizard 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=313514#p313514',
            challengeRating: 1,
        },
        {
            name: 'Viera Druid 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=313514#p313514',
            challengeRating: 1,
        },
        {
            name: 'Zenythri Warrior 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=413827#p413827',
            challengeRating: 1,
        },
        {
            name: 'Merfolk Warrior 2',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=465680#p465680',
            challengeRating: 1,
        },
        {
            name: 'Tuladhara Warrior 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575090#p575090',
            challengeRating: 1,
        },
        {
            name: 'Ungor Warrior 1',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575140#p575140',
            challengeRating: 0.5,
        },
    ].map(({ name, link, challengeRating }) => {
        return {
            name,
            link,
            challengeRating: challengeRating,
            author: 'Wiseman'
        }
    }),
    ...[
        ...[
            'Laharl [Overlord Prince]',
            'Flonne [Fallen Angel]',
            'Etna [Beauty Queen]',
        ].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=234134#p234134',
                challengeRating: 15
            }
        }),
        ...[
            { name: "Lord Zetta [Badass Freakin' Overlord]", challengeRating: 15 },
            { name: 'Marona [Chroma]', challengeRating: 13 },
            { name: 'Ash', challengeRating: 13 },
            { name: 'Pram [Prodigy Overlord]', challengeRating: 15 },
            { name: 'Babylon (Human Form) [Star Dragon Overlord]', challengeRating: 13 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=234158#p234158',
                challengeRating: challengeRating
            };
        }),
        ...[
            { name: "Adell [Prism Black, Badass Overlord]", challengeRating: 15 },
            { name: "Rozalin [Former Overlord's Daughter, God of All Overlords]", challengeRating: 17 },
            { name: 'Dark Hero Axel [Dark Hero]', challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=234257#p234257',
                challengeRating: challengeRating
            };
        }),
        ...[
            { name: "Mao [Overlord]", challengeRating: 15 },
            { name: "Raspberyl [Delinquent]", challengeRating: 12 },
            { name: 'Princess Sapphire [Newlywed Princess]', challengeRating: 15 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=234590#p234590',
                challengeRating: challengeRating
            };
        }),
        ...[
            { name: "Asuka Cranekick [Delinquent]", challengeRating: 10 },
            { name: "Kyoko Needleworker [Delinquent]", challengeRating: 10 },
            { name: 'Almaz [Hero]', challengeRating: 11 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=234922#p234922',
                challengeRating: challengeRating
            };
        }),
        {
            name: 'Midboss [Midboss] (Formerly The Dark Adonis, Vyers)',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=234922#p234922',
            challengeRating: 10
        },
        ...[
            { name: "Overlord Priere [Overlord]", challengeRating: 15 },
            { name: "Asagi [Hidden Character]", challengeRating: 12 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=235139#p235139',
                challengeRating: challengeRating
            };
        }),
        ...[
            { name: "Valvatorez [Overlord/Prinny Instructor]", challengeRating: 15 },
            { name: "Fenrir [Loyal Vassal]", challengeRating: 12 },
            { name: `"Vulcanus" [Angel of Avarice]`, challengeRating: 12 },
            { name: `Fuka [Prinny!?]`, challengeRating: 12 },
            { name: `Desco [Final Boss]`, challengeRating: 10 },
        ].map(({ name, challengeRating }) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=253443#p253443',
                challengeRating: challengeRating
            };
        }),
    ].map(({ name, link, challengeRating }) => {
        return {
            name,
            author: 'Koumei',
            link,
            challengeRating: challengeRating,
            relatedLinks: [
                { title: 'Roleplaying in the Disgaeaverse', link: 'https://www.scribd.com/document/156510306/Roleplaying-in-the-Disgaeaverse' },
                { title: 'Mediafire Mirror', link: 'https://www.mediafire.com/file/8639xwza1o28tw0/156510306-Roleplaying-in-the-Disgaeaverse.pdf/file' },
                { title: 'Disgaea Thread', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=51315' },
            ],
        }
    }),
    {
        name: 'Tyrant Overlord Baal Human [(Demon) LORD OF TERROR]',
        author: 'Josh_Kablack',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=235220#p235220',
        challengeRating: 15,
        relatedLinks: [
            { title: 'Roleplaying in the Disgaeaverse', link: 'https://www.scribd.com/document/156510306/Roleplaying-in-the-Disgaeaverse' },
            { title: 'Mediafire Mirror', link: 'https://www.mediafire.com/file/8639xwza1o28tw0/156510306-Roleplaying-in-the-Disgaeaverse.pdf/file' },
            { title: 'Disgaea Thread', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=51315' },
        ],
    },
    ...[
        "Valeros, Human Fighter 2",
        "Meresiel, [Gray] Elf Thief Acrobat 2",
        "Amiri of the Six Bears, Human Barbarian 2",
        "Alain, Knight of the Cockatrice, Human Knight 2",
        "Balazar, [Forest] Gnome Summoner 2",
    ].map((name) => {
        return {
            name,
            author: 'CatharzGodfoot',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248274#p248274',
            challengeRating: 2
        };
    }),
    ...[
        {
            name: 'Drizz’t Do’urden, CG Male Drow Barbarian 5/Fighter 11 ',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245220#p245220',
            challengeRating: 16
        },
        {
            name: 'Ariakas, Emperor of Ansalon, Scion of Tiamat, LE Male Human Wizard 6/Fighter 1/Eldritch Knight 10/Arcane Strategist 6',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245323#p245323',
            challengeRating: 23
        },
        {
            name: 'Rudolph Van Richten, LG Human Male Rogue 3/Fighter 9 ',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245372#p245372',
            challengeRating: 12
        },
        {
            name: 'Artemis Entreri, NE Male Human Fighter 12/Assassin 6 ',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245878#p245878',
            challengeRating: 18
        },
        {
            name: 'Lord Soth, Knight of the Black Rose, LE Human Male Swordwraith Knight 10/Death Knight 4/Swordwraith Paragon 3',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246062#p246062',
            challengeRating: 17
        },
        {
            name: 'Tanis Half-Elven (at the end of the original Chronicles), NG Half-elf Male Marshall 9/Legendary Strategist 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246302#p246302',
            challengeRating: 14
        },
        {
            name: 'Grimtooth the Troll, CE Male Troll Assassin 5/Dungeon Veteran 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246448#p246448',
            challengeRating: 15
        },
        {
            name: 'Meepo, Dragon with a Shotgun, LE Male Kobold Fighter 5/Dragon Disciple (Brass) 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246616#p246616',
            challengeRating: 10
        },
        {
            name: 'Cultist of the Dragon Below, CE Human Adept 5 ',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246857#p246857',
            challengeRating: 5
        },
        {
            name: 'Emerald Claw Soldier, LE Human Warrior 3 ',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246857#p246857',
            challengeRating: 3
        },
        {
            name: 'House Thuranni Assassin, CE Elf Assassin 7',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246871#p246871',
            challengeRating: 7
        },
        {
            name: 'Elminster of Shadowdale!, CG Male Human Fighter 1/Rogue 3/Cleric 4/Wizard 3/Eldritch Knight 10/Mystic Theurge 10/Arcane Trickster 4 (Wizard caster level 25, Cleric caster level 14)',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246881#p246881',
            challengeRating: 35
        },
        {
            name: 'Meepo, Dragon with a Shotgun (Alternate), LE Male Kobold Fighter 7/Half-Dragon (Green) 3 ',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246926#p246926',
            challengeRating: 10
        },
        {
            name: 'Count Strahd Von Zarovich, CE Male Human Necromancer 5/Vampire Count 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247086#p247086',
            challengeRating: 10
        },
        {
            name: 'Eludecia the Succubus Paladin, LG Female Succubus Paladin 2',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247094#p247094',
            challengeRating: 9
        },
        {
            name: 'Lord of Blades, LE Warforged Gadgeteer 12',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247153#p247153',
            challengeRating: 12
        },
        {
            name: 'Angry Orc, CE Male Orc Barbarian 2',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247166#p247166',
            challengeRating: 2
        },
        {
            name: 'King Obould Many-Arrows, Chosen of Gruumsh, CE Male Orc Barbarian 5/Fighter 4',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247220#p247220',
            challengeRating: 9
        },
        {
            name: 'High Wyrmlord Azarr Kul, LE Male Hobgoblin Cleric 8/Half-dragon (Blue) 3',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247392#p247392',
            challengeRating: 11
        },
        {
            name: 'Verminaard, Red Dragon Highlord, LE Male Human Cleric 8/Legendary Strategist 2',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247421#p247421',
            challengeRating: 10
        },
        {
            name: 'Fewmaster Toede, LE Male Hobgoblin Fighter 4',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247427#p247427',
            challengeRating: 4
        },
        {
            name: 'Captain Scarbelly, Terror of the High Seas, CE Male Orc Swashbuckler 3',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247509#p247509',
            challengeRating: 3
        },
        {
            name: 'Captain Jacob Lydon, Friendly Neighborhood Pirate, CG Male Human Swashbuckler 11',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247520#p247520',
            challengeRating: 11
        },
        {
            name: 'Milton Drac, Evil Genius, CE Male Human Cleric 8',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247533#p247533',
            challengeRating: 8
        },
        {
            name: 'Finn, Crime Boss of Freeport, N Male Halfling Assassin 12',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247612#p247612',
            challengeRating: 12
        },
        {
            name: 'Hank the Ranger, NG Male Human Fighter 8',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247654#p247654',
            challengeRating: 8
        },
        {
            name: 'Annah of the Shadows, CN Female Tiefling Fighter 4/Rogue 4',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247699#p247699',
            challengeRating: 8
        },
        {
            name: 'Diana the Acrobat, NG Female Human Thief-Acrobat 6/Swashbuckler 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247902#p247902',
            challengeRating: 7
        },
        {
            name: 'Eric the Cavalier, N (NG later on in the series) Male Human Knight 7',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247904#p247904',
            challengeRating: 7
        },
        {
            name: 'Sheila the Thief, NG Female Human Rogue 7',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247909#p247909',
            challengeRating: 7
        },
        {
            name: 'Bobby the Barbarian, CG Male Human (Small Size) Barbarian 7',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247910#p247910',
            challengeRating: 7
        },
        {
            name: 'Presto the Wizard, NG Human Male Wizard 7',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247912#p247912',
            challengeRating: 7
        },
        {
            name: 'Venger, Master of Evil, NE Male Human Warlock 8/Master of Snake Mountain 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248007#p248007',
            challengeRating: 13
        },
        {
            name: 'Jack Chick, LE Male Human Ex-Cleric 1/Fighter 6/Ur-Priest 9',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248007#p248007',
            challengeRating: 16
        },
        {
            name: 'City Watch, LN Human Warrior 2',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248140#p248140',
            challengeRating: 2
        },
        {
            name: 'Bandit, NE Human Warrior 2',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248142#p248142',
            challengeRating: 2
        },
        {
            name: 'Scion of the Goblin Empire, LE Hobgoblin Marshall 6 /Legendary Tactician 1',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248275#p248275',
            challengeRating: 7
        },
        {
            name: 'Mordenkainen, N Male Human Wizard 8/Seeker of the Lost Wizard Traditions 7/Archmage 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248283#p248283',
            challengeRating: 20
        },
        {
            name: 'Tasslehoff Burrfoot, Precursor to 28 years of Kender PC Madness, NG Male Kender Rogue 14',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248357#p248357',
            challengeRating: 14
        },
        {
            name: 'Murlynd, Gunslinging Cowboy Paladin of Heironeous, LG Male Human Paladin 1/Wizard 1/Eldritch Knight 10',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248398#p248398',
            challengeRating: 12
        },
        {
            name: 'Eclavdra, Favored High Priestess of Lolth, CE Female Drow Cleric 11/Defiler of Temples 5',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248482#p248482',
            challengeRating: 16
        },
        {
            name: 'King Boranel ir’Wyrnan, CG Male Human Samurai 5/Fighter 1/Dungeon Veteran 2/Legendary Strategist 2',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248678#p248678',
            challengeRating: 10
        },
        {
            name: 'The Kingpriest of Istar, Bright, Shining Beacon of Oppressive Authoritarianism, LG Male Human Cleric 10/Celestial Beacon 10',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=249282#p249282',
            challengeRating: 20
        },
        {
            name: 'Scarlet Brotherhood Monks, because even medieval fantasy games need white supremacist villains, LE Male Human Monk 6',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=250342#p250342',
            challengeRating: 6
        },
        {
            name: 'Warduke, CE Male Human Fighter 18',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=251146#p251146',
            challengeRating: 18
        },
        {
            name: 'Valeros, NG Male Human Fighter 14',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=251159#p251159',
            challengeRating: 14
        },
        {
            name: 'Raistlin Majere, The Angst, It Burns!!!, NE Male Human Wizard 6/Seeker of the Lost Wizard Traditions 7/Loremaster 7',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=251833#p251833',
            challengeRating: 20
        },
    ].map(({ name, link, challengeRating }) => {
        return {
            name,
            author: 'Libertad',
            link,
            challengeRating: challengeRating
        }
    }),
    {
        name: 'Lucio, Human Rogue 2',
        author: 'Brobdingnagian',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39450#p39450',
        challengeRating: 2
    },
    {
        name: 'Lucio/Neox, Warrior Unborn Human Rogue 2',
        author: 'Brobdingnagian',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39451#p39451',
        challengeRating: 3
    },
    {
        name: 'Sabrina, Human Pokemaster 7/Psychic Master 4',
        author: 'Frank and Emma Trollman',
        link: 'https://web.archive.org/web/20031209191216/http://www.scshop.com/%7Eritaxis/info/sabrina.html',
        challengeRating: 11
    },
]