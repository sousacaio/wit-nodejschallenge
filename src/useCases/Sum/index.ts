import { SumUseCase } from "./SumCase";
import { SumController } from "./SumController";

export const makeSumController = (): SumController => {
    const getUseCase = new SumUseCase()
    const controller = new SumController(getUseCase)
    return controller
}