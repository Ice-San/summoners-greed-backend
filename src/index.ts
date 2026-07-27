import cors from 'cors';
import express from 'express';
import 'dotenv/config';

import usersRoutes from './api/routes/users';

const app = express();
const { PORT } = process.env || 5000;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`The server is online at http://localhost:${PORT}`);
});
