import { IOperations } from "../../Models/Operations";


export interface OperationInterface<T> {
    save(operation: IOperations): Promise<T>,
    find(id: string): Promise<T | null>,
    findAll(): Promise<T[]>
}