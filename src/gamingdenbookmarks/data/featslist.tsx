import { Entry } from "../../entry";

export const feats: Entry[] = [
    {
        name: "Art of War",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141531#p141531",
        relatedLinks: [{ title: "Soldier", link: "https://tgdmb.com/phpBB3/viewtopic.php?t=50949" }]
    },
    ...['Arachnid Mastery [Monstrous]', 'Spider Magic: [Monstrous]'].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141533#p141533",
        }
    }),
    ...['Snake Mastery: [Monstrous]', 'Snake Magic: [Monstrous]'].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
            relatedLinks: [{ title: "Yuan-Ti Halfblood", link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534" }],
        }
    }),
    {
        name: "Magic of the Plant",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
    },
    ...[{
        name: "A Feast Unknown [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/A_Feast_Unknown_(3.5e_Feat)",
    },
    {
        name: "Body Assemblage [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Body_Assemblage_(3.5e_Feat)",
    },
    {
        name: "Feed the Dark Gods [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Feed_the_Dark_Gods_(3.5e_Feat)",
    },
    {
        name: "Path of Blood [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Path_of_Blood_(3.5e_Feat)",
    },
    {
        name: "Whispers of the Otherworld [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Whispers_of_the_Otherworld_(3.5e_Feat)",
    },
    {
        name: "Wrappings of the Ages [Necromantic Creation]",
        link: "https://dnd-wiki.org/wiki/Wrappings_of_the_Ages_(3.5e_Feat)",
    },
    {
        name: "Fairy Eater [General]",
        link: "https://dnd-wiki.org/wiki/Fairy_Eater_(3.5e_Feat)",
    },
    {
        name: "Heavenly Desserts [General]",
        link: "https://dnd-wiki.org/wiki/Heavenly_Desserts_(3.5e_Feat)",
    },
    {
        name: "Devil Preparation [General]",
        link: "https://dnd-wiki.org/wiki/Devil_Preparation_(3.5e_Feat)",
    },
    {
        name: "Child Necromancer [General]",
        link: "https://dnd-wiki.org/wiki/Child_Necromancer_(3.5e_Feat)",
    },
    {
        name: "Blood Painter [General]",
        link: "https://dnd-wiki.org/wiki/Blood_Painter_(3.5e_Feat)",
    },
    {
        name: "Sleep of the Ages [General]",
        link: "https://dnd-wiki.org/wiki/Sleep_of_the_Ages_(3.5e_Feat)",
    },
    {
        name: "Boneblade Master [General]",
        link: "https://dnd-wiki.org/wiki/Boneblade_Master_(3.5e_Feat)",
    },
    {
        name: "Ghost Cut Technique [General]",
        link: "https://dnd-wiki.org/wiki/Ghost_Cut_Technique_(3.5e_Feat)",
    },
    {
        name: "Enervating Touch [Undead]",
        link: "https://dnd-wiki.org/wiki/Enervating_Touch_(3.5e_Feat)"
    },
    {
        name: "Control Spawn [Undead]",
        link: "https://dnd-wiki.org/wiki/Control_Spawn_(3.5e_Feat)"
    },
    {
        name: "Paralyzing Touch [Undead]",
        link: "https://dnd-wiki.org/wiki/Paralyzing_Touch_(3.5e_Feat)",
    }].map((element) => {
        return {
            name: element.name,
            author: "Frank and K",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=34251#p34251',
            wikiLink: element.link
        }
    }),
    ...[
        {
            name: 'Apprenticeship [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Apprenticeship_(3.5e_Feat)'
        },
        {
            name: 'Attune Domain [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Attune_Domain_(3.5e_Feat)'
        },
        {
            name: 'Attune Sphere [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Attune_Sphere_(3.5e_Feat)'
        },
        {
            name: 'Blood War Sorcerer [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Blood_War_Sorcerer_(3.5e_Feat)'
        },
        {
            name: 'Blood War Squaddie [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Blood_War_Squaddie_(3.5e_Feat)'
        },
        {
            name: 'Breath Weapon [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Breath_Weapon_(3.5e_Feat)'
        },
        {
            name: 'Broker of the Infernal [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Broker_of_the_Infernal_(3.5e_Feat)'
        },
        {
            name: 'Carrier [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Carrier_(3.5e_Feat)'
        },
        {
            name: 'Constricting Fiend [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Constricting_Fiend_(3.5e_Feat)'
        },
        {
            name: 'Craft of the Soulstealer [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Craft_of_the_Soulstealer_(3.5e_Feat)'
        },
        {
            name: 'Devour the Soul [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Devour_the_Soul_(3.5e_Feat)'
        },
        {
            name: 'Dominions of the Infernal',
            wikiLink: 'https://dnd-wiki.org/wiki/Dominions_of_the_Infernal_(3.5e_Feat)'
        },
        {
            name: 'Elemental Aura [Fiend, Elemental]',
            wikiLink: 'https://dnd-wiki.org/wiki/Elemental_Aura_(3.5e_Feat)'
        },
        {
            name: 'Essence Gourmand [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Essence_Gourmand_(3.5e_Feat)'
        },
        {
            name: 'Extra Arms [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Extra_Arms_(3.5e_Feat)'
        },
        {
            name: 'Extra Summons [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Extra_Summons_(3.5e_Feat)'
        },
        {
            name: 'Fiend Cabalist [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Fiend_Cabalist_(3.5e_Feat)'
        },
        {
            name: 'Fiendish Invisibility [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Fiendish_Invisibility_(3.5e_Feat)'
        },
        {
            name: 'Greater Teleport [Monstrous]',
            wikiLink: 'https://dnd-wiki.org/wiki/Greater_Teleport_(3.5e_Feat)'
        },
        {
            name: 'Harmless Form [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Harmless_Form_(3.5e_Feat)'
        },
        {
            name: 'Heighten Spell-like Ability [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Heighten_Spell-like_Ability_(3.5e_Feat)'
        },
        {
            name: 'Hellscarred [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Hellscarred_(3.5e_Feat)'
        },
        {
            name: 'Huge Size [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Huge_Size_(3.5e_Feat)',
        },
        {
            name: 'Large Size [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Large_Size_(3.5e_Feat)'
        },
        {
            name: 'Memories of Death [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Memories_of_Death_(3.5e_Feat)'
        },
        {
            name: 'Pincers [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Pincers_(3.5e_Feat)'
        },
        {
            name: 'Poison Sacs [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Poison_Sacs_(3.5e_Feat)'
        },
        {
            name: 'Product of Infernal Dalliance [General]',
            wikiLink: 'https://dnd-wiki.org/wiki/Product_of_Infernal_Dalliance_(3.5e_Feat)'
        },
        {
            name: 'Slime Trail [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Slime_Trail_(3.5e_Feat)'
        },
        {
            name: 'Spines of Fury [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Spines_of_Fury_(3.5e_Feat)'
        },
        {
            name: 'Sting of the Scorpion [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Sting_of_the_Scorpion_(3.5e_Feat)'
        },
        {
            name: 'Stolen Breath [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Stolen_Breath_(3.5e_Feat)'
        },
        {
            name: 'Stoning Gaze [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Stoning_Gaze_(3.5e_Feat)'
        },
        {
            name: 'Supernatural Virulence [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Supernatural_Virulence_(3.5e_Feat)'
        },
        {
            name: 'Wings of Evil [Fiend]',
            wikiLink: 'https://dnd-wiki.org/wiki/Wings_of_Evil_(3.5e_Feat)'
        },
    ].map(({ name, wikiLink }) => {
        return {
            name,
            author: 'Frank and K',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=28831#p28831',
            wikiLink: wikiLink
        }
    }),
    ...[
        'Dragon Descendant [Affinity]',
        'Draconic Breath [Affinity]',
        'Draconic Breath, Metallic [Affinity]',
        'Draconic Domain [Affinity]',
        'Anarchic Affinity [Affinity]',
        'Axiomatic Affinity [Affinity]',
        'Celestial Affinity [Affinity]',
        'Infernal Affinity [Affinity]',
        'Planar Resistance [Affinity]',
        'Air Affinity [Affinity]',
        'Earth Affinity [Affinity]',
        'Fire Affinity [Affinity]',
        'Water Affinity [Affinity]',
        'Shadow Affinity [Affinity]',
        'Fey Child [Affinity]',
        'Affine Immunity [Affinity]',
        'Affine Resilience [Affinity]',
    ].map((element) => {
        return {
            name: element,
            author: 'Iaimeki',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=50377#p50377',
        }
    }),
    ...[
        'Wings of Good [Celestial]',
        'Ethereal Wings [Celestial]',
    ].map((element) => {
        return {
            name: element,
            author: 'Maxus',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=103679#p103679',
        }
    }),
    ...[
        'Synch Blade [General]',
        'Keyblade Armor',
        'Formchange [General]',
        'Sliding Dash [Fighter]',
        'Leaf Bracer [Spellcasting]'
    ].map((element) => {
        return {
            name: element,
            author: 'Wiseman',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=503541#p503541',
        }
    }),
    ...['Monk of the Dark Moon [Order]', 'Monk of the Long Death [Order]'].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=479366#p479366',
        }
    }),
    ...['Dabbler', 'Master of a School'].map((element) => {
        return {
            name: element,
            author: 'krusk',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=524466#p524466',
        }
    }),
    ...['Astral', 'Positive', 'Negative', 'Wood'].map((element) => {
        return {
            name: `${element} Blending [Blending]`,
            author: 'Kaelik',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154018#p154018',
            relatedLinks: [
                { title: 'Elemental Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154017#p154017' },
            ]
        }
    }),
    {
        name: 'Ethereal Blending [Blending]',
        author: 'Kaelik',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154018#p154018',
        relatedLinks: [
            { title: 'Elemental Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154017#p154017' },
            { title: 'Ethereal Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=449214#p449214' },
        ]
    },
    {
        name: 'Shadow Blending [Blending]',
        author: 'Kaelik',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154018#p154018',
        relatedLinks: [
            { title: 'Elemental Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154017#p154017' },
            { title: 'Shadow Siphon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=154018#p154018' },
        ]
    },
    ...[
        ...['Cosmopolitan Insect [Monstrous]', 'Expanded Targeting [Monstrous]'].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543836#p543836',
            }
        }),
        {
            name: "Mind Dungeon [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543872#p543872",
        },
        {
            name: "Leftovers [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543876#p543876",
        },
        ...['Hellfire Gullet [Monstrous]', 'Hellfrost Wyrm [Monstrous]'].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543878#p543878',
            }
        }),
        {
            name: "Gather the Dead [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543887#p543887",
        },
        {
            name: "Arachnoversity [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543892#p543892",
        },
        ...['Auras of Contentment [Monstrous]', 'Ghostly Guard Dog [Monstrous]'].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543909#p543909',
            }
        }),
        {
            name: "Secret Weapon [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543911#p543911",
        },
        {
            name: "Uncommon Blades [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543915#p543915",
        },
        {
            name: "Bear It All [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543916#p543916",
        },
        {
            name: "Speak The Truth [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543918#p543918",
        },
        {
            name: "Raging Angel Tactics [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543919#p543919",
        },
        {
            name: "Cunning Dog [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543941#p543941",
        },
        {
            name: "Non-Euclidean Placement [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543944#p543944",
        },
        {
            name: "Shadow Song [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543953#p543953",
        },
        {
            name: "Terrible Gaze [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543970#p543970",
        },
        {
            name: "Fiendish Trickery [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=543980#p543980",
        },
        ...['Blow Kiss [Monstrous]', 'Heart Breaker [Monstrous]', 'Prehensile Tail [Monstrous]'].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544048#p544048',
            }
        }),
        {
            name: "Very Sneaky Rat [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544067#p544067",
        },
        {
            name: "Mystic Dance Technique [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544071#p544071",
        },
        {
            name: "Hive Mind [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544105#p544105",
        },
        {
            name: "Knowledge Is Power [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544108#p544108",
        },
        {
            name: "Contractual Incentives [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544122#p544122",
        },
        {
            name: "Greater Entangle [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544134#p544134",
        },
        ...['Just Sign Here [Monstrous]', 'Hidden Clause [Monstrous]', 'Legally Binding [Monstrous]'].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544150#p544150',
            }
        }),
        {
            name: "Regular Summons [Monstrous]",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=544469#p544469",
        },
        ...['Coven Decorator [Monstrous]', 'Curse Crafter [Monstrous]'].map((name) => {
            return {
                name,
                link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544520#p544520',
            }
        }),
    ].map(({ name, link }) => {
        return {
            name,
            link,
            author: 'Koumei'
        }
    }),
    ...[
        'Dread Touch of the Abyss',
        'Born in Darkness',
        'Afternoon Shadows',
        'In the End',
    ].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=131636#p131636',
            relatedLinks: [{ title: 'Shadowcaster', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=127294#p127294' }]
        }
    }),
    {
        name: 'Imbue Darkness',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=132122#p132122',
        relatedLinks: [{ title: 'Shadowcaster', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=127294#p127294' }]
    },
    ...[
        'Visceral Splatter [Minion]',
        'Stringy Muscles [Minion]',
        'Clot [Minion]',
        'Fine Red Mist [Minion]',
        'Iron Bones [Minion]',
        'Crueller Harvest [Minion]',
        'Flailing Death [Minion]',
        'Cruellest Harvest [Minion]',
    ].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=316687#p316687',
        }
    }),
    ...[
        'Pile the Masses [Minion]',
        'Clog the Rivers with our Dead [Minion]',
        'Cruel Harvest [Minion]',
    ].map((name) => {
        return {
            name,
            author: 'SunTzuWarmaster',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=316687#p316687',
        }
    }),
    ...[
        'The Dead One Threw a Rock',
        'Trooper',
        'Clog their Rivers with our Dead',
        'Cruel Harvest',
    ].map((name) => {
        return {
            name,
            author: 'SunTzuWarmaster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=32766#p32766',
        }
    }),
    {
        name: "We've got explosives!",
        author: 'Fwib',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=32767#p32767',
    },
    {
        name: 'Arcane Meltdown',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=32768#p32768',
    },
    ...[
        'Disgusting Habits',
        'Exotic Weapon Master',
        'Useful in Death',
        'Fat Lootz',
        'Leader of Peons',
    ].map((name) => {
        return {
            name,
            author: 'SunTzuWarmaster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=32772#p32772',
        }
    }),
    {
        name: 'Target Practice',
        author: 'SunTzuWarmaster',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=32777#p32777',
    },
    ...[
        'Foolish Exotic Weapon Selection',
        'I drank oil',
        "The Little One's Curse",
    ].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=32790#p32790',
        }
    }),
    ...[
        "I Know Something You Don't Know",
        'Unbreakable',
        "Incredibly Irritating",
    ].map((name) => {
        return {
            name,
            author: 'Amra',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=92321#p92321',
        }
    }),
    ...[
        "Soldier's Stance",
        "Mighty Soldier's Stance",
        "Fantastic Soldier's Stance",
        "Giant Soldier's Stance",
        "Epic Soldier's Stance",
    ].map((name) => {
        return {
            name,
            author: 'CatharzGodfoot',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=218443#p218443',
            relatedLinks: [
                { title: 'Soldier', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=50949' },
                { title: 'wiki', link: 'https://dnd-wiki.org/wiki/Soldier_(3.5e_Class)' },
            ],
        }
    }),
    {
        name: 'Spidersight [Fiend]',
        author: 'Prak',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=382776#p382776',
    },
    ...[
        'Liminal Being',
        'An Ice Personality [Arcane, Divine]',
        'Great Balls of Fire [Arcane, Divine]',
        'Healing Hands [Divine]',
        'Hot Headed (Arcane, Divine)',
        'Hurting Hands [Divine]',
        'Magical Sleuth [Arcane]',
        "Nystul's Spying Apparatus [Arcane]",
        "Obiken's Mystical Hand [Arcane]",
        'Potion Weaponizer [Arcane, Divine]',
        'This Little Light of Mine [Arcane, Divine]',
        "Triaj's Sight [Divine]",
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=476334#p476334',
        }
    }),
    ...[
        {
            name: "Spider-fiend [Fiend]",
            link: "https://dnd-wiki.org/wiki/Spider-Fiend_(3.5e_Feat)",
        },
        {
            name: "Agony Caress [Fiend]",
            link: "https://dnd-wiki.org/wiki/Agony_Caress_(3.5e_Feat)",
        },
        {
            name: "Hard Freeze [Fiend]",
            link: "https://dnd-wiki.org/wiki/Hard_Freeze_(3.5e_Feat)",
        },
        {
            name: "Evil Eye [Fiend]",
            link: "https://dnd-wiki.org/wiki/Evil_Eye_(3.5e_Feat)",
        },
        {
            name: "Projectile Vomiting (Acid) [Fiend]",
            link: "https://dnd-wiki.org/wiki/Projectile_Vomiting,_Acid_(3.5e_Feat)",
        },
    ].map(({ name, link: wikiLink }) => {
        return {
            name,
            author: "Maxus",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=95455#p95455',
            wikiLink,
        }
    }),
    ...[
        'Water Demon [Fiend]',
        'Touch of the Styx [Fiend]',
        'Curse of Babel [Fiend]',
    ].map((name) => {
        return {
            name,
            author: 'Maxus',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=95455#p95455',
        }
    }),
    {
        name: 'Bat Out of Hell [Fiend]',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=95458#p95458',
        wikiLink: 'https://dnd-wiki.org/wiki/Bat_Out_of_Hell_(3.5e_Feat)'
    },
    {
        name: 'Energy Eater [Monster]',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=95458#p95458',
    },
    {
        name: 'Web Spinner [Fiend]',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=95476#p95476',
        wikiLink: 'https://dnd-wiki.org/wiki/Webspinner_(3.5e_Feat)'
    },
    {
        name: 'Hellish Humidity [Fiend]',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=95476#p95476',
    },
    {
        name: 'Speed Freak [Fiend, Celestial]',
        author: 'Maxus',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=130452#p130452',
    },
    {
        name: 'Incendiary Boils[Fiend]',
        author: 'Avoraciopoctules',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=132031#p132031',
    },
    {
        name: 'Blessed of Koumei',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=398013#p398013',
    },
    {
        name: 'Shaped Spell [Metamagic]',
        author: 'Kaelik',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=144442#p144442',
    },
    ...[
        'Shaped Spell [Metamagic]',
        'Strong Spell [Metamagic]',
        'Quicken Spell [Metamagic]',
        'Spell Timing [Metamagic]',
        'Duration Spell [Metamagic]',
        'Subtle Spell [Metamagic]',
    ].map((name) => {
        return {
            name,
            author: 'AlphaNerd',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=315832#p315832',
            note: <span>Also available <a href='https://tgdmb.com/phpBB3/viewtopic.php?p=144442#p144442'>here</a></span>
        }
    }),
    ...[
        'Eldritch Magick [Metamagic]',
        'Enhance Element [Metamagic]',
        'Energy Alteration [Metamagic]',
        'Greenbound Sumnmoning [Metamagic]',
        'Mana Drain [Metamagic]',
        'Negative Energy Infusion [Metamagic]',
        'Piercing Spell [Metamagic]',
        'Soothing Spell [Metamagic]',
    ].map((name) => {
        return {
            name,
            author: 'Red_Rob',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=315832#p315832',
        }
    }),
    ...[
        'Anger Point [Monstrous]',
        'Arena Trap [Monstrous]',
        'Battle Armour [Monstrous]',
        'Beautiful Idol [Monstrous][Idol]',
        'Clear Sky [Monstrous]',
        'Cool Idol [Monstrous][Idol]',
        'Cursed Body [Monstrous]',
        'Cute Charm [Monstrous]',
        'Cute Idol [Monstrous][Idol]',
        'Drought [Monstrous]',
        'Dry Skin [Monstrous]',
        'Eerie Emanation [Monstrous]',
        'Flood Warning [Monstrous]',
        'Hero [Monstrous]',
        'HM Slave [Monstrous]',
        'Hydration [Monstrous]',
        'Insight [Monstrous][Psionic]',
        'Insomnia [Monstrous]',
        'Jagged Edge [Monstrous]',
        'Levitate [Monstrous]',
        'Lightning Rod [Monstrous]',
        'Liquid Ooze [Monstrous]',
        'Magma Blood [Monstrous]',
        'Me First! [Monstrous]',
        'Mean [Monstrous]',
        'Melee Opportunist [Monstrous]',
        'Mood Maker [Monstrous]',
        'Moxie [Mosntrous]',
        'Oblivious [Monstrous]',
        'Poison Point [Monstrous]',
        'Pressure [Monstrous]',
        'Rock Head [Monstrous]',
        'Sand Veil [Monstrous]',
        'Sandstream [Monstrous]',
        'Scrappy [Monstrous]',
        'Smart Idol [Monstrous][Idol]',
        'Static [Monstrous]',
        'Sturdy Build [Monstrous]',
        'Swift Swim [Monstrous]',
        'Synchronise [Monstrous]',
        'Tough Idol [Monstrous] [Idol]',
        'Walking Winter [Monstrous]',
    ].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=280502#p280502',
            relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
        }
    }),
    {
        name: 'Hidden Power [Monstrous]',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=281990#p281990',
        relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },]
    },
    {
        name: "Espeon's Awakening (Monstrous)",
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62582#p62582',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: "Sneasel's Awakening (Monstrous)",
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62592#p62592',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: "Weavile's Awakening (Monstrous)",
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62592#p62592',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: "Umbreon's Awakening (Monstrous)",
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62633#p62633',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Metagross Evolution',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62728#p62728',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    ...[
        'Totemic Power',
        'Cosmic Support',
        'Cosmic Awareness',
        'Cosmic Control',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=441128#p441128',
        }
    }),
    ...[
        'Nethar Symbiote Bond',
        'Aggressive Protoplasm[Symbiote]',
        'Constricting Symbiote[Symbiote]',
        'Enhanced Chameleonic Ability[Symbiote]',
        'Extra Biomass[Symbiote]',
        'Greasy Protoplasm[Symbiote]',
        'Limb Shaping[Symbiote]',
        'Pincers[Symbiote]',
        'Shards of the Symbiote[Symbiote]',
        'Share Symbiote[Symbiote]',
        'Symbiote Domination[Symbiote]',
        'Weapon Shaping[Symbiote]',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=495227#p495227',
        }
    }),
    {
        name: 'Igor',
        author: 'Koumei',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=126426#p126426',
    },
    ...[
        'Gargantuan Size',
        'Colossal Size',
        'Immense Size',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=460460#p460460',
        }
    }),
    ...[
        'Versatile Magical Warrior [General]',
        'Focused Magical Warrior [General]',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=383896#p383896',
        }
    }),
    {
        name: "Extra Swarm Form [Undead]",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=162382#p162382"
    },
    {
        name: "Mindhound (Psionic, Regional--Scarlet Brotherhood)",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=371289#p371289"
    },
    {
        name: "Psihawk (Psionic, Regional--Scarlet Brotherhood)",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=371310#p371310"
    },
    ...[
        'Unoerthly Cave Looter (Regional--Barrier Peaks)',
        'Tainted by Unoerthly Magics (Regional--Barrier Peaks)',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=372314#p372314',
        }
    }),
    {
        name: "Craft Cybertronian [Item] (Item Creation)",
        author: "Prak",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=443375#p443375"
    },
    ...[
        'Linked-Con (Leadership)',
        'Brainmaster',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=443443#p443443',
            relatedLinks: [{ title: 'Cybertronian', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=443375#p443375' }]
        }
    }),
    ...[
        'Cobra School (Tactical)',
        'Way of the Flaming Fist (Tactical)',
        'Cheetah School Monk (Tactical)'
    ].map((name) => {
        return {
            name,
            author: 'Dean',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=51223#p51223',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    ...[
        'Cobra School Student',
        'Cobra School Master'
    ].map((name) => {
        return {
            name,
            author: 'Dean',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=51997#p51997',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    {
        name: 'Cobra School Initiate',
        author: 'Dean',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=51997#p51997'
    },
    ...[
        'Snake School[Monk]',
        'Cheetah School[Monk]',
        'Bo-staff Style[Monk]',
        'Bow Style[Monk]',
        'The Way of the Sword[Monk]',
    ].map((name) => {
        return {
            name,
            author: 'SunTzuWarmaster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=51997#p51997',
            relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
        }
    }),
    {
        name: 'Way of the Flaming Fist',
        author: 'SunTzuWarmaster',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=52156#p52156',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Bo-Staff Master',
        author: 'Dean',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=52175#p52175',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    {
        name: 'Way of the Flaming Fist',
        author: 'Dean',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=52332#p52332',
        relatedLinks: [{ title: 'Monk', link: 'https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)' }]
    },
    ...[
        'Rage [General]', 'Bardic Music [General]', 'Convincing Song [General]',
        'Liberating Song [General]', 'Subliminal Song [General]', 'Animal Companion [General]'
    ].map((name) => {
        return {
            name,
            author: 'Hicks',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=541847#p541847',
        }
    }),
    {
        name: 'Darkstalker [General]',
        author: 'Wiseman',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=367575#p367575',
    },
    {
        name: 'Master Plan [General]',
        author: 'Wiseman',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=309657#p309657',
    },
    ...[
        'Continual Study [General]', 'Sphere Access [General]', 'Expert Sphere Access [General]',
    ].map((name) => {
        return {
            name,
            author: 'Dominicius',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=263009#p263009',
        }
    }),
    ...[
        'Werewolf [Racial]', 'Wolf Form [Evolution 3]', 'Werewolf Hide [Evolution 3]',
        'Werewolf Fast Healing [Evolution 3]', 'Werewolf Hybrid Form [Evolution 6]',
        'Werewolf Dire Form [Evolution 9]', 'Vampire [Racial]', "Vampire's Dark Gift [Evolution 3]",
        'Vampire Fast Healing [Evolution 3]', "Vampire's Greater Dark Gift [Evolution 6]", 'Vampire Master [Evolution 9]',
        'Cambion (Half-Fiend) [Racial]', 'Fiend Blood [Evolution 1]', 'Fiend Body [Evolution 1]', 'Darkness Eternal [Evolution 3]',
        'Devil Wings [Evolution 6]', 'Nephilim (Half-Celestial) [Racial]', 'Celestial Blood [Evolution 1]', 'Celestial Body [Evolution 1]',
        'Daylight Eternal [Evolution 3]', 'Angelic Wings [Evolution 6]', 'Sprite [Racial]', 'Sprite Invisibility [Evolution 1]',
        'Grig Shape [Evolution 1]', 'Nixie Lung [Evolution 1]', 'Pixie Wings [Evolution 1]',
    ].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=258529#p258529',
        }
    }),
    ...[
        'Werewolf [Cures, Racial]', 'Werewolf Hybrid Form [Evolution]', 'Werewolf Hide [Evolution 3]',
        'Dire Werewolf [Evolution 6]',
    ].map((name) => {
        return {
            name,
            author: 'CatharzGodfoot',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=258916#p258916',
        }
    }),
    {
        name: 'Mechanicals [Racial]',
        author: 'JonSetanta',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=256521#p256521',
    },
    {
        name: 'Greatest Shark Friend [Monstrous]',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544993#p544993',
    },
    {
        name: 'Leader of Peons [Leadership]',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=317384#p317384',
        relatedLinks: [{ title: 'Perfect Minion', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=316687#p316687' }]
    },
    ...[
        'Wings of Mercy [Celestial]',
        'Wings of Protection [Celestial]',
        'Wings of Pure Light [Celestial]',
        'Wings of Radiance [Celestial]',
        'Wings of Smiting [Celestial]',
    ].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=103410#p103410',
        }
    }),
    ...[
        'Product of Celestial Dalliance [Celestial]',
        'Wings of Good [Celestial]',
    ].map((element) => {
        return {
            name: element,
            author: 'SunTzuWarmaster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=101447#p101447',
        }
    }),
    {
        name: "Improved Familiar [General]",
        author: "Wiseman",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=282916#p282916",
    },
    {
        name: "Product of Celestial Dalliance [Celestial]",
        author: "Draculmaulkee",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=151041#p151041",
    },
    {
        name: 'Shadow Specialist',
        author: 'fatmonkey13',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51744',
    },
    ...[
        'Dragon of the Hills',
        'Dragon of the Skies',
        'Dragon of the Waters',
    ].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=176708#p176708',
        }
    }),
    ...[
        'False Pretenses [Spelltouched]',
        'Folk Lore',
        'Healing Hands',
        'Idle Hands',
        'Iron Hands',
        'Jazz Hands',
        'Omniscient Whispers [Spelltouched]',
        'Pack Mule',
    ].map((name) => {
        return {
            name,
            author: 'virgil',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=165139#p165139',
        }
    }),
    ...[
        'Blinding Strike [Ambush]',
        'Painful Strike [Ambush]',
    ].map((name) => {
        return {
            name,
            author: 'Emerald',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=127717#p127717',
        }
    }),
    {
        name: 'Blinding Strike [Ambush]',
        author: 'Apalala',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=127798#p127798',
    },
    ...[
        'Rend Armor [Ambush]',
        'Bane Strike [Ambush]',
        'Stunning Strike [Ambush]',
        'Knockout Strike [Ambush]',
        'Death Strike [Ambush]',
    ].map((name) => {
        return {
            name,
            author: 'Apalala',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=128001#p128001',
        }
    }),
    {
        name: 'Rune Forging',
        author: 'God_of_Awesome',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50576',
    },
    {
        name: 'Theurgic Training [Paladin]',
        author: 'Crissa',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50565',
    },
    {
        name: 'Warmage Focus [General]',
        author: 'JonSetanta',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50002',
    },
    ...[
        'Desperate Blows [General]',
        'Vehemence [General]',
    ].map((name) => {
        return {
            name,
            author: 'Shokorai',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=63888#p63888',
        }
    }),
    ...[
        'Cautious Warrior [Combat]',
        'Aggressive Warrior [Combat]',
        'Reactive Warrior [Combat, Maneuver]',
    ].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=63352#p63352',
        }
    }),
    {
        name: 'Omnicompetence',
        author: 'RiotGearEpsilon',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=58541#p58541',
    },
    ...[
        'Wild Attack [Combat]',
        'Awesome Damage [Combat]',
        'Supreme Expertise [Combat]',
        'Item Expertise [Combat]',

    ].map((name) => {
        return {
            name,
            author: 'NoDot',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=40246#p40246',
        }
    }),
    {
        name: 'Improved Explosions [Metamagic]',
        author: 'JonSetanta',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40044',
    },
    ...[
        'Arcane Training [General]',
        'Warrior Mage [General, Fighter]',
    ].map((name) => {
        return {
            name,
            author: 'virgil',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39457#p39457',
        }
    }),
    ...[
        'Magical Goods Crafter [Craft]',
        'Magical Item Crafter [Craft]',
    ].map((name) => {
        return {
            name,
            author: 'Judging__Eagle',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39160#p39160',
        }
    }),
    {
        name: 'Phalanx Wall',
        author: 'virgil',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=39113',
    },
    {
        name: 'Dodge [General]',
        author: 'I_mongo',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=37971#p37971',
    },
    ...[
        'Skill Focus', 'Toughness', 'Iron Will', 'Lightning Reflexes', 'Great Fortitude',
        'Craft Magical Equipment', 'Craft Magical Items', 'Endurance', 'Dodge', 'Mobility',
        'Mobility', 'Whirlwind Attack', 'Exotic Weapon Proficiency', 'Weapon Focus',
        'Weapon Specialization',
    ].map((name) => {
        return {
            name,
            author: 'Lago_AM3P',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=37859#p37859',
        }
    }),
    ...[
        'Energy Master', 'Professional Wrestler', 'Assassination', 'Divine Channeler',
    ].map((name) => {
        return {
            name: `${name} [Tactical]`,
            author: 'Lago_AM3P',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=37859#p37859',
        }
    }),
    {
        name: 'Fantastic Elasticity',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=441472#p441472',
        author: 'Prak',
    },
    {
        name: "Energy Strike [Celestial (Outsider?)]",
        author: "For Valor",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=144806#p144806",
    },
    {
        name: "Chitin Creator [Vermincrafting]",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=555354#p555354",
    },
    {
        name: "Shadow-Stuff [A Feat Per Level]",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=555767#p555767",
    },
    {
        name: "Polarized Fear Energy [Feat]",
        author: "Kaelik",
        link: "https://drive.google.com/uc?export=view&id=1iM-_6abVvoqudy6jcS2kDLV4c4uUMbOa",
    },
    ...[
        'Deep Lasher (Aberrant, Cultist)', 'Frog Legs (Aberrant, Cultist)', 'Grappling Tongue (Aberrant, Cultist)',
    ].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=561323#p561323',
        }
    }),
    {
        name: "Multibattle [General]",
        author: "Prak",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=571544#p571544",
        relatedLinks: [{ title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },],
    },
    ...[
        'Scribe Scroll [Item Creation]', 'Brew Potion [Item Creation]',
        'Craft Magical Arms and Armor [Item Creation]', 'Craft Wondrous Item [Item Creation]',
    ].map((name) => {
        return {
            name,
            author: 'Lokathor',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?t=55252',
        }
    }),
];

export const featCollections: Entry[] = [
    {
        name: "Pokemon Mystery Dungeon D20",
        author: "Wiseman, others",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=405125#p405125"
    },
    {
        name: "Tome of Necromancy Feats",
        author: "Frank and K",
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=34251#p34251',
        wikiLink: "https://dnd-wiki.org/wiki/Tome_of_Necromancy_(3.5e_Sourcebook)/Necromancers_with_Style"
    },
    {
        name: "A Feat Per Level List",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=57248"
    },
    {
        name: 'Stuff For the Tabletop Game for New Players',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=435197#p435197',
        relatedLinks: [{ title: 'A Feat Per Level List is more recent', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=57248' }]
    },
    {
        name: "Feat/Level List, Take Two",
        author: "virgil",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=57049"
    },
    {
        name: 'Preliminary Feat/Level List',
        author: 'virgil',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=56656',
        relatedLinks: [{ title: 'Feat/Level List, Take Two', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=57049' }]
    },
    {
        name: "Achievement Feats",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=87970#p87970"
    },
    {
        name: "Tome of Incredible Feats",
        author: "DenizenKane",
        link: "https://docs.google.com/document/d/1NX_M3Q5LrmpnxzFjais81YIm6IfH6iGrqbR72VVg4js/edit",
        relatedLinks: [{ title: 'Den Thread', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=56941' }]
    },
]