import { ICalculateController } from "./CalculateDTO";
import { CalculateUseCase } from "./CalculateUseCase";
import { IParams } from "../../entities/Params/IParams";
import { OperationsRepository } from "../../Repositories/OperationsRepository";
import { ICreateOperation } from "../../Models/Operations";

/** 
* The class to exists methods
*/
export class CalculateController implements ICalculateController {
    constructor(
        private calculateUseCase: CalculateUseCase,
        private operationRepository: OperationsRepository
    ) { }

    async handle(params: IParams, operationType: string): Promise<any> {
        const operationResult = this.calculateUseCase.execute(params, operationType)
        let save: ICreateOperation = {
            operationType,
            parameters: {
                firstArgument: params.a,
                secondArgument: params.b
            },
            result: operationResult
        }
        return await this.operationRepository.saveOperation(save)
    }
}