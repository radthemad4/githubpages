import { MonsterEntryList } from '../../entry';
import { npcs } from '../data/npcslist';
import { createRoot, BackToMainPageElement } from '.';

export const NPCsDiv = () => {
    return <div className='Content'>
        <h1 className='ThreadTitle'>NPCs</h1>
        <MonsterEntryList entries={npcs} />
    </div>
}

createRoot(
    <>
        <BackToMainPageElement />
        <NPCsDiv />
    </>
);