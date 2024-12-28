import { MonsterEntryList } from '../../entry';
import { monsters } from '../data/monsterslist';
import { createRoot, BackToMainPageElement } from '.';

export const MonstersDiv = () => {
    return <div className='Content'>
        <h1 className='ThreadTitle'>Monsters</h1>
        <MonsterEntryList entries={monsters} />
    </div>
}

createRoot(
    <>
        <BackToMainPageElement />
        <MonstersDiv />
    </>
);