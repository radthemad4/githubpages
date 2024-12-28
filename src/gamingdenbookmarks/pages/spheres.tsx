import ReactDOM from 'react-dom/client';
import { EntryList } from '../../entry';
import { spheres } from '../data/spherelist';

export const SpheresDiv = () => {
  return <div>
    <h2>Spheres</h2>
    <EntryList entries={spheres} shouldSort={true} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div style={{ padding: "1em" }}>
    <a href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
    <SpheresDiv />
  </div>
);