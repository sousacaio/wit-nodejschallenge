import { ObjectId } from "mongoose";
import { ISettings } from "../../Models/Settings";
import { SettingsRepository } from "../../Repositories/SettingsRepository";

export class GetSettingsUseCase {
    constructor(private settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository
    }

    async execute(_id: ObjectId): Promise<ISettings | null> {
        return await this.settingsRepository.getSettings(_id)
    }
}