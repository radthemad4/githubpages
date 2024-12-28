import { createRoot, BackToMainPageElement } from '.';
import { otherEntries } from '../data/otherEntriesList';
import { EntryList } from '../../entry';

export const OtherEntriesDiv = () => {
    return <div className='Content'>
        <h1 className='ThreadTitle'>Other</h1>
        <EntryList entries={otherEntries} shouldSort={true} />
    </div>
}

createRoot(
    <>
        <BackToMainPageElement />
        <OtherEntriesDiv />
    </>
);