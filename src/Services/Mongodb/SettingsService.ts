import { ICreateSettings, ISettings, Settings } from "../../Models/Settings";
import { SettingsInterface } from "../Interfaces/Settings";

export class SettingsService implements SettingsInterface<ISettings> {
    async createOrUpdate(data: ICreateSettings): Promise<ISettings | null> {
        if (data._id) {
            const updatedSettings = await Settings.findByIdAndUpdate(data._id, data, { new: true })
            return updatedSettings
        }
        return await Settings.create(data)
    }
    async findAll(): Promise<ISettings[]> {
        return await Settings.find()
    }

}