import { IParams } from "../../entities/Params/IParams";
export class SumUseCase {
    execute(params: IParams): number {
        return params.a + params.b
    }
}