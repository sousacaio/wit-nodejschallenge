import { Either, left, right } from "../../shared/either";
import { InvalidDateError } from "./errors/InvalidDateError";

export class Date {
    
    constructor(
        protected readonly name: number,
    ) {
        Object.freeze(this);
    }
        
    public static create(data: number): Either<InvalidDateError, Date> {
        if (!Date.validate(data)) {
            return left(new InvalidDateError(data))
        }
        
        return right(new Date(data))
    }

    get value(): number {
        return this.name
    }
        
    static validate(date: number) {
        if (isNaN(date)) {
            return false
        }
        return true;
    }
}
