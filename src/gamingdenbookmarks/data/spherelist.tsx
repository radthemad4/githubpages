import { Entry } from "../../entry";

export const spheres: Entry[] = [
    ...[
        {
            name: 'Bone',
            wikiLink: 'https://dnd-wiki.org/wiki/Bone_(3.5e_Sphere)'
        },
        {
            name: 'Bubbles',
            wikiLink: 'https://dnd-wiki.org/wiki/Bubbles_(3.5e_Sphere)'
        },
        {
            name: 'Carnage',
            wikiLink: 'https://dnd-wiki.org/wiki/Carnage_(3.5e_Sphere)'
        },
        {
            name: 'Cold',
            wikiLink: 'https://dnd-wiki.org/wiki/Cold_(3.5e_Sphere)'
        },
        {
            name: 'Death',
            wikiLink: 'https://dnd-wiki.org/wiki/Death_(3.5e_Sphere)'
        },
        {
            name: 'Dominion',
            wikiLink: 'https://dnd-wiki.org/wiki/Dominion_(3.5e_Sphere)'
        },
        {
            name: 'Fire',
            wikiLink: 'https://dnd-wiki.org/wiki/Fire_(3.5e_Sphere)'
        },
        {
            name: 'Frostbite',
            wikiLink: 'https://dnd-wiki.org/wiki/Frostbite_(3.5e_Sphere)'
        },
        {
            name: 'Heresy',
            wikiLink: 'https://dnd-wiki.org/wiki/Heresy_(3.5e_Sphere)'
        },
        {
            name: 'Pyre',
            wikiLink: 'https://dnd-wiki.org/wiki/Pyre_(3.5e_Sphere)'
        },
        {
            name: 'Seduction',
            wikiLink: 'https://dnd-wiki.org/wiki/Seduction_(3.5e_Sphere)'
        },
        {
            name: 'Sleep',
            wikiLink: 'https://dnd-wiki.org/wiki/Sleep_(3.5e_Sphere)'
        },
        {
            name: 'Stone',
            wikiLink: 'https://dnd-wiki.org/wiki/Stone_(3.5e_Sphere)'
        },
        {
            name: 'Terror',
            wikiLink: 'https://dnd-wiki.org/wiki/Terror_(3.5e_Sphere)'
        },
        {
            name: 'Venom',
            wikiLink: 'https://dnd-wiki.org/wiki/Venom_(3.5e_Sphere)'
        },
        {
            name: 'Violation',
            wikiLink: 'https://dnd-wiki.org/wiki/Violation_(3.5e_Sphere)'
        },
        {
            name: 'Voracity',
            wikiLink: 'https://dnd-wiki.org/wiki/Voracity_(3.5e_Sphere)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'Frank and K',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=28831#p28831',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Time',
        author: 'PhaedrusXY',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=139550#p139550'
    },
    ...[
        {
            name: 'Permafrost',
            wikiLink: 'https://dnd-wiki.org/wiki/Permafrost_(3.5e_Sphere)'
        },
        {
            name: 'Radiance',
            wikiLink: 'https://dnd-wiki.org/wiki/Radiance_(3.5e_Sphere)'
        },
    ].map((element) => {
        return {
            name: element.name,
            author: 'IGTN',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=165845#p165845',
            wikiLink: element.wikiLink
        }
    }),
    {
        name: 'Lies',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?t=50458'
    },
    {
        name: 'Truth',
        author: 'koz',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=122972#p122972'
    },
    ...['Cheating', 'Snake', 'Stealing'].map((name) => {
        return {
            name,
            author: 'koz',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=123198#p123198',
        }
    }),
    {
        name: 'Teleportation',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=534091#p534091'
    },
    {
        name: 'Life',
        author: 'Hicks',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=543812#p543812'
    },
    {
        name: 'Badgers',
        author: 'Rejakor',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=100914#p100914'
    },
    ...['Trickery', 'Aegis'].map((name) => {
        return {
            name,
            author: 'Akula',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=100982#p100982',
        }
    }),
    {
        name: 'Ravenous Butterfly',
        author: 'Murtak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=101119#p101119'
    },
    {
        name: 'Aegis',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=101119#p101119'
    },
    {
        name: 'Trickery ',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=101119#p101119'
    },
    {
        name: 'Eye',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=113068#p113068'
    },
    ...['Valor', 'Peace'].map((name) => {
        return {
            name,
            author: 'Avoraciopoctules',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144258#p144258',
        }
    }),
    ...['Virtue', 'Purification'].map((name) => {
        return {
            name,
            author: 'Avoraciopoctules',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144336#p144336',
        }
    }),
    {
        name: 'Tempest',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144494#p144494'
    },
    {
        name: 'Crusader',
        author: 'For Valor',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144808#p144808'
    },
    {
        name: 'Prototype',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=182473#p182473'
    },
    ...['Spider', 'Web'].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=382776#p382776',
        }
    }),
    {
        name: 'Time',
        author: 'PhaedrusXY',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=133561#p133561'
    },
    {
        name: 'Storm',
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=95458#p95458',
    },
    {
        name: 'Psionics',
        author: 'Quantumboost',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=133024#p133024',
    },
    ...['Majesty', 'Magi',].map((name) => {
        return {
            name,
            author: 'CatharzGodfoot',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90608#p90608',
        }
    }),
    ...['Courage', 'Healing',].map((name) => {
        return {
            name,
            author: 'koz',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90619#p90619',
        }
    }),
    ...[
        'Martyr', 'Unicorns & Rainbows', 'Rainbows & Unicorns'
    ].map((name) => {
        return {
            name,
            author: 'CatharzGodfoot',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90621#p90621',
        }
    }),
    {
        name: 'Judgement',
        author: 'CatharzGodfoot',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90632#p90632',
    },
    {
        name: 'Prayer',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90633#p90633',
    },
    {
        name: 'Black Dragon',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=90648#p90648',
    },
    ...[
        'Illusion', 'Shadow', 'Rainbow Unicorn', 'Black Dragon',
        'Blue Dragon', 'Green Dragon', 'Red Dragon', 'White Dragon',
        'Gold Dragon'
    ].map((name) => {
        return {
            name,
            author: 'CatharzGodfoot',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=248454#p248454',
        }
    }),
    {
        name: 'Deception',
        author: 'Maxus',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=59910#p59910',
    },
    ...['Earth', 'Stone', 'Metal',].map((name) => {
        return {
            name,
            author: 'Prak',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=158692#p158692',
        }
    }),
    {
        name: 'Wind (Old)',
        author: 'Kaelik',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=102602#p102602',
    },
    {
        name: 'Wind',
        author: 'Kaelik',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=456186#p456186',
        wikiLink: 'https://dnd-wiki.org/wiki/Wind_(3.5e_Sphere)'
    },
    {
        name: 'Travel',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=442428#p442428',
    },
    {
        name: 'Beastshaper',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=501164#p501164',
    },
    ...['Ash', 'Salt', 'Trickery', 'Unmaking', 'Vapour'].map((name) => {
        return {
            name,
            author: 'Koumei',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=545939#p545939',
        }
    }),
    {
        name: 'Freedom',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144531#p144531',
    },
    ...['Forest', 'Beast',].map((name) => {
        return {
            name,
            author: 'Hicks',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=130327#p130327',
        }
    }),
    {
        name: 'Illusion',
        author: 'koz',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=122548#p122548',
    },
    {
        name: 'Freedom',
        author: 'Avoraciopoctules',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=144531#p144531',
    },
    ...['Delirium', 'Despair', 'Destiny', 'Destruction'].map((name) => {
        return {
            name,
            author: 'Catharz',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=28883#p28883',
        }
    }),
    {
        name: 'Deception',
        author: 'Maxus',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=59910#p59910',
    },
    ...['Addiction', 'Substance "Use"',].map((name) => {
        return {
            name,
            author: 'Judging__Eagle',
            link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=53866#p53866',
        }
    }),
    {
        name: 'Crow',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=555409#p555409',
    },
    {
        name: 'Silver Dragon (incomplete)',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=32512#p32512',
    },
    {
        name: 'White Dragon',
        author: 'FrankTrollman',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=32500#p32500',
    },
    {
        name: 'Machine, The',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=566850#p566850',
    },
    {
        name: 'Drill',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=566871#p566871',
    },
    {
        name: 'Vespa',
        author: 'Prak',
        link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=572328#p572328',
    },
    {
        name: 'Hive',
        author: 'Prak',
        link: 'http://www.tgdmb.com/phpBB3/viewtopic.php?p=573200#p573200',
    },
    ...[
        { name: 'Electricity', wikiLink: 'https://dnd-wiki.org/wiki/Electricity,_DR_(3.5e_Sphere)' },
        { name: 'Gravity', wikiLink: 'https://dnd-wiki.org/wiki/Gravity,_DR_(3.5e_Sphere)' },
        { name: 'Magnetism', wikiLink: 'https://dnd-wiki.org/wiki/Magnetism_(3.5e_Sphere)' },
        { name: 'Plasma ', wikiLink: 'https://dnd-wiki.org/wiki/Plasma_(3.5e_Sphere)' },
        { name: 'Sonics', wikiLink: 'https://dnd-wiki.org/wiki/Sonics_(3.5e_Sphere)' },
        { name: 'Vacuum', wikiLink: 'https://dnd-wiki.org/wiki/Vacuum_(3.5e_Sphere)' },
        { name: 'Acid', wikiLink: 'https://dnd-wiki.org/wiki/Acid,_DR_(3.5e_Sphere)' },
        { name: 'Magma', wikiLink: 'https://dnd-wiki.org/wiki/Magma_(3.5e_Sphere)' },
        { name: 'Metal', wikiLink: 'https://dnd-wiki.org/wiki/Metal,_DR_(3.5e_Sphere)' },
    ].map(({ name, wikiLink }) => {
        return {
            name,
            wikiLink,
            author: 'Darth Rabbitt',
            link: 'http://tgdmb.com/phpBB3/viewtopic.php?p=540615#p540615',
            note: 'wiki link is more recent'
        }
    }),
];