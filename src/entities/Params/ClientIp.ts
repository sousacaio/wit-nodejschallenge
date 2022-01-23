import { Either, left, right } from "../../shared/either";
import { InvalidClientIpError } from "./errors/InvalidClientIpError";

export class ClientIp {
    
    constructor(
        protected readonly name: string,
    ) {
        Object.freeze(this);
    }
        
    public static create(data: string): Either<InvalidClientIpError, ClientIp> {
        if (!ClientIp.validate(data)) {
            return left(new InvalidClientIpError(data))
        }
        
        return right(new ClientIp(data))
    }

    get value(): string {
        return this.name
    }
        
    static validate(clientIp: string) {
        if (!clientIp) {
            return false
        }
        return true;
    }
}
