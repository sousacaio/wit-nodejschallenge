export interface ISettingsUseCase {
    execute(): void
}
    
export interface ISettingsController  {
    handle(logstatus: boolean): void
}
    