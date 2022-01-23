import express from 'express';
import { IParams } from './entities/Params/IParams';
import { Params } from './entities/Params/Params';
import { makeLogOperationController } from './useCases/LogOperation';
// rest of the code remains same
const app = express();
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.post('/sum', (req, res) => {

  let { a, b } = req.query

  let parameters: IParams = {
    a,
    b,
    clientIp: req.ip,
    date: Date.now()
  }
  const paramsOrError = Params.create(parameters)

  if (paramsOrError.isLeft()) {
    return res.status(400).send(paramsOrError.value)
  }

  makeLogOperationController().handle(parameters)
  res.json('nice')
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});