import { OperationsRepository } from "../../Repositories/OperationsRepository";
import { OperationService } from "../../Services/Mongodb/OperationService";
import { DashboardUseCase } from "./DashboardCase";
import { DashboardController } from "./DashboardController";

export const makeDashboardController = (): DashboardController => {
    const operationService = new OperationService()
    const operationRepository = new OperationsRepository(operationService)
    const getUseCase = new DashboardUseCase(operationRepository)
    const controller = new DashboardController(getUseCase)
    return controller
}