import { writeFileSync, readFile, readFileSync } from 'fs'
export class CleanUpLogFileUseCase {
    async execute(): Promise<void> {
        readFile('logfile.csv', 'utf8', (err, data) => {
            if (err) {
                console.log(err)
            }
            if (!data) return
            let linesExceptFirst = data.split('\n').slice(1);
            let linesArr = linesExceptFirst.map(line => line.split(','));
            let output = 'clientIp, orderId, executionTime, statusCode \n';
            output += linesArr.filter(line => (line[0]) !== 'clientIp').join("\n");
            writeFileSync('logfile.csv', output);
        })
    }
}