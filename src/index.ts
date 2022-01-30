import express, { NextFunction, Request, Response } from 'express';
import { connect, ObjectId } from 'mongoose';
import { endTime } from './Adapters/endTime';
import { myLogger } from './Adapters/logger';
import { IParams } from './entities/Params/IParams';
import { Params } from './entities/Params/Params';
import cors from 'cors'
import { ok } from '../src/Helpers/HttpHelpers';

import { makeSettingsController } from './useCases/Settings';
import { makeCheckLogFileController } from './useCases/CheckLogFile';
import { makeCleanUpLogFileController } from './useCases/CleanUpLogFile';
import { makeGetSettingsController } from './useCases/GetSettings';
import { makeCalculateController } from './useCases/Calculate';

const app = express();
const PORT = 8000;
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

app.post('/calculate/:operationType', async (req: RequestCustom, res: Response) => {
  try {
    let { a, b } = req.body
    let settingsId = req.headers?._id as unknown as ObjectId
    let operationType = req.params.operationType as string

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

    const result = await makeCalculateController().handle(parameters, operationType)

    const info = {
      clientIp: req.ip,
      orderId: result._id,
      executionTime: req.endTime(req.startAt),
      statusCode: 200
    };
    const settings = await makeGetSettingsController().handle(settingsId)
    if (settings?.logStatus === true) {
      req.logger.log('info', info)
    }
    return res.json(ok(result))
  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.post('/settings', async (req: RequestCustom, res: Response) => {
  try {
    let { logStatus } = req.body
    let _id = req.body?._id as ObjectId
    const settings = await makeSettingsController().handle({ logStatus, _id })
    return res.json(ok(settings))
  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.get('/settings/:_id', async (req: RequestCustom, res: Response) => {
  try {
    let _id = req.params?._id as unknown as ObjectId
    const settings = await makeGetSettingsController().handle(_id)
    return res.json(ok(settings))
  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.get('/settings/download/', async (_req: RequestCustom, res: Response) => {
  try {
    if (makeCheckLogFileController().handle()) {
      await makeCleanUpLogFileController().handle()
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