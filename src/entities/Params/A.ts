import { Either, left, right } from "../../shared/either";
import { InvalidAError } from "./errors/InvalidAError";

export class A {
    
    constructor(
        protected readonly name: number,
    ) {
        Object.freeze(this);
    }
        
    public static create(data: number): Either<InvalidAError, A> {
        if (!A.validate(data)) {
            return left(new InvalidAError(data))
        }
        
        return right(new A(data))
    }

    get value(): number {
        return this.name
    }
        
    static validate(a: number) {
        if (isNaN(a)) {
            return false
        }
        return true;
    }
}
