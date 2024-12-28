import ReactDOM from 'react-dom/client';
import { EntryList } from '../../entry';
import { spells } from '../data/spellslist';


export const SpellsDiv = () => {
  return <div>
    <h2>Spells</h2>
    <EntryList entries={spells} shouldSort={true} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <SpellsDiv />
  </div>
);