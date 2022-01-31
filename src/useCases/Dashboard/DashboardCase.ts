import { OperationsRepository } from "../../Repositories/OperationsRepository";
import { IDashboard } from "./interfaces";

export class DashboardUseCase {
    constructor(private operationRepository: OperationsRepository) { }

    async execute(): Promise<IDashboard> {
        const result = await this.operationRepository.findAll()
        let sums = result.filter((items) => items.operationType === 'sum')
        let multis = result.filter((items) => items.operationType === 'multi')
        let divs = result.filter((items) => items.operationType === 'div')
        let subs = result.filter((items) => items.operationType === 'sub')

        const lengths = {
            sum: sums.length > 0 ? sums.length : 0,
            multi: multis.length > 0 ? multis.length : 0,
            divs: divs.length > 0 ? divs.length : 0,
            subs: subs.length > 0 ? subs.length : 0,
        }        
        return { result, lengths }
    }
}