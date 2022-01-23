import { Either, left, right } from "../../shared/either";
import { IParams, TParamsResponseError } from "./IParams";
import { InvalidAError } from "./errors/InvalidAError";
import { InvalidBError } from "./errors/InvalidBError";
import { InvalidClientIpError } from "./errors/InvalidClientIpError";
import { InvalidDateError } from "./errors/InvalidDateError";

import { A } from "./A";
import { B } from "./B";
import { ClientIp } from "./ClientIp";
import { Date } from "./Date";


export class Params {
    constructor(
        public readonly a: number,
        public readonly b: number,
        public readonly clientIp: string,
        public readonly date: number,
        
    ) {
        Object.freeze(this);
    }
        
    public static create(paramsData: IParams): Either<TParamsResponseError, Params> {
        const aOrError: Either<InvalidAError, A> = A.create(paramsData.a)
        const bOrError: Either<InvalidBError, B> = B.create(paramsData.b)
        const clientIpOrError: Either<InvalidClientIpError, ClientIp> = ClientIp.create(paramsData.clientIp)
        const dateOrError: Either<InvalidDateError, Date> = Date.create(paramsData.date)
        
        
        if (aOrError.isLeft()) {
            return left(new InvalidAError(aOrError.value))
        }
        if (bOrError.isLeft()) {
            return left(new InvalidBError(bOrError.value))
        }
        if (clientIpOrError.isLeft()) {
            return left(new InvalidClientIpError(clientIpOrError.value))
        }
        if (dateOrError.isLeft()) {
            return left(new InvalidDateError(dateOrError.value))
        }
        
        const a: A = aOrError.value
        const b: B = bOrError.value
        const clientIp: ClientIp = clientIpOrError.value
        const date: Date = dateOrError.value
        
        return right(new Params(a.value, b.value, clientIp.value, date.value))
    }

    get value(): Params {
        return this
    }
        
    static validate(a: number, b: number, clientIp: string, date: number) {
        if (!a) {
            return false
        }
        if (!b) {
            return false
        }
        if (!clientIp) {
            return false
        }
        if (!date) {
            return false
        }
        
        return true;
    }
}
