import { ISumController } from "./SumDTO";
import { SumUseCase } from "./SumCase";
import { IParams } from "../../entities/Params/IParams";

/** 
* The class to exists methods
*/
export class SumController implements ISumController {
    constructor(
        private sumUseCase: SumUseCase
    ) {}
    
    handle(params:IParams): void {
        this.sumUseCase.execute(params)
    }
}