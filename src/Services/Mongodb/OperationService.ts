import { IOperations, Operations } from "../../Models/Operations";
import { OperationInterface } from "../Interfaces/Operation";

export class OperationService implements OperationInterface<IOperations> {

    async save(data: IOperations): Promise<IOperations> {
        return await Operations.create(data)
    }

    async find(id: string): Promise<IOperations | null> {
        return await Operations.findOne({ _id: id })
    }

    async findAll(): Promise<IOperations[]> {
        return await Operations.find()
    }

}