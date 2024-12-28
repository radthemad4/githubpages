import { PrestigeClassEntryList } from '../../entry';
import { prestigeClasses } from '../data/prestigeclasseslist';
import { BackToMainPageElement, createRoot } from '.';

export const PrestigeClassesDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Prestige Classes</h1 >
    <PrestigeClassEntryList entries={prestigeClasses} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <PrestigeClassesDiv />s
  </>
);