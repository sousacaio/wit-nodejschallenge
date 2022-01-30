import { IGetSettingsController } from "./GetSettingsDTO";
import { GetSettingsUseCase } from "./GetSettingsCase";
import { SettingsRepository } from "../../Repositories/SettingsRepository";

/** 
* The class to exists methods
*/
export class GetSettingsController implements IGetSettingsController {
    constructor(
        private getSettingsUseCase: GetSettingsUseCase,
    ) { }

    handle(): Promise<boolean> {
        return this.getSettingsUseCase.execute()
    }
}