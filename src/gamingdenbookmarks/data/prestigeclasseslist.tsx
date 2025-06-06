import { PrestigeClassEntry } from "../../entry";
import { koumeiMonsterPrcs } from "./koumeimonsterprcslist";

export const prestigeClasses: PrestigeClassEntry[] = [
    {
        name: 'Arch-Golem Execution Girlfriend',
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141531#p141531",
        relatedLinks: [{ title: "Robot Girl", link: "https://tgdmb.com/phpBB3/viewtopic.php?t=50551" }],
        minimumStartingLevel: 6,
    },
    {
        name: "Daineko",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
        minimumStartingLevel: 6,
    },
    {
        name: "Web-Slinging Killer",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
        minimumStartingLevel: 6,
    },
    {
        name: "Anethema",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
        minimumStartingLevel: 8,
    },
    ...["Marilith/Lilend PrC", "Beauty Queen"].map((name) => {
        return {
            name,
            author: "Koumei",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
            minimumStartingLevel: 6,
        }
    }),
    {
        name: "Overgrown",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
        minimumStartingLevel: 6,
    },
    {
        name: "Irikara Heretic",
        author: "AndreiChekov",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=439047#p439047",
        minimumStartingLevel: 6,
    },
    ...['Fearless Rescuer', 'Scholar of Ancient Lore', 'Explorer of the Deep', 'Agent of Shadows', 'Great Healer'].map((name) => {
        return {
            name,
            author: 'Wiseman',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=405124#p405124',
            minimumStartingLevel: 11,
        }
    }),
    {
        name: "Aquan Champion",
        author: "Judging__Eagle",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=38986#p38986",
        minimumStartingLevel: 6,
    },
    ...[
        {
            name: "Corpselight Whisperer",
            wikiLink: "https://dnd-wiki.org/wiki/Corpselight_Whisperer_%283.5e_Prestige_Class%29",
            minimumStartingLevel: 7,
        },
        {
            name: "Uttercold Assault Necromancer",
            wikiLink: "https://dnd-wiki.org/wiki/Uttercold_Assault_Necromancer_%283.5e_Prestige_Class%29",
            minimumStartingLevel: 7,
        },
        {
            name: "Boneblade Reaper",
            wikiLink: "https://dnd-wiki.org/wiki/Boneblade_Reaper_(3.5e_Prestige_Class)#Boneblade_Reaper",
            minimumStartingLevel: 7,
        },
        {
            name: "Skindancer",
            wikiLink: "https://dnd-wiki.org/wiki/Skindancer_%283.5e_Prestige_Class%29",
            minimumStartingLevel: 8,
        },
        {
            name: "Stranger with the Burning Eyes",
            wikiLink: "https://dnd-wiki.org/wiki/Stranger_with_the_Burning_Eyes_(3.5e_Prestige_Class)",
            minimumStartingLevel: 10,
        },
        {
            name: "Master of the Seven Necromantic Mysteries",
            wikiLink: "https://dnd-wiki.org/wiki/Master_of_the_Seven_Necromantic_Mysteries_(3.5e_Prestige_Class)",
            minimumStartingLevel: 10,
        },
        {
            name: "Death King",
            wikiLink: "https://dnd-wiki.org/wiki/Death_King_(3.5e_Prestige_Class)",
            minimumStartingLevel: 9,
        },
    ].map(({ name, wikiLink, minimumStartingLevel }) => {
        return {
            name: name,
            author: "Frank and K",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=34249#p34249',
            wikiLink,
            minimumStartingLevel,
        }
    }),
    ...[
        {
            name: "Widow Queen",
            wikiLink: "https://dnd-wiki.org/wiki/Widow_Queen_(3.5e_Prestige_Class)",
            minimumStartingLevel: 7,
        },
        {
            name: "Bone Rider",
            wikiLink: "https://dnd-wiki.org/wiki/Bone_Rider_(3.5e_Prestige_Class)",
            minimumStartingLevel: 5,
        },
        {
            name: "Thief of Souls",
            wikiLink: "https://dnd-wiki.org/wiki/Thief_of_Souls_(3.5e_Prestige_Class)",
            minimumStartingLevel: 7,
        },
        {
            name: "Lurker in the Swarm",
            wikiLink: "https://dnd-wiki.org/wiki/Lurker_in_the_Swarm_(3.5e_Prestige_Class)",
            minimumStartingLevel: 7,
        },
        {
            name: "Heartless Mage",
            wikiLink: "https://dnd-wiki.org/wiki/Heartless_Mage_(3.5e_Prestige_Class)",
            minimumStartingLevel: 10,
        },
        {
            name: "Speaker for the Dead",
            wikiLink: "https://dnd-wiki.org/wiki/Speaker_for_the_Dead_(3.5e_Prestige_Class)",
            minimumStartingLevel: 7,
        },
        {
            name: "Lord of the Damned",
            wikiLink: "https://dnd-wiki.org/wiki/Lord_of_the_Damned_(3.5e_Prestige_Class)",
            minimumStartingLevel: 7,
        },
    ].map(({ name, wikiLink, minimumStartingLevel }) => {
        return {
            name,
            author: "Frank and K",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=34250#p34250',
            wikiLink,
            minimumStartingLevel,
        }
    }),
    ...[9, 10].map((minimumStartingLevel) => {
        return {
            name: "Soul Merchant",
            author: "Frank and K",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=34250#p34250',
            wikiLink: "https://dnd-wiki.org/wiki/Soul_Merchant_(3.5e_Prestige_Class)",
            minimumStartingLevel,
            note: <span><a href='https://dnd-wiki.org/wiki/Summoner_(3.5e_Class)'>Tome Summoners</a> can enter at 9</span>
        }
    }),
    {
        name: "Boneblade Reaper, Dungeonomicon Version",
        author: "Frank and K",
        link: "https://dnd-wiki.org/wiki/Boneblade_Reaper_(3.5e_Prestige_Class)#Boneblade_Reaper.2C_Dungeonomicon_Version",
        relatedLinks: [{ title: "Monk", link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }],
        minimumStartingLevel: 7,
    },
    ...[
        {
            name: 'Hellwalker',
            wikiLink: 'https://dnd-wiki.org/wiki/Hellwalker_(3.5e_Prestige_Class)',
            minimumStartingLevel: 6,
        },
        {
            name: 'Seer of the Tempest',
            wikiLink: 'https://dnd-wiki.org/wiki/Seer_of_the_Tempest_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Barrister of the Nine',
            wikiLink: 'https://dnd-wiki.org/wiki/Barrister_of_the_Nine_(3.5e_Prestige_Class)',
            minimumStartingLevel: 10,
        },
        {
            name: 'Celestial Beacon',
            wikiLink: 'https://dnd-wiki.org/wiki/Celestial_Beacon_(3.5e_Prestige_Class)',
            minimumStartingLevel: 8,
        },
    ].map(({ name, wikiLink, minimumStartingLevel }) => {
        return {
            name,
            author: 'Frank and K',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=28830#p28830',
            wikiLink,
            minimumStartingLevel
        }
    }),
    {
        name: 'Boatman of Styx',
        author: 'Frank and K',
        link: 'https://dnd-wiki.org/wiki/Boatman_of_Styx_(3.5e_Prestige_Class)',
        minimumStartingLevel: 6,
    },
    ...[
        {
            name: 'Defiler of Temples',
            wikiLink: 'https://dnd-wiki.org/wiki/Defiler_of_Temples_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Ninja of Gax',
            wikiLink: 'https://dnd-wiki.org/wiki/Ninja_of_Gax_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Elothar Warrior of Bladereach',
            wikiLink: 'https://dnd-wiki.org/wiki/Elothar_Warrior_of_Bladereach_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Dungeon Veteran',
            wikiLink: 'https://dnd-wiki.org/wiki/Dungeon_Veteran_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Master of Snake Mountain',
            wikiLink: 'https://dnd-wiki.org/wiki/Master_of_Snake_Mountain_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Seeker of the Lost Wizard Traditions',
            wikiLink: 'https://dnd-wiki.org/wiki/Seeker_of_the_Lost_Wizard_Traditions_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
    ].map(({ name, wikiLink, minimumStartingLevel }) => {
        return {
            name,
            author: 'Frank and K',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=28550#p28550',
            wikiLink,
            minimumStartingLevel,
        }
    }),
    {
        name: 'Progenitor of the Gith',
        author: 'Frank and K',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=28553#p28553',
        wikiLink: 'https://dnd-wiki.org/wiki/Progenitor_of_the_Gith_(3.5e_Prestige_Class)',
        minimumStartingLevel: 5,
    },
    {
        name: 'Monitor',
        author: 'Frank and K',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=28553#p28553',
        wikiLink: 'https://dnd-wiki.org/wiki/Monitor_(3.5e_Prestige_Class)',
        minimumStartingLevel: 7,
    },
    ...[
        {
            name: 'Death Knight',
            wikiLink: 'https://dnd-wiki.org/wiki/Death_Knight_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
        {
            name: 'Demon Samurai',
            wikiLink: 'https://dnd-wiki.org/wiki/Demon_Samurai_(3.5e_Prestige_Class)',
            minimumStartingLevel: 6,
        },
        {
            name: 'Dragon Lancer',
            wikiLink: 'https://dnd-wiki.org/wiki/Dragon_Lancer_(3.5e_Prestige_Class)',
            minimumStartingLevel: 10,
        },
        {
            name: 'Legendary Strategist',
            wikiLink: 'https://dnd-wiki.org/wiki/Legendary_Strategist_(3.5e_Prestige_Class)',
            minimumStartingLevel: 7,
        },
    ].map(({ name, wikiLink, minimumStartingLevel }) => {
        return {
            name,
            author: 'Frank and K',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=33297#p33297',
            wikiLink,
            minimumStartingLevel,
        }
    }),
    ...[
        { name: 'Defender of the Woods [Tome of Trees]' },
        { name: 'Holy Crusader [Tome of Virtue]' },
        { name: 'Golem-Knight of Mechanus [Book of Gears]' },
        { name: 'Lunar Knight' },
        { name: 'Crusader of the Elemental Forces' },
    ].map(({ name }) => {
        return {
            name: `${name} (Knight PrC)`,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50018',
            relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
            minimumStartingLevel: 11,
        }
    }),
    ...[
        { name: 'Scaled Veteran of the Ages', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=109441#p109441' },
        { name: 'Arachne', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=546397#p546397' },
        { name: 'Knight of Pain', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=546397#p546397' },
        { name: 'Colony Champion', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=546473#p546473' },
    ].map(({ name, link }) => {
        return {
            name: `${name} (Knight PrC)`,
            author: 'Koumei',
            link,
            relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
            minimumStartingLevel: 11,
        }
    }),
    ...[
        { name: 'Arcane Archer', minimumStartingLevel: 7 },
        { name: 'Bladesinger', minimumStartingLevel: 3 },
        { name: 'The Seeker of the Misty Isle fix (same as Complete Divine, but has full casting)', minimumStartingLevel: 6 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Iaimeki',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=50446#p50446',
            minimumStartingLevel: minimumStartingLevel
        }
    }),
    ...[
        { name: 'Arcane Trickster', minimumStartingLevel: 3 },
        { name: 'Eldritch Knight', minimumStartingLevel: 3 },
        { name: 'Mystic Theurge', minimumStartingLevel: 3 },
        { name: 'Dragon Disciple', minimumStartingLevel: 6 },
        { name: 'Rage Mage', minimumStartingLevel: 3 },
        { name: 'Rage Mage (Take Two)', minimumStartingLevel: 12 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Iaimeki',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=50378#p50378',
            minimumStartingLevel: minimumStartingLevel
        }
    }),
    {
        name: 'Archanamach',
        author: 'Calibron',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=74474#p74474',
        minimumStartingLevel: 6,
    },
    {
        name: 'Beast Master',
        author: 'krusk',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=57177',
        minimumStartingLevel: 3,
    },
    {
        name: 'Berserker',
        author: 'CatharzGodfoot',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=170571#p170571',
        minimumStartingLevel: 5,
    },
    ...[
        { name: 'Berzerker', minimumStartingLevel: 4 },
        { name: 'Bloodspiller', minimumStartingLevel: 9 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Judging__Eagle',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=48751',
            minimumStartingLevel: minimumStartingLevel
        };
    }),
    {
        name: 'Berzerker-Magus',
        author: 'Judging__Eagle',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=39284',
        minimumStartingLevel: 8,
    },
    {
        name: 'Big Boss',
        author: 'DSMatticus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55892',
        minimumStartingLevel: 6,
    },
    {
        name: 'Final Boss',
        author: 'Dean',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=430870#p430870',
        minimumStartingLevel: 4,
    },
    {
        name: 'Staged Boss',
        author: 'DSMatticus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=431553#p431553',
    },
    {
        name: 'Ogre Mage',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=55676#p55676',
        minimumStartingLevel: 6,
    },
    {
        name: 'Meteor Ninja',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=55720#p55720',
        minimumStartingLevel: 6,
    },
    {
        name: 'Big Nob',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=55779#p55779',
        minimumStartingLevel: 7,
    },
    {
        name: 'Blade Fighter',
        author: 'Judging__Eagle',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=48678',
        minimumStartingLevel: 4,
    },
    {
        name: 'Scion of the Dying Embers',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=423212#p423212',
        minimumStartingLevel: 6,
    },
    {
        name: 'Executioner',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=423212#p423212',
        minimumStartingLevel: 6,
    },
    {
        name: 'Bone Acolyte of Chemosh',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=505060#p505060',
        minimumStartingLevel: 6,
    },
    {
        name: 'Knight of the Crown',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=505062#p505062',
        minimumStartingLevel: 6,
    },
    {
        name: 'Knight of the Rose',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=512349#p512349',
        minimumStartingLevel: 6,
    },
    {
        name: 'Tribal Shaman ',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=505108#p505108',
        minimumStartingLevel: 4,
    },
    {
        name: 'Knight of the Thorn',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=516858#p516858',
        minimumStartingLevel: 6,
    },
    {
        name: "Fire Ogre Paragon",
        author: "Wiseman",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=505818#p505818",
        minimumStartingLevel: 4,
    },
    {
        name: "Storm Ogre Paragon",
        author: "Wiseman",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=505820#p505820",
        minimumStartingLevel: 4,
    },
    {
        name: 'Champion of Koganusan',
        author: 'LR',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=293389#p293389',
        minimumStartingLevel: 6,
    },
    ...[
        { name: 'Enlightened Disciple of Wel Hung Temple, Long Wang Province', minimumStartingLevel: 6 },
        { name: 'Maelstrom of Fiery Ki', minimumStartingLevel: 8 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=104278#p104278',
            relatedLinks: [{ title: 'Sohei', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50005' }],
            minimumStartingLevel: minimumStartingLevel
        };
    }),
    {
        name: 'Arcane Strategist',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=104278#p104278',
        minimumStartingLevel: 6,
    },
    {
        name: 'Ninja Pirate(Old)',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=140576#p140576',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Ninja (Old)', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50367' },
            { title: 'Swashbuckler (Old)', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50350' },
        ]
    },
    {
        name: 'Chaos Sorcerer',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=140576#p140576',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Untamed Psychic', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=50979' },
        ]
    },
    {
        name: 'Mecha Pilot',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=140576#p140576',
        minimumStartingLevel: 5,
        relatedLinks: [
            { title: 'Gadgeteer', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245446#p245446' },
        ]
    },
    {
        name: 'Glitch Pokemaster',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=144506#p144506',
        minimumStartingLevel: 8,
        relatedLinks: [
            {
                title: 'Pokémaster ',
                link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class'
            },
            {
                title: 'Missingno',
                link: 'https://dnd-wiki.org/wiki/Missingno._(3.5e_Monster)'
            }
        ]
    },
    {
        name: 'Door Opener',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=146758#p146758',
        minimumStartingLevel: 4,
    },
    {
        name: 'Witch of the Sparkling Heart',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=151315#p151315',
        minimumStartingLevel: 8,
    },
    {
        name: 'Vampire Count',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=151315#p151315',
        minimumStartingLevel: 6,
        relatedLinks: [{ title: 'Vampire Template', link: 'https://dnd-wiki.org/wiki/Vampire,_Tome_(3.5e_Template)' }]
    },
    {
        name: 'Initiate of Zod',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=168795#p168795',
        minimumStartingLevel: 6,
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Jesus',
        author: "Koumei's friend who has no den account",
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=171313#p171313',
        minimumStartingLevel: 6,
    },
    ...[
        { name: 'Arachne (Old)', minimumStartingLevel: 8, relatedLinks: [{ title: 'Updated Version', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=546397#p546397' }] },
        { name: 'Ocular Adept', minimumStartingLevel: 6 },
    ].map(({ name, minimumStartingLevel, relatedLinks }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=479366#p479366',
            minimumStartingLevel: minimumStartingLevel,
            relatedLinks
        };
    }),
    ...[
        { name: 'Elemental Archon', minimumStartingLevel: 6 },
        { name: 'Illithid Mastermind', minimumStartingLevel: 11 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=479372#p479372',
            minimumStartingLevel: minimumStartingLevel
        };
    }),
    ...[
        { name: 'Horned Harbringer', minimumStartingLevel: 6 },
        { name: 'Pale Master', minimumStartingLevel: 6 },
        { name: 'Master of Shrouds', minimumStartingLevel: 6 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=479378#p479378',
            minimumStartingLevel: minimumStartingLevel
        };
    }),
    ...[
        { name: 'Entropic Adept', minimumStartingLevel: 8 },
        { name: 'Talontar Blightlord', minimumStartingLevel: 6 },
        { name: 'Telflammar Shadowlord', minimumStartingLevel: 8 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=479451#p479451',
            minimumStartingLevel: minimumStartingLevel
        };
    }),
    {
        name: 'Wraith Hurler',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=314046#p314046',
        minimumStartingLevel: 6
    },
    {
        name: 'Demon Blade',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=314260#p314260',
        minimumStartingLevel: 6,
        relatedLinks: [{ title: 'Soldier', link: 'https://dnd-wiki.org/wiki/Soldier,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Death Knight',
        author: 'Judging__Eagle',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=49246',
        minimumStartingLevel: 6,
    },
    {
        name: 'Game Hunter',
        author: 'God_of_Awesome',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=148040#p148040',
        minimumStartingLevel: 6,
    },
    {
        name: 'Death Poacher',
        author: 'God_of_Awesome',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=149177#p149177',
        minimumStartingLevel: 2,
    },
    {
        name: 'Master of the Nine',
        author: 'krusk',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=524466#p524466',
        minimumStartingLevel: 6,
    },
    {
        name: 'Distressing Damsel',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=55029',
        minimumStartingLevel: 6,
    },
    {
        name: 'Driller',
        author: 'shirak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=51078',
        minimumStartingLevel: 6,
    },
    {
        name: 'Drunken Master',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=60053#p60053',
        wikiLink: 'https://dnd-wiki.org/wiki/Drunken_Master,_Tome_(3.5e_Prestige_Class)',
        minimumStartingLevel: 6,
    },
    {
        name: 'Soulknife',
        author: 'Maj',
        link: 'https://www.niftymessageboard.com/viewtopic.php?p=144343',
        minimumStartingLevel: 4,
    },
    ...[
        { name: 'Shadow Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154018#p154018' },
        { name: 'Ethereal Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=449214#p449214' },
    ].map(({ name, link }) => {
        return {
            name,
            author: 'Kaelik',
            link,
            minimumStartingLevel: 11,
            relatedLinks: [
                { title: 'Elemental Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154017#p154017' },
            ]
        }
    }),
    {
        name: 'Endbringer',
        author: 'Dominicius',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=227152',
        minimumStartingLevel: 16,
    },
    {
        name: 'Endbringer',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=225917#p225917',
        minimumStartingLevel: 6,
    },
    {
        name: 'Spectre Knight',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=450316#p450316',
        minimumStartingLevel: 6
    },
    {
        name: 'Treasure Knight',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=450455#p450455',
        minimumStartingLevel: 6
    },
    ...[
        { name: 'Gargantuan Creature', minimumStartingLevel: 6 },
        { name: 'Monster in the Closet', minimumStartingLevel: 4 },
        { name: 'Kiting Flyer', minimumStartingLevel: 6 },
        { name: 'Force of Nature', minimumStartingLevel: 6 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=105399#p105399',
            minimumStartingLevel: minimumStartingLevel
        };
    }),
    {
        name: 'Gentle Monk',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=49163',
        minimumStartingLevel: 7
    },
    {
        name: 'Giant Frog (Knight PrC)',
        author: 'CatharzGodfoot',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=51001',
        relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
        minimumStartingLevel: 11,
    },
    {
        name: 'Hell Rider (Old)',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=39601',
        relatedLinks: [
            { title: 'Revised', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=252006#p252006' },
            { title: 'Revised Revised (Base class)', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=555908#p555908' },
        ],
        minimumStartingLevel: 6,
    },
    {
        name: 'Hell Rider Revised',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=252006#p252006',
        relatedLinks: [{ title: 'Revised Revised (Base class)', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=555908#p555908' },],
        minimumStartingLevel: 6,
    },
    {
        name: 'Hergian',
        author: 'virgil',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=48621',
        minimumStartingLevel: 5,
    },
    {
        name: 'Invisible Blade',
        author: 'Brobdingnagian',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=39224',
        minimumStartingLevel: 4,
    },
    {
        name: 'Invisible Blade',
        author: 'CatharzGodfoot',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=49221',
        minimumStartingLevel: 5,
    },
    {
        name: 'Master of Chains',
        author: 'Maxus',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50184',
        minimumStartingLevel: 6,
    },
    {
        name: 'Master Thrower',
        author: 'Judging__Eagle',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=39304',
        minimumStartingLevel: 5,
    },
    ...koumeiMonsterPrcs,
    {
        name: 'Monster Rider',
        author: 'Judging__Eagle',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=49075',
        minimumStartingLevel: 6,
    },
    {
        name: 'Multi-class',
        author: 'RobbyPants',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=57197',
        minimumStartingLevel: 6,
    },
    {
        name: 'Mummy Lord',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=86959#p86959',
        wikiLinks: [
            { title: 'Mummy Template', link: 'https://dnd-wiki.org/wiki/Mummy_(3.5e_Template)' },
            { title: 'Mummy Paragon', link: 'https://dnd-wiki.org/wiki/Mummy_Paragon_(3.5e_Racial_Paragon_Class)' },
            { title: 'Mummy Lord', link: 'https://dnd-wiki.org/wiki/Mummy_Lord_(3.5e_Prestige_Class)' },
        ],
        minimumStartingLevel: 11
    },
    {
        name: 'Ninja-Pirate',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=232679#p232679',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Ninja', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=232386#p232386' },
            { title: 'Swashbuckler', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=232624#p232624' },
        ]
    },
    {
        name: 'Mystic Ninja of the Shadow Veil Sacred Path',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245106#p245106',
        minimumStartingLevel: 7,
        relatedLinks: [
            { title: 'Ninja', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=232386#p232386' },
        ]
    },
    {
        name: 'Mystic Theurge',
        author: 'Leress',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=53291#p53291',
        minimumStartingLevel: 7,
    },
    {
        name: 'Naga Apostle (evil Rainbow Servant variant)',
        author: 'PhaedrusXY',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=50751',
        minimumStartingLevel: 6,
    },
    {
        name: 'Nightstalker',
        author: 'Wiseman',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=548496#p548496',
        minimumStartingLevel: 3,
    },
    {
        name: 'Void Witch',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=131636#p131636',
        relatedLinks: [{ title: 'Shadow Caster', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=127294#p127294' }],
        minimumStartingLevel: 8,
    },
    {
        name: 'Perfect Minion',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=316687#p316687',
        minimumStartingLevel: 2,
        relatedLinks: [{ title: 'Lord of Minions', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=317384#p317384' }]
    },
    {
        name: 'Performer',
        author: 'Judging__Eagle',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=50540',
        minimumStartingLevel: 6,
    },
    ...['Reaping Mauler', 'Pure Brawler'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=51157',
            minimumStartingLevel: 6,
        }
    }),
    {
        name: 'Sanctum Mage',
        author: 'Judging__Eagle',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=39133',
        minimumStartingLevel: 11,
    },
    {
        name: 'Rune Knight',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=154716#p154716',
        minimumStartingLevel: 6,
    },
    {
        name: 'Divine Comedian',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162657#p162657',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Angel', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=154675#p154675' },
            { title: 'Jester', link: 'https://dnd-wiki.org/wiki/Jester_(3.5e_Class)' },
        ]
    },
    {
        name: 'Straight-Edge Vegan',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162657#p162657',
        minimumStartingLevel: 6,
    },
    {
        name: 'Your Mum',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162662#p162662',
        minimumStartingLevel: 6,
    },
    {
        name: 'Hell Warden',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=163970#p163970',
        minimumStartingLevel: 6,
    },
    {
        name: 'Rockstar',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=176146#p176146',
        minimumStartingLevel: 6,
    },
    {
        name: 'Haunted Armour (Knight PrC)',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=179431#p179431',
        minimumStartingLevel: 11,
        relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Bear Cavalry',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=179432#p179432',
        minimumStartingLevel: 11,
        relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Ice Queen / Sizzler (Prestige Class)',
        author: 'Josh_Kablack',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=226807#p226807',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Empusa', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=154675#p154675' },
            { title: 'Fire Mage', link: 'https://dnd-wiki.org/wiki/Fire_Mage_(3.5e_Class)' },
            { title: 'Revised Fire Mage', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=52437' },
            { title: 'Snowscaper', link: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)' },
        ]
    },
    {
        name: 'Prism Mage',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=227228#p227228',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Fire Mage', link: 'https://dnd-wiki.org/wiki/Fire_Mage_(3.5e_Class)' },
            { title: 'Revised Fire Mage', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=52437' },
            { title: 'Snowscaper', link: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)' },
            { title: 'Green Mage', link: 'https://dnd-wiki.org/wiki/Green_Mage_(3.5e_Class)' },
            { title: 'Revised Green Mage', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=52444' },
        ]
    },
    {
        name: 'Hero!',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=235956#p235956',
        minimumStartingLevel: 8,
    },
    {
        name: 'Delinquent',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=235956#p235956',
        minimumStartingLevel: 6,
    },
    {
        name: 'Aristocratic Demon',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=235956#p235956',
        minimumStartingLevel: 8,
    },
    {
        name: 'Fallen',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=235956#p235956',
        minimumStartingLevel: 6,
    },
    {
        name: 'Eternal Flame',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=236707#p236707',
        minimumStartingLevel: 16,
        relatedLinks: [
            { title: 'Fire Mage', link: 'https://dnd-wiki.org/wiki/Fire_Mage_(3.5e_Class)' },
            { title: 'Revised Fire Mage', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=52437' },
        ]
    },
    {
        name: 'Ice King/Queen',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=236736#p236736',
        minimumStartingLevel: 16,
        relatedLinks: [
            { title: 'Snowscaper', link: 'https://dnd-wiki.org/wiki/Snowscaper_(3.5e_Class)' },
        ]
    },
    {
        name: 'Cyclone Rider',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=236764#p236764',
        minimumStartingLevel: 16,
        relatedLinks: [
            { title: 'Green Mage', link: 'https://dnd-wiki.org/wiki/Green_Mage_(3.5e_Class)' },
            { title: 'Revised Green Mage', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=52444' },
        ]
    },
    {
        name: 'Star Child',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=237179#p237179',
        minimumStartingLevel: 16,
        relatedLinks: [{ title: 'Star Mage', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=154965#p154965' },]
    },
    {
        name: 'Shadowdancer',
        author: 'Surgo',
        link: 'https://dnd-wiki.org/wiki/Shadowdancer,_Tome_(3.5e_Prestige_Class)',
        relatedLinks: [{ title: 'Thread', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50008' }],
        minimumStartingLevel: 6,
    },
    {
        name: 'Son of Sparda',
        author: 'Manxome',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=48999',
        minimumStartingLevel: 6,
    },
    {
        name: 'Soul Bound',
        author: 'Cielingcat',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=50583',
        minimumStartingLevel: 6,
    },
    {
        name: 'Spellherd',
        author: 'Vebyast',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=51103',
        minimumStartingLevel: 8,
    },
    {
        name: 'Spirit Wave Disciple',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=49172',
        minimumStartingLevel: 6,
    },
    {
        name: 'War-arach/Spider-Sworn (3.5 Warlock)',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=51145',
        minimumStartingLevel: 6,
    },
    {
        name: 'War-arach/Spider-Sworn (Spherelock)',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=382776#p382776',
        minimumStartingLevel: 6,
        relatedLinks: [
            { title: 'Warlock (Spherelock)', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40229#p40229' },
            { title: 'wiki', link: 'https://dnd-wiki.org/wiki/Warlock_(3.5e_Class)' }
        ]
    },
    {
        name: 'Cheater of Logistics',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=339159#p339159',
        minimumStartingLevel: 6,
        relatedLinks: [{ title: 'Warmage', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=338594#p338594' },]
    },
    {
        name: 'Wizard of High Sorcery',
        author: 'Neurosis',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=56588',
        minimumStartingLevel: 6,
    },
    ...[
        {
            name: 'Burst Trainer',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=280615#p280615',
            minimumStartingLevel: 6,
        },
        {
            name: 'Pokeranger',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=282018#p282018',
            minimumStartingLevel: 8,
        },
        {
            name: 'Move Tutor',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=284086#p284086',
            minimumStartingLevel: 6,
        },
        {
            name: 'Team Rocket Executive',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=285695#p285695',
            minimumStartingLevel: 8,
        },
    ].map(({ name, link, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link,
            minimumStartingLevel: minimumStartingLevel,
            relatedLinks: [{ title: 'Pokémaster ', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }],
        }
    }),
    ...[
        {
            name: 'Water Gym Master',
            link: 'https://web.archive.org/web/20030906091540/http://www.scshop.com/~ritaxis/prcs/watermaster.html',
            minimumStartingLevel: 11,
        },
        {
            name: 'Fire Gym Master',
            link: 'https://web.archive.org/web/20030904051507/http://www.scshop.com/~ritaxis/prcs/firemaster.html',
            minimumStartingLevel: 8,
        },
        {
            name: 'Faceless Gym Leader',
            link: 'https://web.archive.org/web/20030904051600/http://www.scshop.com/~ritaxis/prcs/faceoff.html',
            minimumStartingLevel: 8,
        },
        {
            name: 'Horde Master',
            link: 'https://web.archive.org/web/20030906091132/http://www.scshop.com/~ritaxis/prcs/willard.html',
            minimumStartingLevel: 6,
        },
    ].map(({ name, link, minimumStartingLevel }) => {
        return {
            name,
            author: 'Frank and Emma Trollman',
            link,
            minimumStartingLevel: minimumStartingLevel,
            relatedLinks: [{ title: 'Pokémaster ', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }],
        }
    }),
    {
        name: 'Undying Mercenary',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=374108#p374108',
        minimumStartingLevel: 5,
    },
    {
        name: 'Net of the Pirate Kings',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=169157#p169157',
        minimumStartingLevel: 6,
    },
    {
        name: 'Blood Knight',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=211833#p211833',
        minimumStartingLevel: 6,
    },
    {
        name: 'Green Queen',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=244767#p244767',
        minimumStartingLevel: 6,
    },
    {
        name: 'Ponyweaver',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=252212#p252212',
        minimumStartingLevel: 6,
    },
    {
        name: 'Hulking Berserker',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=273006#p273006',
        minimumStartingLevel: 8,
    },
    {
        name: 'Soulknight',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=378275#p378275',
        minimumStartingLevel: 6,
    },
    {
        name: 'Abyssal Lyricist',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=388624#p388624',
        minimumStartingLevel: 6,
    },
    {
        name: 'Magical Warrior',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=383896#p383896',
        minimumStartingLevel: 6,
    },
    {
        name: 'Negative Energy Infused',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162302#p162302',
        minimumStartingLevel: 8,
    },
    {
        name: 'Swarmshifter',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=162382#p162382',
        minimumStartingLevel: 1,
    },
    {
        name: 'True Name Nemesis',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=357946#p357946',
        minimumStartingLevel: 9,
    },
    {
        name: 'Final Boss',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=254951#p254951',
        minimumStartingLevel: 8,
    },
    {
        name: 'Master Trapper',
        author: 'Dominicius',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=465970#p465970',
        minimumStartingLevel: 6,
    },
    {
        name: 'Aes Shee Noble',
        author: 'JonSetanta',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=54773',
        minimumStartingLevel: 6,
    },
    {
        name: 'Beast Totem Warrior',
        author: 'Red_Rob',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=299846#p299846',
        minimumStartingLevel: 11,
    },
    {
        name: 'Wood Shaper',
        author: 'complains',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=286076#p286076',
        minimumStartingLevel: 6,
    },
    ...['Werewolf', 'Vampire', 'Cambion', 'Nephilim', 'Sprite'].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=258529#p258529',
            minimumStartingLevel: 2,
        }
    }),
    {
        name: 'Werewolf',
        author: 'CatharzGodfoot',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=258916#p258916',
        minimumStartingLevel: 2,
    },
    {
        name: 'Lord of Minions',
        author: 'Koumei, SunTzuWarmaster',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=317384#p317384',
        minimumStartingLevel: 6,
        relatedLinks: [{ title: 'Perfect Minion', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=316687#p316687' }]
    },
    {
        name: 'Serpentine Transformist',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=317854#p317854',
        minimumStartingLevel: 1,
    },
    {
        name: 'Choker PrC: Strangler',
        author: 'downzorz',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=318371#p318371',
        minimumStartingLevel: 4,
    },
    {
        name: 'Minotaur PrC: Dancing Bull',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=324384#p324384',
        minimumStartingLevel: 6,
    },
    {
        name: 'Gore Painter',
        author: 'Libertad',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=250888#p250888',
        minimumStartingLevel: 6,
    },
    {
        name: 'Bane Knight (Knight PrC)',
        author: 'Midnight_v',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=236588#p236588',
        relatedLinks: [{ title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }],
        minimumStartingLevel: 11,
        note: 'Can be entered without being a Knight'
    },
    ...[
        { name: 'Berserk', minimumStartingLevel: 6 },
        { name: 'Frenzied Berserker', minimumStartingLevel: 7 },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'Prak',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=40277#p40277',
            minimumStartingLevel
        };
    }),
    {
        name: 'Blighter',
        author: '...You Lost Me',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=205176#p205176',
        minimumStartingLevel: 6,
    },
    ...[
        {
            name: 'Tempter',
            minimumStartingLevel: 6
        },
        {
            name: 'Dark Lawyer',
            minimumStartingLevel: 6
        },
        {
            name: 'Demonsentry',
            minimumStartingLevel: 6
        },
        {
            name: 'Dark Overlord',
            minimumStartingLevel: 11
        },
    ].map(({ name, minimumStartingLevel }) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=176338#p176338',
            minimumStartingLevel
        }
    }),
    {
        name: 'Knight of the Lily',
        author: 'Wiseman',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545784#p545784',
        minimumStartingLevel: 6,
    },
    {
        name: 'Angelic Ascendant',
        author: 'JonSetanta',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=176462#p176462',
        minimumStartingLevel: 14
    },
    {
        name: 'Gingerbread Man',
        author: 'Prak',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=159986#p159986',
        minimumStartingLevel: 6
    },
    {
        name: 'Ninja Spy',
        author: 'virgil',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51101',
        minimumStartingLevel: 5
    },
    {
        name: 'Magus of the Devourer',
        author: 'Count Geiger',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51064',
        minimumStartingLevel: 16
    },
    {
        name: 'Arcane Visionary',
        author: 'Red Archon',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50982',
        minimumStartingLevel: 8
    },
    {
        name: 'Inevitable',
        author: 'God_of_Awesome',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50832',
        minimumStartingLevel: 8
    },
    {
        name: 'Mystic Theurge',
        author: 'Grek',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50074',
        minimumStartingLevel: 7
    },
    {
        name: 'Mystic Theurge',
        author: 'Hicks',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=128404#p128404',
        minimumStartingLevel: 3
    },
    {
        name: 'Totem Knight (Knight PrC)',
        author: 'God_of_Awesome',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50628',
        relatedLinks: [
            { title: 'Corpse Crafting', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=50632' },
            { title: 'Knight', link: 'https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)' }
        ],
        minimumStartingLevel: 2
    },
    {
        name: 'Shivrelen',
        author: 'Avoraciopoctules',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=127979#p127979',
        minimumStartingLevel: 5
    },
    {
        name: "Fey Phantasmist [Monster Prestige Class]",
        author: "koz",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=122548#p122548",
        minimumStartingLevel: 6
    },
    {
        name: "Unicorn",
        author: "Avotas",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49777",
        minimumStartingLevel: 5
    },
    {
        name: "Familiar PrC: Shoulder Wizard",
        author: "FrankTrollman",
        link: "https://www.niftymessageboard.com/phpBB3/viewtopic.php?p=46620#p46620",
        minimumStartingLevel: 5
    },
    {
        name: "Weaponmaster",
        author: "ZER0",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=80820#p80820",
        minimumStartingLevel: 6
    },
    {
        name: "Wise Weaponmaster",
        author: "koz",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=83523#p83523",
        minimumStartingLevel: 7
    },
    {
        name: "Ghostblade",
        author: "Maxus",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49400",
        minimumStartingLevel: 7
    },
    {
        name: "Anti-Mage",
        author: "Woodrow-.-",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49368",
        minimumStartingLevel: 6
    },
    {
        name: "Tiger Monk",
        author: "Maxus",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=49035",
        minimumStartingLevel: 7
    },
    {
        name: 'Faerie Noble',
        author: 'JonSetanta',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40270#p40270',
        minimumStartingLevel: 6
    },
    {
        name: 'Faerie Lord',
        author: 'JonSetanta',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40270#p40270',
        minimumStartingLevel: 13
    },
    {
        name: 'Rune Knight',
        author: 'Iaimeki',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39192#p39192',
        minimumStartingLevel: 6
    },
    {
        name: 'Brewmaster',
        author: 'Leress',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39204#p39204',
        minimumStartingLevel: 4
    },
    {
        name: 'Kobold Rapper',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=38926',
        author: 'Essence',
        minimumStartingLevel: 7
    },
    {
        name: 'Rock Gnome',
        link: 'https://www.niftymessageboard.com/phpBB3/viewtopic.php?t=47132',
        author: 'FrankTrollman',
        minimumStartingLevel: 7
    },
    {
        name: 'Arcane Trickster',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=38438',
        author: 'Murtak',
        minimumStartingLevel: 5
    },
    {
        name: 'Sacred Fist',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=37853#p37853',
        author: 'Lago_AM3P',
        minimumStartingLevel: 6
    },
    {
        name: 'Godhand',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=37854#p37854',
        author: 'Lago_AM3P',
        minimumStartingLevel: 6
    },
    // ...[
    //     {
    //         name: 'Archer',
    //         link: 'https://web.archive.org/web/20050219174949/http://www.scshop.com/~ritaxis/ff/archer.html',
    //         minimumStartingLevel: 
    //     },
    // ].map(({ name, link, minimumStartingLevel }) => {
    //     return {
    //         name,
    //         author: "FrankTrollman",
    //         link,
    //         minimumStartingLevel,
    //         relatedLinks: [{
    //             title: `Frank's Final Fantasy Conversion`,
    //             link: 'https://web.archive.org/web/20050214093806/http://www.scshop.com/~ritaxis/ff/index.html',
    //         }],
    //     };
    // }),
];