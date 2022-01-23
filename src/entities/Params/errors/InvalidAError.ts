import { DomainError } from "../../error/DomainError"

export class InvalidAError extends Error implements DomainError {
    constructor(name: any) {
        super('The ' + name + ' is invalid.')
        this.name = 'The A argument is invalid or is missing'
    }
}
