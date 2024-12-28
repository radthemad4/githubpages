import { EntryList } from '../../entry';
import { BackToMainPageElement, createRoot } from '.';
import { acfLists } from '../data/acfslist';

export const ACFsDiv = () => {
    return <div className='Content'>
        <h1 className='ThreadTitle'>Alternate Class Features</h1>
        {acfLists.map(({ name, link, acfs, relatedLinks, note }) => <div>
            <h3>
                <a href={link}>{name}</a>
                {
                    relatedLinks == null ? "" :
                        <span>
                            &nbsp;( related links: {relatedLinks.map(({ name, link }, index) => {
                                return <span><a href={link}>{name}</a>{relatedLinks.length > 1 && index < relatedLinks.length - 1 ? ', ' : ''}</span>
                            })} )
                        </span>
                }
                {note != undefined ? <span>&nbsp;({note})</span> : ''}
            </h3>
            <EntryList entries={acfs} shouldSort={true} />
        </div>)}

    </div>
}

createRoot(
    <>
        <BackToMainPageElement />
        <ACFsDiv />
    </>
);