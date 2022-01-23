import { ISumController } from "./SumDTO";
import { SumUseCase } from "./SumCase";

/** 
* The class to exists methods
*/
export class SumController implements ISumController {
    constructor(
        private sumUseCase: SumUseCase
    ) {}
    
    handle(): void {
        this.sumUseCase.execute()
    }
}