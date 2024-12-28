import { JSX } from "react";
import { cold, countArcane, countCold, countEarth, countFire, countIce, countLife, countLightning, countPoison, countSteam, countWater, earth, fire, getElementNames, getUniqueElementsUsed, ice, MagickaElement, shield, steam, water } from "../Elements";

interface ShieldDivProps {
    spellBar: MagickaElement[]
}

export const ShieldDiv = (props: ShieldDivProps) => {

    const elementsUsed = getUniqueElementsUsed(props.spellBar);

    let elementsExceptShield = [...elementsUsed];
    elementsExceptShield.splice(elementsExceptShield.findIndex(element => element === shield), 1);

    // let elementsExceptShieldArcaneLife = [...elementsExceptShield].filter((item) => {
    //     return (item !== arcane) && (item !== life);
    // });

    // const shieldCount = countShield(props.spellBar);
    const earthCount = countEarth(props.spellBar);
    const iceCount = countIce(props.spellBar);
    const arcaneCount = countArcane(props.spellBar);
    const lifeCount = countLife(props.spellBar);
    const lightningCount = countLightning(props.spellBar);
    const steamCount = countSteam(props.spellBar);
    const waterCount = countWater(props.spellBar);
    const coldCount = countCold(props.spellBar);
    const fireCount = countFire(props.spellBar);
    const poisonCount = countPoison(props.spellBar);

    const armorThreshold = earthCount + 0.75 * iceCount;

    let descriptorElements = [...elementsExceptShield];

    if (iceCount > 0) {
        descriptorElements.splice(descriptorElements.findIndex(element => element === ice), 1);

        if (waterCount === 0) {
            descriptorElements.push(water);
        }

        if (coldCount === 0) {
            descriptorElements.push(cold);
        }

    }

    if (steamCount > 0) {
        descriptorElements.splice(descriptorElements.findIndex(element => element === steam), 1);

        if (waterCount === 0) {
            descriptorElements.push(water);
        }

        if (fireCount === 0) {
            descriptorElements.push(fire);
        }

    }

    const auraCount = Math.max(
        waterCount, lifeCount, coldCount,
        lightningCount, arcaneCount, fireCount,
        poisonCount, steamCount,
    );

    let forward: JSX.Element = <span></span>;
    let area: JSX.Element = <span></span>;
    let weapon: JSX.Element = <span></span>;
    let self: JSX.Element = <span></span>;

    self = (
        <div>
            <div style={{ fontSize: 'larger' }}><b style={{ fontSize: 'larger' }}>{getElementNames(elementsExceptShield)} {armorThreshold > 0 ? 'Armor' : 'Ward'}</b></div>
            <b style={{ fontSize: 'larger' }}>Abjuration [{getElementNames(descriptorElements, ', ')}, Personal Shield]</b><br />
            <b>Components:</b> None<br />
            <b>Casting Time:</b> Standard<br />
            <b>Range:</b> Personal<br />
            <b>Target:</b> You<br />
            <b>Duration:</b> Permanent<br />
            <b>Saving Throw:</b> None<br />
            <b>Spell Resistance:</b> No<br />
            <br />
            Creates a {(() => {
                let array: string[] = [];

                if (armorThreshold > 0) {
                    let earthAndIce: string[] = [];

                    let damageReduction = 0;

                    if (earthCount > 0) {
                        earthAndIce.push('earth');

                        damageReduction += earthCount * 2.5;
                    }

                    if (iceCount > 0) {
                        earthAndIce.push('ice');

                        damageReduction += iceCount * 1.25;
                    }

                    damageReduction = Math.floor(damageReduction);


                    array.push(`crude armor of ${earthAndIce.join(' and ')} that gives you ${damageReduction} DR/Adamantine`);
                };

                let elementsBesidesEarthIceAndShield = [...elementsExceptShield].filter((item) => {
                    return (item !== earth) && (item !== ice);
                });

                let auraAreaString = "you";

                if (auraCount > 1) {
                    auraAreaString = `all creatures and objects within ${(auraCount - 1) * 5} ft of you`
                }

                if (elementsBesidesEarthIceAndShield.length > 0) {
                    array.push(`protective aura that makes ${auraAreaString} immune to ${getElementNames(elementsBesidesEarthIceAndShield, ', ', ' and ')
                        .toLowerCase()
                        .replace('poison', 'poison and acid')
                        .replace('water', 'getting wet')
                        .replace('lightning', 'electricity')
                        .replace('steam', 'effects based on steam')
                        .replace('arcane', 'death spells, magical death effects, energy drain, and any negative energy effects')
                        .replace('life', 'positive energy')
                        }`);
                }

                return array.join(' and a ');
            })()}.
            {(waterCount <= 0) ? '' : ` ${(waterCount === 1 ? 'You' : 'Creatures within the aura')} can breathe underwater.`}<br /><br />
            {(armorThreshold <= 0) ? '' : ` Depleting the temp HP destroys the armor${(auraCount <= 0) ? '.' : ', but not the ward.'}`}
            {(armorThreshold < 3) ? '' : `  The armor is heavy and slows you down like medium or heavy armor. It does not count against your carrying capacity, but your weight increases by <don't know yet>. The armor gives you a +4 bonus on ability checks made to resist being bull rushed or tripped (or increases the DC to trip or ) when standing on the ground (but not when climbing, flying, riding, or otherwise not standing firmly on the ground).`}
            {(armorThreshold < 4) ? '' : ` Additionally, you count as one size category larger than you actually are for defensive purposes (e.g. resisting a maneuver, determining whether or not you can be swallowed whole).`}
            {(iceCount <= 0) ? '' : <span><br /><br /><div>
                The armor has armor spikes, except the damage is half piercing and half cold. These count as magical for the purposes of beating DR. For every five caster levels you have, count the spikes as one additional size larger for the purpose of damage dice.{(iceCount <= 2) ? '' : ` Anyone grappling or attacking you with natural weapons takes piercing damage as if hit by the spikes.`}
            </div></span>}
            <br /><br />
            {armorThreshold <= 0 ? '' : (
                <table>
                    <tr>  <th>Caster Level</th> <th>Armor Bonus</th>  <th>Temp HP</th></tr>
                    <tr>  <td>1</td> <td>{Math.floor(armorThreshold * 0.25 * 8)}</td>  <td>{Math.floor(armorThreshold * 0.25 * 10)}</td> </tr>
                    <tr>  <td>5</td> <td>{Math.floor(armorThreshold * 0.25 * 12)}</td> <td>{Math.floor(armorThreshold * 0.25 * 40)}</td>  </tr>
                    <tr>  <td>10</td> <td>{Math.floor(armorThreshold * 0.25 * 16)}</td> <td>{Math.floor(armorThreshold * 0.25 * 120)}</td> </tr>
                    <tr>  <td>15</td> <td>{Math.floor(armorThreshold * 0.25 * 20)}</td> <td>{Math.floor(armorThreshold * 0.25 * 180)}</td>  </tr>
                    <tr>  <td>20</td> <td>{Math.floor(armorThreshold * 0.25 * 24)}</td> <td>{Math.floor(armorThreshold * 0.25 * 300)}</td> </tr>
                </table>
            )}
        </div>
    );

    if (earthCount >= 1) {

        let elementsExceptShieldAndEarth = [...elementsExceptShield];
        elementsExceptShieldAndEarth.splice(elementsExceptShieldAndEarth.findIndex(element => element === earth), 1);

        // Shield + Earth

        forward = (
            <div>
                <h4>Arc {getElementNames(elementsExceptShieldAndEarth)} Earth Wall</h4>
            </div>
        );

        area = (
            <div>
                <h4>Circular {getElementNames(elementsExceptShieldAndEarth)} Earth Wall</h4>
            </div>
        );

        weapon = (
            <div>
                <h4>Straight {getElementNames(elementsExceptShieldAndEarth)} Earth Wall</h4>
            </div>
        );
    } else if (iceCount >= 1) {

        let elementsExceptShieldAndIce = [...elementsExceptShield];
        elementsExceptShieldAndIce.splice(elementsExceptShieldAndIce.findIndex(element => element === ice), 1);

        // Shield + Ice

        forward = (
            <div>
                <h4>Arc {getElementNames(elementsExceptShieldAndIce)} Ice Wall</h4>
            </div>
        );

        area = (
            <div>
                <h4>Circular {getElementNames(elementsExceptShieldAndIce)} Ice Wall</h4>
            </div>
        );

        weapon = (
            <div>
                <h4>Straight {getElementNames(elementsExceptShieldAndIce)} Ice Wall</h4>
            </div>
        );
    } else if (arcaneCount >= 1 || lifeCount >= 1) {

        // Mines

        forward = (
            <div>
                <h4>Arc {getElementNames(elementsExceptShield)} Mines</h4>
            </div>
        );

        area = (
            <div>
                <h4>Circular Surrounding {getElementNames(elementsExceptShield)} Mines</h4>
            </div>
        );

        weapon = (
            <div>
                <h4>Straight Line {getElementNames(elementsExceptShield)} Mines</h4>
            </div>
        );
    } else {

        // Spray Wall

        forward = (
            <div>
                <h4>Arc {getElementNames(elementsExceptShield)} Wall</h4>
            </div>
        );

        area = (
            <div>
                <h4>Circular Surrounding {getElementNames(elementsExceptShield)} Wall</h4>
            </div>
        );

        weapon = (
            <div>
                <h4>Straight Line {getElementNames(elementsExceptShield)} Wall</h4>
            </div>
        );

    }

    return (<div>
        {self}
        {forward}
        {area}
        {weapon}
    </div>);
};