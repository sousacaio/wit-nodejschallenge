import { Either } from "../../shared/either"
import { InvalidAError } from "./errors/InvalidAError";
import { InvalidBError } from "./errors/InvalidBError";
import { InvalidClientIpError } from "./errors/InvalidClientIpError";
import { InvalidDateError } from "./errors/InvalidDateError";

export interface IParams {
  a: number | any,
  b: number | any,
  clientIp: string,
  date: number
}
export type TParamsResponseError = InvalidAError | InvalidBError | InvalidClientIpError | InvalidDateError
export type TParamsResponse = Either<TParamsResponseError, IParams>

