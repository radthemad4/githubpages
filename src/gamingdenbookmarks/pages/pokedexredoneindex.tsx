import { MonsterEntryList } from '../../entry';
import { pokedexRedoneFakemon, pokedexRedoneMonsters } from '../data/pokedexredone';
import { FaFile } from 'react-icons/fa';
import { createRoot } from '.';

createRoot(<>
  <h1 className='ThreadTitle'>
    <a className='Link1' href="http://www.tgdmb.com/phpBB3/viewtopic.php?p=558368">Pokedex Redone</a>
  </h1>
  <p className="author">
    <FaFile color='#999999' aria-hidden='true' fontSize={10} />
    <span style={{ marginLeft: '5px' }}>by <strong><a href={`http://www.tgdmb.com/phpBB3/memberlist.php?mode=viewprofile&u=254`} className="Link1">Koumei</a></strong> and <strong><a href={`http://www.tgdmb.com/phpBB3/memberlist.php?mode=viewprofile&u=138`} className="Link1">Prak</a></strong></span>
  </p>
  <div className='Content'>
    <MonsterEntryList entries={pokedexRedoneMonsters} />
  </div>
  <h1 className='ThreadTitle'>
    Fakemon
  </h1>
  <div className='Content'>
    <MonsterEntryList entries={pokedexRedoneFakemon} />
  </div>
</>);