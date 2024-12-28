import * as React from 'react';
import { numberPicker } from "./styles";

interface ClassLevelsAndRanksSelectorProps {
    levels: number,
    ranksPerLevel: number,
    showMinusButton: boolean,
    onChangeLevels: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeRanksPerLevel: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onRemoveClass: (event: React.SyntheticEvent) => void
}


const ClassLevelsAndRanksSelector = (props: ClassLevelsAndRanksSelectorProps) => {
    return (
        <div>
            <input
                style={numberPicker}
                type='number'
                min='1'
                defaultValue={`${props.levels}`}
                onChange={props.onChangeLevels}
            /> level(s)/HD with <input
                title="The number of ranks a class would 'normally' get if not using skill groups"
                style={numberPicker}
                type='number'
                min='0'
                defaultValue={`${props.ranksPerLevel}`}
                onChange={props.onChangeRanksPerLevel}
            /> <span style={{ textDecorationStyle: 'dotted', textDecorationLine: 'underline' }} title="The number of ranks a class would 'normally' get per level if not using this system">ranks per level</span>
            {props.showMinusButton ? (<button onClick={props.onRemoveClass}>-</button>) : ""}

        </div>
    );
}

interface ClassesContainerProps {
    classes: {
        levels: number,
        ranksPerLevel: number,
    }[],
    onChangeLevelsAtIndex: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeRanksPerLevelAtIndex: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void,
    onRemoveClassAtIndex: (index: number, event: React.SyntheticEvent) => void,
    addClass: () => void
}

export const ClassesContainer = (props: ClassesContainerProps) => {
    return <div style={{ whiteSpace: 'nowrap' }}>
        {props.classes.map((element, index) => {
            return <ClassLevelsAndRanksSelector
                key={index}
                levels={element.levels}
                ranksPerLevel={element.ranksPerLevel}
                onChangeLevels={(event => {
                    props.onChangeLevelsAtIndex(index, event);
                })}
                onChangeRanksPerLevel={(event => {
                    props.onChangeRanksPerLevelAtIndex(index, event);
                })}
                onRemoveClass={(event => {
                    props.onRemoveClassAtIndex(index, event);
                })}
                showMinusButton={index !== 0}
            />
        })}
        <button onClick={() => {
            props.addClass();
        }}>+</button>
        <div>Number of Levels: {
            props.classes.reduce((accumulator, element) =>
                accumulator + element.levels, 0)
        }</div>
        <div>Ranks per group: {
            props.classes.reduce((accumulator, element, index) =>
                accumulator +
                (element.levels + (index === 0 ? 3 : 0)) * element.ranksPerLevel * 0.5
                , 0)
        }</div>
    </div>
}