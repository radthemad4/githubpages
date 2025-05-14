import { EntryList } from '../../entry';
import { spells } from '../data/spellslist';
import { spheres } from '../data/spherelist';
import { domains } from '../data/domainslist';
import { knightlyOrders } from '../data/knightlyorders';
import { monkFightingStyles } from '../data/monkFightingStyles';
import { kaelikKlerikDomainLists, kaelikKlerikSpellLists } from '../data/kaelikKlerikStuff';
import { bardPerformanceStyles } from '../data/bardperformancestyleslists';
import { warlockInvocations } from '../data/warlockInvocations';
import { createRoot, BackToMainPageElement } from '.';


export const ClassAbilityComponentsDiv = () => {
    return <div>
        <h2 id='Bard_Performance_Stlyes'><a href='https://dnd-wiki.org/wiki/Bard,_Tome_%283.5e_Class%29#Performance_Style'>Bard Performance Styles</a></h2>
        <EntryList entries={bardPerformanceStyles} shouldSort={true} />
        <h2 id='Domains'>Domains</h2>
        <EntryList entries={domains} shouldSort={true} />
        <h2 id='Kaelik_Cleric_Domains'><a href='https://tgdmb.com/phpBB3/viewtopic.php?t=56589'>Kaelik Cleric Domains</a></h2>
        <EntryList entries={kaelikKlerikDomainLists} shouldSort={true} />
        <h2 id='Kaelik_Cleric_Spells'><a href='https://tgdmb.com/phpBB3/viewtopic.php?t=56589'>Kaelik Cleric Spells</a></h2>
        <EntryList entries={kaelikKlerikSpellLists} shouldSort={true} />
        <h2 id='Knightly_Orders'><a href='https://dnd-wiki.org/wiki/Knight,_Tome_(3.5e_Class)#Knightly_Order'>Knightly Orders</a></h2>
        <EntryList entries={knightlyOrders} shouldSort={true}></EntryList>
        <h2 id='Spells'>Spells</h2>
        <EntryList entries={spells} shouldSort={true} />
        <h2 id='Spheres'>Spheres</h2>
        <EntryList entries={spheres} shouldSort={true} />
        <h2 id='Tome_Monk_Fighting_Styles'><a href='https://dnd-wiki.org/wiki/Monk,_Tome_(3.5e_Class)#Fighting_Style'>Tome Monk Fighting Styles</a></h2>
        <EntryList entries={monkFightingStyles} shouldSort={true}></EntryList>
        <h2 id='Warlock_Invocations'><a href='https://dnd-wiki.org/wiki/Publication:Complete_Arcane'>Warlock Invocations</a></h2>
        <EntryList entries={warlockInvocations} shouldSort={true}></EntryList>
    </div>
}

createRoot(
    <div className='Content'>
        <BackToMainPageElement />
        <h1 className='ThreadTitle'>Class Ability Components</h1>
        <ClassAbilityComponentsDiv />
    </div>
);