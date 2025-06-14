import { Entry } from "../../entry";

export const races: Entry[] = [
    ...(["Baast", "Hathor"].map((value) => {
        return {
            name: value,
            author: "AndreiChekov",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=479208#p479208"
        }
    })),
    ...(["Centaur", "Drider", "Deep Gnome", "Satyr", "Triton", "Sahuagin", "Merfolk"].map((value) => {
        return {
            name: value,
            author: "Chamomile",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=384559#p384559"
        }
    })),
    {
        name: "Dragonling",
        author: "Kaelik",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=141884#p141884",
    },
    {
        name: "Dryad",
        author: "QuantumBoost",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=51129",
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
    ...(["Earth Genasi", "Fire Genasi"].map((value) => {
        return {
            name: value,
            author: "Koumei",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=435197#p435197"
        }
    })),
    {
        name: "Giantkin",
        author: "IGTN",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=50214",
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
    ...(["Gith", "Gnoll", "Bugbear", "Lizardfolk", "Merfolk (new)", "Satyr (new)", "Troglodyte"].map((value) => {
        return {
            name: value,
            author: "Chamomile",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=385196#p385196"
        }
    })),
    {
        name: "Half-Elf",
        author: "Chamomile",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=384594#p384594",
    },
    {
        name: "Half-Elf",
        author: "RadiantPhoenix",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=384560#p384560",
    },
    {
        name: "Irikara",
        author: "AndreiChekov",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=56037",
        relatedLinks: [
            {
                title: "Irikara Heretic",
                link: "https://tgdmb.com/phpBB3/viewtopic.php?p=439047#p439047"
            }
        ]
    },
    {
        name: "Lizardfolk",
        author: "Surgo",
        link: "https://dnd-wiki.org/wiki/Lizardfolk_Variant_%283.5e_Race%29",
        relatedLinks: [
            {
                title: "Lizardfolk Paragon",
                link: "https://dnd-wiki.org/wiki/Lizardfolk_Paragon_%283.5e_Racial_Paragon_Class%29"
            },
            {
                title: 'Thread',
                link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=50006'
            }
        ]
    },
    {
        name: "Ogre",
        author: "ZER0",
        link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=75753#p75753",
    },
    {
        name: "Robot Girl",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=50551",
        relatedLinks: [
            ...(['Some Magic Items, Arch-Golem Execution Girlfriend (PrC)'].map((value) => {
                return {
                    title: value,
                    link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=141531#p141531'
                }
            }))
        ]
    },
    ...(["Aasimar", "Drow", "Dwarf", "Elf", "Feytouched", "Gnome", "Half-Elf", "Halfling",
        "Half-orc", "Hobgoblin", "Human", "Ironling", "Kappa", "Kobold", "Lizardfolk", "Orc", "Ratling", "Tengu", "Tiefling",].map((value) => {
            return {
                name: value,
                author: "Lokathor",
                link: "https://www.tgdmb.com/phpBB3/viewtopic.php?t=56350"
            }
        })),
    {
        name: "Githyanki/Githzerai",
        author: "Quantumboost",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=132973",
        wikiLink: "https://dnd-wiki.org/wiki/Githyanki/Githzerai_%283.5e_Race%29",
        relatedLinks: [
            { title: 'Githyanki Paragon', link: 'https://dnd-wiki.org/wiki/Githyanki_Paragon_%283.5e_Racial_Paragon_Class%29' },
            { title: 'Githzerai Paragon', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=133215#p133215' },
        ]
    },
    {
        name: "Neko-oni",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
    },
    {
        name: "Aranea",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141532#p141532",
    },
    {
        name: "Yuan-ti Halfblood",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141534#p141534",
    },
    {
        name: "Empusa",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141535#p141535",
    },
    {
        name: "Vaxt",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141536#p141536",
    },
    {
        name: "True Dragon",
        author: "Hicks",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?t=50217",
    },
    {
        name: "Volodni",
        author: "PhaedrusXY",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=134347#p134347",
    },
    ...(["Aasimar", "Drow", "Dwarf", "Elf", "Gnoll", "Gnome", "Goblin", "Half-elf", "Halfling", "Human",
        "Iron Born", "Kobold", "Minotaur", "Sprite"].map((value) => {
            return {
                name: value,
                author: "Sigil",
                link: "https://drive.google.com/file/d/16_wSUELEwfcguLiGrbcu70YIHKw-DEex/view"
            }
        })),
    ...([
        {
            name: "Aasimar",
            link: "https://dnd-wiki.org/wiki/Aasimar_%283.5e_Race%29",
        },
        {
            name: "Drow",
            link: "https://dnd-wiki.org/wiki/Drow_%283.5e_Race%29",
        },
        {
            name: "Goblin",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Goblin",
        },
        {
            name: "Hobgoblin",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Hobgoblin",
        },
        {
            name: "Orc",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Orc",
        },
        {
            name: "Half-Orc",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Half-Orc",
        },
        {
            name: "Tiefling",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Tiefling",
        },
        {
            name: "Minotaur (Minimum Level 5)",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Method_1:_The_Easy_Way",
        },
        {
            name: "Succubus (Minimum Level 8)",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Method_1:_The_Easy_Way",
        },
        {
            name: "Gnoll (Minimum Level 2)",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Gnoll_.28Minimum_Level_2.29",
        },
        {
            name: "Bugbear (Minimum Level 3)",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Bugbear_.28Minimum_Level_3.29",
        },
        {
            name: "Ogre (Minimum Level 4)",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Ogre_.28Minimum_Level_4.29",
        },
        {
            name: "Frost Giant (Minimum Level 10)",
            link: "https://dnd-wiki.org/wiki/Races_of_War_(3.5e_Sourcebook)/Playing_Unusual_Races#Frost_Giant_.28Minimum_Level_10.29",
        },
    ].map((value) => {
        return {
            name: value.name,
            author: "Frank and K",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=33296#p33296",
            wikiLink: value.link
        }
    })),
    ...([
        "Lucario", "Pikachu", "Gardevoir", "Machamp", "Charizard", "Garchomp", "Zoroark",
        "Ninetales", "Diancie", "Blastoise", "Alakazam", "Mawile", "Delphox", "Sceptile",
        "Lycanroc", "Vespiquen"
    ].map((value) => {
        return {
            name: value,
            author: "Wiseman",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=405100#p405100"
        }
    })),
    ...(["Floatzel", "Delibird", "Furret", "Golett/Golurk"].map((value) => {
        return {
            name: value,
            author: "FeyMagician",
            link: "https://tgdmb.com/phpBB3/viewtopic.php?p=527470#p527470"
        }
    })),
    {
        name: "Troll (Discworld)",
        author: "Koumei",
        link: "https://tgdmb.com/phpBB3/viewtopic.php?p=141343#p141343",
    },
    ...([
        'Orc', 'Nekomata', 'Empusa', 'Alraune',
        'Mothman', 'Marionette', 'Ghost', 'Vampire',
        'Angel', 'Jack'
    ].map((name) => {
        return {
            name: `${name} (Disgaea)`,
            author: "Koumei",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=154515#p154515"
        }
    })),
    {
        name: 'Prinny (Disgaea)',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=154324#p154324',
        author: 'Koumei'
    },
    {
        name: 'Hoplite',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=136761#p136761',
        author: 'Maxus'
    },
    ...[
        { name: 'Gria', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=457540#p457540' },
        { name: 'Matoran', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=468716#p468716' },
        { name: 'Witch', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=424325#p424325' },
        { name: 'Zenythri', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=413827#p413827' },
        { name: 'Kappa', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=489536#p489536' },
        { name: 'Merfolk', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=465680#p465680' },
        { name: 'Planetouched', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=428664#p428664' },
        { name: 'Tuladhara', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575090#p575090' },
    ].map(({ name, link }) => {
        return {
            name,
            link,
            author: 'Wiseman'
        }
    }),
    {
        name: 'Were-Espeon',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62582#p62582',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Were-Sneasel',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62592#p62592',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Were-Umbreon',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62633#p62633',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Were-Metang',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=62728#p62728',
        author: 'Koumei',
        relatedLinks: [
            { title: 'Pokémon d20', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)' },
        ]
    },
    {
        name: 'Castlewatch Gargoyles',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=169292#p169292',
        author: 'Prak',
    },
    {
        name: 'Apiar',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=311987#p311987',
        author: 'Prak',
    },
    {
        name: 'Nosgothian Vampire, Fledgling',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=140281#p140281',
        author: 'Prak',
        relatedLinks: [{ title: 'Adult', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=140612#p140612' }]
    },
    {
        name: 'Atlantean',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=441595#p441595',
        author: 'Prak',
    },
    {
        name: 'Constructoid',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=441609#p441609',
        author: 'Prak',
    },
    {
        name: 'Igor',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=126414#p126414',
        author: 'Prak',
    },
    {
        name: 'Discworld Gnome (Nac Mac Feegle, Pictsies)',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=126429#p126429',
        author: 'Prak',
    },
    {
        name: 'Troll (Discworld)',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=460460#p460460',
        author: 'Prak',
    },
    ...(["Kappa", "Kitsune", "Nekomata", "Tanuki", 'Tengu', 'Usagi', 'Yuki-Onna'].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=155933#p155933"
        }
    })),
    ...(["Xuan", "Wu", "Yak Folk", "Naga", 'Balu',].map((value) => {
        return {
            name: value,
            author: "Prak",
            link: "https://www.tgdmb.com/phpBB3/viewtopic.php?p=155935#p155935"
        }
    })),
    {
        name: 'Cybertronian (Minimum Character Level 4)',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=443375#p443375',
        author: 'Prak',
    },
    {
        name: 'Race Revisions and Race Trait system',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=56113',
        author: 'AcidBlades',
    },
    ...[
        'Human', 'Elf', 'Dwarf', 'Halfling', 'Orc', 'Ogre', 'Troll', 'Ratfolk', 'Goblin', 'Tengu',
        'Tiefling', 'Aasimar', 'Gargoyle', 'Draconian', 'Catfolk', 'Thri-Kreen', 'Centaur',
    ].map((name) => {
        return {
            name,
            author: "DenizenKane",
            link: 'https://docs.google.com/document/d/1Xw7fNl_7cns6t1ywrRagJNpGNYVeEiZgsv8SqkKlMAU/edit',
            relatedLinks: [{ title: 'Den Thread', link: 'https://tgdmb.com/phpBB3/viewtopic.php?t=56941' }]
        }
    }),
    ...[
        'Doric', 'Flight-Adapted-Entity', 'Gnomon',
    ].map((name) => {
        return {
            name,
            author: "Prak",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=417274#p417274',
        }
    }),
    ...[
        'Organic Recombinant Constructs', 'Utero-Cons',
    ].map((name) => {
        return {
            name,
            author: "Prak",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=417276#p417276',
        }
    }),
    ...[
        'Garif', 'Nu Mou', 'Viera', 'Moogle',
    ].map((name) => {
        return {
            name,
            author: 'Wiseman',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=313514#p313514',
        }
    }),
    {
        name: 'Holstaur',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=245658#p245658',
        author: 'icyshadowlord',
    },
    ...[
        'Ankylodon', 'Broucci', 'Ophidian', 'Ponaturi', 'Raptor', 'Slaan',
    ].map((name) => {
        return {
            name,
            author: 'Count Arioch the 28th',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=226876#p226876',
        }
    }),
    ...[
        'Akavish', 'Chloroph', 'Kunian', 'Marahnian', 'Fang Fish/Napici Namah', 'Zarkaia',
    ].map((name) => {
        return {
            name,
            author: 'icyshadowlord',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=198824#p198824',
        }
    }),
    {
        name: 'Warforged',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=163862#p163862',
        author: 'Kaelik',
    },
    ...[
        'Human', 'Bugbear', 'Changeling', 'Dryad', 'Gnoll', 'Goblin',
        'Hobgoblin', 'Kobold', 'Kuo-Toa', 'Lamia', 'Lizardfolk', 'Pixie', 'Slaad'
    ].map((name) => {
        return {
            name: `${name} (Josh's Enkopja Campaign Doc)`,
            author: 'Josh_Kablack',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=178497#p178497',
        }
    }),
    {
        name: 'Scorpionfolk (Minimum Level 8)',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545498#p545498',
        author: 'Koumei',
    },
    {
        name: 'Awakened Skeleton',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547370#p547370',
        author: 'Koumei',
    },
    {
        name: 'Awakened Zombie',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547381#p547381',
        author: 'Koumei',
    },
    ...[
        'Dwarf', 'Halfling', 'Elf', 'Drow', 'Orc', 'Human',
        'Tiefling', 'Aasimar',
    ].map((name) => {
        return {
            name,
            author: 'fatmonkey13',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=172322#p172322',
        }
    }),
    {
        name: 'Mouse Droid',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=165843#p165843',
        author: 'Vebyast',
    },
    {
        name: 'Catfolk',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=143968#p143968',
        author: 'Orion',
    },
    {
        name: 'Warforged',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=125241#p125241',
        author: 'schpeelah',
    },
    {
        name: 'Grippli',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50547',
        author: 'Judging__Eagle',
    },
    {
        name: 'Redcap',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=122548#p122548',
        author: 'koz',
    },
    {
        name: 'Orog',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=114664#p114664',
        author: 'IGTN',
    },
    {
        name: 'Half-elf',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=63727#p63727',
        author: 'Maxus',
    },
    {
        name: 'Shifter',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=104428#p104428',
        author: 'Maxus',
    },
    {
        name: 'Pamb-uh',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=63395#p63395',
        author: 'Cynic',
    },
    {
        name: 'Immortal',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=39966#p39966',
        author: 'Judging__Eagle',
    },
    {
        name: 'Red Dragon',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=37954',
        author: 'canamrock',
    },
    ...[
        { name: 'Deku Scrub', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.tlroyg26bpu9' },
        { name: 'Goron', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.l3jzjos219og' },
        { name: 'Zora', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.w2zrfxv2sm4s' },
        { name: 'Rito', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.b8gvuagp7gx5' },
        { name: 'Korok', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.klzkn9x6yxo4' },
        { name: 'Bokoblin', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.nnk332bkd5dz' },
        { name: 'Moblin', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.is2iopgnhcfq' },
        { name: 'Lizalfos', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.mkmuyweetc6y' },
        { name: 'Argonian', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.9t5qzv9eqg88' },
        { name: 'Breton', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.lxfov6dzczwx' },
        { name: 'Dark Elf (Dunmer)', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.nw8dzdaz9gv4' },
        { name: 'High Elf (Altmer)', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.w8tyv97bgqa' },
        { name: 'Imperial', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.2d40t9vo6co0' },
        { name: 'Khajiit', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.qdf0u7pls80a' },
        { name: 'Nord', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.jdstb5ud3486' },
        { name: 'Orc (Orismer)', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.68p4zuowjbxp' },
        { name: 'Redguard', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.nwash8b2qpw8' },
        { name: 'Wood Elf (Bosmer)', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.1q029cxci80u' },
        { name: 'Dremora', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.de532tmedubj' },
        { name: 'Alfiq (Khajiit)', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.emb9e5rbo8t6' },
        { name: 'Lynel', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.s3rl9i82dcjs' },
        { name: 'Snow Elf (Falmer)', link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.elvi12f69qaw' },
    ].map(({ name, link }) => {
        return {
            name,
            link,
            author: 'Darth Rabbitt'
        }
    }),
    {
        name: 'Dwarf (Dwemer)',
        link: 'https://docs.google.com/document/d/1jONiQ6EQto1baV4EtIUwK3inZurY5FqlO88kAKG2wA8/edit#heading=h.ktun7liz0mih',
        author: 'radthemad4',
    },
    {
        name: 'Garou (Werewolf)',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=440580#p440580',
        author: 'Prak',
    },
    {
        name: 'Eladrin',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=564282#p564282',
        author: 'Wiseman',
    },
    {
        name: 'Dremora',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=573531#p573531',
        author: 'Wiseman',
    },
    {
        name: 'Haunt',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=574835#p574835',
        author: 'Wiseman',
    },
    {
        name: 'Human',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575001#p575001',
        author: 'Wiseman',
    },
    {
        name: 'Ungor',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575140#p575140',
        author: 'Wiseman',
    },
];