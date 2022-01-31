import { ICreateOperation, IOperations } from "../Models/Operations";
import { OperationInterface } from "../Services/Interfaces/Operation";

export class OperationsRepository {
    private readonly operationService: OperationInterface<IOperations>

    constructor(operationService: OperationInterface<IOperations>) {
        this.operationService = operationService
    }

    async saveOperation(data: ICreateOperation) {
        return await this.operationService.save(data)
    }
    async findAll(): Promise<IOperations[]> {
        return await this.operationService.findAll()
    }
}