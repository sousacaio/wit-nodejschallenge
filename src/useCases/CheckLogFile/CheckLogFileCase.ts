import { existsSync } from "fs";

export class CheckLogFileUseCase {
    constructor(
    ) { }

    execute(): boolean {
        const exists = existsSync('logfile.csv')
        return exists
    }
}