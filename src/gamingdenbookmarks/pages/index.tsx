import React, { JSX } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaFile } from 'react-icons/fa'

export const BackToMainPageElement = () => {
  return <a className="Link1" style={{ fontSize: 10 }} href="..\Gaming_Den_Bookmarks.html">Back to Main Page</a>
}

export const createRoot = (child: JSX.Element) => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <div className="App">
        <div className="App-header">
          <div style={{
            backgroundColor: 'white',
            width: '85%',
            borderColor: '#E6E9ED',
            border: '1px solid transparent',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'left',
          }}>
            <div style={{
              backgroundColor: '#E1EBF2',
              padding: '5px 10px',
              marginBottom: '4px',
              borderRadius: '7px',
              lineHeight: '1.48em',
            }}>
              {child}
            </div>

          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

createRoot(<>
  <h1 className='ThreadTitle'>
    [Tome] Community Material Link Repository, Take 3
  </h1>
  <p className="author">
    <FaFile color='#999999' aria-hidden='true' fontSize={10} />
    <span style={{ marginLeft: '5px' }}>by <strong><a href={`http://www.tgdmb.com/phpBB3/memberlist.php?mode=viewprofile&u=1939`} className="Link1">radthemad4</a></strong></span>
  </p>
  <div className='Content'>
    <div>The Tomes are a set of five book-length sourcebooks made by Frank and K. These books are: </div>
    <ul>
      <li>The <a href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=34248">Tome of Necromancy</a> (<a href="http://www.dnd-wiki.org/wiki/Tome_of_Necromancy_%283.5e_Sourcebook%29">wiki</a>)</li>
      <li>The <a href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=28828">Tome of Fiends</a> (<a href="http://www.dnd-wiki.org/wiki/Tome_of_Fiends_%283.5e_Sourcebook%29">wiki</a>)</li>
      <li>The <a href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=28547">Dungeonomicon</a> (<a href="http://www.dnd-wiki.org/wiki/Dungeonomicon_%283.5e_Sourcebook%29">wiki</a>)</li>
      <li><a href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=33294">Races of War</a> (<a href="http://www.dnd-wiki.org/wiki/Races_of_War_%283.5e_Sourcebook%29">wiki</a>)</li>
      <li><a href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=35813">Book of Gears</a> (<a href="http://www.dnd-wiki.org/wiki/Book_of_Gears_%283.5e_Sourcebook%29">wiki</a>) (only partially complete but worth reading, use Red_Rob's Complete Tome Items and Simplified Tome Armor, see below)</li>
    </ul>

    <div>Unofficial Extras</div>
    <ul>
      <li><a href="https://www.tgdmb.com/phpBB3/viewtopic.php?t=51121">Comprehensive Tome Errata, Kaelik</a></li>
      <li><a href="http://tgdmb.com/phpBB3/viewtopic.php?t=53704">Complete Tome Items and Wish Economy, Red_Rob</a> (<a href="https://dnd-wiki.org/wiki/Tome_Magic_Items_%283.5e_Variant_Rule%29">wiki</a>)</li>
      <li><a href="http://www.tgdmb.com/phpBB3/viewtopic.php?t=53563">Simplified Tome Armour, Red_Rob</a> (<a href="https://dnd-wiki.org/wiki/Tome_Armor_(3.5e_Variant_Rule%29">wiki</a>)</li>
    </ul>
    <div>
      These sourcebooks have the mission of sanitizing the parts of D{'&'}D 3.5 that the writers believe did not make sense. The five books focus, respectively, on the Necromancy rules, the rules for evil outsiders and the lower planes, dungeons and roguish characters, bringing fighter types up to the same power level as casters, and an overhaul of item and wealth rules. Despite only two of the books having "Tome" in the title, that word has been adopted as an adjective to describe the rule set and design philosophy as a whole. Some of the material in the Tomes can look significantly different than what you'd find in most 3.5 sourcebooks, and the rules for fighters especially have a different power level than what many people are used to.
    </div>
    <br />
    <div>
      This repository aims to catalogue the various homebrew posted by the community on the gaming den that's either explicitly written with Tome in mind, or reasonably compatible with it.
    </div>
    <br />
    <div>See also:
      <ul>
        <li><a href="https://dnd-wiki.org/wiki/Tome_Material">Tome Material in dnd-wiki</a>, as well as <a href="https://dnd-wiki.org/wiki/3.5e_Homebrew">other 3.5e material there</a>. However, ads are terrible on dnd-wiki, so make sure you have an adblocker (I recommend uBlock origin). Also, you can <a href="https://gist.github.com/radthemad4/472c676a0609b5f127645d35508efa5a">use this with a custom CSS addon</a> (e.g. Stylus) or <a href="https://gist.github.com/radthemad4/7a6ef11d9ac97b26b8e92b5ad3590a05">this script with the TamperMonkey addon</a> to reduce the size of the sidebar and topbar there.</li>
        <li><a href='http://www.niftymessageboard.com/phpbb3/viewtopic.php?f=10&t=50919'>Nifty SRD</a></li>
        <li><a href='http://www.tgdmb.com/phpBB3/viewtopic.php?t=57804'>Script for adjusting the den's layout (profile on left, smaller columns on left and right)</a></li>
        <li><a href='http://www.tgdmb.com/phpBB3/viewtopic.php?t=57979'>Den Spoiler Fix</a></li>
      </ul>
    </div>
    <br />
    <div>If you'd like to see the contents below in a single page (e.g. in order to Ctrl/Command F all entries), <a href="./gamingdenbookmarks/Single_Page.html">click here</a>.</div>

    <br />
    <div style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto auto' }}>
      <div>
        <div><h2><a href="./gamingdenbookmarks/Races.html">Races</a></h2></div>
        <div>
          <h2>Classes</h2>
          <ul>
            <li><a href="./gamingdenbookmarks/Base_Classes.html">Base</a></li>
            <li><a href="./gamingdenbookmarks/Prestige_Classes.html">Prestige</a></li>
            <li><a href="./gamingdenbookmarks/Racial_Paragon_Classes.html">Racial Paragon</a></li>
            <li><a href="./gamingdenbookmarks/NPC_Classes.html">NPC</a></li>
          </ul>
        </div>
        <div>
          <h2>Character Options</h2>
          <ul>
            <li><a href="./gamingdenbookmarks/Feats.html">Feats</a></li>
            <li><a href="./gamingdenbookmarks/Scaling_Feats.html">Scaling Feats</a></li>
            <li><a href="./gamingdenbookmarks/Alternate_Class_Features.html">Alternate Class Features</a></li>
            <li><a href="./gamingdenbookmarks/Backgrounds.html">Backgrounds</a></li>
          </ul>
        </div>
        <div>
          <h2><a href='./gamingdenbookmarks/Class_Ability_Components.html'>Class Ability Components</a></h2>
          <ul>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Bard_Performance_Stlyes'>Bard Performance Styles</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Domains'>Domains</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Kaelik_Cleric_Domains'>Kaelik Cleric Domains</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Kaelik_Cleric_Spells'>Kaelik Cleric Spells</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Knightly_Orders'>Knightly Orders</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Spells'>Spells</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Spheres'>Spheres</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Tome_Monk_Fighting_Styles'>Tome Monk Fighting Styles</a></li>
            <li><a href='./gamingdenbookmarks/Class_Ability_Components.html#Warlock_Invocations'>Warlock Invocations</a></li>
          </ul>
        </div>
        <div>
          <h2><a href="./gamingdenbookmarks/Equipment.html">Equipment</a></h2>
        </div>
      </div>
      <div>
        <h2><a href="./gamingdenbookmarks/NPCs.html">NPCs</a></h2>
        <h2><a href="./gamingdenbookmarks/Monsters.html">Monsters</a></h2>
        <h2><a href="./gamingdenbookmarks/Templates.html">Templates</a></h2>
      </div>
      <div>
        <h2><a href="./gamingdenbookmarks/Sourcebooks.html">Sourcebooks</a></h2>
        <h2><a href="./gamingdenbookmarks/Variant_Rules.html">Variant Rules</a></h2>
        <h2><a href="./gamingdenbookmarks/Other.html">Other</a></h2>
      </div>
    </div>

  </div>
</>);