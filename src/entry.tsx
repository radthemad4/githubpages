import { JSX } from "react";

export interface Entry {
    name: string,
    author: string,
    link: string,
    prereqs?: ({
        title: string,
        link: string,
    } | string | JSX.Element)[] | string,
    relatedLinks?: {
        title: string,
        link: string,
        wiki?: string
    }[],
    wikiLink?: string,
    wikiLinks?: {
        title: string,
        link: string
    }[],
    note?: string | JSX.Element
}

export interface PrestigeClassEntry extends Entry {
    minimumStartingLevel?: number
}

export function PrestigeClassEntryList(props: { entries: PrestigeClassEntry[], minusOne?: boolean }): JSX.Element {

    let minimumLevels: number[] = [];
    let minimumLevelToEntriesMap = new Map<number, PrestigeClassEntry[]>();

    let nullMinimumEntries: PrestigeClassEntry[] = [];

    for (let prestigeClassEntry of props.entries) {
        if (prestigeClassEntry.minimumStartingLevel != null) {
            if (minimumLevelToEntriesMap.has(prestigeClassEntry.minimumStartingLevel)) {
                minimumLevelToEntriesMap.get(prestigeClassEntry.minimumStartingLevel)?.push(prestigeClassEntry);
            } else {
                minimumLevels.push(prestigeClassEntry.minimumStartingLevel);
                minimumLevelToEntriesMap.set(prestigeClassEntry.minimumStartingLevel, [prestigeClassEntry]);
            }
        } else {
            nullMinimumEntries.push(prestigeClassEntry);
        }
    }

    minimumLevels.sort(function (a, b) {
        return a - b;
    });

    return (<div>
        <EntryList entries={nullMinimumEntries} shouldSort={true}></EntryList>
        {minimumLevels.map((minimumStartingLevel) => {
            return <div>
                <h3>{props.minusOne ? `Level ${minimumStartingLevel - 1}` : `Minimum Starting Level ${minimumStartingLevel}`}</h3>
                <EntryList entries={minimumLevelToEntriesMap.get(minimumStartingLevel) ?? []} shouldSort={true}></EntryList>
            </div>
        })}
    </div>);
}

export interface MonsterEntry extends Entry {
    challengeRating?: number
}

export function MonsterEntryList(props: { entries: MonsterEntry[] }): JSX.Element {

    let challengeRatings: number[] = [];
    let challengeRatingToEntriesMap = new Map<number, MonsterEntry[]>()

    let nullCREntries: MonsterEntry[] = [];

    for (let monsterEntry of props.entries) {

        if (monsterEntry.challengeRating != null) {
            if (challengeRatingToEntriesMap.has(monsterEntry.challengeRating)) {
                challengeRatingToEntriesMap.get(monsterEntry.challengeRating)?.push(monsterEntry);
            } else {
                challengeRatings.push(monsterEntry.challengeRating);
                challengeRatingToEntriesMap.set(monsterEntry.challengeRating, [monsterEntry]);
            }
        } else {
            nullCREntries.push(monsterEntry);
        }

    }

    challengeRatings.sort(function (a, b) {
        return a - b;
    });

    return (<div>
        <EntryList entries={nullCREntries} shouldSort={true}></EntryList>
        {challengeRatings.map((challengeRating) => {
            return <div>
                <h3>CR {challengeRating}</h3>
                <EntryList entries={challengeRatingToEntriesMap.get(challengeRating) ?? []} shouldSort={true}></EntryList>
            </div>
        })}
    </div>);
}

export function EntryList(props: { entries: Entry[], shouldSort: boolean }): JSX.Element {
    return <ul>
        {(props.shouldSort ? props.entries.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            }

            const authorA = a.author.toUpperCase();
            const authorB = b.author.toUpperCase();

            if (authorA < authorB) {
                return -1;
            } else if (authorA > authorB) {
                return 1;
            }

            return 0;
        }) : props.entries).map(({ name, author, link, prereqs, relatedLinks, wikiLink, wikiLinks, note }, index) => {
            return (<li key={index}><a href={link}>{name}, {author}</a>
                {wikiLink != undefined ? <a href={wikiLink}>&nbsp;(wiki)</a> : ''}
                {prereqs != undefined ? <span> (prereqs:&nbsp;
                    {
                        typeof prereqs === 'string' ? prereqs
                            : prereqs.map((prereq) => { return typeof prereq === 'string' ? prereq : ('link' in prereq) ? <a href={prereq.link}>{prereq.title}</a> : prereq }).map((element, i) => <span key={i}>
                                {i > 0 && ", "}
                                {element}
                            </span>)
                    }
                    )</span> : ''}
                {relatedLinks != undefined ? <span> ( related links:&nbsp;
                    {
                        relatedLinks.map(({ title, link, wiki }) => { return <span><a href={link}>{title}</a> {wiki == null ? '' : <a href={wiki}>(wiki)</a>}</span> }).map((element, i) => <span key={i}>
                            {i > 0 && ", "}
                            {element}
                        </span>)
                    }
                    )</span> : ''}
                {wikiLinks != undefined ? <span> (wiki:&nbsp;
                    {
                        wikiLinks.map(({ title, link }) => { return <a href={link}>{title}</a> }).map((element, i) => <span key={i}>
                            {i > 0 && ", "}
                            {element}
                        </span>)
                    }
                    )</span> : ''}
                {note != undefined ? <span>&nbsp;({note})</span> : ''}
            </li>);
        })}
    </ul>
}