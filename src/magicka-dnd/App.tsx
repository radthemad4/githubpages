import React, { JSX } from 'react';
import './App.css';
import { arcane, cancelingSubElements, checkOpposing, cold, combiningElements, countArcane, countEarth, countIce, countLife, countLightning, countShield, countSteam, earth, fire, life, lightning, MagickaElement, poison, shield, water } from './Elements';
import { ShieldDiv } from './SpellTypes/Shield';
import { shieldOnlyDiv } from './SpellTypes/ShieldOnly';
import { windDiv } from './SpellTypes/Wind';

interface AppState {
    spellBar: MagickaElement[];
    maxElements: number;
    usePoison: boolean;
}


class App extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            spellBar: [],
            maxElements: 5,
            usePoison: false,
        };

        document.addEventListener('keypress', (event) => {
            switch (event.key.toLowerCase()) {
                case 'q':
                    this.addToSpellBar(water);
                    break;
                case 'w':
                    this.addToSpellBar(life);
                    break;
                case 'e':
                    this.addToSpellBar(shield);
                    break;
                case 'r':
                    this.addToSpellBar(cold);
                    break;
                case 'a':
                    this.addToSpellBar(lightning);
                    break;
                case 's':
                    this.addToSpellBar(arcane);
                    break;
                case 'd':
                    this.addToSpellBar(earth);
                    break;
                case 'f':
                    this.addToSpellBar(fire);
                    break;
                default:
                    break;
            }
        })
    }

    addToSpellBar(element: MagickaElement) {

        const spellBar = this.state.spellBar;

        if (spellBar.length > 0) {

            for (let i = spellBar.length - 1; i >= 0; i--) {
                if (checkOpposing(spellBar[i], element)) {
                    this.setState({
                        spellBar: [...spellBar.slice(0, i), ...spellBar.slice(i + 1, spellBar.length)]
                    });

                    return;
                }
            }

            for (let i = spellBar.length - 1; i >= 0; i--) {

                if (cancelingSubElements[spellBar[i].name] !== undefined) {
                    for (const [combiningElement, combinedElement] of cancelingSubElements[spellBar[i].name]) {

                        if (combiningElement === element) {

                            let newSpellBar = [...spellBar.slice(0, i), combinedElement, ...spellBar.slice(i + 1, spellBar.length)];

                            let indexLeft = i;
                            let indexRight = i;

                            while (indexLeft >= 0 || indexRight <= this.state.maxElements - 1) {
                                indexLeft--;
                                if (indexLeft >= 0) {
                                    if (checkOpposing(newSpellBar[indexLeft], combinedElement)) {
                                        this.setState({
                                            spellBar: [...newSpellBar.slice(0, indexLeft), ...newSpellBar.slice(indexLeft + 1, i), ...newSpellBar.slice(i + 1, newSpellBar.length)]
                                        });

                                        return;
                                    }
                                }

                                indexRight++;
                                if (indexRight < newSpellBar.length) {
                                    if (checkOpposing(newSpellBar[indexRight], combinedElement)) {
                                        this.setState({
                                            spellBar: [...newSpellBar.slice(0, i), ...newSpellBar.slice(i + 1, indexRight), ...newSpellBar.slice(indexRight + 1, newSpellBar.length)]
                                        });

                                        return;
                                    }
                                }
                            }

                            this.setState({
                                spellBar: newSpellBar
                            });

                            return;
                        }
                    }
                }
            }

            for (let i = spellBar.length - 1; i >= 0; i--) {
                if (combiningElements[spellBar[i].name] !== undefined) {
                    for (const [combiningElement, combinedElement] of combiningElements[spellBar[i].name]) {
                        if (combiningElement === element) {

                            if (!this.state.usePoison && combinedElement === poison) {
                                continue;
                            }

                            this.setState({
                                spellBar: [...spellBar.slice(0, i), combinedElement, ...spellBar.slice(i + 1, spellBar.length)]
                            });

                            return;
                        }
                    }
                }
            }
        }

        if (this.state.spellBar.length < this.state.maxElements) {
            this.setState({
                spellBar: [...spellBar, element]
            });
        }
    }



    render() {

        let comboDiv: JSX.Element = <span></span>;

        // let forward: JSX.Element = <span></span>;
        // let area: JSX.Element = <span></span>;
        // let weapon: JSX.Element = <span></span>;
        // let self: JSX.Element = <span></span>;

        const shieldCount = countShield(this.state.spellBar);
        const earthCount = countEarth(this.state.spellBar);
        const iceCount = countIce(this.state.spellBar);
        const arcaneCount = countArcane(this.state.spellBar);
        const lifeCount = countLife(this.state.spellBar);
        const lightningCount = countLightning(this.state.spellBar);
        const steamCount = countSteam(this.state.spellBar);


        if (this.state.spellBar.length === 0) {

            // No Elements

            comboDiv = windDiv;

        } else if (this.state.spellBar.length === 1 && this.state.spellBar[0] === shield) {

            // Just Shield

            comboDiv = shieldOnlyDiv;

        } else if (shieldCount === 1) {

            // Shield

            comboDiv = <ShieldDiv spellBar={this.state.spellBar} />

        } else if (earthCount >= 1) {

            // Projectile

            // forward = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Projectile</h4>
            //     </div>
            // );

            // area = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Quake</h4>
            //     </div>
            // );

            // weapon = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Fissure</h4>
            //     </div>
            // );

            // self = (
            //     <div>
            //         <h4>Drop {this.getElementNames(elementsUsed)} on head</h4>
            //     </div>
            // );

        } else if (iceCount >= 1) {

            // Barrage

            // forward = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Barrage</h4>
            //     </div>
            // );

            // area = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Spikes</h4>
            //     </div>
            // );

            // weapon = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Blade</h4>
            //     </div>
            // );

            // self = (
            //     <div>
            //         <h4>Drop {this.getElementNames(elementsUsed)} on head</h4>
            //     </div>
            // );

        } else if (arcaneCount >= 1 || lifeCount >= 1) {

            // Beam

            // forward = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Beam</h4>
            //     </div>
            // );

            // area = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Burst</h4>
            //     </div>
            // );

            // weapon = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Blade</h4>
            //     </div>
            // );

            // self = (
            //     <div>
            //         <h4>Use {this.getElementNames(elementsUsed)} on self</h4>
            //     </div>
            // );

        } else if (lightningCount >= 1 || steamCount === 0) {

            // Lightning

            // let elementsExceptLightning = [...elementsUsed];
            // elementsExceptLightning.splice(elementsExceptLightning.findIndex(element => element === lightning), 1);

            // forward = (
            //     <div>
            //         <h4>{this.getElementNames(elementsExceptLightning)} Lightning</h4>
            //     </div>
            // );

            // area = (
            //     <div>
            //         <h4>{this.getElementNames(elementsExceptLightning)} Area Lightning</h4>
            //     </div>
            // );

            // weapon = (
            //     <div>
            //         <h4>{this.getElementNames(elements)} Blade</h4>
            //     </div>
            // );

            // self = (
            //     <div>
            //         <h4>Use {this.getElementNames(elementsUsed)} on Self</h4>
            //     </div>
            // );

        } else {

            // Spray

            // forward = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Spray</h4>
            //     </div>
            // );

            // area = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Area Spray</h4>
            //     </div>
            // );

            // weapon = (
            //     <div>
            //         <h4>{this.getElementNames(elementsUsed)} Blade</h4>
            //     </div>
            // );

            // self = (
            //     <div>
            //         <h4>Use {this.getElementNames(elementsUsed)} on Self</h4>
            //     </div>
            // );
        }

        return (
            <div style={{ display: 'flex' }}>
                <div style={{ paddingLeft: '5px', paddingRight: '5px', flexShrink: 0 }}>
                    <div style={{ height: '200px' }}>
                        Max Elements: <input
                            type='number'
                            style={{ width: '50px' }}
                            value={this.state.maxElements}
                            onChange={(event) => {
                                this.setState((state) => {
                                    return {
                                        maxElements: +event.target.value,
                                        spellBar: state.spellBar.slice(0, +event.target.value)
                                    }
                                });
                            }}
                        ></input><br />
                        <input
                            type='checkbox'
                            checked={this.state.usePoison}
                            onChange={(event) => {
                                this.setState({
                                    usePoison: event.target.checked,
                                    spellBar: []
                                });
                            }}
                        ></input> Use Poison
                        <h3>Spell Bar</h3>
                        <div style={{ height: '50px' }}>
                            {this.state.spellBar.map((element) => <img src={`${element.imageLink}`} alt={`${element.name}`}></img>)}
                        </div>
                        <button onClick={() => { this.setState({ spellBar: [] }) }}>Clear</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div>
                        {[water, life, shield, cold].slice(0, 4).map((element) => (
                            <img
                                style={{ cursor: 'pointer' }}
                                src={`${element.imageLink}`}
                                onClick={() => {
                                    this.addToSpellBar(element);
                                }}
                                alt={`${element.name}`}
                            >
                            </img>))}
                        QWER
                        <br />
                        {[lightning, arcane, earth, fire].slice(0, 4).map((element) => (
                            <img
                                style={{ cursor: 'pointer' }}
                                src={`${element.imageLink}`}
                                onClick={() => {
                                    this.addToSpellBar(element);
                                }}
                                alt={`${element.name}`}
                            >
                            </img>))}
                        ASDF
                        <br />
                        <br />
                        <img src='images/Element_steam.webp' alt='steam'></img> = <img src='images/Element_fire.webp' alt='fireImage'></img> + <img src='images/Element_water.webp' alt='water'></img> <br />
                        <img src='images/Element_ice.webp' alt='ice'></img> = <img src='images/Element_cold.webp' alt='coldImage'></img> + <img src='images/Element_water.webp' alt='water'></img> <br />
                        {this.state.usePoison ? <span><img src='images/Element_poison.webp' alt='poison'></img> = <img src='images/Element_arcane.webp' alt='arcane'></img> + <img src='images/Element_water.webp' alt='water'></img></span> : ''}

                    </div>
                </div>
                <div style={{ display: 'flex', fontSize: 'smaller', paddingLeft: '20px', paddingTop: '20px', paddingRight: '40px', paddingBottom: '20px' }}>
                    {comboDiv}
                </div>


            </div>
        );
    }
}

export default App;
