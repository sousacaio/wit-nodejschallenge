import { ISettingsController } from "./SettingsDTO";
import { SettingsUseCase } from "./SettingsCase";
import { ICreateSettings, ISettings } from "../../Models/Settings";

/** 
* The class to exists methods
*/
export class SettingsController implements ISettingsController {
    constructor(
        private settingsUseCase: SettingsUseCase
    ) { }

    async handle(settings: ICreateSettings): Promise<ISettings | null> {        
        const result = await this.settingsUseCase.execute(settings)
        return result
    }
}