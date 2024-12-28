export interface MagickaElement {
    name: string;
    imageLink: string;
};

export const elements = [
    'arcane',
    'cold',
    'earth',
    'fire',
    'ice',
    'life',
    'lightning',
    'poison',
    'shield',
    'steam',
    'water',
].map((elementName) => {
    return {
        name: elementName,
        imageLink: `/images/Element_${elementName}.webp`
    }
});

export const [arcane, cold, earth, fire, ice, life, lightning, poison, shield, steam, water] = [...elements];

export const opposingElements = {
    [arcane.name]: [life],
    [life.name]: [arcane],
    [water.name]: [lightning],
    [shield.name]: [shield],
    [cold.name]: [fire],
    [lightning.name]: [water, earth],
    [earth.name]: [lightning],
    [fire.name]: [cold]
};

export const cancelingSubElements = {
    [fire.name]: [[ice, fire],],
    [life.name]: [[poison, water]],
    [poison.name]: [[life, water]],
    [ice.name]: [[fire, water]],
    [steam.name]: [[cold, water]],
}

export const combiningElements = {
    [water.name]: [[fire, steam], [cold, ice], [arcane, poison]],
    [fire.name]: [[water, steam],],
    [cold.name]: [[steam, water], [water, ice]],
    [arcane.name]: [[water, poison]],
};

export function checkOpposing(e0: MagickaElement, e1: MagickaElement): boolean {
    if (opposingElements[e0.name] !== undefined) {
        for (const opposingElement of opposingElements[e0.name]) {
            if (opposingElement === e1) {
                return true;
            }
        }
    }

    return false;
};

export function getUniqueElementsUsed(elements: MagickaElement[]): MagickaElement[] {
    let elementsUsedSet = new Set<MagickaElement>();

    for (let element of elements) {
        elementsUsedSet.add(element);
    }

    return Array.from(elementsUsedSet).sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        } else {
            return 0;
        }
    });
}

export function countElement(elementToCount: MagickaElement, elements: MagickaElement[]): number {
    let output = 0;

    for (const element of elements) {
        if (elementToCount === element) {
            output++;
        }
    }

    return output;
}

export function countShield(elements: MagickaElement[]): number {
    return countElement(shield, elements);
}

export function countEarth(elements: MagickaElement[]): number {
    return countElement(earth, elements);
}

export function countIce(elements: MagickaElement[]): number {
    return countElement(ice, elements);
}

export function countArcane(elements: MagickaElement[]): number {
    return countElement(arcane, elements);
}

export function countLife(elements: MagickaElement[]): number {
    return countElement(life, elements);
}

export function countSteam(elements: MagickaElement[]): number {
    return countElement(steam, elements);
}

export function countLightning(elements: MagickaElement[]): number {
    return countElement(lightning, elements);
}

export function countWater(elements: MagickaElement[]): number {
    return countElement(water, elements);
}

export function countFire(elements: MagickaElement[]): number {
    return countElement(fire, elements);
}

export function countCold(elements: MagickaElement[]): number {
    return countElement(cold, elements);
}

export function countPoison(elements: MagickaElement[]): number {
    return countElement(poison, elements);
}



export function getElementNames(elements: MagickaElement[], separator: string = ' ', finalSeparator ?: string): string {
    let array = elements.map((element) => {
        return `${element.name[0].toUpperCase()}${element.name.slice(1)}`;
    });

    if (finalSeparator && elements.length > 1) {
        let last = array.pop();
        return [array.join(separator), last].join(finalSeparator);
    } else {
        return array.join(separator);
    }
}