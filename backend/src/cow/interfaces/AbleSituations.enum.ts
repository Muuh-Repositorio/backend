export enum AbleSituations {
    INSEMINATE = "Inseminate",
    DIAGNOSIS = "Diagnosis",
    DRYING = "Drying",
    CHILDBIRTH = "Childbirth"
}

export namespace AbleSituations {
    export function getDaysFor(ableSituation: AbleSituations): number {
        switch (ableSituation) {
            case AbleSituations.INSEMINATE:
                return 60
            case AbleSituations.DIAGNOSIS:
                return 40
            case AbleSituations.DRYING:
                return 210
            case AbleSituations.CHILDBIRTH:
                return 270
        }
    }
}