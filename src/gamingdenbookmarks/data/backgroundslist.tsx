import { Entry } from "../../entry";

export const backgrounds: Entry[] = [
    {
        name: 'Raised by Humans',
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
    },
    ...['Spider-Born', 'Web Fetishist'].map((value) => {
        return {
            name: value,
            author: "Nachtigallerator",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141533#p141533",
        }
    }),
    {
        name: "Chosen One",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
        relatedLinks: [{ title: "Yuan-Ti Halfblood", link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534" }],
    },
    {
        name: "Death Cult",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534"
    },
    {
        name: "Tainted One",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
    },
    {
        name: "Overlord's Vassal",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    {
        name: "Penitent",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    {
        name: "House Plant",
        author: "Nachtigallerator",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
    },
    ...['Center Stage', 'Outlaw', 'Refugee', 'Wanderer', 'Craftsman', 'Scholar', 'Farmer'].map((value) => {
        return {
            name: value,
            author: "Wiseman",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=405125#p405125",
            relatedLinks: [{ title: 'Pokemon Mystery Dungeon D20', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55558' }]
        }
    }),
    ...[
        {
            name: 'War Profiteer',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#War_Profiteer'
        },
        {
            name: 'Veteran of The War',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Veteran_of_The_War'
        },
        {
            name: 'Street Rat',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Street_Rat'
        },
        {
            name: 'Slave of the Hobgoblin Clans',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Slave_of_the_Hobgoblin_Clans'
        },
        {
            name: 'Royalty of a Fallen Nation',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Royalty_of_a_Fallen_Nation'
        },
        {
            name: 'The Resistance',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#The_Resistance'
        },
        {
            name: 'Refugee from The War',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Refugee_from_The_War'
        },
        {
            name: 'Raised by Owlbears',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Raised_by_Owlbears'
        },
        {
            name: 'Moil Wrought',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Moil_Wrought'
        },
        {
            name: 'Hero of the Peasants',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Hero_of_the_Peasants'
        },
        {
            name: 'Experimental Stock',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Experimental_Stock'
        },
        {
            name: 'Apprenticed',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Apprenticed'
        },
        {
            name: 'Amnesia',
            wikiLink: 'https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Warriors_with_Style#Amnesia'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=33298#p33298',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: "Dungeonborn",
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=246649#p246649',
    },
    ...['Exile', 'Former Claudia Miner', 'Disgruntled Airship Hand', 'Really Big Game Hunter', 'Student of Superstition',].map((value) => {
        return {
            name: value,
            author: "Josh_Kablack",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=178501#p178501",
        }
    }),
    ...["Mage's assistant", "Mage's bodyguard", 'Rouge Modron', 'Rogue Modron', 'The Old One',].map((name) => {
        return {
            name: `${name} (Warforged)`,
            author: "schpeelah",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=125241#p125241",
        }
    }),
    {
        name: `Elementforged`,
        author: "schpeelah",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=125850#p125850",
    },
    ...['Raised by the Church of Pelor', 'Dragon Descendant',].map((name) => {
        return {
            name,
            author: "spongeknight",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=431919#p431919",
        }
    }),
    ...['Raised by Monks', 'Despotic Seed', 'Treasure Hunter'].map((name) => {
        return {
            name,
            author: "erik",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=431927#p431927",
        }
    }),
    {
        name: `Living Weapon`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=431931#p431931",
    },
    ...['Fruit Salad', 'Swamp Fox', 'REMF', 'K9 Unit',].map((name) => {
        return {
            name,
            author: "Insomniac",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=431981#p431981",
        }
    }),
    {
        name: `Slave of the Drow`,
        author: "Wiseman",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432072#p432072",
    },
    ...['Artificial', 'Gladiator', 'Magical Girl',].map((name) => {
        return {
            name,
            author: "Prak",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432099#p432099",
        }
    }),
    ...['Cultural Stereotype', 'Defying Stereotype', 'Thief replacement', 'Institutionalized racism', 'hated ethnic group', 'Transracial',].map((name) => {
        return {
            name,
            author: "OgreBattle",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432107#p432107",
        }
    }),
    ...['Medic', 'Cook', 'Animal Magnetism',].map((name) => {
        return {
            name,
            author: "Prak",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432110#p432110",
        }
    }),
    ...['Touched By His Noodly Appendage', 'Bullysaurus!', 'Whipmaster!',].map((name) => {
        return {
            name,
            author: "Insomniac",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432127#p432127",
        }
    }),
    ...['Unconventional Religion', 'Quick-Purse', 'Strongman',].map((name) => {
        return {
            name,
            author: "Aryxbez",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432184#p432184",
        }
    }),
    ...['Crocodile Charmer', 'Sea Monkey', 'Giant Frog',].map((name) => {
        return {
            name,
            author: "Prak",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432319#p432319",
        }
    }),
    ...['University Graduate', 'Smuggler', 'Raised by Fey', 'Flame-touched', 'Ex-Cop', 'Electric', 'Corrosive', 'Cold-blooded', 'Captured by Mind Flayers', 'Aristocrat'].map((name) => {
        return {
            name,
            author: "RobbyPants",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432434#p432434",
        }
    }),
    {
        name: `Escaped from Dark Ones`,
        author: "radthemad4",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=432450#p432450",
    },
    {
        name: `Cave born`,
        author: "tenngu",
        link: "https://drive.google.com/uc?export=view&id=1tx6nydAYaTjELW5aY4Bq0mvpMVQ6p26u",
    },
    {
        name: `Animal Form`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=555409#p555409",
    },
    {
        name: `Wizard's Apprentice`,
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1kZ-r-uIxDE49OnBkATVFT4aVS-FFwWOu",
    },
    {
        name: `Mountain Explorer`,
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1WXKA9Bm6-6x1IJibHQKHzDbqCBie32o_",
    },
    {
        name: `Nondescript`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=556318#p556318",
    },
    {
        name: `Prophesied Sacrifice`,
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1lr7r1Ryo8hWNV5lX9VOvOHtl0sj8Rp7M",
    },
    {
        name: `Born Yesterday`,
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1qRfgnAC84e4bHnWtTlhUJi9mxiSIn_0c",
    },
    {
        name: `Skeleton Commonality`,
        author: "Darth Rabbitt",
        link: "https://drive.google.com/uc?export=view&id=1Hq-ySrIAqi6VbqF4U2aN68HZAYv70ISH",
        relatedLinks: [{ title: 'Skeletongue', link: 'https://dnd-wiki.org/wiki/Skeletongue_(3.5e_Feat)' }],
    },
    {
        name: `Big Game Hunter`,
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1X7AOuaMcr1vsym1Sjv6PcfKeEAGwltzL",
    },
    {
        name: `Abducted by Aliens`,
        author: "erik",
        link: "https://drive.google.com/uc?export=view&id=1mpUpb1TzliXbB8VxBallsOEinwXlRHDZ",
    },
    {
        name: `They See Me Rollin`,
        author: "erik",
        link: "https://drive.google.com/uc?export=view&id=1NfDJ9E1LVPs7LLduxVr0aaTlOJBRGRpk",
    },
    {
        name: `Planar Exile`,
        author: "Darth Rabbitt",
        link: "https://drive.google.com/uc?export=view&id=1lL-mfV3U2jKiNh3WZPyP1f8UsDHnZTEy",
    },
    {
        name: `Return of the Living Dead`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=567221#p567221",
    },
    {
        name: `Exitree`,
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1FuwgqzD6qqQakg7oHncfzqTGEm2aVZyy",
    },
    {
        name: `Druidic Dabbler`,
        author: "Darth Rabbit",
        link: "https://drive.google.com/uc?export=view&id=1_vkH-ZmLl_blhFZeFjLv4YvZzwa4diFn",
    },
    {
        name: `Cursed Child`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=573361#p573361",
    },
    {
        name: `Cybernetic`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=573509#p573509",
    },
    {
        name: `Noble in Hiding`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=55047&p=573962#p573962",
    },
    {
        name: `Escaped Slave Monster`,
        author: "Kaelik",
        link: "https://files.catbox.moe/tghnq6.png",
    },
    {
        name: `Bakery Sample Dispenser`,
        author: "erik",
        link: "https://files.catbox.moe/0jmc68.png",
    },
    {
        name: `Extreme Omnivore`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=574927#p574927",
    },
    {
        name: `Escaped Mind Thrall`,
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=575089#p575089",
    },
];