import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/src/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
