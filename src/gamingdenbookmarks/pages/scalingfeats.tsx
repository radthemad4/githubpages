import { EntryList } from '../../entry';
import { scalingFeats } from '../data/scalingfeatslist';
import { createRoot, BackToMainPageElement } from '.';

export const ScalingFeatsDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Scaling Feats</h1>
    <EntryList entries={scalingFeats} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <ScalingFeatsDiv />
  </>
);