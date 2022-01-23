import { IParams } from "../../entities/Params/IParams";
import { LogOperationUseCase } from "./LogOperationCase";
import { LogOperationController } from "./LogOperationController";

export const makeLogOperationController = (): LogOperationController => {
    const getUseCase = new LogOperationUseCase()
    const controller = new LogOperationController(
        getUseCase
    )
    return controller
}