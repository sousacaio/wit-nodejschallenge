import { DomainError } from "../../error/DomainError"

export class InvalidBError extends Error implements DomainError {
    constructor(name: any) {
        super('The parameter ' + name + ' is invalid.')
        this.name = 'The B argument is invalid or is missing'
    }
}
