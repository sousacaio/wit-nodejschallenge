export interface IGetSettingsUseCase {
    execute(): void
}
    
export interface IGetSettingsController  {
    handle(): Promise<boolean>
}
    