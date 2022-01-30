import { ObjectId } from "mongoose";
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
    async findById(_id?: ObjectId): Promise<ISettings | null> {
        
        if (!_id) {
            return await Settings.create({ logStatus: true })
        }

        const settingsExists = await Settings.findById(_id)

        if (!settingsExists) {
            return await Settings.create({ logStatus: true })
        }

        return settingsExists
    }
}