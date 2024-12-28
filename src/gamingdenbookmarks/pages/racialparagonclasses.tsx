import { EntryList } from '../../entry';
import { racialParagons } from '../data/racialparagonslist';
import { BackToMainPageElement, createRoot } from '.';

export const RacialParagonsDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Racial Paragons</h1>
    <EntryList entries={racialParagons} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <RacialParagonsDiv />
  </>
);