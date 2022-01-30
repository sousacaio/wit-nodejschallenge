import { SettingsUseCase } from "./SettingsCase";
import { SettingsController } from "./SettingsController";
    
export const makeSettingsController = (): SettingsController => {
    const getUseCase = new SettingsUseCase()
    const controller = new SettingsController(
        getUseCase
    )
    return controller
}