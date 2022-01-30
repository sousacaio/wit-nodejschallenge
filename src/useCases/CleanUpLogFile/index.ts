import { CleanUpLogFileUseCase } from "./CleanUpLogFileCase";
import { CleanUpLogFileController } from "./CleanUpLogFileController";
    
export const makeCleanUpLogFileController = (): CleanUpLogFileController => {
    const getUseCase = new CleanUpLogFileUseCase()
    const controller = new CleanUpLogFileController(
        getUseCase
    )
    return controller
}