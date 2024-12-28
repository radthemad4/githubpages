import { Entry } from "../../entry";

export const spells: Entry[] = [
    ...[{
        name: "Congealing Consumption (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Congealing_Consumption_(3.5e_Spell)",
    },
    {
        name: "Curse of Crumbling Conviction (Sorcerer/Wizard 4)",
        link: "https://dnd-wiki.org/wiki/User:Frank_and_K/Curse_of_Crumbling_Conviction_(3.5e_Spell)",
    },
    {
        name: "Dark Symmetry (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Dark_Symmetry_(3.5e_Spell)",
    },
    {
        name: "Form of Death (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Form_of_Death_(3.5e_Spell)",
    },
    {
        name: "Puppet Dance (Sorcerer/Wizard 3)",
        link: "https://dnd-wiki.org/wiki/Puppet_Dance_(3.5e_Spell)",
    },
    {
        name: "Sobering Skeletal Stillness (Sorcerer/Wizard 1)",
        link: "https://dnd-wiki.org/wiki/Sobering_Skeletal_Stillness_(3.5e_Spell)",
    },
    {
        name: "Tasha's Tomb Tainting (Sorcerer/Wizard 1)",
        link: "https://dnd-wiki.org/wiki/Tasha%27s_Tomb_Tainting_(3.5e_Spell)",
    },
    {
        name: "Tomb Tile Tessellation (Sorcerer/Wizard 2)",
        link: "https://dnd-wiki.org/wiki/Tomb_Tile_Tessellation_(3.5e_Spell)",
    },].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=34252#p34252',
            wikiLink: element.link
        }
    }),
    ...[
        {
            name: 'Polymorph Self (Sorcerer/Wizard 4)',
            wikiLink: 'https://dnd-wiki.org/wiki/Polymorph_Self,_Tome_(3.5e_Spell)'
        },
        {
            name: 'Polymorph Other (Sorcerer/Wizard 4)',
            wikiLink: 'https://dnd-wiki.org/wiki/Polymorph_Other,_Tome_(3.5e_Spell)'
        },
        {
            name: 'Mass Polymorph (Sorcerer/Wizard 7)',
            wikiLink: 'https://dnd-wiki.org/wiki/Mass_Polymorph,_Tome_(3.5e_Spell)'
        },
        {
            name: 'Human Form (Bard 1, Sorcerer/Wizard 2)',
            wikiLink: 'https://dnd-wiki.org/wiki/Human_Form_(3.5e_Spell)'
        },
        {
            name: 'Lycanthropy (Sorcerer/Wizard 3)',
            wikiLink: 'https://dnd-wiki.org/wiki/Lycanthropy_(3.5e_Spell)'
        },
        {
            name: 'Monstrous Form (Sorcerer/Wizard 4)',
            wikiLink: 'https://dnd-wiki.org/wiki/Monstrous_Form_(3.5e_Spell)'
        },
        {
            name: 'Fiend Form (Sorcerer/Wizard 6)',
            wikiLink: 'https://dnd-wiki.org/wiki/Dragon_Form_(3.5e_Spell)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=28552#p28552',
            wikiLink: element.wikiLink
        }
    }),
    ...[
        "Ashe's Thaumaturgic Boost (Sorcerer/Wizard 4)",
        "Ashe's Transformative Counterspell (Druid 5, Sorcerer/Wizard 5)",
        "Demise Unseen (Cleric 9, Druid 9)",
        "Elush's Elusion (Ranger 3, Paladin 3, Sorcerer/Wizard 3)",
        "Elush's Eye-Blasting Explosion (Sorcerer/Wizard 2)",
        'Hijacking Dispel (Cleric 8, Druid 8)',
        'Hijack Spell (Bard 3, Sorcerer/Wizard 3)',
        "Ishara's Enticing Directive (Sorcerer/Wizard 1)",
        "Luck's Touch (Cleric 9, Sorcerer/Wizard 9)",
        "Phantasmagorical Image (Bard 9, Sorcerer/Wizard 9)",
        "Winds of Memory (Sorcerer/Wizard 9)",
        "Word of Blinding (Sorcerer/Wizard 5)",
        "Word of Catatonia (Bard 7, Sorcerer/Wizard 7)",
    ].map((name) => {
        return {
            name,
            author: 'koz',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=123198#p123198',
        }
    }),
    ...[
        "Balor's Clutch (Sorcerer/Wizard 0)",
        "Phantasmal Blade (Sorcerer/Wizard 0)",
    ].map((name) => {
        return {
            name,
            author: 'virgil',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=490427#p490427',
        }
    }),
    ...[
        "Temporal Paradox (Sorcerer/Wizard 3)",
        "Panemondium's Howl (Sorcerer/Wizard 3)",
    ].map((name) => {
        return {
            name,
            author: 'virgil',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=500451#p500451',
        }
    }),
    {
        name: 'Clutch of Cania (Sorcerer/Wizard 1)',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=516151#p516151',
    },
    {
        name: 'Triplecast (Psychic 5)',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=523894#p523894',
        relatedLinks: [{ title: 'Psychic', link: 'https://www.d20pfsrd.com/alternative-rule-systems/occult-adventures/occult-classes/psychic/' }]
    },
    {
        name: 'Mnemonic Enhancer (Sorcerer/Wizard 4)',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90617#p90617',
    },
    ...[
        "Air Walk (Cleric 3, Ranger 3)",
        "Animal Summons (Druid 2)",
        "Animate Dead (Cleric 3, Sorcerer/Wizard 3)",
        "Animus Nova (Sorcerer/Wizard 7)",
        "Antilife Shell (Cleric 6)",
        "Awaken (Druid 5)",
        "Blackened Ground (Cleric 1, Druid 1, Sorcerer/Wizard 1)",
        "Burning Hands (Sorcerer/Wizard 0)",
        "Calm Animals (Druid 1)",
        "Cause Fear (Cleric 1, Sorcerer/Wizard 1)",
        "Chain Lightning (Sorcerer/Wizard 2)",
        "Confusion (Bard 3, Sorcerer/Wizard 3)",
        "Control Winds (Druid 5)",
        "Create Undead (Cleric 2, Sorcerer/Wizard 2)",
        "Death Ward (Cleric 4, Druid 4, Paladin 4)",
        "Destruction (Cleric 6)",
        "Discern Location (Cleric 8, Sorcerer/Wizard 8)",
        "Disintegrate (Sorcerer/Wizard 6)",
        "Dominate Animal (Druid 3)",
        "Dominate Monster (Bard 8, Sorcerer/Wizard 8)",
        "Dominate Person (Bard 5, Sorcerer/Wizard 5)",
        "Earthquake (Cleric 5, Druid 5)",
        "Eclipse (Cleric 8, Sorcerer/Wizard 8)",
        "Fireball (Sorcerer/Wizard 1)",
        "Fog Cloud (Druid 2, Sorcerer/Wizard 2)",
        "Freedom (Sorcerer/Wizard 9)",
        "Funeral Pyre (Druid 4)",
        "Gate (Bard 9, Cleric 9, Sorcerer/Wizard 9)",
        "Harm (Cleric 5, Druid 5, Paladin 5)",
        "Hold Animal (Druid 2, Ranger 2)",
        "Hold Person (Cleric 3, Sorcerer/Wizard 3)",
        "Horrid Wilting (Sorcerer/Wizard 1)",
        "Implosion (Cleric 7)",
        "Imprisonment (Sorcerer/Wizard 9)",
        "Inflict Critical Wounds (Cleric 3, Druid 3, Paladin 3)",
        "Inflict Light Wounds (Cleric 1, Druid 1, Paladin 1)",
        "Insanity (Sorcerer/Wizard 5)",
        "Iron Body (Paladin 7, Sorcerer/Wizard 7)",
        "Mass Inflict Light Wounds (Cleric 2, Druid 2)",
        "Mass Inflict Serious Wounds (Cleric 4, Druid 4)",
        "Maze (Sorcerer/Wizard 8)",
        "Obscuring Mist (Cleric 1, Druid 1, Sorcerer/Wizard 1)",
        "Perfect Animal Summons (Druid 4)",
        "Planar Call (Cleric 3, Sorcerer/Wizard 3)",
        "Prismatic Spray (Sorcerer/Wizard 6)",
        "Resist Energy (Cleric 2, Druid 2, Paladin 2, Ranger 2, Sorcerer/Wizard 2)",
        "Shatter (Bard 2, Cleric 2, Sorcerer/Wizard 2)",
        "Solid Fog (Sorcerer/Wizard 4)",
        "Slay Living (Cleric 5)",
        "Soften Earth and Stone (Druid 2)",
        "Stone Shape (Cleric 3, Druid 3, Sorcerer/Wizard 3)",
        "Storm of Vengeance (Druid 6)",
        "Symbol of Death (Cleric 8, Sorcerer/Wizard 8)",
        "Temporal Stasis (Bard 6, Sorcerer/Wizard 6)",
        "Transmute Flesh (Sorcerer/Wizard 6)",
        "Wail of the Banshee (Sorcerer/Wizard 9)",
        "Wall of Fire (Druid 3, Sorcerer/Wizard 3)",
        "Waves of Exhaustion (Sorcerer/Wizard 7)",
        "Whirlwind (Druid 4)",
        "White Incantation (Cleric 9, Sorcerer/Wizard 9)",
        "Winds of Memory (Sorcerer/Wizard 9)",
        "Word of Blinding (Sorcerer/Wizard 5)",
        "Word of the Earth (Druid 7)",
    ].map((name) => {
        return {
            name,
            author: 'koz',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=128459#p128459',
        }
    }),
    {
        name: "Burst (Sorcerer/Wizard 'z')",
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90617#p90617',
    },
    ...[
        "Elemental Fist (Sorcerer/Wizard 0)",
        "Searing Touch (Sorcerer/Wizard 0)",
        "Call Flame (Sorcerer/Wizard 1)",
        "Zap (Sorcerer/Wizard 1)",
        "Acid Spray (Sorcerer/Wizard 1)",
        "Chill Gaze (Sorcerer/Wizard 1)",
        "Magic Missile (Sorcerer/Wizard 1)",
        "Elemental Ray (Sorcerer/Wizard 2)",
        "Chill Metal (Sorcerer/Wizard 2)",
        "Fire Ball (Sorcerer/Wizard 3)",
        "Lightning Bolt (Sorcerer/Wizard 3)",
        "Shocking Grasp (Sorcerer/Wizard 3)",
        "Dissolving Cloud (Sorcerer/Wizard 3)",
        "Cone of Cold (Sorcerer/Wizard 3)",
        "Flash (Sorcerer/Wizard 4)",
        "Electrocute (Sorcerer/Wizard 4)",
        "Corrosive Touch (Sorcerer/Wizard 4)",
        "Scar the Flesh (Sorcerer/Wizard 4)",
        "Breath of the North Wind (Sorcerer/Wizard 4)",
        "Elemental Bolt (Sorcerer/Wizard 5)",
        "Inferno (Sorcerer/Wizard 5)",
        "Dragon's Breath (Sorcerer/Wizard 5)",
        "Static Cloud (Sorcerer/Wizard 5)",
        "Frigid Glance (Sorcerer/Wizard 5)",
        "Ignite (Sorcerer/Wizard 6)",
        "Chain Lightning (Sorcerer/Wizard 6)",
        "Cloud of Miasma (Sorcerer/Wizard 6)",
        "Freezing Mist (Sorcerer/Wizard 6)",
        "Howl of the North Wind (Sorcerer/Wizard 6)",
        "Delayed Blast Fireball (Sorcerer/Wizard 7)",
        "Call Fire (Sorcerer/Wizard 7)",
        "Electric Spray (Sorcerer/Wizard 7)",
        "Ball of Uttercold (Sorcerer/Wizard 7)",
        "Hellfire (Sorcerer/Wizard 8)",
        "Dissolution (Sorcerer/Wizard 8)",
        "Armageddon (Sorcerer/Wizard 9)",
        "Lightning Strike (Sorcerer/Wizard 9)",
        "Acid Rain (Sorcerer/Wizard 9)",
    ].map((name) => {
        return {
            name,
            author: 'squirreloid',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=19279#p19279',
        }
    }),
    {
        name: "Always Winter (Sorcerer/Wizard 9)",
        author: 'AlphaNerd',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=19290#p19290',
    },
    {
        name: "Meteor Swarm (Elementalist 9, Sorcerer/Wizard 9, Warmage 9)",
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=338594#p338594',
    },
    ...[
        "Mia's Personal Rainstorm (Cleric 1, Druid 1, Sorcerer/Wizard 1, Wujen 1)",
        "Mia's Explosive Summoning (Druid 5, Sorcerer/Wizard 5)",
        "Hotherain's Explosive Duplication (Sorcerer/Wizard 6)",
        "Evan's Spiked Tentacles of Forced Intrusion (Sorcerer/Wizard 6)"
    ].map((name) => {
        return {
            name,
            author: 'Wiseman',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=390025#p390025',
        }
    }),
    ...[
        "Hotherains Elastic Enhancement (Druid 5, Sorcerer/Wizard 5)",
        "Lyra's Air Lance (Druid 2, Sorcerer/Wizard 2, Wujen 2)",
    ].map((name) => {
        return {
            name,
            author: 'Wiseman',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=394631#p394631',
        }
    }),
    {
        name: "Hotherain's Sky Goddess (Druid 9, Sorcerer/Wizard 9, Wujen 9)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=397019#p397019',
    },
    {
        name: "Mia's Mental Mastery (Sorcerer/Wizard 6)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=397019#p397019',
    },
    {
        name: "Lightning Strike (Druid 6)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=408796#p408796',
    },
    {
        name: "Protection from Sunlight (Bard 2, Cleric 3, Druid 3, Paladin 1, Ranger 1, Shugenja 3, Sorcerer/Wizard 3, Wujen 3)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=427451#p427451',
    },
    {
        name: "Hotherains Size Swap (Cleric 4, Sorcerer/Wizard 4)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=428052#p428052',
    },
    {
        name: "Wood Soldier Seed (Druid 4, Ranger 2)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=455654#p455654',
    },
    {
        name: "Plantshaper (Druid 5)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=486429#p486429',
    },
    {
        name: "Celestial Host (Cleric 9, Sorcerer/Wizard 9)",
        author: 'Wiseman',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=497247#p497247',
    },
    {
        name: "Annihilation Aria (Sorcerer/Wizard 9)",
        author: 'Dominicius',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=177737#p177737',
    },
    ...[
        "Interposing Hand (Sorcerer/Wizard 1)",
        "Forceful Hand (Sorcerer/Wizard 3)",
        "Grasping Hand (Sorcerer/Wizard 5)",
        "Grasping Hand (Sorcerer/Wizard 5)",
        "Clenched Fist (Sorcerer/Wizard 7)",
        "Crushing Hand (Sorcerer/Wizard 9)",
    ].map((name) => {
        return {
            name,
            author: 'TG Cid',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=171982#p171982',
        }
    }),
    {
        name: "Raise Death Galley (Sorcerer/Wizard 7)",
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=169157#p169157',
    },
    {
        name: "Walking Head (Sorcerer/Wizard 1)",
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=436329#p436329',
    },
    {
        name: "Blend (Sorcerer/Wizard 6)",
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=405483#p405483',
    },
    ...[
        "Missile Cascade (Sorcerer/Wizard 9)",
        "Infinite Flames (Sorcerer/Wizard 9)",
        "Godfucker (Sorcerer/Wizard 9)",
        "Ruin Lightning (Sorcerer/Wizard 9)",
    ].map((name) => {
        return {
            name,
            author: 'Mistborn',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=317395#p317395',
        }
    }),
    {
        name: "99 Fireballs (Sorcerer/Wizard 6)",
        author: 'Grek',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=317661#p317661',
    },
    {
        name: "Simulacrum (Sorcerer/Wizard 6)",
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=292335#p292335',
    },
    {
        name: "Red Miles (Sorcerer/Wizard 9)",
        author: 'Lokathor',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=269983#p269983',
    },
    {
        name: "Great Void (Cleric 7, Druid 8, Sorcerer/Wizard 7)",
        author: 'Lokathor',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=270299#p270299',
    },
    {
        name: "Love's Pain, Mass (Cleric 9, Sorcerer/Wizard 9)",
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=270452#p270452',
    },
    {
        name: "Summon Monster (Paladin 1, Cleric 1, Sorcerer/Wizard 1)",
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53216',
    },
    {
        name: "Summon Nature (Druid 1, Ranger 1)",
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53216',
    },
    {
        name: "Summon Brute (Barbarian 1, Fighter 1, Ranger 1)",
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53216',
    },
    {
        name: "Summon Undead (Cleric 1, Paladin 1, Sorcerer/Wizard 1)",
        author: 'JonSetanta',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=53216',
    },
    ...[
        "Grave Visage (Dread Necromancer 1, Sorcerer/Wizard 1)",
        "Curse of Lost Fortune (Bard 1, Blackguard 1, Sorcerer/Wizard 1, Witch 1)",
        "Splendid Demeanour (Bard 1, Beguiler 1, Sorcerer/Wizard 1)",
        "Paranoia (Bard 1, Beguiler 1, Sorcerer/Wizard 1)",
        "Disguise Object (Sorcerer/Wizard 1)",
        "Protect Against Self (Sorcerer/Wizard 1, Witch 1)",

        "Halo of Flames (Duskblade 1, Elementalist 2, Sorcerer/Wizard 2)",
        "False Comfort (Beguiler 2, Sorcerer/Wizard 2)",
        "Dreary Domain (Blackguard 1, Dread Necromancer 2, Sorcerer/Wizard 2)",
        "Curse of Unmaking (Dread Necromancer 2, Sorcerer/Wizard 2, Witch 2)",
        "Delight (Bard 2, Beguiler 2, Sorcerer/Wizard 2)",
        "Nybor's Chastisement (Beguiler 2, Sorcerer/Wizard 2, Witch 2)",
    ].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545899#p545899',
        }
    }),
    ...[
        "Turn Undead (Divine 1)",
        "Rebuke Undead (Divine 1)",
        "Cure Wounds (Divine 1)",
    ].map((name) => {
        return {
            name,
            author: 'JonSetanta',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=51870',
        }
    }),
    ...[
        "Invoke Mage Bolts (Sorcerer/Wizard 1)",
        "Mage Bolt Cascade (Sorcerer/Wizard 2)",
        "Invoke Burning Orbs (Sorcerer/Wizard 2)",
    ].map((name) => {
        return {
            name,
            author: 'Avoraciopoctules',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=147060#p147060',
        }
    }),
    {
        name: 'Transmute Element to Paraelement (Druid 6)',
        author: 'schpeelah',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=125241#p125241',
    },
    {
        name: 'Ressurection of the Dead (Cleric 5, Druid 5, Sorcerer/Wizard 5)',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=128894#p128894',
    },
    {
        name: "Ishara's Phasing Arrow (Assassin 3, Sorcerer/Wizard 3)",
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=128076#p128076',
    },
    {
        name: 'Polymorph (Sorcerer/Wizard 3, 4, 5, 6)',
        author: 'Calibron',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=74474#p74474',
    },
    {
        name: 'Narcotic Web (Bard 4, Sorcerer/Wizard 5)',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=53511#p53511',
    },
    {
        name: 'Animate Automaton (Sorcerer/Wizard 3)',
        author: 'virgil',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=40102',
    },
    {
        name: 'Project Greatness (Cool 5, Hardcore 5)',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=38926#p38926',
        author: 'FrankTrollman',
    },
    {
        name: "Elore's Floating Platform (Sorcerer/Wizard 2)",
        link: 'https://drive.google.com/uc?export=view&id=161pdlblGOkOM5corj83qp-s1tK46TZCH',
        author: 'Prak',
    },
    ...[
        "Alter Self (Bard 2, Sorcerer/Wizard 2, Ranger 2)",
        "Alter Other (Bard 3, Sorcerer/Wizard 3, Ranger 3)",
        "Mass Alter Other (Bard 7, Sorcerer/Wizard 7, Ranger 7)",
        "Malefic Metamorphosis (Druid 5, Sorcerer/Wizard 4)",
        "Mass Malefic Metamorphosis (Druid 8, Sorcerer/Wizard 8)",
        "Polymorph Self (Sorcerer/Wizard 5)",
        "Polymorph Other (Sorcerer/Wizard 6)",
        "Polymorph Any Object (Sorcerer/Wizard 7, Trickery 8)",
        "Greater Polymorph (Sorcerer/Wizard 8)",
        "Shapechange (Animal 9, Druid 9, Sorcerer/Wizard 9)",
    ].map((name) => {
        return {
            name,
            author: 'Josh_Kablack',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=38752#p38752',
        }
    }),
    ...[
        "Last Vision (Necromancer 0)",
        "Animate Dead (Cleric 4, Necromancer 2, Sorcerer/Wizard 4)",
        "Summon Souls (Necromancer 6)",
        "Soul Exchange (Necromancer 9)",
    ].map((name) => {
        return {
            name,
            author: 'FrankTrollman',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=37648#p37648',
        }
    }),
    {
        name: `Leomund's Lamentable Belaborment (Bard 1, Sorcerer/Wizard 2)`,
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=564755#p564755',
    },
    {
        name: "Create Goblin Life (Sorcerer/Wizard 4, Goblinkind 3)",
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=567360#p567360',
        author: 'Prak',
    },
    {
        name: "Toxic Deluge (Cleric 8, Druid 7, Sorcerer/Wizard 8)",
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=571646#p571646',
        author: 'Prak',
    },
    {
        name: "Dispel Magic (Bard 3, Cleric 3, Druid 4, Magic 3, Paladin 3, Sorcerer/Wizard 3)",
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=478092#p478092',
        author: 'Kaelik',
    },
    {
        name: "Greater Dispel Magic (Cleric 6, Druid 6, Sorcerer/Wizard 6, Whatever it usually is for other weird classes?)",
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=478092#p478092',
        author: 'Kaelik',
    },
    {
        name: "Dispel Shield (Cleric 2, Druid 2, Sorcerer/Wizard 2)",
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=478092#p478092',
        author: 'Kaelik',
    },
    ...[
        'Important Facts (Cleric 2, Sorcerer/Wizard 2)',
        'Research (Cleric 3, Sorcerer/Wizard 3)',
        'Locate X (Cleric 4, Sorcerer/Wizard 4)',
        'Locate Macguffin (Cleric 5, Sorcerer/Wizard 5)',
        'Obtain Macguffin (Cleric 7, Sorcerer/Wizard 7)',
        'Divination (Cleric 4, Knowledge 4)',
        'Scrying (Bard 3, Cleric 5, Druid 4, Sorcerer/Wizard 4)',
        'Greater Divination (Cleric 6, Sorcerer/Wizard 6)',
    ].map((name) => ({
        name,
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=569802#p569802',
        author: 'Kaelik',
    })),
    {
        name: "Unholy Transformation (Cleric 7, Sorcerer/Wizard 8)",
        author: 'Wiseman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=573876#p573876',
    },
];