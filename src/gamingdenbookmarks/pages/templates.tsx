import { EntryList } from '../../entry';
import { templates } from '../data/templateslist';
import { createRoot, BackToMainPageElement } from '.';

export const TemplatesDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Templates</h1>
    <EntryList entries={templates} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <TemplatesDiv />
  </>
);