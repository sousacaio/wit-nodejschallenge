import { CheckLogFileUseCase } from "./CheckLogFileCase";
import { CheckLogFileController } from "./CheckLogFileController";
    
export const makeCheckLogFileController = (): CheckLogFileController => {
    const getUseCase = new CheckLogFileUseCase()
    const controller = new CheckLogFileController(
        getUseCase
    )
    return controller
}