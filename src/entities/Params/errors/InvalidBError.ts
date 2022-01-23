import { DomainError } from "../../error/DomainError"

export class InvalidBError extends Error implements DomainError {
    constructor(name: any) {
        super('The ' + name + ' is invalid.')
        this.name = 'InvalidBError'
    }
}
