import { OperationsRepository } from "../../Repositories/OperationsRepository";
import { OperationService } from "../../Services/Mongodb/OperationService";
import { CalculateController } from "./CalculateController";
import { CalculateUseCase } from "./CalculateUseCase";

export const makeCalculateController = (): CalculateController => {
    const getUseCase = new CalculateUseCase()
    const operationService = new OperationService()
    const operationRepository = new OperationsRepository(operationService)
    const controller = new CalculateController(getUseCase, operationRepository)
    return controller
}