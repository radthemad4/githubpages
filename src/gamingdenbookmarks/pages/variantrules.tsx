import { EntryList } from '../../entry';
import { variantRules } from '../data/variantruleslist';
import { createRoot, BackToMainPageElement } from '.';

export const VariantRulesDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Variant Rules</h1>
    <EntryList entries={variantRules} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <VariantRulesDiv />
  </>
);