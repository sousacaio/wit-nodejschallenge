import { ILogOperationController } from "./LogOperationDTO";
import { LogOperationUseCase } from "./LogOperationCase";
import { IParams } from "../../entities/Params/IParams";

/** 
* The class to exists methods
*/
export class LogOperationController implements ILogOperationController {
    constructor(
        private logOperationUseCase: LogOperationUseCase
    ) {}
    
    handle(params:IParams): void {
        this.logOperationUseCase.execute(params)
    }
}