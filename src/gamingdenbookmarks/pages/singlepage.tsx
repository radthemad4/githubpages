import { RacesDiv } from './races';
import { BaseClassesDiv } from './baseclasses';
import { PrestigeClassesDiv } from './prestigeclasses';
import { RacialParagonsDiv } from './racialparagonclasses';
import { NPCClasssesDiv } from './npcclasses';
import { FeatsDiv } from './feats';
import { ScalingFeatsDiv } from './scalingfeats';
import { BackgroundsDiv } from './backgrounds';
import { ACFsDiv } from './alternateclassfeatures';
import { EquipmentDiv } from './equipment';
import { NPCsDiv } from './npcs';
import { MonstersDiv } from './monsters';
import { TemplatesDiv } from './templates';
import { SourcebooksDiv } from './sourcebooks';
import { VariantRulesDiv } from './variantrules';
import { ClassAbilityComponentsDiv } from './classabilitycomponents';
import { OtherEntriesDiv } from './other';
import { BackToMainPageElement, createRoot } from '.';

createRoot(
    <div className='Content'>
        <BackToMainPageElement />
        <RacesDiv />
        <div>
            <BaseClassesDiv />
            <PrestigeClassesDiv />
            <RacialParagonsDiv />
            <NPCClasssesDiv />
        </div>
        <div>
            <FeatsDiv />
            <ScalingFeatsDiv />
            <ACFsDiv />
            <BackgroundsDiv />
        </div>
        <div>
            <h1>Class Ability Components</h1>
            <ClassAbilityComponentsDiv />
        </div>
        <EquipmentDiv />
        <NPCsDiv />
        <MonstersDiv />
        <TemplatesDiv />
        <SourcebooksDiv />
        <VariantRulesDiv />
        <OtherEntriesDiv />
    </div>
);