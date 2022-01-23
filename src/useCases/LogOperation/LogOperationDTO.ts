import { IParams } from "../../entities/Params/IParams";

export interface ILogOperationUseCase {
    execute(): void
}
    
export interface ILogOperationController  {
    handle(params:IParams): void
}
    