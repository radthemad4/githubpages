import { Entry } from "../../entry";

export const racialParagons: Entry[] = [
    {
        name: "Dragon",
        author: "Kaelik",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=141884#p141884",
    },
    {
        name: "Dryad Paragon",
        author: "QuantumBoost",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?t=51129",
        wikiLinks: [
            {
                title: 'race',
                link: 'https://dnd-wiki.org/wiki/Dryad_%283.5e_Race%29'
            },
            {
                title: 'paragon class',
                link: 'https://dnd-wiki.org/wiki/Dryad_Paragon_%283.5e_Racial_Paragon_Class%29'
            }
        ]
    },
    {
        name: "Giantkin Paragon",
        author: "IGTN",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=50214",
        wikiLinks: [
            {
                title: 'race',
                link: 'https://dnd-wiki.org/wiki/Giantkin_%283.5e_Race%29'
            },
            {
                title: 'paragon class',
                link: 'https://dnd-wiki.org/wiki/Giantkin_Paragon_%283.5e_Racial_Paragon_Class%29'
            },
        ]
    },
    {
        name: "Lizardfolk Paragon",
        author: "Surgo",
        link: "https://dnd-wiki.org/wiki/Lizardfolk_Paragon_%283.5e_Racial_Paragon_Class%29",
        relatedLinks: [
            {
                title: "Lizardfolk",
                link: "https://dnd-wiki.org/wiki/Lizardfolk_Variant_%283.5e_Race%29",
            },
            {
                title: 'Thread',
                link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50006'
            }
        ]
    },
    {
        name: "Githyanki Paragon",
        author: "Maxus",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=133152#p133152",
        wikiLink: "https://dnd-wiki.org/wiki/Githyanki_Paragon_%283.5e_Racial_Paragon_Class%29",
        relatedLinks: [
            { title: "Githyanki/Githzerai", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=132973" },
            { title: "(wiki)", link: "https://dnd-wiki.org/wiki/Githyanki/Githzerai_%283.5e_Race%29" }
        ]
    },
    {
        name: "Githzerai Paragon",
        author: "Maxus",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=133215#p133215",
        relatedLinks: [
            { title: "Githyanki/Githzerai", link: "http://tgdmb.com/phpBB3/viewtopic.php?p=132973" },
            { title: "(wiki)", link: "https://dnd-wiki.org/wiki/Githyanki/Githzerai_%283.5e_Race%29" }
        ]
    },
    {
        name: "Half-Dragon Paragon",
        author: "FrankTrollman",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?t=32463",
        wikiLink: "https://dnd-wiki.org/wiki/Half-Dragon_%283.5e_Racial_Paragon_Class%29",
    },
    {
        name: "Dragon Monster Class",
        author: "Hicks",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?t=50217",
        prereqs: [{
            title: "Must be a True Dragon",
            link: "http://tgdmb.com/phpBB3/viewtopic.php?t=50217"
        }]
    },
    ...([
        "Lucario", "Pikachu", "Gardevoir", "Machamp", "Charizard", "Garchomp", "Zoroark",
        "Ninetales", "Diancie", "Blastoise", "Alakazam", "Mawile", "Delphox", "Sceptile",
        "Lycanroc", "Vespiquen"
    ].map((value) => {
        return {
            name: value,
            author: "Wiseman",
            link: "http://tgdmb.com/phpBB3/viewtopic.php?p=405100#p405100"
        }
    })),
    ...(["Floatzel", "Delibird", "Furret", "Golett/Golurk"].map((value) => {
        return {
            name: value,
            author: "FeyMagician",
            link: "http://tgdmb.com/phpBB3/viewtopic.php?p=527470#p527470"
        }
    })),
    {
        name: "Valkyrie Paragon",
        author: "Maxus",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=160702#p160702"
    },
    ...[
        {
            name: "Vampire Paragon",
            wikiLink: "https://dnd-wiki.org/wiki/Vampire_Paragon_(3.5e_Racial_Paragon_Class%29",
        },
        {
            name: "Ghoul Paragon",
            wikiLink: "https://dnd-wiki.org/wiki/Ghoul_Paragon_(3.5e_Racial_Paragon_Class%29"
        },
        {
            name: "Swordwraith Paragon",
            wikiLink: "https://dnd-wiki.org/wiki/Swordwraith_Paragon_(3.5e_Racial_Paragon_Class)"
        }
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=34253#p34253',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: "Fire Ogre Paragon",
        author: "Wiseman",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=505818#p505818"
    },
    {
        name: "Storm Ogre Paragon",
        author: "Wiseman",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=505820#p505820"
    },
    {
        name: "Dragon",
        author: "Bigode",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=58403",
    },
    {
        name: 'Ghost Paragon',
        author: 'DSMatticus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=467029#p467029',
    },
    {
        name: 'Lich Paragon',
        author: 'Surgo',
        link: 'https://dnd-wiki.org/wiki/Lich_Paragon_(3.5e_Racial_Paragon_Class)',
        relatedLinks: [{ title: 'Den Thread', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50007' }]
    },
    {
        name: 'Mummy Paragon',
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=86287#p86287',
        wikiLinks: [
            { title: 'Mummy Template', link: 'https://dnd-wiki.org/wiki/Mummy_(3.5e_Template)' },
            { title: 'Mummy Paragon', link: 'https://dnd-wiki.org/wiki/Mummy_Paragon_(3.5e_Racial_Paragon_Class)' },
            { title: 'Mummy Lord', link: 'https://dnd-wiki.org/wiki/Mummy_Lord_(3.5e_Prestige_Class)' },
        ],
    },
    {
        name: "True Dragon",
        author: "Hicks",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?t=50217",
    },
    {
        name: 'Nosgothian Vampire, Adult',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=140612#p140612',
        author: 'Prak',
        relatedLinks: [{ title: 'Fledgeling', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=140281#p140281' }]
    },
    {
        name: "Revenant Paragon",
        author: "Maxus",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=162371#p162371",
        relatedLinks: [{ title: 'Revenant Template', link: 'https://dnd-wiki.org/wiki/Revenant_(3.5e_Template)' }]
    },
    {
        name: "Spirit Knight Paragon",
        author: "Maxus",
        link: "http://tgdmb.com/phpBB3/viewtopic.php?p=63461#p63461",
    },
    ...[
        'Elf Paragon', 'Gnome Paragon', 'Halfling Paragon', 'Goblin Paragon',
    ].map((name) => {
        return {
            name,
            author: "Orion",
            link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=297518#p297518"
        }
    }),
    {
        name: "Dwarf Paragon",
        author: "Orion",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=297525#p297525",
    },
    {
        name: "Redcap Class [Monster Class]",
        author: "koz",
        link: "http://www.tgdmb.com/phpBB3/viewtopic.php?p=122548#p122548",
    },
    {
        name: 'Zam-ena',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=69059#p69059',
        relatedLinks: [{ title: 'Template', link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=68791#p68791' }]
    },
    {
        name: 'Immortal Champion',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=39966#p39966',
        author: 'Judging__Eagle',
    },
    {
        name: 'Garou Paragon (Werewolf)',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=440580#p440580',
        author: 'Prak',
    },
    {
        name: 'Skeleton Warrior Paragon',
        link: 'https://docs.google.com/document/d/1XkENdwS8VHZ2STgZAqkdL9nObfYhKqaenzr8N_1rhhs/edit#heading=h.pcucc642wkez',
        author: 'Prak',
    },

];