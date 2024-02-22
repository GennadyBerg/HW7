import { userRouter } from './Routers/userRouter.js';
import { ErrorHandler } from './middleware/ErrorHandler.js';

import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(userRouter);
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
