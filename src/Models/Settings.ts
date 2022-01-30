import { Schema, ObjectId, Model, model } from 'mongoose';

export interface ISettings extends Document {
    _id?: ObjectId
    logStatus: boolean
}

export interface ICreateSettings {
    _id?: ObjectId,
    logStatus: boolean,
}

const SettingsSchema: Schema = new Schema({
    logStatus: Boolean
}, {
    timestamps: true
});

export const Settings: Model<ISettings> = model('Settings', SettingsSchema);
