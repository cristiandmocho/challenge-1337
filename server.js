import { config } from 'dotenv';
config();

import express from 'express';

import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/api.js';

import { scrapeData } from './utils/scraper.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

app.use('/api', routes);

// 404
app.get('*', (_req, res) => {
  res.status(404).json({ code: 404, message: 'Not found' });
});

function startServer() {
  // Starting app server
  const port = process.env.API_SERVER_PORT;
  app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}!`);
  });
}

// Decide if scraping data is needed
if (process.argv[2] === 'do-scrape') {
  console.log('Scraping data... Hold on please...');
  scrapeData().then(() => {
    startServer();
  });
} else {
  startServer();
}
