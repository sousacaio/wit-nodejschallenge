import { IParams } from "../../entities/Params/IParams";
import { OperationsRepository } from "../../Repositories/OperationsRepository";

export interface ISumUseCase {
    execute(): void
}

export interface ISumController {
    handle(params: IParams, OperationsRepository: OperationsRepository): Promise<any>
}
