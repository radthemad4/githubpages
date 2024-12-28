import { EntryList } from '../../entry';
import { sourcebooks } from '../data/sourcebookslist';
import { createRoot, BackToMainPageElement } from '.';

export const SourcebooksDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Sourcebooks</h1>
    <EntryList entries={sourcebooks} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <SourcebooksDiv />
  </>
);