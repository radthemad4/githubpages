import { FaFile } from "react-icons/fa";
import { createRoot } from ".";
import { koumeiMonsterPrcs } from "../data/koumeimonsterprcslist";
import { PrestigeClassEntryList } from "../../entry";


createRoot(<>
  <h1 className='ThreadTitle'>
    <a className='Link1' href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=57635">Monster Prestige Classes (A Reprint)</a>
  </h1>
  <p className="author">
    <FaFile color='#999999' aria-hidden='true' fontSize={10} />
    <span style={{ marginLeft: '5px' }}>by <strong><a href={`http://www.tgdmb.com/phpBB3/memberlist.php?mode=viewprofile&u=254`} className="Link1">Koumei</a></strong></span>
  </p>
  <div className='Content'>
    <PrestigeClassEntryList entries={koumeiMonsterPrcs} minusOne={true} />
  </div>
</>);