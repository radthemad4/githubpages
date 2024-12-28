import { Entry } from "../../entry";

export const npcClasses: Entry[] = [
    ...[
        {
            name: 'Warrior',
            wikiLink: 'https://dnd-wiki.org/wiki/Warrior_(3.5e_NPC_Class)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=33297#p33297',
            wikiLink: element.wikiLink
        }
    }),
    ...['Guard', 'Priest', 'Sage'].map((element) => {
        return {
            name: element,
            author: 'Iaimeki',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=50379#p50379',
        }
    }),
    ...['Commoner', 'Expert'].map((element) => {
        return {
            name: element,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=165701#p165701',
        }
    }),
    {
        name: 'Aristocrat',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=165725#p165725',
    },
    {
        name: 'Verdant Follower',
        author: 'Koumei',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=169948#p169948',
    },
    {
        name: 'Commoner',
        author: 'virgil',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=165139',
    },
    {
        name: 'Perfect Minion',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=316687#p316687',
    },
    {
        name: 'Team Rocket Grunt',
        author: 'Koumei',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=285695#p285695',
        relatedLinks: [{ title: 'Pokémaster ', link: 'https://dnd-wiki.org/wiki/Pok%C3%A9mon_d20_(3.5e_Sourcebook)/The_Pok%C3%A9master#Pok.C3.A9master_Class' }],
    },
    {
        name: 'Expert',
        author: 'Hicks',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=164291#p164291',
    },
    {
        name: 'Berserker',
        author: 'God_of_Awesome',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?f=6&t=50919',
    },
    {
        name: 'Adept',
        author: 'Frank and K',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=49292#p49292',
        wikiLink: 'https://dnd-wiki.org/wiki/Adept_(3.5e_NPC_Class)',
    },
];