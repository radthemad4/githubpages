import * as React from 'react';
import { numberPicker, stickyHeader } from './styles';
import { ClassesContainer } from './classes';

export enum GroupType {
    normal,
    bonus,
    intModRanks
}

export interface SkillGroup {
    groupName: string,
    skills: {
        skillName: string,
        ranksInGroup: number
    }[],
    type: GroupType
}

interface AppProps {
    skillGroups: SkillGroup[]
}

interface AppState {
    classes: {
        levels: number,
        ranksPerLevel: number
    }[],
    intScore: number,
    skillGroups: SkillGroup[],
}

const UsedAndTotalComponent: React.FunctionComponent<{ used: number, total: number }> = (props) => {
    return <span style={{ color: props.used > props.total ? 'red' : props.used === props.total ? 'green' : 'black' }}>{props.used}/{props.total}</span>
}

export class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            classes: [
                {
                    levels: 1,
                    ranksPerLevel: 2
                }
            ],
            intScore: 10,
            skillGroups: [
                ...this.props.skillGroups
            ],
        }
    }

    get ranksPerGroup(): number {
        return Math.floor(this.state.classes.reduce((accumulator, element, index) =>
            accumulator +
            (element.levels + (index === 0 ? 3 : 0)) * element.ranksPerLevel * 0.5
            , 0));
    }

    get numberOfLevels(): number {
        return this.state.classes.reduce((accumulator, element) =>
            accumulator + element.levels, 0);
    }

    get intMod(): number {
        return Math.floor((this.state.intScore - 10) * 0.5);
    }

    set intScore(newIntScore: number) {
        this.setState((state) => {

            let newSkillGroups = [...state.skillGroups];

            if (state.intScore < 12 && newIntScore >= 12) {
                if (state.skillGroups.length > 0 &&
                    state.skillGroups[0].type != GroupType.intModRanks &&
                    state.skillGroups.length > 1 &&
                    state.skillGroups[1].type != GroupType.intModRanks) {

                    let intModGroup = {
                        groupName: "IntMod",
                        skills: [
                            {
                                skillName: "Use Magic Device",
                                ranksInGroup: 0
                            }
                        ],
                        type: GroupType.intModRanks
                    }
                    if (newSkillGroups[0].type == GroupType.bonus) {
                        newSkillGroups = [newSkillGroups[0], intModGroup, ...newSkillGroups.slice(1, newSkillGroups.length)];
                    } else {
                        newSkillGroups = [intModGroup, ...newSkillGroups];
                    }
                }

            } else if (state.intScore >= 12 && newIntScore < 12) {
                newSkillGroups = newSkillGroups.filter((group) => group.type != GroupType.intModRanks);
            }

            return {
                intScore: newIntScore,
                skillGroups: newSkillGroups
            };
        });
    }

    render() {

        return (
            <div style={{ fontSize: '1em' }}>
                <h1 style={{ fontSize: '1.2em' }}><a href="http://tgdmb.com/viewtopic.php?t=56277">Kaelik Skill Groups</a></h1>
                <div style={{ padding: '5px' }}>
                    <ClassesContainer
                        classes={this.state.classes}
                        onChangeLevelsAtIndex={((index, event) => {
                            event.persist();

                            this.setState(state => {
                                let updatedClasses = [...state.classes];
                                updatedClasses[index] = {
                                    levels: Number.parseInt(event.target.value),
                                    ranksPerLevel: updatedClasses[index].ranksPerLevel
                                }
                                return ({
                                    classes: updatedClasses
                                });
                            });
                        })}
                        onChangeRanksPerLevelAtIndex={((index, event) => {
                            event.persist();
                            this.setState(state => {
                                let updatedClasses = [...state.classes];
                                updatedClasses[index] = {
                                    levels: updatedClasses[index].levels,
                                    ranksPerLevel: Number.parseInt(event.target.value)
                                }
                                return ({
                                    classes: updatedClasses
                                });
                            });
                        })}
                        onRemoveClassAtIndex={((index) => {
                            this.setState(state => {
                                return ({
                                    classes: [
                                        ...state.classes.slice(0, index),
                                        ...state.classes.slice(index + 1, state.classes.length)
                                    ]
                                });
                            });
                        })}
                        addClass={() => {
                            this.setState((state) => ({
                                classes: state.classes.concat({
                                    levels: 1,
                                    ranksPerLevel: 2
                                })
                            }));
                        }}
                    />
                    <div style={{ whiteSpace: 'nowrap' }}>
                        Int Score: <input
                            style={numberPicker}
                            type='number'
                            value={this.state.intScore}
                            onChange={event => {
                                event.persist();
                                this.intScore = Number.parseInt(event.target.value);
                            }}
                        />
                        Int Mod: <input
                            style={numberPicker}
                            type='number'
                            value={`${Math.floor((this.state.intScore - 10) * 0.5)}`}
                            onChange={event => {
                                const newIntMod = Number.parseInt(event.target.value);
                                if (newIntMod !== Math.floor((this.state.intScore - 10) * 0.5)) {
                                    this.intScore = 2 * newIntMod + 10;
                                }
                            }}
                        />
                    </div>
                    <div style={{ whiteSpace: 'nowrap', textDecorationStyle: 'dotted', textDecorationLine: 'underline' }} title='Check this if the character gets bonus ranks through means besides leveling, e.g. from class features or feats'>Has Bonus ranks
                        <input type='checkbox'
                            defaultChecked={this.state.skillGroups[0].type == GroupType.bonus}
                            onChange={() => {
                                if (this.state.skillGroups[0].type == GroupType.bonus) {
                                    this.setState((state) => {
                                        return {
                                            skillGroups: state.skillGroups.slice(1, state.skillGroups.length)
                                        }
                                    });
                                } else {
                                    this.setState((state) => ({
                                        skillGroups: [{
                                            groupName: "Bonus",
                                            skills: [
                                                {
                                                    skillName: "",
                                                    ranksInGroup: 0
                                                }
                                            ],
                                            type: GroupType.bonus
                                        }, ...state.skillGroups]
                                    }));
                                }
                            }}
                        />
                    </div>
                </div>
                <div style={{ display: 'grid', width: '100%', gridTemplateColumns: 'auto auto' }}>
                    <div>
                        {this.state.skillGroups.map((skillGroup, skillGroupIndex) => {
                            return (<div key={skillGroupIndex} style={{ padding: '5px' }}>
                                {skillGroup.type == GroupType.intModRanks ?
                                    <span style={{ padding: '5px', fontSize: '1em' }}>
                                        Int Mod <UsedAndTotalComponent used={this.state.skillGroups[skillGroupIndex].skills.reduce((accumulator, element) => {
                                            if (element.skillName.replace(/\s/g, '') != "") {
                                                return accumulator + element.ranksInGroup;
                                            } else {
                                                return accumulator;
                                            }
                                        }, 0)} total={this.intMod * (this.numberOfLevels + 3)} />
                                    </span> :
                                    skillGroup.type == GroupType.bonus ? <span>{skillGroup.groupName}</span> :
                                        <div>
                                            <input value={skillGroup.groupName} onChange={
                                                (event) => {
                                                    event.persist();

                                                    this.setState(state => {
                                                        let updatedSkillGroups = [...state.skillGroups];
                                                        updatedSkillGroups[skillGroupIndex] = {
                                                            groupName: event.target.value,
                                                            skills: state.skillGroups[skillGroupIndex].skills,
                                                            type: state.skillGroups[skillGroupIndex].type
                                                        }
                                                        return ({
                                                            skillGroups: updatedSkillGroups
                                                        });
                                                    });
                                                }
                                            } />
                                            <span style={{ padding: '5px' }}>
                                                <UsedAndTotalComponent used={this.state.skillGroups[skillGroupIndex].skills.reduce((accumulator, element) => {
                                                    if (element.skillName.replace(/\s/g, '') != "") {
                                                        return accumulator + element.ranksInGroup;
                                                    } else {
                                                        return accumulator;
                                                    }

                                                }, 0)} total={this.ranksPerGroup} />
                                            </span>
                                        </div>}

                                <div style={{ whiteSpace: 'nowrap', padding: '5px' }}>
                                    {skillGroup.skills.map((skill, skillIndex) => <div key={skillIndex}>
                                        <input value={skill.skillName} onChange={
                                            (event) => {
                                                event.persist();

                                                this.setState(state => {
                                                    let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];
                                                    updatedSkills[skillIndex] = {
                                                        skillName: event.target.value,
                                                        ranksInGroup: 0
                                                    }

                                                    let updatedSkillGroups = [...state.skillGroups];
                                                    updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                    return ({
                                                        skillGroups: updatedSkillGroups
                                                    });
                                                });
                                            }
                                        } />

                                        {(() => {
                                            let totalSkillRanks = this.state.skillGroups.reduce((accumulator, group) => {
                                                return accumulator + group.skills.reduce((accumulator, currentSkill) => {
                                                    if (currentSkill.skillName == skill.skillName) {
                                                        return accumulator + currentSkill.ranksInGroup;
                                                    }
                                                    return accumulator;
                                                }, 0);
                                            }, 0);

                                            return <span style={{ paddingLeft: '5px', paddingRight: '5px', color: totalSkillRanks <= this.numberOfLevels + 3 ? 'black' : 'red' }}>{totalSkillRanks}</span>
                                        })()}

                                        <input
                                            style={numberPicker}
                                            type='number'
                                            min='0'
                                            value={skill.ranksInGroup}
                                            onChange={
                                                (event) => {
                                                    event.persist();

                                                    this.setState(state => {
                                                        let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];
                                                        updatedSkills[skillIndex] = {
                                                            skillName: updatedSkills[skillIndex].skillName,
                                                            ranksInGroup: Number.parseInt(event.target.value)
                                                        }

                                                        let updatedSkillGroups = [...state.skillGroups];
                                                        updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                        return ({
                                                            skillGroups: updatedSkillGroups
                                                        });
                                                    });
                                                }
                                            } />

                                        <span style={{ cursor: 'pointer' }} onClick={() => {
                                            this.setState(state => {
                                                let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];
                                                updatedSkills[skillIndex] = {
                                                    skillName: updatedSkills[skillIndex].skillName,
                                                    ranksInGroup: this.numberOfLevels + 3
                                                }

                                                let updatedSkillGroups = [...state.skillGroups];
                                                updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                return ({
                                                    skillGroups: updatedSkillGroups
                                                });
                                            });
                                        }}>⏫</span>

                                        <span style={{ cursor: 'pointer' }} onClick={() => {
                                            this.setState(state => {
                                                let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];
                                                updatedSkills[skillIndex] = {
                                                    skillName: updatedSkills[skillIndex].skillName,
                                                    ranksInGroup: 0
                                                }

                                                let updatedSkillGroups = [...state.skillGroups];
                                                updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                return ({
                                                    skillGroups: updatedSkillGroups
                                                });
                                            });
                                        }}>⏬</span>

                                        <button onClick={() => {
                                            this.setState((state) => {
                                                let updatedSkillGroups = [...state.skillGroups];

                                                let skills = updatedSkillGroups[skillGroupIndex].skills;

                                                updatedSkillGroups[skillGroupIndex].skills = [...skills.slice(0, skillIndex), ...skills.slice(skillIndex + 1, skills.length)];

                                                return {
                                                    skillGroups: updatedSkillGroups
                                                }
                                            })
                                        }}>-</button>
                                    </div>)}
                                </div>
                                <button onClick={() => {
                                    this.setState((state) => {
                                        let updatedSkillGroups = [...state.skillGroups];

                                        updatedSkillGroups[skillGroupIndex].skills.push({
                                            skillName: "",
                                            ranksInGroup: 0
                                        })

                                        return {
                                            skillGroups: updatedSkillGroups
                                        }
                                    })
                                }}>+</button>
                            </div>)
                        })}
                        <button onClick={() => {
                            this.setState((state) => {
                                return {
                                    skillGroups: state.skillGroups.concat({
                                        groupName: "",
                                        skills: [
                                            {
                                                skillName: "",
                                                ranksInGroup: 0,
                                            }
                                        ],
                                        type: GroupType.normal
                                    })
                                }
                            })
                        }}>+</button>
                    </div>

                    <div style={{ padding: '10px', display: 'grid', gridTemplateColumns: `repeat(${this.state.skillGroups.length + 2}, auto)` }}>
                        {(() => {

                            let skillNames = [... this.state.skillGroups.reduce((accumulator: Set<string>, currentGroup) => {
                                for (let skill of currentGroup.skills) {
                                    if (skill.skillName.replace(/\s/g, '') != "") {
                                        accumulator.add(skill.skillName);
                                    }
                                }
                                return accumulator;
                            }, new Set<string>())].sort((prev, next) =>
                                prev.toLowerCase() < next.toLowerCase() ? -1 :
                                    prev.toLowerCase() == next.toLowerCase() ? 0 : 1)
                                .map((element) => element);



                            return [
                                ...[
                                    (() => {

                                        let used = this.state.skillGroups.reduce((accumulator, currentGroup) => {
                                            if (currentGroup.type != GroupType.bonus) {
                                                return accumulator + currentGroup.skills.reduce((accumulator, currentSkill) => {
                                                    if (currentSkill.skillName.replace(/\s/g, '') != "") {
                                                        return accumulator + currentSkill.ranksInGroup;
                                                    } else {
                                                        return accumulator;
                                                    }

                                                }, 0);
                                            }
                                            return accumulator;
                                        }, 0);

                                        let total = this.ranksPerGroup * this.state.skillGroups.filter(group => group.type == GroupType.normal).length + this.intMod * (3 + this.numberOfLevels);

                                        return <div key="groupTotal" style={{ ...stickyHeader, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                            <div>
                                                <div style={{ color: used < total ? 'black' : used > total ? 'red' : 'green' }}>Group Total</div>
                                                <UsedAndTotalComponent used={used} total={total} />
                                            </div>
                                        </div>
                                    })(),
                                    <div style={{ ...stickyHeader, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                        <div key="totalRanks">Total</div>
                                    </div>
                                    , ...this.state.skillGroups.map((element, skillGroupIndex) =>
                                        <div key={skillGroupIndex} style={{ ...stickyHeader, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                            {
                                                (() => {
                                                    let used = 0;
                                                    let total = 0;
                                                    switch (element.type) {
                                                        case GroupType.bonus:
                                                            return <div key={skillGroupIndex} style={{ ...stickyHeader, textAlign: 'center' }}>
                                                                <div>{element.groupName}</div>
                                                            </div>;
                                                        case GroupType.intModRanks:
                                                            used = this.state.skillGroups[skillGroupIndex].skills.reduce((accumulator, element) => {
                                                                if (element.skillName.replace(/\s/g, '') != "") {
                                                                    return accumulator + element.ranksInGroup;
                                                                } else {
                                                                    return accumulator;
                                                                }

                                                            }, 0);
                                                            total = this.intMod * (this.numberOfLevels + 3);
                                                            break;
                                                        default:
                                                            used = this.state.skillGroups[skillGroupIndex].skills.reduce((accumulator, element) => {
                                                                if (element.skillName.replace(/\s/g, '') != "") {
                                                                    return accumulator + element.ranksInGroup;
                                                                } else {
                                                                    return accumulator;
                                                                }
                                                            }, 0);
                                                            total = this.ranksPerGroup;
                                                            break;
                                                    }

                                                    return <div key={skillGroupIndex} style={{ ...stickyHeader, textAlign: 'center' }}>
                                                        <div style={{ color: used > total ? 'red' : used < total ? 'black' : 'green' }}>{element.groupName}</div>
                                                        <div><UsedAndTotalComponent used={used} total={total} /></div>
                                                    </div>
                                                })()
                                            }
                                        </div>)
                                ],
                                skillNames.map((skillName, skillNameIndex) =>
                                    [
                                        <div style={{ width: '120px' }} key={`${skillName}${skillNameIndex}`}>{skillName}</div>,
                                        (() => {
                                            let totalSkillRanks = this.state.skillGroups.reduce((accumulator, group) => {
                                                return accumulator + group.skills.reduce((accumulator, skill) => {
                                                    if (skill.skillName == skillName) {
                                                        return accumulator + skill.ranksInGroup;
                                                    }
                                                    return accumulator;
                                                }, 0);
                                            }, 0);

                                            return <div style={{ fontSize: '1em', textAlign: 'center', color: totalSkillRanks <= this.numberOfLevels + 3 ? 'black' : 'red' }} key={`${skillName}Total`}>{totalSkillRanks}</div>
                                        })(),
                                        ...this.state.skillGroups.map((skillGroup, skillGroupIndex) =>
                                            <div style={{ textAlign: 'center' }}>
                                                {(() => {
                                                    let showCell = false;

                                                    if (skillGroup.type != GroupType.normal) {
                                                        showCell = true;
                                                    } else {
                                                        for (let skill of skillGroup.skills) {
                                                            if (skill.skillName == skillName) {
                                                                showCell = true;
                                                                break;
                                                            }
                                                        }
                                                    }

                                                    if (!showCell) {
                                                        return <div />;
                                                    } else {
                                                        return <div style={{ whiteSpace: 'nowrap', paddingLeft: '5px', paddingRight: '5px' }}>
                                                            <input
                                                                key={`${skillGroupIndex}`}
                                                                style={numberPicker}
                                                                type='number'
                                                                min='0'
                                                                disabled={
                                                                    (() => {
                                                                        let disabled = true;

                                                                        if (skillGroup.type != GroupType.normal) {
                                                                            return false;
                                                                        }

                                                                        for (let skill of skillGroup.skills) {
                                                                            if (skill.skillName == skillName) {
                                                                                disabled = false;
                                                                                break;
                                                                            }
                                                                        }

                                                                        return disabled;
                                                                    })()
                                                                }
                                                                value={this.state.skillGroups[skillGroupIndex].skills.reduce((accumulator, currentSkill) => {
                                                                    if (currentSkill.skillName == skillName) {
                                                                        return accumulator + currentSkill.ranksInGroup;
                                                                    }
                                                                    return accumulator;
                                                                }, 0)}
                                                                onChange={
                                                                    (event) => {
                                                                        event.persist();

                                                                        this.setState(state => {

                                                                            let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];

                                                                            let found = false;
                                                                            let skillIndex = 0;
                                                                            for (let index in updatedSkills) {
                                                                                let skill = updatedSkills[index];
                                                                                if (skill.skillName == skillName) {
                                                                                    found = true;
                                                                                    skillIndex = +index;
                                                                                    break;
                                                                                }
                                                                            }

                                                                            if (!found) {
                                                                                updatedSkills.push({
                                                                                    skillName: skillName,
                                                                                    ranksInGroup: 0
                                                                                });

                                                                                skillIndex = updatedSkills.length - 1;
                                                                            }

                                                                            updatedSkills[skillIndex] = {
                                                                                skillName: updatedSkills[skillIndex].skillName,
                                                                                ranksInGroup: Number.parseInt(event.target.value)
                                                                            }

                                                                            let updatedSkillGroups = [...state.skillGroups];
                                                                            updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                                            return ({
                                                                                skillGroups: updatedSkillGroups
                                                                            });
                                                                        });
                                                                    }
                                                                }
                                                            />
                                                            <span style={{ cursor: 'pointer' }} onClick={() => {
                                                                this.setState(state => {

                                                                    let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];

                                                                    let found = false;
                                                                    let skillIndex = 0;
                                                                    for (let index in updatedSkills) {
                                                                        let skill = updatedSkills[index];
                                                                        if (skill.skillName == skillName) {
                                                                            found = true;
                                                                            skillIndex = +index;
                                                                            break;
                                                                        }
                                                                    }

                                                                    if (!found) {
                                                                        updatedSkills.push({
                                                                            skillName: skillName,
                                                                            ranksInGroup: 0
                                                                        });

                                                                        skillIndex = updatedSkills.length - 1;
                                                                    }

                                                                    updatedSkills[skillIndex] = {
                                                                        skillName: updatedSkills[skillIndex].skillName,
                                                                        ranksInGroup: this.numberOfLevels + 3
                                                                    }

                                                                    let updatedSkillGroups = [...state.skillGroups];
                                                                    updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                                    return ({
                                                                        skillGroups: updatedSkillGroups
                                                                    });
                                                                });
                                                            }}>⏫</span>

                                                            <span style={{ cursor: 'pointer' }} onClick={() => {
                                                                this.setState(state => {

                                                                    let updatedSkills = [...state.skillGroups[skillGroupIndex].skills];

                                                                    let found = false;
                                                                    let skillIndex = 0;
                                                                    for (let index in updatedSkills) {
                                                                        let skill = updatedSkills[index];
                                                                        if (skill.skillName == skillName) {
                                                                            found = true;
                                                                            skillIndex = +index;
                                                                            break;
                                                                        }
                                                                    }

                                                                    if (!found) {
                                                                        updatedSkills.push({
                                                                            skillName: skillName,
                                                                            ranksInGroup: 0
                                                                        });

                                                                        skillIndex = updatedSkills.length - 1;
                                                                    }

                                                                    updatedSkills[skillIndex] = {
                                                                        skillName: updatedSkills[skillIndex].skillName,
                                                                        ranksInGroup: 0
                                                                    }

                                                                    let updatedSkillGroups = [...state.skillGroups];
                                                                    updatedSkillGroups[skillGroupIndex].skills = updatedSkills

                                                                    return ({
                                                                        skillGroups: updatedSkillGroups
                                                                    });
                                                                });
                                                            }}>⏬</span>
                                                        </div>
                                                    }



                                                })()}

                                            </div>
                                        )
                                    ])
                            ];

                            // return [... this.state.skillGroups.reduce((accumulator: Set<string>, currentGroup) => {
                            //     for (let skill of currentGroup.skills) {
                            //         accumulator.add(skill.skillName);
                            //     }
                            //     return accumulator;
                            // }, new Set<string>())].sort((prev, next) =>
                            //     prev.toLowerCase() < next.toLowerCase() ? -1 :
                            //         prev.toLowerCase() == next.toLowerCase() ? 0 : 1)
                            //     .map((element, index) => <div key={index}>{element}</div>);
                        })()}
                    </div>
                </div>
            </div>
        );
    }
}

