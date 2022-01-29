import express, { NextFunction, Request, Response } from 'express';
import { endTime } from './adapters/endTime';
import { myLogger } from './adapters/logger';
import { IParams } from './entities/Params/IParams';
import { Params } from './entities/Params/Params';
import cors from 'cors'
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

app.get('/', (req: RequestCustom, res) => {
  console.log(req.endTime(req.startAt))
  res.send('Tchau')
})

app.post('/sum', (req: RequestCustom, res: Response) => {
  try {
    console.log(req.body)
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
    
    //salvar os dados no banco

    const info = {
      clientIp: req.ip,
      orderId: 1,
      executionTime: req.endTime(req.startAt),
      statusCode: 200
    };

    req.logger.log('info', info)    
    res.json('nice')
  } catch (error) {
    console.log(error)
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});