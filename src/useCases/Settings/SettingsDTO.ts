import { ICreateSettings } from "../../Models/Settings";

export interface ISettingsUseCase {
    execute(): void
}

export interface ISettingsController {
    handle(settings: ICreateSettings): void
}
