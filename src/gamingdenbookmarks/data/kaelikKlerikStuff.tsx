import { Entry } from "../../entry";

export const kaelikKlerikDomainLists: Entry[] = [
    ...[
        'Balance',
        'Cavern',
        'Charm',
        'Cold',
        'Community',
        'Courage',
        'Darkness',
        'Domination',
        'Dream',
        'Family',
        'Fate',
        'Glory',
        'Hatred',
        'Liberation',
        'Madness',
        'Mind',
        'Moon',
        'Nobility',
        'Oracle',
        'Pestilence',
        'Renewal',
        'Retribution',
        'Rune',
        'Scalykind',
        'Slime',
        'Spider',
        'Storm',
        'Suffering',
        'Undeath',
    ].map((name) => {
        return {
            name,
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=538542#p538542',
            author: 'Koumei'
        }
    }),
];

export const kaelikKlerikSpellLists: Entry[] = [
    {
        name: 'Additional Spells for Clerics',
        author: 'Koumei',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=539726#p539726'
    }
];