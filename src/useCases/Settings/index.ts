import { SettingsRepository } from "../../Repositories/SettingsRepository";
import { SettingsService } from "../../Services/Mongodb/SettingsService";
import { SettingsUseCase } from "./SettingsCase";
import { SettingsController } from "./SettingsController";
    
export const makeSettingsController = (): SettingsController => {
    const settingsService = new SettingsService()
    const settingsRepository = new SettingsRepository(settingsService)
    const getUseCase = new SettingsUseCase(settingsRepository)
    const controller = new SettingsController(
        getUseCase
    )
    return controller
}