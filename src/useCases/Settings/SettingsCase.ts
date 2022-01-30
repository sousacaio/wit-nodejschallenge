import { ICreateSettings, ISettings } from "../../Models/Settings";
import { SettingsRepository } from "../../Repositories/SettingsRepository";

export class SettingsUseCase {

    constructor(private settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository
    }

    async execute(settings: ICreateSettings): Promise<ISettings | null> {        
        const result = await this.settingsRepository.createUpdate(settings)
        return result
    }
}