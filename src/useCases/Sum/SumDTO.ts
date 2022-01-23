import { IParams } from "../../entities/Params/IParams";

export interface ISumUseCase {
    execute(): void
}
    
export interface ISumController  {
    handle(params:IParams): void
}
    