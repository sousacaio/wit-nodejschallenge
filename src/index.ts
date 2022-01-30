import express, { NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';
import { endTime } from './Adapters/endTime';
import { myLogger } from './Adapters/logger';
import { IParams } from './entities/Params/IParams';
import { Params } from './entities/Params/Params';
import cors from 'cors'
import { makeSumController } from './useCases/Sum';
import { ok } from '../src/Helpers/HttpHelpers';
import { makeSettingsController } from './useCases/Settings';
import { makeCheckLogFileController } from './useCases/CheckLogFile';
import { makeCleanUpLogFileController } from './useCases/CleanUpLogFile';

const app = express();
const PORT = 8000;
makeCleanUpLogFileController().handle()
export interface RequestCustom extends Request {
  logger: typeof myLogger;
  startAt: any;
  endTime: typeof endTime;
}
app.use(cors())
app.use(express.json())
app.use((req: RequestCustom, _res: Response, next: NextFunction) => {
  req.logger = myLogger
  req.startAt = process.hrtime()
  req.endTime = endTime
  next()
})
app.use(async (_req: RequestCustom, _res: Response, next: NextFunction) => {
  await connect('mongodb://localhost:27017/mongo_calculator');
  next()
})

app.post('/sum', async (req: RequestCustom, res: Response) => {
  try {
    let { a, b } = req.body

    let parameters: IParams = {
      a: parseInt(a),
      b: parseInt(b),
      clientIp: req.ip,
      date: Date.now()
    }

    const paramsOrError = Params.create(parameters)

    if (paramsOrError.isLeft()) {
      return res.status(400).send(paramsOrError.value)
    }
    const result = await makeSumController().handle(parameters)

    const info = {
      clientIp: req.ip,
      orderId: result._id,
      executionTime: req.endTime(req.startAt),
      statusCode: 200
    };

    req.logger.log('info', info)

    return res.json(ok(result))

  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.post('/settings', async (req: RequestCustom, res: Response) => {
  try {
    let { logStatus } = req.body
    makeSettingsController().handle(logStatus)
    return res.json(ok({ message: 'Settings updated' }))
  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.get('/settings/download', async (_req: RequestCustom, res: Response) => {
  try {
    if (makeCheckLogFileController().handle()) {
      return res.download('logfile.csv')
    }
    return res
      .status(404)
      .json({ message: 'Log file does not exists yet' })
  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});