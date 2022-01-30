import express, { NextFunction, Request, Response } from 'express';
import { connect } from 'mongoose';
import { endTime } from './Adapters/endTime';
import { myLogger } from './Adapters/logger';
import { IParams } from './entities/Params/IParams';
import { Params } from './entities/Params/Params';
import cors from 'cors'
import { makeSumController } from './useCases/Sum';
import { ok } from '../src/Helpers/HttpHelpers';

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

app.get('/', (req: RequestCustom, res) => {
  console.log(req.endTime(req.startAt))
  res.send('Tchau')
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

    const info = {
      clientIp: req.ip,
      orderId: 1,
      executionTime: req.endTime(req.startAt),
      statusCode: 200
    };

    const result = await makeSumController().handle(parameters)

    req.logger.log('info', info)

    return res.json(ok(result))

  } catch (error) {
    console.log(error)
    res.status(500)
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});