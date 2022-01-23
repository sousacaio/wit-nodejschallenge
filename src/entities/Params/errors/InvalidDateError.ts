import { DomainError } from "../../error/DomainError"

export class InvalidDateError extends Error implements DomainError {
    constructor(name: any) {
        super('The ' + name + ' is invalid.')
        this.name = 'InvalidDateError'
    }
}
