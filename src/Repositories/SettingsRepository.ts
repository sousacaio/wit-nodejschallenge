import { ObjectId } from "mongoose";
import { ICreateSettings, ISettings } from "../Models/Settings";
import { SettingsInterface } from "../Services/Interfaces/Settings";

export class SettingsRepository {
    private readonly settingsService: SettingsInterface<ISettings>

    constructor(settingsService: SettingsInterface<ISettings>) {
        this.settingsService = settingsService
    }

    async createUpdate(data: ICreateSettings) {
        return await this.settingsService.createOrUpdate(data)
    }
    async getSettings(_id: ObjectId): Promise<ISettings | null> {
        return await this.settingsService.findById(_id)
    }
}