import { ISettingsController } from "./SettingsDTO";
import { SettingsUseCase } from "./SettingsCase";

/** 
* The class to exists methods
*/
export class SettingsController implements ISettingsController {
    constructor(
        private settingsUseCase: SettingsUseCase
    ) { }

    handle(logstatus: boolean): void {
        this.settingsUseCase.execute(logstatus)
    }
}