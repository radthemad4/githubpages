import { PrestigeClassEntryList } from '../../entry';
import { prestigeClasses } from '../data/prestigeclasseslist';
import { BackToMainPageElement, createRoot } from '.';
import { useRef, useState } from 'react';
import { koumeiMonsterPrcs } from '../data/koumeimonsterprcslist';

const allPrCs = [...prestigeClasses, ...koumeiMonsterPrcs];

export const PrestigeClassesDiv = () => {
  const toggleInput = useRef<HTMLInputElement>(null);
  const [showKoumeiMonsterPrCs, setShowKoumeiMonsterPrcs] = useState(true);
  return (
    <div className='Content'>
      <h1 className='ThreadTitle'>Prestige Classes</h1 >
      <input
        ref={toggleInput}
        checked={showKoumeiMonsterPrCs}
        type='checkbox'
        onChange={() => {
          setShowKoumeiMonsterPrcs((value) => !value);
        }}
      /> Koumei Monster Prestige Classes
      {showKoumeiMonsterPrCs ?
        <PrestigeClassEntryList entries={allPrCs} /> :
        <PrestigeClassEntryList entries={prestigeClasses} />
      }

    </div>
  )
}

createRoot(
  <>
    <BackToMainPageElement />
    <PrestigeClassesDiv />
  </>
);