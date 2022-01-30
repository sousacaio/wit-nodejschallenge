import { readFile } from "fs";
import { SettingsRepository } from "../../Repositories/SettingsRepository";

export class GetSettingsUseCase {
    constructor(private settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository
    }

    async execute(): Promise<boolean> {
        const settings = await this.settingsRepository.getSettings()
        if (settings.length > 0) settings[0].logStatus
        return true
    }
}