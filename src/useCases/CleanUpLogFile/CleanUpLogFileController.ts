import { ICleanUpLogFileController } from "./CleanUpLogFileDTO";
import { CleanUpLogFileUseCase } from "./CleanUpLogFileCase";

/** 
* The class to exists methods
*/
export class CleanUpLogFileController implements ICleanUpLogFileController {
    constructor(
        private cleanUpLogFileUseCase: CleanUpLogFileUseCase
    ) {}
    
    handle(): void {
        this.cleanUpLogFileUseCase.execute()
    }
}