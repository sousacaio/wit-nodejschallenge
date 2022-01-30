import { ISumController } from "./SumDTO";
import { SumUseCase } from "./SumCase";
import { IParams } from "../../entities/Params/IParams";
import { OperationsRepository } from "../../Repositories/OperationsRepository";
import { ICreateOperation, IOperations } from "../../Models/Operations";

/** 
* The class to exists methods
*/
export class SumController implements ISumController {
    constructor(
        private sumUseCase: SumUseCase,
        private operationRepository: OperationsRepository
    ) { }

    async handle(params: IParams): Promise<any> {
        const operationResult = this.sumUseCase.execute(params)
        let save: ICreateOperation = {
            operationType: 'sum',
            parameters: {
                firstArgument: params.a,
                secondArgument: params.b
            },
            result: operationResult
        }
        return await this.operationRepository.saveOperation(save)
    }
}