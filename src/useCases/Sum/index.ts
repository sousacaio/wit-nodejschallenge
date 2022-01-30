import { OperationsRepository } from "../../Repositories/OperationsRepository";
import { OperationService } from "../../Services/Mongodb/OperationService";
import { SumUseCase } from "./SumCase";
import { SumController } from "./SumController";

export const makeSumController = (): SumController => {
    const getUseCase = new SumUseCase()
    const operationService = new OperationService()
    const operationRepository = new OperationsRepository(operationService)
    const controller = new SumController(getUseCase, operationRepository)
    return controller
}