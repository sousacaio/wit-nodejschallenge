import { IParams } from "../../entities/Params/IParams";
import { Params } from "../../entities/Params/Params";
import { SumUseCase } from "./SumCase";

describe('Sum', () => {

    const sumUseCase = new SumUseCase();

    it('Should sum two numbers', () => {

        let params: IParams = {
            a: 2,
            b: 2,
            clientIp: 'any_ip',
            date: 123
        }

        const sum = sumUseCase.execute(params)
        expect(sum).toBe(4)
    })
})