import { IParams } from "../../entities/Params/IParams";

export class SumUseCase {
    constructor(
    ) { }

    execute(params: IParams): number {
        return params.a + params.b
    }
}