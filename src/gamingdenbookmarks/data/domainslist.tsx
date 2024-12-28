import { Entry } from "../../entry";

export const domains: Entry[] = [
    {
        name: 'Fire',
        author: 'Lokathor',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=128327#p128327'
    },
    ...[
        'Air', 'Animal', 'Death', 'Destruction', 'Earth',
        'Fire', 'Healing', 'Knowledge', 'Luck', 'Magic',
        'Plant', 'Protection', 'Strength', 'Sun', 'Travel',
        'Trickery', 'War', 'Water',
    ].map((name) => {
        return {
            name,
            author: 'koz',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=128457#p128457'
        }
    }),
    {
        name: 'Denim',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=536511#p536511'
    },
    {
        name: 'Public',
        author: 'AndreiChekov',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=55390'
    },
    {
        name: 'Hardcore',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=38926#p38926',
        author: 'Essence',
    },
    {
        name: 'Cool',
        link: 'http://www.niftymessageboard.com/phpbb3/viewtopic.php?f=10&t=47132&p=47137',
        author: 'FrankTrollman',
    },
    {
        name: 'Goblinkind',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=567360#p567360',
        author: 'Prak',
    },
];