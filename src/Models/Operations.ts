import { Schema, ObjectId, Model, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Parameters {
    firstArgument: number
    secondArgument: number
}

export interface IOperations extends Document {
    _id?: ObjectId
    parameters: Parameters;
    operationType: string,
    result: number
}

const OperationsSchema: Schema = new Schema({
    parameters: {
        firstArgument: Number,
        secondArgument: Number
    },
    operationType: String,
    result: Number
}, {
    timestamps: true
});

export const Operations: Model<IOperations> = model('Operations', OperationsSchema);
