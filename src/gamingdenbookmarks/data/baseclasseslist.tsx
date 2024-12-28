import { Entry } from "../../entry";

export const baseClasses: Entry[] = [
    {
        name: "Acid Mage",
        author: "Maxus",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=34146#p34146",
    },
    {
        name: "Adventurer",
        author: "RadiantPhoenix",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=54556"
    },
    {
        name: "Alternative Martial Flexibility Brawler",
        author: "AcidBlades",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=454947#p454947"
    },
    {
        name: "Apothecary",
        author: "Purple",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?t=50563"
    },
    {
        name: "Puppeteer",
        author: "FrankTrollman",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=34126#p34126",
        wikiLink: "https://dnd-wiki.org/wiki/Puppeteer_%283.5e_Class%29"
    },
    ...[
        {
            name: 'True Fiend',
            wikiLink: 'https://dnd-wiki.org/wiki/True_Fiend_(3.5e_Class)'
        },
        {
            name: 'Fiendish Brute',
            wikiLink: 'https://dnd-wiki.org/wiki/Fiendish_Brute_(3.5e_Class)'
        },
        {
            name: 'Summoner',
            wikiLink: 'https://dnd-wiki.org/wiki/Summoner_(3.5e_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=28830#p28830',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: "Conduit of the Lower Planes",
        author: "Frank and K",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=28830#p28830",
    },
    {
        name: 'Carthaz Conduit',
        author: 'Kaelik, Catharz Godfoot, Frank and K',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51125',
        wikiLink: 'https://dnd-wiki.org/wiki/Conduit_of_the_Lower_Planes_(3.5e_Class)'
    },
    ...[
        {
            name: 'Monk',
            wikiLink: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)'
        },
        {
            name: 'Jester',
            wikiLink: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)'
        },
        {
            name: 'Assassin',
            wikiLink: 'https://dnd-wiki.org/wiki/Assassin,_Tome_(3.5e_Class)'
        },
        {
            name: 'Thief Acrobat',
            wikiLink: 'https://dnd-wiki.org/wiki/Thief_Acrobat_(3.5e_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=28549#p28549',
            wikiLink: element.wikiLink
        }
    }),
    ...[
        {
            name: 'Fighter',
            wikiLink: 'https://dnd-wiki.org/wiki/Fighter,_Tome_(3.5e_Class)'
        },
        {
            name: 'Barbarian',
            wikiLink: 'https://dnd-wiki.org/wiki/Barbarian,_Tome_(3.5e_Class)'
        },
        {
            name: 'Knight',
            wikiLink: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)'
        },
        {
            name: 'Samurai',
            wikiLink: 'https://dnd-wiki.org/wiki/Samurai,_Tome_(3.5e_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=33297#p33297',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Monster Tamer',
        author: 'FrankTrollman',
        link: 'https://dnd-wiki.org/wiki/Monster_Tamer_(3.5e_Class)',
        relatedLinks: [{ title: 'Original Source', link: 'https://web.archive.org/web/20031207191801/http://www.scshop.com/~ritaxis/summoner.html' }],
    },
    {
        name: 'Pokémaster',
        author: 'Frank and K',
        link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class',
        relatedLinks: [
            { title: 'Original', link: 'https://web.archive.org/web/20031207190548/http://www.scshop.com/~ritaxis/pokemaster.html' },
            { title: 'Original Epic Pokemaster', link: 'https://web.archive.org/web/20031207182216/http://www.scshop.com/%7Eritaxis/epic.html' },
        ],
    },
    {
        name: 'Arcane Archer',
        author: 'erik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56217',
    },
    ...[
        'Druid',
        'Sorcerer',
    ].map((element) => {
        return {
            name: element,
            author: 'Iaimeki',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=50377#p50377',
        }
    }),
    ...[
        {
            name: 'Artificer',
            link: 'https://docs.google.com/document/d/1IlVArMNj-7C27SxCIRgDvPgHADJijy49S0su-G7vFB8/edit?usp=sharing'
        },
        {
            name: 'Assassin',
            link: 'https://docs.google.com/document/d/1tv8ggP3UMskJizIEQamiCzDKyVAeBuvSoXPhKTG8cfY/edit?usp=sharing'
        },
        {
            name: 'Beguiler',
            link: 'https://docs.google.com/document/d/1dxfEsyYx0q96mGhOk30e7JIOVtzf3AfH021fllauBeQ/edit?usp=sharing'
        },
        {
            name: 'Disciple',
            link: 'https://docs.google.com/document/d/1RC36UZ3xAnrj0VCuh9mbVlm_jv9wG0k95Vjd5TBtJdo/edit?usp=sharing'
        },
        {
            name: 'Elementalist',
            link: 'https://docs.google.com/document/d/1YmozEAd3GCy6g0EcpJClUFVSG1ku_FslVejkAX0aYDM/edit?usp=sharing'
        },
        {
            name: 'Hunter',
            link: 'https://docs.google.com/document/d/1NiJGbcRRq0KfIlehAMyzrh4aVw9lqmM5uj91RrdnUD8/edit?usp=sharing'
        },
        {
            name: 'Necromancer',
            link: 'https://docs.google.com/document/d/1TELuZrmUcjLQLMA8X6Mw-Tg4koyEzWAok8J88h3yvHU/edit?usp=sharing'
        },
        {
            name: 'Warrior',
            link: 'https://docs.google.com/document/d/1ob1xOGGraspvMh5OAImRidLfAiHUWtBtEO_aD9AvjXQ/edit?usp=sharing'
        },
    ].map((element) => {
        return {
            name: `Aspect ${element.name}`,
            author: 'Chamomile',
            link: element.link,
            relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57183' }]
        }
    }),
    {
        name: "Axe-Thief",
        author: "Josh_Kablack",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=423851",
    },
    {
        name: 'Archivist',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=269061#p269061',
    },
    {
        name: 'Bibliomancer',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=268588#p268588',
    },
    {
        name: 'Scribblemancer',
        author: 'Grek',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=268857#p268857',
    },
    {
        name: "Barbarian",
        author: "Kaelik",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=507511#p507511",
    },
    {
        name: "Bard",
        author: "FrankTrollman",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=24283",
        relatedLinks: [{ title: 'Revision by ThunderGod Cid', link: 'https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29' }]
    },
    {
        name: "Bard",
        author: "Koumei",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?t=50778"
    },
    {
        name: "Bard",
        author: "Orion",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?t=48650"
    },
    {
        name: 'Beguiler',
        author: 'RadiantPhoenix',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55989',
    },
    {
        name: 'Shaper',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=105040#p105040',
    },
    {
        name: 'Kineticist',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=105040#p105040',
    },
    {
        name: 'Chaos Mage',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51581',
    },
    {
        name: 'Mechanus Warrior',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=168684#p168684',
    },
    {
        name: 'Bio Spark',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=169548#p169548',
    },
    {
        name: 'Verdant Master',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=169965#p169965',
    },
    {
        name: 'Inquisitor',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=176979#p176979',
    },
    {
        name: 'Slaad Mutant',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51842',
    },
    {
        name: 'Doctor',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=178011#p178011',
    },
    {
        name: 'Rogue',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=435198#p435198',
    },
    {
        name: 'Rogue v2',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57617',
    },
    {
        name: 'Wizard',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=435199#p435199',
    },
    {
        name: 'Berserker',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=435199#p435199',
    },
    {
        name: 'Necromancer',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=438426#p438426',
    },
    {
        name: 'Z-Warrior/Super Saiyan',
        author: 'zeruslord',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=49208',
    },
    {
        name: 'Black Mage',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50729',
    },
    {
        name: 'Black Mage',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=257455#p257455',
    },
    {
        name: 'Blackguard',
        author: 'Dominicius',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=202208#p202208',
    },
    {
        name: 'Blade of Radiance',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49583',
    },
    {
        name: 'Blighter',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56394',
    },
    {
        name: 'Blood Shaman',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=191210',
    },
    {
        name: 'Noble',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=464655#p464655',
    },
    {
        name: 'Brainiac',
        author: 'AcidBlades',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=450593#p450593',
    },
    {
        name: 'Bright Blade',
        author: 'Talisman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40517',
    },
    {
        name: 'Bright Blade',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40521#p40521',
    },
    {
        name: 'Bullet Mage',
        author: 'Mask_De_H',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51203',
    },
    {
        name: 'Champion of Lolth',
        author: 'RadiantPhoenix',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=359375#p359375',
    },
    {
        name: 'Incarnate',
        author: 'Calibron',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=48580',
    },
    {
        name: 'Chimeric Abomination',
        author: 'DSMatticus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=430791#p430791',
    },
    {
        name: 'Keyblade Master',
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=503541#p503541',
    },
    {
        name: 'Chemmer',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=419160#p419160',
    },
    {
        name: 'Chieftain ',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50087',
    },
    {
        name: 'Cleric',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56589'
    },
    {
        name: 'Cock Hurler',
        author: 'FrankTrollman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54089'
    },
    {
        name: 'Cock Mage',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=313904#p313904'
    },
    {
        name: 'Cock Master',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=313132#p313132'
    },
    ...['Corrupter', 'Doombringer',].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=479459#p479459',
        }
    }),
    ...['Cursed', 'Oozemancer',].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=479513#p479513',
        }
    }),
    {
        name: 'Dragon Shaman',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=479523#p479523',
    },
    {
        name: 'Crusader',
        author: 'FrankTrollman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54090',
    },
    {
        name: 'Curator',
        author: 'Manxome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49091',
    },
    {
        name: 'Sword Scion',
        author: 'Maxus',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=313834#p313834',
    },
    {
        name: 'Sun Sage',
        author: 'Avoraciopoctules',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=313969#p313969',
    },
    {
        name: 'Dark Dancer',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=314015#p314015',
    },
    {
        name: 'Sword Blade',
        author: 'infected slut princess',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=315682#p315682',
    },
    {
        name: 'Swordcaster',
        author: 'Sigil',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=315765#p315765',
    },
    {
        name: 'Defender',
        author: 'Manxome',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=66066#p66066',
    },
    ...[
        'Desert Wind Warrior', 'Disciple of the Devoted Spirit', 'Diamond Mind',
        'Master of the Iron Heart', 'Seeker of the Setting Sun', 'Shadow Hand Ninja',
        'Stone Dragon Berserker', 'Tiger Claw Assassin', 'White Raven General'
    ].map((name) => {
        return {
            name,
            author: 'krusk',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=524466#p524466',
        }
    }),
    {
        name: 'Disintegration Mage',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=194772#p194772',
    },
    {
        name: 'Dragonfire Adept',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=54157',
    },
    {
        name: 'Dread Necromancer',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=49161',
    },
    {
        name: 'Eldritch Knight',
        author: 'Blicero',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50441',
    },
    {
        name: 'Elemental Siphon',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=154017#p154017',
        relatedLinks: [
            { title: 'Blending Feats, Shadow Siphon PrC', link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=154018#p154018' },
            { title: 'Ethereal Siphon PrC', link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=449214#p449214' },
        ]
    },
    {
        name: 'Elementalist',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56973',
    },
    {
        name: 'Elementalist',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=28856#p28856',
        wikiLink: 'https://dnd-wiki.org/wiki/Elementalist_(3.5e_Class)',
        relatedLinks: [{ title: 'Additional spells by Koumei', link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=52086' }]
    },
    {
        name: 'Exultant',
        author: 'traverse',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49385',
    },
    {
        name: 'Eye Caster',
        author: 'spongeknight',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56364',
    },
    {
        name: 'Thaumaturge',
        author: 'Bigode',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=51212#p51212',
    },
    {
        name: 'Sorcerer',
        author: 'Midnight_v',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=233421',
    },
    {
        name: 'Favored of Vecna',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=166935#p166935',
    },
    {
        name: 'Favoured Soul of Loviatar',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=167398#p167398',
    },
    {
        name: 'Favored of Pelor',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=167490#p167490',
    },
    {
        name: 'Favoured Soul of Bahamut',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=167496#p167496',
    },
    {
        name: 'Favoured Soul of Tiamat',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=168441#p168441',
    },
    {
        name: 'Favoured Soul of Wee-Jas',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=168971#p168971',
    },
    {
        name: 'Favoured Soul of Kurtulman',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=169650#p169650',
    },
    {
        name: 'Favoured Soul of Lathander (or Amaterasu or...)',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=369590#p369590',
    },
    {
        name: 'Favoured Soul of Nerull',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=477618#p477618',
    },
    {
        name: 'Favoured Soul of Akumi',
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=450316#p450316',
    },
    {
        name: 'Fighter revision for grognards',
        author: 'WiserOdin',
        link: 'https://docs.google.com/document/d/1HYgjPAfPXwNEPXvXDhYrZei4yo7gxuwp_4D9vLyQQNM/edit',
    },
    {
        name: 'FIGHTER!',
        author: 'radthemad4',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57225',
    },
    {
        name: 'Fire Mage',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40226#p40226',
    },
    {
        name: 'Fire Mage (Revised)',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=52437',
    },
    {
        name: 'Warlock',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40208#p40208',
    },
    {
        name: 'Warlock (Spherelock)',
        author: 'Cielingcat',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40229#p40229',
        wikiLink: 'https://dnd-wiki.org/wiki/Warlock_(3.5e_Class)'
    },
    {
        name: 'Force Mage',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=48793',
    },
    {
        name: 'Force Potentate',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51600',
    },
    {
        name: 'Freerunner',
        author: 'Sasaisen',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57511',
    },
    {
        name: 'Gadgeteer (Old)',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50968',
    },
    {
        name: 'Gadgeteer, Revised',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=245446#p245446',
    },
    ...['Monstrous Humanoid', 'Magical Beast'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=105399#p105399',
        }
    }),
    {
        name: 'Genie',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=27998#p27998',
        wikiLink: 'https://dnd-wiki.org/wiki/Genie_(3.5e_Class)',
    },
    {
        name: 'Genie',
        author: 'IGTN',
        link: 'https://dnd-wiki.org/wiki/Book_of_Elements_(3.5e_Sourcebook)/Elementals_with_Class/Genie',
        note: "As Frank's, but with added Shadow and multielement Genies"
    },
    {
        name: 'Genkotsuken (Shadow Warrior)',
        author: 'DoragonJin',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=39769#p39769',
    },
    {
        name: 'Soulmaster',
        author: 'Parthenon',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=134752#p134752',
    },
    {
        name: 'Ghost Blades',
        author: 'Nicklance',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=135066#p135066',
    },
    {
        name: 'Green Mage',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=154521#p154521',
        wikiLink: 'https://dnd-wiki.org/wiki/Green_Mage_(3.5e_Class)',
    },
    {
        name: 'Green Mage, Revised',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=52444',
    },
    {
        name: 'Greenfire Mage',
        author: 'Lokathor',
        link: 'https://gist.github.com/Lokathor/718530dbac28ce6e48b8e1335f2d360b',
    },
    {
        name: 'Gun Mage',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51517',
    },
    {
        name: 'Hart Warden',
        author: 'AndreiChekov',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=55414',
    },
    {
        name: 'Paladin',
        author: 'Brobdingnagian',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=39063',
    },
    {
        name: 'Hex Blade',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55382',
    },
    {
        name: 'Hippogriff Master',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=32451#p32451',
    },
    {
        name: 'Holy Paragon',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=56107',
    },
    {
        name: 'Hunger Mage',
        author: 'Avoraciopoctules',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50733',
    },
    {
        name: 'Hunter',
        author: 'CatharzGodfoot',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=48759',
    },
    {
        name: 'Hunter',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49250',
    },
    {
        name: 'Ice Mage',
        author: 'erik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57223',
    },
    {
        name: 'Icewalker',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=59698#p59698',
        note: <span>Deprecated. See <a href='http://www.tgdmb.com/phpBB3/viewtopic.php?t=50012'>Snowscaper</a> <a href='https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)'>(wiki)</a></span>
    },
    {
        name: 'Icewright',
        author: 'Kaelik',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=53474',
    },
    {
        name: 'Iconic Dwarf',
        author: 'angelfromanotherpin',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=463664#p463664',
    },
    {
        name: 'Iconic Elf',
        author: 'angelfromanotherpin',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=463624#p463624',
    },
    {
        name: 'Fighter/Mage/Thief',
        author: 'RedstoneOrc',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=463268#p463268',
    },
    {
        name: 'Incarnate',
        author: 'FrankTrollman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50526',
    },
    {
        name: 'Interdictor',
        author: 'Pixels',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55286',
    },
    {
        name: 'Invoker',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50976',
    },
    {
        name: 'Justiciar',
        author: 'AndreiChekov',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55397',
    },
    {
        name: 'Kantian Paladin',
        author: 'Iaimeki',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=39220',
        wikiLink: 'https://dnd-wiki.org/wiki/Kantian_Paladin_(3.5e_Class)'
    },
    {
        name: 'Kunoichi',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51482',
    },
    {
        name: 'Lycanthrope Paragon',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=332307#p332307',
    },
    {
        name: 'Shifter',
        author: 'ubernoob',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=131601#p131601',
    },
    {
        name: 'Shifter',
        author: 'Blicero',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50747',
    },
    {
        name: 'Mage',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=52837',
    },
    {
        name: 'Magnetist',
        author: 'Josh_Kablack',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=226556#p226556',
    },
    {
        name: 'Mana Alchemist (with cakes and tea and requirements for recipes)',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51022',
    },
    {
        name: 'Mana Alchemist (with lists of effects, and you roll/invent the flavour)',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=142871#p142871',
    },
    {
        name: 'Marshal',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=24348#p24348',
        wikiLink: 'https://dnd-wiki.org/wiki/Marshal,_Tome_(3.5e_Class)'
    },
    {
        name: 'Master of Wrath',
        author: 'Nihlin',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=48831',
    },
    {
        name: 'Mechrid',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=417543#p417543',
    },
    {
        name: 'Ninja (Old)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50367',
    },
    {
        name: 'Ninja, Revised',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=232386#p232386',
    },
    {
        name: 'Swashbuckler (Old)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50350',
    },
    {
        name: 'Swashbuckler, Revised',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=232624#p232624',
    },
    {
        name: 'Witch v1',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50003',
    },
    {
        name: 'Witch v2',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=534641#p534641',
    },
    {
        name: 'New Fighter *PATHFINDER*',
        author: 'Covent',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56533',
    },
    {
        name: 'Nightmare Seeker',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49467',
    },
    {
        name: 'Ninja Rogue',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56375',
    },
    {
        name: 'Nymph Sustainer',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51801',
    },
    {
        name: 'Overlord',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=140728#p140728',
    },
    {
        name: 'Sohei',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50005',
    },
    {
        name: 'Warmage (Old)',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50032',
    },
    {
        name: 'Warmage, Take 2',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=54502',
    },
    {
        name: 'Shadow Caster',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50587',
    },
    {
        name: 'Untamed Psychic',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50979',
    },
    {
        name: 'Time Mage',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50995',
    },
    {
        name: 'Paladin',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50873',
    },
    {
        name: 'Pact Knight',
        author: 'tenngu',
        link: 'https://docs.google.com/document/d/1PWi1wwzjXGFWNdhlD1K1VeaBB9mBjkdSjaMtwKt8Z10/edit',
    },
    {
        name: 'Paladin (Alt name: Champion, Crusader)',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50775',
    },
    {
        name: 'Paladin',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=49591',
    },
    {
        name: 'Paladin',
        author: 'IGTN',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50021',
        wikiLink: 'https://dnd-wiki.org/wiki/Paladin,_Tome_%283.5e_Class%29'
    },
    {
        name: 'Paladin',
        author: 'Lokathor',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56455',
    },
    {
        name: 'Hedge Witch',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57640',
    },
    {
        name: 'Pokemon Trainer',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=532930#p532930',
    },
    {
        name: 'Pokemon Trainer',
        author: 'radthemad4',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57449',
    },
    {
        name: 'Psion',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=82956',
    },
    {
        name: 'Psychic',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56603',
    },
    {
        name: 'Psychic',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57056',
    },
    {
        name: 'Psychoanalyst',
        author: 'Judging__Eagle',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=40177',
    },
    {
        name: 'Quantum Mage',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56872',
    },
    {
        name: 'Ranger',
        author: 'Talisman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=48770',
    },
    {
        name: 'Ranger',
        author: 'ZER0',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49226',
    },
    {
        name: 'Rogue',
        author: 'erik',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=55063',
        wikiLink: 'https://dnd-wiki.org/wiki/Rogue,_Tome_(3.5e_Class)'
    },
    {
        name: 'Rogue 2.0',
        author: 'erik',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=565200#p565200',
    },
    {
        name: 'Runelord',
        author: 'the_taken',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=40380',
    },
    {
        name: 'Runic Knight',
        author: 'Leress',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=40766',
    },
    {
        name: 'Sacred Fist',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51585',
    },
    {
        name: 'Sand Mage',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51851',
    },
    {
        name: 'Star Mage',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=154965#p154965',
    },
    {
        name: 'Geomancer',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=155079#p155079',
    },
    ...[
        {
            name: 'Snowsoul',
            wikiLink: 'https://dnd-wiki.org/wiki/Snowsoul_(3.5e_Class)',
        },
        {
            name: 'Windseeker',
            wikiLink: 'https://dnd-wiki.org/wiki/Windseeker_(3.5e_Class)',
        },
        {
            name: 'Alchemist',
            wikiLink: 'https://dnd-wiki.org/wiki/Alchemist_(3.5e_Class)',
        },
        {
            name: 'Shadowcaster',
            wikiLink: 'https://dnd-wiki.org/wiki/Shadowcaster_(3.5e_Class)',
        },
    ].map(({ name, wikiLink }) => {
        return {
            name,
            author: 'IGTN',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=164835#p164835',
            wikiLink: wikiLink
        }
    }),
    {
        name: 'White Mage',
        author: 'Quantumboost',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=127246',
    },
    {
        name: 'Shadow Warrior (Incomplete)',
        author: 'Cielingcat',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=40704',
    },
    {
        name: 'Voidweaver',
        author: 'Bigode',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40748#p40748',
    },
    {
        name: 'Snowscaper',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50012',
        wikiLink: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)'
    },
    {
        name: 'Soldier',
        author: 'Frank',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50949',
        wikiLink: 'https://dnd-wiki.org/wiki/Soldier_(3.5e_Class)',
    },
    {
        name: 'Sorcerer',
        author: 'Covent',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=484547#p484547',
    },
    {
        name: 'Sorcerer',
        author: 'Quantumboost, FrankTrollman, Bigode',
        link: 'https://dnd-wiki.org/wiki/Sorcerer,_Tome_(3.5e_Class%29',
        relatedLinks: [{ title: "Frank's Original", link: 'https://paizo.com/threads/rzs2i76e?Sorcerers-and-Dread-Necromancers-FIX' }]
    },
    {
        name: 'Sorcerer',
        author: 'FrankTrollman and Paul Suliin',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40574#p40574',
    },
    {
        name: 'Sorcerer [RETRACTED]',
        author: 'Hicks',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=56871',
        note: 'Hicks: "totally rejected  DO NOT PLAY"'
    },
    {
        name: 'Sorcerer',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56529',
        wikiLink: 'https://dnd-wiki.org/wiki/Kaelik_Sorcerer_%283.5e_Class%29',
    },
    {
        name: 'Soulborn',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50472',
        wikiLink: 'https://dnd-wiki.org/wiki/Soulborn_(3.5e_Class)',
        relatedLinks: [{
            title: 'A feat to switch out soulmelds as a Full-Round Action',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=131466#p131466'
        }]
    },
    {
        name: 'Speaker',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49674',
    },
    {
        name: 'Spectral Lantern',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50818',
    },
    {
        name: 'Speedened',
        author: 'Vebyast',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=143103#p143103',
        wikiLink: 'https://dnd-wiki.org/wiki/User:Vebyast/Speedened_(3.5e_Class)',
        note: 'wiki link is more recent'
    },
    {
        name: 'Spell Breaker',
        author: 'Hicks',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49619',
    },
    {
        name: 'Spell Scourge',
        author: 'Judging__Eagle',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50064',
    },
    {
        name: 'Spellthief',
        author: 'RelentlessImp',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56079',
        wikiLink: 'https://dnd-wiki.org/wiki/Spellthief_(Tome)',
        note: 'wiki link is more recent'
    },
    {
        name: 'Sphereless Carthaz Conduit',
        author: 'radthemad4',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57090',
    },
    {
        name: 'Spirit Ranger',
        author: 'Orion',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=48474',
    },
    {
        name: 'Spirit Shaman',
        author: 'Mask_De_H',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=105974',
    },
    {
        name: 'Spirit Shaman',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=105974#p105974',
        wikiLink: 'https://dnd-wiki.org/wiki/Spirit_Shaman_(3.5e_Class)'
    },
    {
        name: 'Spirit Shaman',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=56211',
    },
    {
        name: 'Spirit Shaman',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49462',
    },
    {
        name: 'Storm Lord',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50797',
    },
    {
        name: 'Suu',
        author: 'Talisman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=49303',
    },
    {
        name: 'Telekinetic',
        author: 'SunTzuWarmaster',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=40030#p40030',
    },
    {
        name: 'Thief Acrobat, Revised',
        author: 'Josh_Kablack',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=52419',
    },
    {
        name: 'Totemist',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50483',
        wikiLink: 'https://dnd-wiki.org/wiki/Totemist_(3.5e_Class)'
    },
    {
        name: 'Warden',
        author: 'erik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55288',
    },
    {
        name: 'Rogue',
        author: 'Miryafa',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54401',
        wikiLink: 'https://dnd-wiki.org/wiki/Rogue_2.0_(3.5e_Class)'
    },
    {
        name: 'Warlock',
        author: 'Grek',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54048',
    },
    {
        name: 'Warlock',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50768',
    },
    {
        name: 'Warper',
        author: 'Pixels',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=51545',
    },
    {
        name: 'Warper',
        author: 'PhaedrusXY',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=359728#p359728',
    },
    {
        name: 'White Mage',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=50746',
    },
    {
        name: 'Wintersmith',
        author: 'Dominicius',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=53451',
        wikiLink: 'https://dnd-wiki.org/wiki/Wintersmith_(3.5e_Class)'
    },
    {
        name: 'Wizard',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55867',
    },
    {
        name: 'Vorpal Knight',
        author: 'Sasaisen',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=57611',
    },
    {
        name: 'Weather Mage',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=374057#p374057',
    },
    {
        name: 'Speedster',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=374189#p374189',
    },
    {
        name: 'Paragon',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=441208#p441208',
    },
    {
        name: 'Toa',
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=509419#p509419',
    },
    {
        name: 'Shadowcaster',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=53397#p53397',
    },
    {
        name: 'Stalker',
        author: 'Zaranthan',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=380176#p380176',
    },
    ...['Crusader', 'Knave', 'Magician', 'Monk'].map((name) => {
        return {
            name,
            author: 'Hicks',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=541847#p541847'
        }
    }),
    {
        name: 'Celestial Initiate',
        author: 'Grek',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=380176#p380176',
        relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=407585' }]
    },
    {
        name: 'Alternate Cleric [PF]',
        author: 'hangar',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55224',
    },
    {
        name: 'Requip User',
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54947',
    },
    {
        name: 'Bushi aka Samurai',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54817',
    },
    {
        name: 'Kenpachi',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54754',
    },
    {
        name: 'Factotum',
        author: 'Drift3r',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54811',
    },
    {
        name: 'Cambion',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54795',
    },
    {
        name: 'Arborist',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54759',
    },
    {
        name: 'Sprite',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54771',
    },
    {
        name: 'Shifter',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54772',
    },
    {
        name: 'Kineticist',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54760',
    },
    {
        name: 'Hell Knight',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54756',
    },
    {
        name: 'Magic-User',
        author: 'RadiantPhoenix',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=347874#p347874',
    },
    {
        name: 'Binder',
        author: 'koz, ubernoob, Bigode',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=65599#p65599',
    },
    {
        name: 'Bullet Mage remake',
        author: 'spongeknight',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54378',
    },
    {
        name: 'Sandsculpter',
        author: 'Giraffeking',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=54351',
    },
    {
        name: 'Cleric',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53955',
    },
    ...['Beguiler', 'Necromancer', 'Summoner', 'Artificer'].map((name) => {
        return {
            name,
            author: 'Chamomile',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=316521#p316521'
        }
    }),
    {
        name: 'Fighter',
        author: 'Red_Rob',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53880',
    },
    {
        name: 'Fighter',
        author: 'Goldor',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=289262#p289262',
    },
    {
        name: 'Divine Champion',
        author: 'Giraffeking',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=303149#p303149',
    },
    {
        name: 'Templar',
        author: 'Tarkisflux, ThunderGod Cid',
        link: 'https://dnd-wiki.org/wiki/Templar_(3.5e_Class)',
        relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53703' }]
    },
    {
        name: 'Shapeshifter',
        author: 'Ice9',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=279583#p279583',
    },
    {
        name: 'Relaxed Warrior',
        author: 'Foxwarrior',
        link: 'https://dnd-wiki.org/wiki/Relaxed_Warrior_(3.5e_Class)',
        relatedLinks: [{ title: 'Den Thread', link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53425' }]
    },
    {
        name: 'Warrior of Light',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53388',
    },
    {
        name: 'Dark Antihero',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53227',
    },
    {
        name: 'Fighter',
        author: 'Neurosis',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=253267#p253267',
    },
    {
        name: 'Easy Fighter',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=257977#p257977',
    },
    {
        name: 'Magister',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=257362#p257362',
    },
    {
        name: 'Priest',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=256743#p256743',
    },
    {
        name: 'Monk of the Awakening Path/Cleric Monk',
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=256343#p256343',
    },
    {
        name: 'Alchemist',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=252570#p252570',
    },
    {
        name: 'Dumbass Fighter',
        author: 'Parthenon',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=253537#p253537',
    },
    {
        name: 'Sword Fetishist',
        author: 'crasskris',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=241822#p241822',
    },
    {
        name: 'Sexy Viking',
        author: 'hyzmarca',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=319689#p319689',
    },
    {
        name: 'Everyman Hero',
        author: 'hyzmarca',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=240688#p240688',
    },
    {
        name: 'Mage',
        author: 'CatharzGodfoot',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=232610#p232610',
    },
    {
        name: 'Ranger',
        author: 'Count Arioch the 28th',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=226889#p226889',
    },
    {
        name: 'Psion',
        author: 'Count Arioch the 28th',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=226892#p226892',
    },
    {
        name: 'Healer',
        author: 'Count Arioch the 28th',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=226896#p226896',
    },
    {
        name: 'Shaman',
        author: 'Count Arioch the 28th',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=226984#p226984',
    },
    {
        name: 'Shadowcaster',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=192989#p192989',
    },
    {
        name: 'Druid (simplified)',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=214494#p214494',
    },
    {
        name: 'Naturalist',
        author: 'CatharzGodfoot',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=214852#p214852',
    },
    {
        name: 'Marksman',
        author: 'Parthenon',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=211001#p211001',
    },
    {
        name: 'Hunter',
        author: 'WPharolin',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=196430#p196430',
    },
    {
        name: 'Lurk',
        author: 'Kaelik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=157568#p157568',
    },
    {
        name: 'Barbarian [FCCC]',
        author: 'erik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=169058#p169058',
    },
    {
        name: 'Bard [FCCC]',
        author: 'erik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=169185#p169185',
    },
    {
        name: 'Druid [FCCC]',
        author: 'erik',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=169443#p169443',
    },
    ...[
        'Baatezu Cenobyte', "Tanar'ri Ravager", 'Yugoloth Mercenary',
    ].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=176338#p176338',
        }
    }),
    {
        name: 'Quick Ranger Hack',
        author: 'Josh_Kablack',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=178418#p178418',
    },
    ...[
        { name: "Bone Golem", link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=547370#p547370' },
        { name: "Skeleton Knight", link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=547373#p547373' },
        { name: "Handcrafted Archer", link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=547381#p547381' },
        { name: "Artillerist", link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=547397#p547397' },
    ].map(({ name, link }) => {
        return {
            name,
            link,
            author: 'Koumei'
        }
    }),
    {
        name: 'Monk',
        author: 'Orion',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=297530#p297530',
    },
    {
        name: 'True Celestial',
        author: 'Kaelik',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=102618#p102618',
    },
    {
        name: 'Mechanus Golem',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=178128#p178128',
    },
    {
        name: 'Monk',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=178129#p178129',
    },
    {
        name: 'Mechanus Golem',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=178128#p178128',
    },
    ...[
        'Archon Soldier',
        'Guardinal Protector',
        'Eladrin Errant',
    ].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=176462#p176462',
        }
    }),
    {
        name: 'Slaad Mutant',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=177125#p177125',
    },
    {
        name: 'True Dragon',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=176708#p176708',
    },
    {
        name: 'Shugenja',
        author: 'Midnight_v',
        link: 'https://wiki.rpg.net/index.php/3.5_Shugenja',
        note: <a href='http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51806'>Den Thread</a>
    },
    {
        name: 'Barbarian',
        author: 'WPharolin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=172425#p172425',
    },
    {
        name: 'Fighter',
        author: 'Dean',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51454',
    },
    {
        name: 'Assassin',
        author: 'TOZ',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51324',
    },
    {
        name: 'Dragon',
        author: 'For Valor',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=148044#p148044',
    },
    {
        name: 'Force Mage',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51115',
    },
    {
        name: 'Electric Mage',
        author: 'For Valor, Aelaris',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51086',
        note: <a href='https://dnd-wiki.org/wiki/Electric_Mage_(3.5e_Class)'>Original</a>
    },
    {
        name: 'Spontaneous Druid',
        author: 'For Valor',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51018',
    },
    {
        name: 'Vanguard',
        author: 'DMReckless',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50934',
    },
    {
        name: 'Wizard',
        author: 'angelfromanotherpin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50910',
    },
    {
        name: 'Goddamn Barbarian',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50868',
    },
    {
        name: 'Bogeyman',
        author: 'Jilocasin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50828',
    },
    {
        name: 'Disciple of the Nine',
        author: 'maddd0g',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50827',
    },
    {
        name: 'Hero',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50843',
    },
    {
        name: 'Magic Knight',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50799',
    },
    {
        name: 'Paladin',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50775',
    },
    {
        name: 'Druid',
        author: 'TangoZilla',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50765',
    },
    {
        name: 'Death Knight',
        author: 'maddd0g',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50753',
    },
    {
        name: 'Ranger',
        author: 'schpeelah',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50695',
    },
    {
        name: 'Druid',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50711',
        relatedLinks: [{ title: 'Paths', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50710' }]
    },
    {
        name: 'Fighter',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50602',
    },
    {
        name: 'Dealer',
        author: 'Utterfail',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50523',
    },
    {
        name: 'Champion',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50427',
        relatedLinks: [{ title: 'Mount Abilities', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=124845#p124845' }]
    },
    {
        name: 'Dragoon',
        author: 'Squeejee',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50369',
    },
    {
        name: 'White Mage',
        author: 'Judging__Eagle',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=102925#p102925',
    },
    {
        name: 'Action Hero',
        author: 'Apalala',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50219',
    },
    {
        name: 'Paladin',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=111718#p111718',
    },
    {
        name: 'Devoted Paladin',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50188',
    },
    {
        name: 'Devoted Champion',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50328',
    },
    {
        name: 'Noble',
        author: 'MGuy',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=104222#p104222',
    },
    {
        name: 'Ishvalan Crusader (Anti Mage)',
        author: 'MGuy',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=106350#p106350',
    },
    {
        name: 'Samurai',
        author: 'MGuy',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=107646#p107646',
    },
    {
        name: 'Monk',
        author: 'Emerald',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50080',
    },
    {
        name: 'Steamborg',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49323',
    },
    {
        name: 'Paladin',
        author: 'Cielingcat',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49668',
    },
    {
        name: 'Beast',
        author: 'Bigode',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=51332#p51332',
    },
    {
        name: 'Conduit',
        author: 'Bigode',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=51332#p51332',
    },
    {
        name: 'Spectral Weapons Dudes',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49073',
    },
    {
        name: 'Earth Bender',
        author: 'Calibron',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=74474#p74474',
    },
    {
        name: 'Vengeant Knight',
        author: 'Amra',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=61053#p61053',
    },
    {
        name: 'Dark Knight',
        author: 'Shokorai',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=48992',
    },
    {
        name: 'Ranger',
        author: 'Judging__Eagle',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49009',
    },
    {
        name: 'Dragoon',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49214',
        wikiLink: 'https://dnd-wiki.org/wiki/Dragoon_(3.5e_Prestige_Class)'
    },
    {
        name: 'Paladin',
        author: 'ZER0',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49144',
    },
    {
        name: 'Ninja',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49186',
    },
    {
        name: 'Barbarian',
        author: 'Judging__Eagle',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=66836#p66836',
    },
    {
        name: 'Sorcerer',
        author: 'TarkisFlux',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49045',
    },
    {
        name: 'Mad Scientist',
        author: 'Angry_Pessimist',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=48807',
    },
    {
        name: 'Zodiac Warrior',
        author: 'Nihlin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=48829',
    },
    {
        name: 'Vancian Magician',
        author: 'baduin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=48760',
    },
    {
        name: 'Vancian Mage',
        author: 'Bigode',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=48983#p48983',
    },
    {
        name: 'Pact Maker',
        author: 'virgil',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40950',
    },
    {
        name: 'Air Mage',
        author: 'Sajber',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40949',
    },
    {
        name: 'Weaponsoul',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40598',
    },
    {
        name: 'Feycaster',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40510',
    },
    {
        name: 'True Fey',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40149#p40149',
    },
    {
        name: 'Paladin',
        author: 'Caedrus',
        link: 'https://web.archive.org/web/20070219233013/boards1.wizards.com/showthread.php?t=761045',
        relatedLinks: [{ title: 'Den Thread', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40104#p40104' }]
    },
    {
        name: 'Fire Binder',
        author: 'Shatner',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39999#p39999',
    },
    {
        name: 'Mountaineer',
        author: 'Shatner',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40000#p40000',
    },
    {
        name: 'Pan Lingua',
        author: 'Shatner',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=40001#p40001',
    },
    {
        name: 'Immortal Champion',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39966#p39966',
        author: 'Judging__Eagle',
    },
    {
        name: 'Enigmist',
        link: 'https://web.archive.org/web/20080307041851/http://forums.gleemax.com/showthread.php?t=922890',
        author: 'AnonymousInternets',
        relatedLinks: [{ title: 'Den Thread', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=39795' }]
    },
    {
        name: 'Paladin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=39439',
        author: 'SphereOfFeetMan',
    },
    {
        name: 'Puglist',
        link: 'https://web.archive.org/web/20070319171242/http://boards1.wizards.com/showthread.php?t=810869',
        author: 'Leress?',
        relatedLinks: [{ title: 'Den Thread', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39200#p39200' }]
    },
    {
        name: 'Psychic Warrior',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=38632',
        author: 'fbmf',
    },
    {
        name: 'Jack of All Trades (aka the Marshal, the Team Leader, the Red Mage Wannabe, etc.)',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=38195',
        author: 'Oberoni',
    },
    {
        name: 'Fighter',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=38148',
        author: 'Essence',
    },
    {
        name: 'Wanderer',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=38063',
        author: 'Essence',
    },
    ...['Hulk', 'Ascetic',].map((name) => {
        return {
            name,
            author: 'Essence',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=37898#p37898'
        };
    }),
    ...['Mookslayer', 'Itinerant', 'Ki Warrior'].map((name) => {
        return {
            name,
            author: 'Essence',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=37893#p37893'
        };
    }),
    {
        name: 'Greenbond',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37758'
    },
    {
        name: 'Fop',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37757'
    },
    {
        name: 'Channeler',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37749'
    },
    {
        name: 'Druid',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37748'
    },
    {
        name: 'Courtier',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37724'
    },
    {
        name: 'Cleric',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37723'
    },
    {
        name: 'Fighter',
        author: 'Lago_AM3P',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37713'
    },
    {
        name: 'Champion',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37680'
    },
    {
        name: 'Barbarian',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37671'
    },
    {
        name: 'Bard',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37641'
    },
    {
        name: 'Arsenalist',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37622'
    },
    {
        name: 'Akashic',
        author: 'Essence',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37618'
    },
    {
        name: 'Paragon',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=549801#p549801'
    },
    {
        name: 'Reaver',
        author: 'angelfromanotherpin',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=549837#p549837'
    },
    {
        name: 'Werewolf',
        author: 'JonSetanta',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=57792&p=549882#p549882'
    },
    {
        name: 'Scorpion Transformist',
        author: 'Darth Rabbitt',
        link: 'https://docs.google.com/document/d/145352RqifRAkPIALuKq9yBI5ukL02W25v85MModWQbg',
        note: <span>Based on <a href="http://tgdmb.com/phpBB3/viewtopic.php?p=317854#p317854">Serpentine Transformationist</a></span>
    },
    {
        name: 'Serpentine Transformist',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=317854#p317854',
    },
    {
        name: "Dragon",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=141884#p141884",
    },
    {
        name: 'Hell Rider Revised Revised',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=555908#p555908',
    },
    {
        name: 'Favored Sol of Eiji',
        author: 'radthemad4',
        link: 'https://docs.google.com/spreadsheets/d/19amfqxL4i-jnJwgrXKBoUsHHyHMbunjX7QkGj3K_iv8/edit#gid=797294178',
        relatedLinks: [{ title: 'Den Thread', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?t=57880' }],
    },
    {
        name: "Priest",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=57919",
    },
    {
        name: "Moonlight Bandit",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=563821#p563821",
    },
    {
        name: "Demon Ascendant",
        author: "Koumei",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=563911#p563911",
    },
    {
        name: "Aeon Ascendant",
        author: "Koumei",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=563912#p563912",
    },
    {
        name: "Azata Ascendant",
        author: "Koumei",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=563913#p563913",
    },
    {
        name: "Angel Ascendant",
        author: "Koumei",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=564099#p564099",
    },
    ...[
        {
            name: 'Archer',
            link: 'https://web.archive.org/web/20050219174949/http://www.scshop.com/~ritaxis/ff/archer.html',
        },
        {
            name: 'Black Mage',
            link: 'https://web.archive.org/web/20050220110736/http://www.scshop.com/~ritaxis/ff/black.html',
        },
        {
            name: 'Fighter',
            link: 'https://web.archive.org/web/20050223110711/http://www.scshop.com/~ritaxis/ff/fighter.html',
        },
        {
            name: 'Gadgeteer',
            link: 'https://web.archive.org/web/20050223224109/http://www.scshop.com/~ritaxis/ff/gadgeteer.html',
        },
        {
            name: 'Monk',
            link: 'https://web.archive.org/web/20050226054911/http://www.scshop.com/~ritaxis/ff/monk.html',
        },
        {
            name: 'Red Mage',
            link: 'https://web.archive.org/web/20050226235215/http://www.scshop.com/~ritaxis/ff/red.html',
        },
        {
            name: 'Rogue',
            link: 'https://web.archive.org/web/20050227044402/http://www.scshop.com/~ritaxis/ff/rogue.html',
        },
        {
            name: 'Summoner',
            link: 'https://web.archive.org/web/20050218193111/http://www.scshop.com/~ritaxis/ff/summoner.html',
        },
        {
            name: 'White Mage',
            link: 'https://web.archive.org/web/20050227222353/http://www.scshop.com/~ritaxis/ff/white.html',
        },
    ].map(({ name, link }) => {
        return {
            name,
            author: "FrankTrollman",
            link,
            relatedLinks: [{
                title: `Frank's Final Fantasy Conversion`,
                link: 'https://web.archive.org/web/20050214093806/http://www.scshop.com/~ritaxis/ff/index.html',
            }],
        };
    }),
    {
        name: "Portal Mage",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=57991",
    },
    {
        name: "Possessor Item",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=58005",
    },
    {
        name: "Alchemist",
        author: "Koumei",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=567693#p567693",
        note: 'based on PF version',
    },
    {
        name: "Nychthemeron Mage",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=58095",
    },
    {
        name: "Fighter",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=58101",
    },
    {
        name: "Formations Expert",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=58102",
    },
    {
        name: "Lord of the Deeps",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=58105",
    },
];