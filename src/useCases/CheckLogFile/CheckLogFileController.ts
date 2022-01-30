import { ICheckLogFileController } from "./CheckLogFileDTO";
import { CheckLogFileUseCase } from "./CheckLogFileCase";

/** 
* The class to exists methods
*/
export class CheckLogFileController implements ICheckLogFileController {
    constructor(
        private checkLogFileUseCase: CheckLogFileUseCase
    ) { }

    handle(): boolean {
        return this.checkLogFileUseCase.execute()
    }
}