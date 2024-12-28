export {};

export const shieldOnlyDiv = <div>
    <div>
        <div style={{ fontSize: 'larger' }}><b style={{ fontSize: 'larger' }}>Shield Elemental Wall</b></div>
        <b style={{ fontSize: 'larger' }}>Abjuration [Force, Imbued]</b><br />
        <b>Components:</b> S<br />
        <b>Casting Time:</b> Standard<br />
        <b>Range:</b> See text<br />
        <b>Effect:</b> See text<br />
        <b>Duration:</b> See text<br />
        <b>Saving Throw:</b> None<br />
        <b>Spell Resistance:</b> No<br />
        <br />
        Creates a thin, yellowish, transparent, straight plane in close range or a hollow sphere of force centered on you. This has hit points, but rays and spells and effects that resemble a solid beam of light (e.g. Sunbeam) are reflected by it (this can be used to shoot rays around corners). Every round, the shield loses 5 hit points.
        <br /><br />
        You can also imbue a held object with a charge that lets you cast this regardless of the elements in your spellbar. The held object remains charged until used, or until you stop holding it. An object cannot be imbued with more than one charge from a Magicka Wizard's spells, and subsequent attempts to imbue one in this manner will replace any current effects.
        <br /><br />
        A Magicka Wizard within close range of a Shield Elemental Wall (even one not created by them) can 'Boost' this effect as a standard action which adds an amount of HP (see below) to a  maximum of four times the shield's starting HP. Boosting can be done regardless of elements or lack thereof on the spell bar.
        <br /><br />
        <table>
            <tr>  <th>Caster Level</th>  <th>Start/Boost HP</th> <th>Sphere Radius</th> <th>Wall Length</th>  <th>Wall Height</th></tr>
            <tr>  <td>1</td>  <td>15</td>  <td>10 ft</td>  <td>15 ft</td>  <td>5 ft</td></tr>
            <tr>  <td>2</td>  <td>30</td>  <td>10 ft</td>  <td>15 ft</td>  <td>5 ft</td></tr>
            <tr>  <td>3</td>  <td>40</td>  <td>10 ft</td>  <td>15 ft</td>  <td>5 ft</td></tr>
            <tr>  <td>4</td>  <td>55</td>  <td>10 ft</td>  <td>15 ft</td>  <td>5 ft</td></tr>
            <tr>  <td>5</td>  <td>70</td>  <td>15 ft</td>  <td>30 ft</td>  <td>10 ft</td></tr>
            <tr>  <td>6</td>  <td>95</td>  <td>15 ft</td>  <td>30 ft</td>  <td>10 ft</td></tr>
            <tr>  <td>7</td>  <td>120</td>  <td>15 ft</td>  <td>30 ft</td>  <td>10 ft</td></tr>
            <tr>  <td>8</td>  <td>150</td>  <td>15 ft</td>  <td>30 ft</td>  <td>10 ft</td></tr>
            <tr>  <td>9</td>  <td>175</td>  <td>15 ft</td>  <td>30 ft</td>  <td>10 ft</td></tr>
            <tr>  <td>10</td>  <td>200</td>  <td>30 ft</td>  <td>60 ft</td>  <td>20 ft</td></tr>
            <tr>  <td>11</td>  <td>220</td>  <td>30 ft</td>  <td>60 ft</td>  <td>20 ft</td></tr>
            <tr>  <td>12</td>  <td>240</td>  <td>30 ft</td>  <td>60 ft</td>  <td>20 ft</td></tr>
            <tr>  <td>13</td>  <td>260</td>  <td>30 ft</td>  <td>60 ft</td>  <td>20 ft</td></tr>
            <tr>  <td>14</td>  <td>280</td>  <td>30 ft</td>  <td>60 ft</td>  <td>20 ft</td></tr>
            <tr>  <td>15</td>  <td>300</td>  <td>60 ft</td>  <td>120 ft</td>  <td>40 ft</td></tr>
            <tr>  <td>16</td>  <td>340</td>  <td>60 ft</td>  <td>120 ft</td>  <td>40 ft</td></tr>
            <tr>  <td>17</td>  <td>380</td>  <td>60 ft</td>  <td>120 ft</td>  <td>40 ft</td></tr>
            <tr>  <td>18</td>  <td>420</td>  <td>60 ft</td>  <td>120 ft</td>  <td>40 ft</td></tr>
            <tr>  <td>19</td>  <td>460</td>  <td>60 ft</td>  <td>120 ft</td>  <td>40 ft</td></tr>
            <tr>  <td>20</td>  <td>500</td>  <td>120 ft</td>  <td>240 ft</td>  <td>80 ft</td></tr>
        </table>
    </div>
    <br />
    <div>
        <div style={{ fontSize: 'larger' }}><b style={{ fontSize: 'larger' }}>Forcefield</b></div>
        <b style={{ fontSize: 'larger' }}>Abjuration [Force, Personal Shield]</b><br />
        <b>Components:</b> None<br />
        <b>Casting Time:</b> Standard<br />
        <b>Range:</b> Personal<br />
        <b>Target:</b> You<br />
        <b>Duration:</b> See text<br />
        <b>Saving Throw:</b> None<br />
        <b>Spell Resistance:</b> No<br />
        <br />
        Creates a thin, yellowish, transparent, protective personal aura on you that grants you an armor bonus. This has hit points, but rays and spells and effects that resemble a solid beam of light (e.g. Sunbeam) are reflected by it (this can be used to shoot rays around corners). As long as the shield is active, you don't take any HP damage, which instead damages the shield. Even if a single instance of damage exceeds the shield's HP, the extra damage doesn't carry over onto you (though you will be vulnerable to subsequent instances of HP damage from different attacks or effects afterwards). Every round, the shield loses 2 hit points.
        <br /><br />
        A Magicka Wizard within close range of a Forcefield (even one not created by them) can 'Boost' this effect as a standard action which adds an amount of HP (see below) to a  maximum of the shield's starting HP.  Boosting can be done regardless of elements or lack thereof on the spell bar.
        <br /><br />
        <table>
            <tr>  <th>Caster Level</th> <th>Armor Bonus</th> <th>Starting HP</th>  <th>Boost HP</th></tr>
            <tr>  <td>1</td> <td>4</td>  <td>5</td>  <td>3</td></tr>
            <tr>  <td>5</td> <td>6</td>  <td>20</td>  <td>10</td></tr>
            <tr>  <td>10</td> <td>8</td>  <td>60</td>  <td>30</td></tr>
            <tr>  <td>15</td> <td>10</td>  <td>90</td>  <td>45</td></tr>
            <tr>  <td>20</td> <td>12</td>  <td>150</td>  <td>75</td></tr>
        </table>
    </div>
</div>