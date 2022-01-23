import { Either, left, right } from "../../shared/either";
import { InvalidBError } from "./errors/InvalidBError";

export class B {
    
    constructor(
        protected readonly name: number,
    ) {
        Object.freeze(this);
    }
        
    public static create(data: number): Either<InvalidBError, B> {
        if (!B.validate(data)) {
            return left(new InvalidBError(data))
        }
        
        return right(new B(data))
    }

    get value(): number {
        return this.name
    }
        
    static validate(b: number) {
        if (isNaN(b)) {
            return false
        }
        if (!b) {
            return false
        }
        return true;
    }
}
