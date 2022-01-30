import { ObjectId } from "mongoose";
import { ISettings } from "../../Models/Settings";

export interface IGetSettingsUseCase {
    execute(): void
}

export interface IGetSettingsController {
    handle(_id: ObjectId): Promise<ISettings | null>
}
