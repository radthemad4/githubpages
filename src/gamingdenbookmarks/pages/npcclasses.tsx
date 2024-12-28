import { EntryList } from '../../entry';
import { npcClasses } from '../data/npcclasseslist';
import { createRoot, BackToMainPageElement } from '.';

export const NPCClasssesDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>NPC Classes</h1>
    <EntryList entries={npcClasses} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <NPCClasssesDiv />
  </>
);