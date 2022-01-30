import { IGetSettingsController } from "./GetSettingsDTO";
import { GetSettingsUseCase } from "./GetSettingsCase";
import { ObjectId } from "mongoose";
import { ISettings } from "../../Models/Settings";

/** 
* The class to exists methods
*/
export class GetSettingsController implements IGetSettingsController {
    constructor(
        private getSettingsUseCase: GetSettingsUseCase,
    ) { }

    async handle(_id: ObjectId): Promise<ISettings | null> {
        return await this.getSettingsUseCase.execute(_id)
    }
}