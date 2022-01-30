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
    async getSettings(): Promise<ISettings[]> {
        return await this.settingsService.findAll()
    }
}