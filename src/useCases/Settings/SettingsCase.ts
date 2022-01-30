import { writeFile } from "fs";

export class SettingsUseCase {
    constructor(
    ) { }

    execute(logStatus: boolean): void {
        const settings = JSON.stringify({ logStatus })
        writeFile("settings.json", settings, (err: any) => {
            if (err) console.log('error', err);
        })
    }
}