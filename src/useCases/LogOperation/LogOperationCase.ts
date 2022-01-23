import { IParams } from "../../entities/Params/IParams";

export class LogOperationUseCase {
    constructor(
    ) { }

    execute(params: IParams): void {
        console.log(params)
    }
}