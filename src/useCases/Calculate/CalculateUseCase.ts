import { IParams } from "../../entities/Params/IParams";
export class CalculateUseCase {
    execute(params: IParams, operationType: string): number {
        let operationResult: number = 0
        switch (operationType) {
            case 'sum': {
                operationResult = params.a + params.b
                break;
            }
            case 'div': {
                operationResult = params.a / params.b
                break;
            }
            case 'multi': {
                operationResult = params.a * params.b
                break;
            }
            case 'sub': {
                operationResult = params.a - params.b
                break;
            }
            default: {
                throw new Error('Operation type not existent')
            }
        }
        return operationResult
    }
}