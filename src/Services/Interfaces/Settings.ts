import { ObjectId } from "mongoose";
import { ICreateSettings } from "../../Models/Settings";

export interface SettingsInterface<T> {
    createOrUpdate(data: ICreateSettings): Promise<T | null>,
    findById(_id: ObjectId): Promise<T | null>
}