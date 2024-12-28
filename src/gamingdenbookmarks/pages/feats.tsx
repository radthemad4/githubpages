import { EntryList } from '../../entry';
import { feats, featCollections } from '../data/featslist';
import { createRoot, BackToMainPageElement } from '.';

export const FeatsDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Feats</h1>
    <EntryList entries={feats} shouldSort={true} />
    <h1 className='ThreadTitle'>Feat Collections</h1>
    <EntryList entries={featCollections} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <FeatsDiv />
  </>
);