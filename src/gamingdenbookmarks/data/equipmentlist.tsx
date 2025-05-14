import { Entry } from "../../entry";

export const bogItemCollections: Entry[] = [
    {
        name: "Book of Gears",
        author: "Frank and K",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=35813",
        wikiLink: "http://www.dnd-wiki.org/wiki/Book_of_Gears_%283.5e_Sourcebook%29",
        note: "only partially complete but worth reading, use Red_Rob's"
    },
    {
        name: 'Defining Magic Item Power Levels',
        author: 'FrankTrollman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=131656#p131656'
    },
    {
        name: "Complete Tome items and Wish Economy",
        author: "Red_Rob",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=53704",
        wikiLink: "https://dnd-wiki.org/wiki/Tome_Magic_Items_%283.5e_Variant_Rule%29"
    },
    {
        name: "Simplified Tome Armour",
        author: "Red_Rob",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=53563",
        wikiLink: "https://dnd-wiki.org/wiki/Tome_Armor_%283.5e_Variant_Rule%29"
    },
    {
        name: "Alternative Item Bonus Progression",
        author: "Kaelik",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=56878",
    }
]

export const lesserBoGMagicItems: Entry[] = [
    {
        name: "Web Strangler",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141533#p141533",
        author: "Koumei"
    },
    {
        name: "Ignan Venom Talisman",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
    },
    {
        name: "Kinoko-Jiru",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
    },
    ...[
        'Grip Claw', 'Deep Sea Tooth', 'Big Root', 'Power Leek',
        'Black Sludge', 'Expert Belt', 'Life Orb', 'Red Card',
        'Air Balloon', 'Destiny Knot', 'Razor Claw', 'Rose Incense',
        'Sea Incense', 'Odd Incense', 'Spell Tag', 'Mystic Plates',
        'Blackbelt', 'Charcoal', 'Hard Stone', 'Dragon Fang',
        'Magnet', 'Pink Bow', 'Nevermelt Ice', 'Poison Barb',
        'Silver Powder', 'Soft Sand'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=405123#p405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55558' },
            ],
            note: <span><a href='https://tgdmb.com/phpBB3/viewtopic.php?p=282168#p282168'>Original Source</a></span>
        }
    }),
    {
        name: 'Aid Rod',
        author: "Koumei",
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=155236#p155236'
    },
];

export const mediumBoGMagicItems: Entry[] = [
    ...["GAR-Driver", "MOE-Driver", "Holo-Projector"].map((name) => {
        return {
            name,
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141531#p141531",
            author: "Koumei",
        };
    }),
    ...["Angry Hat", "Quiet Hat", "Clever Hat"].map((name) => {
        return {
            name,
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
            author: "Koumei",
        };
    }),
    {
        name: "Succubus Lipstick",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    ...[
        'Lucky Punch', 'Deep Sea Scale', 'Light Ball', 'Metal Powder',
        'Quick Powder', 'Bone Helm', 'Thick Club', 'Quick Claw',
        'Rocky Helmet', "King's Rock", 'Metal Coat', 'Sharp Beak'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=405123#p405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55558' },
            ],
            note: <span><a href='https://tgdmb.com/phpBB3/viewtopic.php?p=282168#p282168'>Original Source</a></span>
        }
    }),
    {
        name: "Syringe",
        author: "Koumei",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=154820#p154820",
    },
    {
        name: "Thunder Drum",
        author: "Koumei",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=154938#p154938",
    },
    ...[
        'Sexy Underwear', 'Gatling Gun', 'Magic Wand', 'UFO-Yoink!', 'Aid Staff'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=155236#p155236'
        }
    }),
    {
        name: "Eyepatch of Power",
        author: "Maxus",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=203282#p203282",
    },
    {
        name: "Clockwork Armor",
        author: "Avoraciopoctules",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=97456#p97456",
    },
];

export const greaterBoGMagicItems: Entry[] = [
    {
        name: "Remote Device",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
        author: "Koumei"
    },
    {
        name: "Ominous Bell",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
        author: "Koumei"
    },
    {
        name: "Squamous Scourge",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
    },
    {
        name: "Sexy Underwear",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    ...['Griseous Orb', 'Lustrous Orb', 'Adamant Orb', 'Soul Dew', 'Gold/Silver Bell'].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=405123#p405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55558' },
            ],
            note: <span><a href='https://tgdmb.com/phpBB3/viewtopic.php?p=282168#p282168'>Original Source</a></span>
        }
    }),
    ...[
        'Remote Control', 'Emperor Drill',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=155236#p155236'
        }
    }),
    ...[
        'Purgatory', "Maxwell's Silver Hammer", "Occam's Razor"
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=248061#p248061'
        }
    }),
];

export const uncategorizedItems: Entry[] = [
    ...["Orbs", "Berries", "Seeds", "Scarves and Glasses"].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=405123#p405123',
            relatedLinks: [
                { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
                { title: 'Pokemon Mystery Dungeon D20', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55558' },
            ],
            note: <span><a href='https://tgdmb.com/phpBB3/viewtopic.php?p=282168#p282168'>Original Source</a></span>
        }
    }),
    {
        name: 'Necromantic Equipment Materials (Tome of Necromancy)',
        author: "Frank and K",
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=34253#p34253',
        wikiLink: 'https://dnd-wiki.org/wiki/Tome_of_Necromancy_(3.5e_Sourcebook)/New_Rules#Necromantic_Equipment'
    },
    {
        name: 'Rifle Demon',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=154820#p154820',
    },
    ...[
        "Chocolate (consumable)", "Chocolate Cake (consumable)", "Carrot Cake (consumable)",
        "Teacake (consumable)", 'Cheesecake (consumable)', 'Mille Feuille (consumable)',
        'Green Teacake (consumable)', 'Strawberry Cheesecake (consumable)', 'Seven Layer Cake (consumable)',
        'Pavlova (consumable)', 'Angel Soufflé (consumable)', 'Geo Pyramids'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=155236#p155236'
        }
    }),
    ...[
        'Fickle Hand of Fate', 'Staff of the Insect Nation', "Occam's Razor",
        "Sandman's One-String Bass", 'Invisible Hand of the Free Market'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=248061#p248061'
        }
    }),
    {
        name: 'Dark Glasses',
        author: "Prak",
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=281995#p281995',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Gym Badges',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=282168#p282168',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    ...['Blood/Soul Reaver', 'Heart of Darkness'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=140623#p140623'
        }
    }),
    {
        name: 'Death Galley',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=169157#p169157',
    },
    ...['Iron Suit', 'Starry Shield', 'Mjolnir'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=273142#p273142'
        }
    }),
    {
        name: 'Helbogi (Hell Bow)',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=430641#p430641',
    },
    {
        name: 'Mantle of Webs',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=465849#p465849',
    },
    {
        name: 'Banhammer',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=90889#p90889',
    },
    {
        name: 'Nerfbat',
        author: 'SunTzuWarmaster',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=91066#p91066',
    },
    {
        name: 'Cursed Schoolgirl Outfit of Aberration Summoning',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=94548#p94548',
    },
    {
        name: 'Target Painter (Arrows)',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=209479#p209479',
    },
    ...['Spell Bombard', 'Eminence Talisman',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=243948#p243948'
        }
    }),
    {
        name: 'Minor Magic Weapon Quality: Dramatic',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=245603#p245603',
    },
    ...['Red Tape', 'The Law',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=273972#p273972'
        }
    }),
    {
        name: "Meridia's Bacon",
        author: 'AndreiChekov',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=383276#p383276',
    },
    ...['The Sword', 'The Redcap',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=191745#p191745'
        }
    }),
    {
        name: "A Boat",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=191836#p191836',
    },
    {
        name: "Consecrator",
        author: 'Maxus',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=191875#p191875',
    },
    {
        name: "Fighting Trousers",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=191891#p191891',
    },
    {
        name: "Capture Ball",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=194559#p194559',
    },
    {
        name: "Eyepatch of the Veteran",
        author: 'Avoraciopoctules',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=203510#p203510',
    },
    {
        name: "Pretty Penny",
        author: 'Maxus',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=240171#p240171',
    },
    {
        name: "Governess' Poker",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=254677#p254677',
    },
    {
        name: "Wus (Xiaolin Showdown)",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=161705#p161705',
    },
    {
        name: "Talismans, Misc Magic Items, Armours of the Immortals (Jackie Chan Adventures)",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=161705#p161705',
    },
    {
        name: "Millennium Items (Yu-Gi-Oh!)",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162067#p162067',
    },
    {
        name: "Cloudski",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162232#p162232',
    },
    ...['Spear of Destiny', 'Pick of Destiny', 'Fountain of Youth', 'Sword of Kings'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=165166#p165166'
        }
    }),
    {
        name: "Kusari-gama",
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=155965#p155965',
    },
    {
        name: "Kusari-gama",
        author: 'CatharzGodfoot',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=156007#p156007',
    },
    {
        name: "Giant Weapon--Final Fantasy 7",
        author: 'Maxus',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=56593#p56593',
    },
    ...[
        'Geo Pyramids - Disgaea',
        'Rocket Punch - FF7',
        'Cauldron - FF7',
        '"Magic Wand" - Makai Kingdom',
        'Variable Blade - Shadow Hearts 3',
        'Bio-Force Gauntlet (the BFG) - Doom',
        'Judgement Ring - Shadow Hearts',
        'Technique Manuscript - Pokemon',
        'Psypher Weapons - Odin Sphere',
        'Chaos Emeralds - Sonic the Hedgehog',
        'True Runes (spellcasting items) - Suikoden',
        'Painkillers - Odin Sphere',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=56148#p56148'
        }
    }),
    ...[
        'UFO-Yoink - Makai Kingdom',
        'The Upgraded Shotgun - Resident Evil',
        'Ashbringer - WoW',
        'Blade of the Kingdom Heart - Kingdom Hearts',
        'Bunny Girl Outfit - Dragon Quest',
        'Fossilised Amber - Pokemon',
        'Tome of Eternal Darkness - Eternal Darkness',
        'Sacred Tome - Makai Kingdom',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=56453#p56453'
        }
    }),
    ...[
        'Drill Emperor - Disgaea 2',
        'Prinny - Disgaea',
        'Wand of Sheep Strike - Worms Armageddon',
        'Companion Cube - Portal',
        'Amulet of the Elements - Story of Thor',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=56624#p56624'
        }
    }),
    ...[
        'Stone Mask',
        'Golden Gauntlets',
    ].map((value) => {
        return {
            name: value,
            author: "Maxus",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=68113#p68113'
        }
    }),
    {
        name: "Pump-action Shotgun",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246616#p246616',
    },
    {
        name: "Finn's Cigar Box",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247613#p247613',
    },
    {
        name: "Hank's Energy Bow",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=247654#p247654',
    },
    {
        name: "Dungeons & Dragons Roller Coaster Ride",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248011#p248011',
    },
    {
        name: "Chick Tract",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248025#p248025',
    },
    {
        name: "Colt .45 Revolver",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=248398#p248398',
    },
    {
        name: "Tome Armours",
        author: "koz",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=49257",
    },
    {
        name: "Magic Weapon Abilities",
        author: "Hicks",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=50249",
    },
    {
        name: "Scaling Magic Weapons",
        author: "koz",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=49755",
    },
    ...[
        'Tamed Lightning',
        'Mirrorshard Sword',
        'Giant Scorpion Claws',
        'Demon Whip',
        'Wings of the Vampire Bat',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40605#p40605'
        }
    }),
    ...[
        'Blessed Incense Burner',
        'Wightskin Gloves',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40620#p40620'
        }
    }),
    ...[
        'Eldritch Glaive',
        'Deep Emerald',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40624#p40624'
        }
    }),
    {
        name: "Blood Axe",
        author: "Judging__Eagle",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=40625#p40625",
    },
    ...[
        'God-Kicking Boots (Light)',
        'Grand Goremaul (Two-Handed)',
        'Divine Reflector (One-Handed)',
        'Giant Rosary (Two-Handed)',

    ].map((value) => {
        return {
            name: value,
            author: "HiQKid2",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40633#p40633'
        }
    }),
    {
        name: "Vulcan's Candle (One Handed/Two Handed)",
        author: "Aktariel",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=40643#p40643",
    },
    {
        name: "Sky's Edge",
        author: "Aktariel",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=40652#p40652",
    },
    ...[
        'Hat of Dragon Slaying',
        'Кнут, the Whip of Dragon Slaying',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=48694#p48694'
        }
    }),
    ...[
        'Vierhander [Two-handed]',
        'Sword-chucks [Double-weapon]',
    ].map((value) => {
        return {
            name: value,
            author: "the_taken",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=49446#p49446'
        }
    }),
    {
        name: "Dagger of Dargon-Slaying [One-Handed]",
        author: "Judging__Eagle",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=49584#p49584",
    },
    ...[
        'Armour of the Exterminator',
        'Helm of the Exterminator',
        'Ghost-Powered Boots of the Exterminator',
        '"Rip" and "Tear", the Exterminating Gauntlets'
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=52516#p52516'
        }
    }),
    {
        name: "Revising Tome Armor",
        author: "Josh_Kablack",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=52854",
    },
    {
        name: "Wulfenblimp",
        author: "virgil",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=480900#p480900",
    },
    ...[
        'Ring of Dumb Luck',
        'The Gauntlets of Frail Might',
        'Beer Goggles',
    ].map((value) => {
        return {
            name: value,
            author: "hyzmarca",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=310093#p310093'
        }
    }),
    {
        name: "Revised Tome Armors",
        author: "Sigil",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=54024",
    },
    {
        name: "Additional Exotic Weapons",
        author: "Josh_Kablack",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=178503#p178503",
    },
    ...[
        'Belt of Truth',
        'Breastplate of Righteousness',
        'Boots of the Gospel of Peace',
        'Shield of Faith',
        'Helmet of Salvation',
        'Sword of the Spirit',
    ].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=101426#p101426',
        }
    }),
    ...[
        'Dragonslicer, Sword of Heroes',
        'Woundhealer, Sword of Love, Sword of Mercy',
        'Shieldbreaker, Sword of Force',
        'The Mindsword, Sword of Glory, Skulltwister',
        'Wayfinder, Sword of Wisdom',
        'Coinspinner, Sword of Luck, Sword of Chance',
        'Soulcutter, Sword of Despair, Tyrant’s Blade',
        'Stonecutter, Sword of Siege',
        'Townsaver, Sword of Fury',
        'Doomgiver, Sword of Justice',
        'Farslayer, Sword of Vengeance',
        'Sightblinder, Sword of Stealth',
    ].map((name) => {
        return {
            name,
            author: "Maxus",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=58813#p58813',
        }
    }),
    {
        name: "Sand Armour [Light]",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=159534#p159534",
    },
    {
        name: "Lumite 15",
        author: "Avoraciopoctules",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=140559#p140559",
    },
    {
        name: "Mina the Boomerang",
        author: "Avotas",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50662",
    },
    ...[
        'Scouter (Dragonball)',
        'Death Note (Death Note)',
        'Tachikoma (Ghost in the Shell)',
        'Transformation Brooch (Sailor Moon, primarily)',
        'Nekomimi Ray (UFO Princess Valkyrie)',
        'Sword of Light (Slayers)',
        'Power Armour Mecha (example: Fumoffu, Bubblegum Crisis)',
        'Blue-Eyes White Dragon Card (Yu-Gi-Oh!)'
    ].map((name) => {
        return {
            name,
            author: "Koumei",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=126105#p126105',
        }
    }),
    {
        name: "Lasgun",
        author: "Meikle641",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49839",
    },
    {
        name: "Ring of Shadowblending",
        author: "virgil",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49483",
    },
    ...[
        'Plane of Force',
        'Amphisbaena',
        'Big Stick',
    ].map((name) => {
        return {
            name,
            author: 'Calibron',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=74474#p74474',
        }
    }),
    {
        name: "Devil Bringer (Light Weapon)",
        author: "Aktariel",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=58500#p58500",
    },
    {
        name: "Jade statue of the mulberry plauge",
        author: "Judging__Eagle",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=58097#p58097",
    },
    {
        name: "Bringer of Justice [Artifact]",
        author: "Wiseman",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=441271#p441271",
    },
    {
        name: "Seeker of Knowledge [Artifact]",
        author: "Wiseman",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=442144#p442144",
    },
    {
        name: "Earthen Philatory",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=442072#p442072",
    },
    {
        name: "Metal Coat",
        author: "Frank and Emma Trollman",
        link: "https://web.archive.org/web/20030904034048/http://www.scshop.com/~ritaxis/stones.html",
    },
    {
        name: "Amulet of Shrinking",
        author: "Frank and Emma Trollman",
        link: "https://web.archive.org/web/20031209191216/http://www.scshop.com/~ritaxis/info/sabrina.html",
    },
    {
        name: "Blood Doll",
        author: "Frank and Emma Trollman",
        link: "https://web.archive.org/web/20031209191216/http://www.scshop.com/~ritaxis/info/sabrina.html",
    },
    {
        name: "Soupsmith's Paddle",
        author: "Prak",
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=567360#p567360',
    },
    {
        name: "Grand Soupsmith's Paddle",
        author: "Prak",
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=567360#p567360',
    },
    {
        name: "Pokeballs",
        author: "Prak",
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=571470#p571470',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
            { title: 'Pokedex Redone 2022', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=57904' }
        ],
    },
];