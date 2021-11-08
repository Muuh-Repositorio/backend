export enum Situations {
    HEIFER = 'Heifer',
    ABLE = 'Able',
    INSEMINATED = 'Inseminated',
    PREGNANT = 'Pregnant',
    DRY = 'Dry',
    BIRTH = 'Birth',
    SOLD = 'Sold',
    DEAD = 'Dead'
}

export namespace Situations {
    export function next(situation: Situations): Situations {
        switch (situation) {
            case Situations.HEIFER:
                return Situations.ABLE
            case Situations.ABLE:
                return Situations.INSEMINATED
            case Situations.INSEMINATED:
                return Situations.PREGNANT
            case Situations.PREGNANT:
                return Situations.DRY
            case Situations.DRY:
                return Situations.BIRTH
            case Situations.BIRTH:
                return Situations.ABLE
        }
    }

    export function getID(situation: Situations): number {
        switch (situation) {
            case Situations.HEIFER:
                return 1
            case Situations.ABLE:
                return 2
            case Situations.INSEMINATED:
                return 3
            case Situations.PREGNANT:
                return 4
            case Situations.DRY:
                return 5
            case Situations.BIRTH:
                return 6
            case Situations.SOLD:
                return 7
            case Situations.DEAD:
                return 8
        }
    }
}