import { Entry } from "../../entry";

export const knightlyOrders: Entry[] = [
    ...['Green Knight','Inspiring Knights','Knight of the Iron Glacier'].map((name) => {
        return {
            name,
            author: 'Maxus',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=59137#p59137'
        }
    }),
    {
        name: 'Order of Lolth',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=479366#p479366',
        author: 'Koumei'
    },
    {
        name: 'Deathless Knight',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=63461#p63461',
        author: 'Maxus'
    },
    {
        name: 'Cavalier',
        link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=63469#p63469',
        author: 'Maxus'
    },
    {
        name: 'Scaled Knight of the Primordial',
        link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=109441#p109441',
        author: 'Koumei'
    },
    ...['Death', 'Eternal', 'Lolth', 'Mechanical', 'Myrmidon', 'Scaled', 'Space'].map((name) => {
        return {
            name: `${name} Knight`,
            author: 'Koumei',
            link: 'https://tgdmb.com/phpBB3/viewtopic.php?p=546475#p546475'
        }
    }),
];