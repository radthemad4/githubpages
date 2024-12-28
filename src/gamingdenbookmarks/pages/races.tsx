import { EntryList } from '../../entry';
import { races } from '../data/raceslist';
import { BackToMainPageElement, createRoot } from '.';

export const RacesDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Races</h1>
    <EntryList entries={races} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <RacesDiv />
  </>
);