import { JSX, useCallback, useMemo } from 'react'

export interface Entry {
    name: string
    author: string
    link: string
    prereqs?:
        | (
              | {
                    title: string
                    link: string
                }
              | string
              | JSX.Element
          )[]
        | string
    relatedLinks?: {
        title: string
        link: string
        wiki?: string
    }[]
    wikiLink?: string
    wikiLinks?: {
        title: string
        link: string
    }[]
    note?: string | JSX.Element
}

export interface PrestigeClassEntry extends Entry {
    minimumStartingLevel?: number
}

export function PrestigeClassEntryList(props: { entries: PrestigeClassEntry[]; minusOne?: boolean }): JSX.Element {
    const [nullMinimumEntries, minimumLevelToEntriesMap] = useMemo(() => {
        return props.entries.reduce(
            ([nullMinimumEntries, minimumLevelToEntriesMap], entry) => {
                if (!entry.minimumStartingLevel) return [nullMinimumEntries.concat(entry), minimumLevelToEntriesMap]
                if (minimumLevelToEntriesMap[entry.minimumStartingLevel])
                    return [
                        nullMinimumEntries,
                        {
                            ...minimumLevelToEntriesMap,
                            [entry.minimumStartingLevel]:
                                minimumLevelToEntriesMap[entry.minimumStartingLevel].concat(entry),
                        },
                    ]
                return [nullMinimumEntries, { ...minimumLevelToEntriesMap, [entry.minimumStartingLevel]: [entry] }]
            },
            [[] as PrestigeClassEntry[], {} as Record<number, PrestigeClassEntry[]>]
        )
    }, [])

    return (
        <div>
            <EntryList entries={nullMinimumEntries} shouldSort={true}></EntryList>
            {(Object.keys(minimumLevelToEntriesMap) as unknown as number[])
                .sort((a, b) => a - b)
                .map((minimumStartingLevel) => (
                    <div>
                        <h3>
                            {props.minusOne
                                ? `Level ${minimumStartingLevel - 1}`
                                : `Minimum Starting Level ${minimumStartingLevel}`}
                        </h3>
                        <EntryList
                            entries={minimumLevelToEntriesMap[minimumStartingLevel] ?? []}
                            shouldSort={true}
                        ></EntryList>
                    </div>
                ))}
        </div>
    )
}

export interface MonsterEntry extends Entry {
    challengeRating?: number
}

export function MonsterEntryList(props: { entries: MonsterEntry[] }): JSX.Element {
    let challengeRatings: number[] = []
    let challengeRatingToEntriesMap = new Map<number, MonsterEntry[]>()

    let nullCREntries: MonsterEntry[] = []

    for (let monsterEntry of props.entries) {
        if (monsterEntry.challengeRating != null) {
            if (challengeRatingToEntriesMap.has(monsterEntry.challengeRating)) {
                challengeRatingToEntriesMap.get(monsterEntry.challengeRating)?.push(monsterEntry)
            } else {
                challengeRatings.push(monsterEntry.challengeRating)
                challengeRatingToEntriesMap.set(monsterEntry.challengeRating, [monsterEntry])
            }
        } else {
            nullCREntries.push(monsterEntry)
        }
    }

    challengeRatings.sort(function (a, b) {
        return a - b
    })

    return (
        <div>
            <EntryList entries={nullCREntries} shouldSort={true}></EntryList>
            {challengeRatings.map((challengeRating) => {
                return (
                    <div>
                        <h3>CR {challengeRating}</h3>
                        <EntryList
                            entries={challengeRatingToEntriesMap.get(challengeRating) ?? []}
                            shouldSort={true}
                        ></EntryList>
                    </div>
                )
            })}
        </div>
    )
}

const EntryListElement = ({ name, author, link, prereqs, relatedLinks, wikiLink, wikiLinks, note }: Entry) => {
    const WikiLink = useCallback(
        () => (wikiLink != undefined ? <a href={wikiLink}>&nbsp;(wiki)</a> : <></>),
        [wikiLink]
    )
    const PreReqs = useCallback(() => {
        if (!prereqs) return <></>
        if (typeof prereqs === 'string') return prereqs
        return (
            <span>
                {' '}
                (prereqs&#58;&nbsp;
                {prereqs
                    .map((pr) => (typeof pr === 'object' && 'link' in pr ? <a href={pr.link}>{pr.title}</a> : pr))
                    .map((element, i) => (
                        <span key={i}>
                            {i > 0 && ', '}
                            {element}
                        </span>
                    ))}{' '}
            </span>
        )
    }, [prereqs])
    const RelatedLinks = useCallback(() => {
        if (!relatedLinks) return <></>
        return (
            <span>
                {' '}
                ( related links&#58;&nbsp;
                {relatedLinks
                    .map(({ title, link, wiki }) => (
                        <span>
                            <a href={link}>{title}</a> {wiki === undefined ? <></> : <a href={wiki}>(wiki)</a>}
                        </span>
                    ))
                    .map((element, i) => (
                        <span key={i}>
                            {i > 0 && ', '}
                            {element}
                        </span>
                    ))}
                )
            </span>
        )
    }, [relatedLinks])
    const WikiLinks = useCallback(() => {
        if (!wikiLinks) return <></>
        return (
            <span>
                {' '}
                (wiki&#58;&nbsp;
                {wikiLinks
                    .map(({ title, link }) => <a href={link}>{title}</a>)
                    .map((element, i) => (
                        <span key={i}>
                            {i > 0 && ', '}
                            {element}
                        </span>
                    ))}
                )
            </span>
        )
    }, [wikiLinks])
    const Note = useCallback(() => {
        if (!note) return <></>
        return <span>&nbsp;({note})</span>
    }, [note])

    return (
        <>
            <a href={link}>
                {name}, {author}
            </a>
            <WikiLink />
            <PreReqs />
            <RelatedLinks />
            <WikiLinks />
            <Note />
        </>
    )
}

export function EntryList(props: { entries: Entry[]; shouldSort: boolean }): JSX.Element {
    const entries = useMemo(() => {
        if (!props.shouldSort) return props.entries
        const comparator = new Intl.Collator(new Intl.Locale('en-US'), {
            sensitivity: 'accent',
        })
        return props.entries.sort(({ name: nameA, author: authorA }, { name: nameB, author: authorB }) => {
            return comparator.compare(nameA, nameB) || comparator.compare(authorA, authorB)
        })
    }, [props.entries, props.shouldSort])
    return (
        <ul>
            {entries.map((entry, index) => (
                <li key={index}>
                    <EntryListElement {...entry} />
                </li>
            ))}
        </ul>
    )
}
