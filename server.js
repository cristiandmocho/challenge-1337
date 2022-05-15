import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded());

app.use('/api', routes);

// 404
app.get('*', (_req, res) => {
  res.status(404).json({ code: 404, message: 'Not found' });
});

// Starting app server
const port = process.env.API_SERVER_PORT;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}!`);
});
