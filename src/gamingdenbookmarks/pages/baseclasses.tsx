import { EntryList } from "../../entry";
import { BackToMainPageElement, createRoot } from ".";
import { baseClasses } from "../data/baseclasseslist";

export const BaseClassesDiv = () => {
  return <div className='Content'>
    <h1 className='ThreadTitle'>Base Classes</h1>
    <EntryList entries={baseClasses} shouldSort={true} />
  </div>
}

createRoot(
  <>
    <BackToMainPageElement />
    <BaseClassesDiv />
  </>
);