import { ICreateOperation, IOperations } from "../../Models/Operations";


export interface OperationInterface<T> {
    save(operation: ICreateOperation): Promise<T>,
    find(id: string): Promise<T | null>,
    findAll(): Promise<T[]>
}