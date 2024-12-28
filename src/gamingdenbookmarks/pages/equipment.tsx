import { EntryList } from '../../entry';
import { mediumBoGMagicItems, lesserBoGMagicItems, greaterBoGMagicItems, bogItemCollections, uncategorizedItems } from '../data/equipmentlist';
import { createRoot, BackToMainPageElement } from '.';

export const EquipmentDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Equipment</h1>
    <h3>Book of Gears Style Magic Items</h3>
    <EntryList entries={bogItemCollections} shouldSort={false} />
    <h4>Minor/Lesser</h4>
    <EntryList entries={lesserBoGMagicItems} shouldSort={true} />
    <h4>Moderate/Medium</h4>
    <EntryList entries={mediumBoGMagicItems} shouldSort={true} />
    <h4>Major/Greater</h4>
    <EntryList entries={greaterBoGMagicItems} shouldSort={true} />
    <h3>Uncategorized</h3>
    <EntryList entries={uncategorizedItems} shouldSort={true}></EntryList>
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <EquipmentDiv />
  </>
);