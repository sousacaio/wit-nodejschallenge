import { SettingsRepository } from "../../Repositories/SettingsRepository";
import { SettingsService } from "../../Services/Mongodb/SettingsService";
import { GetSettingsUseCase } from "./GetSettingsCase";
import { GetSettingsController } from "./GetSettingsController";

export const makeGetSettingsController = (): GetSettingsController => {
    const settingsService = new SettingsService()
    const settingsRepository = new SettingsRepository(settingsService)
    const getUseCase = new GetSettingsUseCase(settingsRepository)
    const controller = new GetSettingsController(getUseCase)
    return controller
}