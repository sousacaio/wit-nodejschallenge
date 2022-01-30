import { IParams } from "../../entities/Params/IParams";

export interface ICalculateUseCase {
    execute(): void
}

export interface ICalculateController {
    handle(params: IParams, operationType: string): Promise<any>
}
