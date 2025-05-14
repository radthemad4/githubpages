import { Entry } from "../../entry";

export const warlockInvocations: Entry[] = [
  ...[
    "Eldritch Ball, Warlock Least; 2nd; Blast Shape",
    "Ghost Lamps, Warlock Least; 2nd; Eldritch Essence",
    "Poison Sting Blast, Warlock Least; 2nd; Eldritch Essence",
  ].map((name) => ({
    name,
    link: 'https://www.tgdmb.com/phpBB3/viewtopic.php?p=571413#p571413',
    author: 'Prak',
  })),
];