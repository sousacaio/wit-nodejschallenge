import { ICreateSettings } from "../../Models/Settings";

export interface SettingsInterface<T> {
    createOrUpdate(data: ICreateSettings): Promise<T | null>,
    findAll(): Promise<T[]>
}