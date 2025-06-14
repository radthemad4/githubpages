import { PrestigeClassEntry } from "../../entry";

export const koumeiMonsterPrcs: PrestigeClassEntry[] = [
    ...[
        {
            name: 'Abeil Soldier PrC: Stormwing Champion',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543836#p543836',
            minimumStartingLevel: 8
        },
        ...[
            { name: 'Memory Architect', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543872#p543872' },
            { name: 'Flesh Sculptor', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543876#p543876' },
        ].map(({ name, link }) => {
            return {
                name: `Aboleth PrC: ${name}`,
                link,
                minimumStartingLevel: 11
            }
        }),
        {
            name: 'Abyssal Drake PrC: Abyssal Wyrm',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543878#p543878',
            minimumStartingLevel: 12
        },
        ...[
            { name: 'Spellspinner', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543880#p543880' },
            { name: 'Lord of the Flies', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543887#p543887' },
            { name: 'Spider Queen', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543892#p543892' },
        ].map(({ name, link }) => {
            return {
                name: `Aranea PrC: ${name}`,
                link,
                minimumStartingLevel: 6
            }
        }),
        {
            name: 'Archon: Hound Archon PrC: Heavenly Bloodhound',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543909#p543909',
            minimumStartingLevel: 7
        },
        {
            name: 'Archon: Justice Archon PrC: Retribution Archon',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543911#p543911',
            minimumStartingLevel: 8
        },
        {
            name: 'Archon: Sword Archon PrC: Blade of Justice',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543915#p543915',
            minimumStartingLevel: 13
        },
        {
            name: 'Archon: Warden Archon PrC: Paragon Guardian',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543916#p543916',
            minimumStartingLevel: 10
        },
        {
            name: 'Archon: Word Archon PrC: Ishim',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543918#p543918',
            minimumStartingLevel: 11
        },
        {
            name: 'Asura PrC: Righteous Avenger',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543919#p543919',
            minimumStartingLevel: 10
        },
        ...[
            { name: 'Necrocrafter', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543920#p543920' },
            { name: 'Herald of Kyuss', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543921#p543921' },
        ].map(({ name, link }) => {
            return {
                name: `Avolakia PrC: ${name}`,
                link,
                minimumStartingLevel: 12
            }
        }),
        {
            name: 'Blackwing PrC: Sky Tyrant',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543919#p543919',
            minimumStartingLevel: 11
        },
        {
            name: 'Blink Dog PrC: Aspect of Sarama',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543941#p543941',
            minimumStartingLevel: 4
        },
        {
            name: 'Chuul PrC: Subterranean Stalker',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543944#p543944',
            minimumStartingLevel: 10
        },
        ...[
            { name: 'Caper', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543953#p543953' },
            { name: 'Resplendent Robe', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543956#p543956' },
        ].map(({ name, link }) => {
            return {
                name: `Cloaker PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Coatl PrC: Questing Coatl',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543958#p543958',
            minimumStartingLevel: 13
        },
        {
            name: 'Darkweaver PrC: Horror',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543970#p543970',
            minimumStartingLevel: 12
        },
        {
            name: 'Demon: Armanite PrC: Abyssal Siegebreaker',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543971#p543971',
            minimumStartingLevel: 9
        },
        {
            name: 'Demon: Arrow Demon PrC: Abyssal Archer',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543972#p543972',
            minimumStartingLevel: 9
        },
        {
            name: 'Demon: Babau PrC: Abyssal Marauder',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543980#p543980',
            minimumStartingLevel: 8
        },
        {
            name: 'Demon: Bulezau PrC: Horned Reaper',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543981#p543981',
            minimumStartingLevel: 11
        },
        {
            name: 'Demon: Chasme PrC: Infestation',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543981#p543981',
            minimumStartingLevel: 12
        },
        {
            name: 'Demon: Glabrezu PrC: Stranger Bearing Gifts',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=543983#p543983',
            minimumStartingLevel: 14
        },
        {
            name: 'Demon: Jovoc PrC: Karmic Corruptor',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544031#p544031',
            minimumStartingLevel: 6
        },
        {
            name: 'Demon: Palrethee PrC: Burning Overlord',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544033#p544033',
            minimumStartingLevel: 10
        },
        {
            name: 'Quasit PrC: Vile Familiar',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544035#p544035',
            minimumStartingLevel: 4
        },
        {
            name: 'Demon: Shadow Demon PrC: Hidden Overlord',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544036#p544036',
            minimumStartingLevel: 11
        },
        ...[
            { name: 'Deceiver', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544048#p544048' },
            { name: 'Bargainer', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544051#p544051' },
            { name: 'Black Maiden', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544063#p544063' },
            { name: 'Night Blade', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544065#p544065' },
        ].map(({ name, link }) => {
            return {
                name: `Demon: Succubus PrC: ${name}`,
                link,
                minimumStartingLevel: 10
            }
        }),
        {
            name: 'Demon: Uridezu PrC: Sneaky Rat',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544067#p544067',
            minimumStartingLevel: 8
        },
        {
            name: 'Demon: Vrock PrC: Vile Dancer',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544071#p544071',
            minimumStartingLevel: 11
        },
        {
            name: 'Desmodu PrC: Desmodu Warmaster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544104#p544104',
            minimumStartingLevel: 11
        },
        {
            name: 'Devil: Advespa PrC: Baatorian Swarmlord',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544105#p544105',
            minimumStartingLevel: 7
        },
        {
            name: 'Devil: Amnizu PrC: Fugitive Hunter of Baator',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544108#p544108',
            minimumStartingLevel: 9
        },
        ...[
            { name: 'Baator Battle Captain', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544111#p544111' },
            { name: 'Soul Handler', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544112#p544112' },
        ].map(({ name, link }) => {
            return {
                name: `Devil: Barbazu PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Devil: Brachina PrC: Aka Manah',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544119#p544119',
            minimumStartingLevel: 13
        },
        {
            name: 'Devil: Dogai PrC: Third Party',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544122#p544122',
            minimumStartingLevel: 13
        },
        ...[
            { name: 'Erinyes Recruitment Specialist', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544134#p544134' },
            { name: 'Fury of the Nine Hells', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544135#p544135' },
            { name: 'Infernal Supervisor', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544136#p544136' },
        ].map(({ name, link }) => {
            return {
                name: `Demon: Erinyes PrC: ${name}`,
                link,
                minimumStartingLevel: 10
            }
        }),
        {
            name: 'Devil: Excruciarch PrC: Painmaker',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544148#p544148',
            minimumStartingLevel: 9
        },
        {
            name: 'Devil: Falxugon PrC: Pact Master',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544150#p544150',
            minimumStartingLevel: 9
        },
        {
            name: 'Devil: Gelugon PrC: Canian Overlord',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544152#p544152',
            minimumStartingLevel: 16
        },
        {
            name: 'Devil: Hamatula PrC: Master of the Spined Arts',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544171#p544171',
            minimumStartingLevel: 13
        },
        ...[
            { name: 'Sycophant', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544172#p544172' },
            { name: 'Offering', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544185#p544185' },
        ].map(({ name, link }) => {
            return {
                name: `Devil: Imp PrC: ${name}`,
                link,
                minimumStartingLevel: 4
            }
        }),
        ...[
            { name: 'Hell Flayer', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544188#p544188' },
            { name: 'Nightmare Warden', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544189#p544189' },
        ].map(({ name, link }) => {
            return {
                name: `Devil: Kyton PrC: ${name}`,
                link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: 'Devil: Logokron PrC: Devil in the Details',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544204#p544204',
            minimumStartingLevel: 16
        },
        {
            name: 'Devil: Narzugon PrC: Narzugon Lancer',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544205#p544205',
            minimumStartingLevel: 8
        },
        {
            name: 'Devil: Orthon PrC: Infernal Weaponmaster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544208#p544208',
            minimumStartingLevel: 10
        },
        {
            name: 'Devil: Osyluth PrC: Stygian Overlord',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544210#p544210',
            minimumStartingLevel: 11
        },
        {
            name: 'Dread Guard PrC: Angry Armour',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544221#p544221',
            minimumStartingLevel: 5
        },
        ...[
            { name: 'Tree Speaker', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544222#p544222' },
            { name: 'Thorn Tree', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544225#p544225' },
        ].map(({ name, link }) => {
            return {
                name: `Dryad PrC: ${name}`,
                link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Deva: Monadic PrC: Elemental Steward',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544229#p544229',
            minimumStartingLevel: 14
        },
        {
            name: 'Deva: Movanic PrC: Worldly Dominion',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544230#p544230',
            minimumStartingLevel: 11
        },
        {
            name: 'Eladrin: Bralani PrC: Hero of the Storm',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544238#p544238',
            minimumStartingLevel: 9
        },
        {
            name: 'Eladrin: Courre PrC: Navi',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544287#p544287',
            minimumStartingLevel: 6
        },
        {
            name: 'Eladrin: Firre PrC: Hashmallim ',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544288#p544288',
            minimumStartingLevel: 15
        },
        ...[
            { name: 'Chosen of the Inner Source', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544290#p544290' },
            { name: 'Blade of Entropy', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544292#p544292' },
        ].map(({ name, link }) => {
            return {
                name: `Elemental: Small PrC: ${name}`,
                link,
                minimumStartingLevel: 4
            }
        }),
        {
            name: 'Eye of Fear and Flame PrC: Burning Terror',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544293#p544293',
            minimumStartingLevel: 10
        },
        {
            name: 'Faerie Dragon PrC: Ancient Prankster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544305#p544305',
            minimumStartingLevel: 9
        },
        {
            name: 'Flame Snake: Lesser PrC: Life Burner',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544306#p544306',
            minimumStartingLevel: 9
        },
        ...[
            { name: 'Obsidian Gargoyle', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544327#p544327' },
            { name: 'Continental Drifter', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544328#p544328' },
        ].map(({ name, link }) => {
            return {
                name: `Gargoyle PrC: ${name}`,
                link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Genie: Dao PrC: Earthen Khan',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544346#p544346',
            minimumStartingLevel: 9
        },
        {
            name: 'Genie: Djinni PrC: Djinn Sultan',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544347#p544347',
            minimumStartingLevel: 8
        },
        {
            name: 'Genie: Efreeti PrC: Solar Overlord',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544352#p544352',
            minimumStartingLevel: 11
        },
        ...[
            { name: 'Harmonic Manifestation', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544353#p544353' },
            { name: 'Full Genie Hero', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544360#p544360' },
        ].map(({ name, link }) => {
            return {
                name: `Genie: Janni PrC: ${name}`,
                link,
                minimumStartingLevel: 6
            }
        }),
        {
            name: 'Genie: Khayal PrC: Malik',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544408#p544408',
            minimumStartingLevel: 8
        },
        {
            name: 'Genie: Marid PrC: Rainmaker',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544411#p544411',
            minimumStartingLevel: 11
        },
        {
            name: 'Genie: Qorrashi PrC: Blessing of the Blizzards',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544435#p544435',
            minimumStartingLevel: 8
        },
        ...[
            { name: 'Ghastly Ravager', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544438#p544438' },
            { name: 'Ghoul Lord', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544439#p544439' },
        ].map(({ name, link }) => {
            return {
                name: `Ghoul: Ghast PrC: ${name}`,
                link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Giant: Fire Giant PrC: Magma King',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544445#p544445',
            minimumStartingLevel: 12
        },
        {
            name: 'Giant: Frost Giant PrC: Frost Jarl',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544446#p544446',
            minimumStartingLevel: 11
        },
        {
            name: 'Grimweird PrC: Withered Conjurer',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544469#p544469',
            minimumStartingLevel: 13
        },
        {
            name: 'Guardinal: Avoral PrC: Heavenly Sky Hunter',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544478#p544478',
            minimumStartingLevel: 11
        },
        {
            name: 'Guardinal: Cervidal PrC: Blessed of the Adamant Horn',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544490#p544490',
            minimumStartingLevel: 5
        },
        {
            name: 'Guardinal: Leonal PrC: Celestial Lionheart',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544517#p544517',
            minimumStartingLevel: 14
        },
        {
            name: 'Hag: Annis PrC: Dweller Within the Mere',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544520#p544520',
            minimumStartingLevel: 8
        },
        {
            name: 'Hag: Dune PrC: Dweller Within the Wastes',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544524#p544524',
            minimumStartingLevel: 6
        },
        {
            name: 'Hag: Green PrC: Dweller Within the Fen',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544526#p544526',
            minimumStartingLevel: 7
        },
        {
            name: 'Hag: Marzana (Winter) PrC: Dweller Within the Frost',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544526#p544526',
            minimumStartingLevel: 8
        },
        {
            name: 'Hag: Sea PrC: Dweller Within the Deep',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544565#p544565',
            minimumStartingLevel: 6
        },
        {
            name: 'Hag: Shrieking PrC: Dweller Within the Mountains',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544566#p544566',
            minimumStartingLevel: 12
        },
        ...[
            { name: 'Harpy Archer', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544571#p544571' },
            { name: 'Harpy Chord', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544594#p544594' },
        ].map(({ name, link }) => {
            return {
                name: `Harpy PrC: ${name}`,
                link,
                minimumStartingLevel: 6
            }
        }),
        ...[
            { name: 'Nessian Warhound', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544596#p544596' },
            { name: 'Haraknin', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544618#p544618' },
        ].map(({ name, link }) => {
            return {
                name: `Hell Hound PrC: ${name}`,
                link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: 'Hellwasp Swarm PrC: Swarm Within',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544666#p544666',
            minimumStartingLevel: 11
        },
        {
            name: 'Inevitable: Kolyarut PrC: Enforcer of Oaths',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544704#p544704',
            minimumStartingLevel: 14
        },
        {
            name: 'Inevitable: Zelekhut PrC: Enforcer of Justice',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544708#p544708',
            minimumStartingLevel: 11
        },
        {
            name: 'Ironmaw PrC: Ferocious Flora',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544711#p544711',
            minimumStartingLevel: 14
        },
        {
            name: 'Jackal Lord PrC: Jackal Baron',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544743#p544743',
            minimumStartingLevel: 10
        },
        {
            name: 'Joystealer PrC: Heartless Prankster',
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544744#p544744',
            minimumStartingLevel: 8
        },
        ...[
            { name: 'Divine Muse', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=544750#p544750' },
            { name: 'Azata of Artistry', link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=573197#p573197' },
        ].map(({ name, link }) => {
            return {
                name: `Lillend PrC: ${name}`,
                link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: 'Manticore PrC: Manticore Scout',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544769#p544769',
            minimumStartingLevel: 7
        },
        {
            name: 'Marrash PrC: Blight of Yeenoghu',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544770#p544770',
            minimumStartingLevel: 7
        },
        {
            name: 'Medusa PrC: Statue Collector',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544773#p544773',
            minimumStartingLevel: 11
        },
        ...[
            { name: "Sha'ir", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544778#p544778' },
            { name: 'Elemental Master', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544780#p544780' },
            { name: 'Mephit King', link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544781#p544781' },
        ].map(({ name, link }) => {
            return {
                name: `Mephit PrC: ${name}`,
                link,
                minimumStartingLevel: 4
            }
        }),
        ...[
            { name: "Facsimile", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544783#p544783' },
            { name: "Pandora's Box", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544785#p544785' },
        ].map(({ name, link }) => {
            return {
                name: `Mimic PrC: ${name}`,
                link,
                minimumStartingLevel: 6
            }
        }),
        ...[
            { name: "Far Realm Caller", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544798#p544798' },
            { name: "Illithid Mastermind", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544799#p544799' },
            { name: "Mind Owner", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544800#p544800' },
        ].map(({ name, link }) => {
            return {
                name: `Mind Flayer PrC: ${name}`,
                link,
                minimumStartingLevel: 11
            }
        }),
        {
            name: 'Minotaur PrC: Maze Stalker',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544802#p544802',
            minimumStartingLevel: 6
        },
        {
            name: 'Moon Dog PrC: Very Good Dog',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544803#p544803',
            minimumStartingLevel: 14
        },
        ...[
            { name: "Saboteur", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544804#p544804' },
            { name: "Tide Master", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544805#p544805' },
        ].map(({ name, link }) => {
            return {
                name: `Moonrat PrC: ${name}`,
                link,
                minimumStartingLevel: 1
            }
        }),
        ...[
            { name: "Mummy Lord", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544812#p544812' },
            { name: "Cursed One", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547481#p547481' },
        ].map(({ name, link }) => {
            return {
                name: `Mummy PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Myconid Sovereign PrC: Mushroom King',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544828#p544828',
            minimumStartingLevel: 8
        },
        {
            name: 'Neogi: Adult PrC: Neogi Powermonger',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544847#p544847',
            minimumStartingLevel: 6
        },
        {
            name: 'Nereid PrC: Oceanic Questor',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544852#p544852',
            minimumStartingLevel: 6
        },
        {
            name: 'Nerra PrC: Sillit',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544872#p544872',
            minimumStartingLevel: 9
        },
        {
            name: 'Nethersight Mastiff PrC: Astral Fang',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544883#p544883',
            minimumStartingLevel: 10
        },
        {
            name: 'Night Hag PrC: Covey Countess',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544885#p544885',
            minimumStartingLevel: 11
        },
        ...[
            { name: "Cauchemare", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544888#p544888' },
            { name: "Night Terror", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544894#p544894' },
        ].map(({ name, link }) => {
            return {
                name: `Nightmare PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        ...[
            { name: "Summer Court Queen", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544901#p544901' },
            { name: "Winter Court Queen", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544902#p544902' },
        ].map(({ name, link }) => {
            return {
                name: `Nymph PrC: ${name}`,
                link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: 'Ogre PrC: Creeping Mountain',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544907#p544907',
            minimumStartingLevel: 4
        },
        {
            name: 'Ogre-Mage PrC: Taotieh',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544913#p544913',
            minimumStartingLevel: 9
        },
        {
            name: 'Oread PrC: Mountain Whisperer',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544915#p544915',
            minimumStartingLevel: 9
        },
        {
            name: 'Ormyrr PrC: Magic Seeker',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544925#p544925',
            minimumStartingLevel: 8
        },
        {
            name: 'Formian: Taskmaster PrC: Conscriptor',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544928#p544928',
            minimumStartingLevel: 9
        },
        {
            name: 'Formian: Myrmarch PrC: Agent of the Colony',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544929#p544929',
            minimumStartingLevel: 12
        },
        {
            name: 'Pegasus PrC: Protector of Dreams',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544937#p544937',
            minimumStartingLevel: 5
        },
        {
            name: 'Pixie PrC: Fairy Archer',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544943#p544943',
            minimumStartingLevel: 6
        },
        {
            name: 'Rakshasa: Naityan PrC: Champion of Ravana',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544954#p544954',
            minimumStartingLevel: 9
        },
        {
            name: 'Rakshasa: Naztharune PrC: Phantom Feline',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544958#p544958',
            minimumStartingLevel: 13
        },
        {
            name: 'Reason Stealer PrC: Face Wearer',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544974#p544974',
            minimumStartingLevel: 7
        },
        {
            name: 'Rejkar PrC: Great Goat God',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544976#p544976',
            minimumStartingLevel: 7
        },
        {
            name: 'Rusalka PrC: Ice Sickle',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544977#p544977',
            minimumStartingLevel: 3
        },
        {
            name: 'Awakened Porpoise PrC: Puppeteer',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544985#p544985',
            minimumStartingLevel: 3
        },
        ...[
            { name: "Harvester", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544986#p544986' },
            { name: "Verdant Sage", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544987#p544987' },
        ].map(({ name, link }) => {
            return {
                name: `Awakened Tree (Huge) PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Saguaro Sentinel PrC: Warden of the Waste',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544988#p544988',
            minimumStartingLevel: 11
        },
        {
            name: 'Salamander: Average PrC: Flameforger',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544989#p544989',
            minimumStartingLevel: 8
        },
        ...[
            { name: "Night Shark", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544992#p544992' },
            { name: "Ocean Strike Leader", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=544993#p544993' },
        ].map(({ name, link }) => {
            return {
                name: `Sahuagin PrC: ${name}`,
                link,
                minimumStartingLevel: 3
            }
        }),
        {
            name: 'Scyllan PrC: Sea Devil',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545006#p545006',
            minimumStartingLevel: 16
        },
        {
            name: 'Shadow: Greater PrC: King of Shadows',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545010#p545010',
            minimumStartingLevel: 10
        },
        {
            name: 'Shadow Mastiff PrC: Shadurakul',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545011#p545011',
            minimumStartingLevel: 7
        },
        {
            name: 'Sirine PrC: Mind Changer',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545012#p545012',
            minimumStartingLevel: 7
        },
        {
            name: 'Sisiutl PrC: Chosen of Winalagalis',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545023#p545023',
            minimumStartingLevel: 11
        },
        {
            name: 'Skull Lord PrC: Unholy Trinity',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545025#p545025',
            minimumStartingLevel: 9
        },
        {
            name: 'Slaad: Blue PrC: Battletoad',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545027#p545027',
            minimumStartingLevel: 10
        },
        {
            name: 'Slaad: Green PrC: Giant Frog',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545028#p545028',
            minimumStartingLevel: 11
        },
        ...[
            { name: "Death Slaad", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545029#p545029' },
            { name: "Amphibious Ascendant", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556491#p556491' },
        ].map(({ name, link }) => {
            return {
                name: `Slaad: Grey PrC: ${name}`,
                link,
                minimumStartingLevel: 12
            }
        }),
        ...[
            { name: "Spectral Reaper", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545030#p545030' },
            { name: "Soul Eater", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545031#p545031' },
        ].map(({ name, link }) => {
            return {
                name: `Spectre PrC: ${name}`,
                link,
                minimumStartingLevel: 10
            }
        }),
        {
            name: 'Tengu: Human-Headed PrC: Kaze Mahoujin',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545063#p545063',
            minimumStartingLevel: 7
        },
        {
            name: 'Thunderbird PrC: Stormbeak',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545064#p545064',
            minimumStartingLevel: 16
        },
        ...[
            { name: "World Changer", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545071#p545071' },
            { name: "Flesh Hunter", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545072#p545072' },
        ].map(({ name, link }) => {
            return {
                name: `Troll PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: 'Ulgurstasta PrC: Death Crawler',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545083#p545083',
            minimumStartingLevel: 14
        },
        {
            name: 'Unicorn PrC: Celestial Charger',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545085#p545085',
            minimumStartingLevel: 5
        },
        {
            name: 'Urskan PrC: Ice Crusher',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545086#p545086',
            minimumStartingLevel: 7
        },
        {
            name: 'Valkyrie PrC: Valhallan Champion',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545114#p545114',
            minimumStartingLevel: 11
        },
        {
            name: 'Vine Horror PrC: Tangled Master',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545115#p545115',
            minimumStartingLevel: 6
        },
        {
            name: 'Vorr PrC: Vultivor',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545116#p545116',
            minimumStartingLevel: 6
        },
        ...[
            { name: "Grave Guard", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545119#p545119' },
            { name: "Deathly Corruptor", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545120#p545120' },
        ].map(({ name, link }) => {
            return {
                name: `Wight PrC: ${name}`,
                link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: "Winter Wolf PrC: Winter's Emissary",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545126#p545126',
            minimumStartingLevel: 7
        },
        ...[
            { name: "Icy Void", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545127#p545127' },
            { name: "Shape of Fire", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545128#p545128' },
            { name: "Haunting Presence", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545131#p545131' },
        ].map(({ name, link }) => {
            return {
                name: `Wraith: Dread PrC: ${name}`,
                link,
                minimumStartingLevel: 13
            }
        }),
        ...[
            { name: "Xill Marauder", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545134#p545134' },
            { name: "Xill Moral Guide", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545135#p545135' },
        ].map(({ name, link }) => {
            return {
                name: `Xill PrC: ${name}`,
                link,
                minimumStartingLevel: 8
            }
        }),
        {
            name: "Yak Folk PrC: Yakultist",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545156#p545156',
            minimumStartingLevel: 6
        },
        ...[
            { name: "Yuan-ti Infiltrator", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545165#p545165' },
            { name: "Dungeon Delver of Mershaulk", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545166#p545166' },
        ].map(({ name, link }) => {
            return {
                name: `Yuan-ti: Pureblood PrC: ${name}`,
                link,
                minimumStartingLevel: 5
            }
        }),
        {
            name: "Yuan-ti: Halfblood PrC: Serpent-Whisperer of Mershaulk",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545167#p545167',
            minimumStartingLevel: 7
        },
        ...[
            { name: "Holy Guardian", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545196#p545196' },
            { name: "Anathema Incarnate", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545197#p545197' },
        ].map(({ name, link }) => {
            return {
                name: `Yuan-ti: Abomination PrC: ${name}`,
                link,
                minimumStartingLevel: 9
            }
        }),
        {
            name: "Yuan-ti: Ignan PrC: Raging Flame",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545200#p545200',
            minimumStartingLevel: 10
        },
        {
            name: "Yugoloth: Marraenoloth PrC: Ferryman",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545245#p545245',
            minimumStartingLevel: 11
        },
        {
            name: "Yugoloth: Nycaloth PrC: Nycaloth Commander",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545246#p545246',
            minimumStartingLevel: 13
        },
        {
            name: "Yuki-On-Na PrC: Tsurara-Onna",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545250#p545250',
            minimumStartingLevel: 7
        },
        ...[
            { name: "Great Wyrm of the Sky", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545342#p545342' },
            { name: "True Dragon", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545397#p545397' },
            { name: "Dread Wyrm", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545473#p545473' },
        ].map(({ name, link }) => {
            return {
                name: `Wyvern PrC: ${name}`,
                link,
                minimumStartingLevel: 8
            }
        }),
        ...[
            { name: "Chosen of Al-Ishtus", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545498#p545498' },
            { name: "Enforcer of the Sands", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545524#p545524' },
            { name: "Deathstalker", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=545541#p545541' },
        ].map(({ name, link }) => {
            return {
                name: `Scorpionfolk PrC: ${name}`,
                link,
                minimumStartingLevel: 9
            }
        }),
        ...[
            { name: "Bone Golem", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547370#p547370' },
            { name: "Skeleton Knight", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547373#p547373' },
        ].map(({ name, link }) => {
            return {
                name: `Awakened Skeleton Class: ${name}`,
                link,
                minimumStartingLevel: 1
            }
        }),
        ...[
            { name: "Handcrafted Archer", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547381#p547381' },
            { name: "Artillerist", link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547397#p547397' },
        ].map(({ name, link }) => {
            return {
                name: `Awakened Zombie Class: ${name}`,
                link,
                minimumStartingLevel: 1
            }
        }),
        {
            name: "Awakened Bloodfire Ooze PrC: Blood Phantasm",
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=547601#p547601',
            minimumStartingLevel: 10
        },
        {
            name: "Stone Giant PrC: Stone Giant Elder",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554820#p554820',
            minimumStartingLevel: 10
        },
        {
            name: "Cloud Giant PrC: Cloud King",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554821#p554821',
            minimumStartingLevel: 13
        },
        {
            name: "Storm Giant PrC: Storm Shepherd",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554822#p554822',
            minimumStartingLevel: 15
        },
        {
            name: "Eldritch Giant PrC: Eldritch Confessor",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554823#p554823',
            minimumStartingLevel: 16
        },
        {
            name: "Dark Naga PrC: Naga Overlord",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554863#p554863',
            minimumStartingLevel: 10
        },
        {
            name: "Guardian Naga PrC: Scaled Guardian",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554864#p554864',
            minimumStartingLevel: 12
        },
        {
            name: "Spirit Naga PrC: Wraith Naga",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554865#p554865',
            minimumStartingLevel: 10
        },
        ...[
            { name: "Austere One", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554881#p554881' },
            { name: "Maharaja", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554882#p554882' },
        ].map(({ name, link }) => {
            return {
                name: `Rakshasa PrC: ${name}`,
                link,
                minimumStartingLevel: 11
            }
        }),
        {
            name: "Lizardfolk: Blackscale PrC: Zilla",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=554883#p554883',
            minimumStartingLevel: 5
        },
        {
            name: "Phase Spider PrC: Warp Spider",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556077#p556077',
            minimumStartingLevel: 7
        },
        {
            name: "Worg PrC: Goblin King",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556078#p556078',
            minimumStartingLevel: 4
        },
        {
            name: "Lamia PrC: Lamia Noble",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556079#p556079',
            minimumStartingLevel: 8
        },
        ...[
            { name: "Foe Hunter", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556356#p556356' },
            { name: "Rune Crafter", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556391#p556391' },
        ].map(({ name, link }) => {
            return {
                name: `Midgard Dwarf PrC: ${name}`,
                link,
                minimumStartingLevel: 7
            }
        }),
        {
            name: "Destrachan PrC: Ruinous Muse",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556424#p556424',
            minimumStartingLevel: 10
        },
        {
            name: "Rakshasa: Raktavarna PrC: Atoner",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556505#p556505',
            minimumStartingLevel: 5
        },
        {
            name: "Dweomercat PrC: Arcanacat",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556589#p556589',
            minimumStartingLevel: 9
        },
        {
            name: "Demon: Hala PrC: Cyclonic Overlord",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556718#p556718',
            minimumStartingLevel: 6
        },
        {
            name: "Rakshasa: Marai PrC: Resplendent Hydra",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556750#p556750',
            minimumStartingLevel: 10
        },
        {
            name: "Contract Devil PrC: First Party",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556796#p556796',
            minimumStartingLevel: 12
        },
        {
            name: "Peri PrC: Purifying Flame",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556891#p556891',
            minimumStartingLevel: 15
        },
        {
            name: "Daemon: Crucidaemon PrC: Nightmare Princess",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=556972#p556972',
            minimumStartingLevel: 16
        },
        {
            name: "Rakshasa: Zalyakavat PrC: Downward Spiral",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557031#p557031',
            minimumStartingLevel: 15
        },
        {
            name: "Rakshasa: Amanusya PrC: Sin Caller",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557032#p557032',
            minimumStartingLevel: 8
        },
        {
            name: "Angel: Choral PrC: Israfil",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557384#p557384',
            minimumStartingLevel: 8
        },
        {
            name: "Andrenjinyi PrC: Yurlunggur",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557443#p557443',
            minimumStartingLevel: 16
        },
        ...[
            { name: "Morphean Angel", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557488#p557488' },
            { name: "Mothra", link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557489#p557489' },
        ].map(({ name, link }) => {
            return {
                name: `Cynosoma PrC: ${name}`,
                link,
                minimumStartingLevel: 14
            }
        }),
        {
            name: "Cayhound PrC: Raiju",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557538#p557538',
            minimumStartingLevel: 7
        },
        {
            name: "Black Goat PrC: Akerbeltz",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557603#p557603',
            minimumStartingLevel: 12
        },
        {
            name: "Inevitable: Impariut PrC: Kingmaker",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557669#p557669',
            minimumStartingLevel: 12
        },
        {
            name: "Inevitable: Novenarut PrC: Daimyo",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557699#p557699',
            minimumStartingLevel: 6
        },
        {
            name: "Kami: Zuishin PrC: Aspect of Hachiman",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=557728#p557728',
            minimumStartingLevel: 12
        },
        {
            name: "Witchcrow PrC: Hopestealer",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=563827#p563827',
            minimumStartingLevel: 6
        },
        {
            name: "Ankou PrC: First World Assassin",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=563828#p563828',
            minimumStartingLevel: 15
        },
        {
            name: "Demon: Yochlol PrC: Insightful Suppression",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565109#p565109',
            minimumStartingLevel: 10
        },
        {
            name: "Derakni PrC: Singular Swarm",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565610#p565610',
            minimumStartingLevel: 12
        },
        {
            name: "Demon: Coloxus Prc: Illusionist Parasite",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565611#p565611',
            minimumStartingLevel: 13
        },
        {
            name: "Empusa PrC: Vengeful Vespid",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565643#p565643',
            minimumStartingLevel: 14
        },
        {
            name: "Agathion: Procyal PrC: Divine Trickster",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565674#p565674',
            minimumStartingLevel: 10
        },
        {
            name: "Agathion: Vulpinal PrC: Serene Arbiter",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565675#p565675',
            minimumStartingLevel: 8
        },
        {
            name: "Kyton: Oitos PrC: Auric Revenant",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565729#p565729',
            minimumStartingLevel: 13
        },
        {
            name: "Kyton: Ostiarius PrC: Dark Mistress",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565928#p565928',
            minimumStartingLevel: 8
        },
        {
            name: "Terlen PrC: Great Fang of the Sky",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=565928#p565928',
            minimumStartingLevel: 5
        },
        {
            name: "Lamia Matriarch PrC: Defiant",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575071#p575071',
            minimumStartingLevel: 10
        },
        {
            name: "Cold Rider PrC: Frozen King",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575079#p575079',
            minimumStartingLevel: 10
        },
        {
            name: "Morrigna PrC: Deathly Enforcer",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575097#p575097',
            minimumStartingLevel: 15
        },
        {
            name: "Venedaemon PrC: Vile Sorcerer",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575098#p575098',
            minimumStartingLevel: 8
        },
        {
            name: "Erodaemon PrC: Heart Breaker",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575101#p575101',
            minimumStartingLevel: 13
        },
        {
            name: "Lunar Naga PrC: Void Serpent",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575102#p575102',
            minimumStartingLevel: 8
        },
        {
            name: "Dream Naga PrC: Oneiric Ophidian",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575118#p575118',
            minimumStartingLevel: 10
        },
        {
            name: "Dream Naga PrC: Oneiric Ophidian",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575118#p575118',
            minimumStartingLevel: 10
        },
        {
            name: "Slime Naga PrC: Ooze Conductor",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575119#p575119',
            minimumStartingLevel: 10
        },
        {
            name: "Royal Naga PrC: Singular Collective",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575120#p575120',
            minimumStartingLevel: 13
        },
        {
            name: "Flame Drake PrC: Inferno Wyrm",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575121#p575121',
            minimumStartingLevel: 7
        },
        {
            name: "Flame Drake PrC: Inferno Wyrm",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575121#p575121',
            minimumStartingLevel: 7
        },
        {
            name: "Thriae Dancer PrC: Terpsichorean",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575138#p575138',
            minimumStartingLevel: 8
        },
        {
            name: "Thriae Seer PrC: Oracle of the Colony",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575139#p575139',
            minimumStartingLevel: 13
        },
        {
            name: "Imentesh Protean PrC: Chaos Caster",
            link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=575142#p575142',
            minimumStartingLevel: 12
        },
    ].map(({ name, link, minimumStartingLevel }) => {
        return {
            name,
            author: 'Koumei',
            link,
            minimumStartingLevel,
        }
    }),
];

// export const koumeiMonsterPrcsBBCode = () => {
//     let minimumLevels: number[] = [];
//     let minimumLevelToEntriesMap = new Map<number, PrestigeClassEntry[]>()

//     let nullMinimumEntries: PrestigeClassEntry[] = [];

//     for (let prestigeClassEntry of koumeiMonsterPrcs) {
//         if (prestigeClassEntry.minimumStartingLevel != null) {
//             if (minimumLevelToEntriesMap.has(prestigeClassEntry.minimumStartingLevel)) {
//                 minimumLevelToEntriesMap.get(prestigeClassEntry.minimumStartingLevel).push(prestigeClassEntry);
//             } else {
//                 minimumLevels.push(prestigeClassEntry.minimumStartingLevel);
//                 minimumLevelToEntriesMap.set(prestigeClassEntry.minimumStartingLevel, [prestigeClassEntry]);
//             }
//         } else {
//             nullMinimumEntries.push(prestigeClassEntry);
//         }
//     }

//     minimumLevels.sort(function (a, b) {
//         return a - b;
//     });

//     let output = '';

//     for (let minimumLevel of minimumLevels) {
//         output += `\n[b]Level ${minimumLevel - 1}[/b]\n`;
//         for (let entry of minimumLevelToEntriesMap.get(minimumLevel)) {
//             output += `[url=${entry.link}]${entry.name}[/url]\n`;
//         }
//     }

//     return output;
// };