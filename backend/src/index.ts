import express from 'express';
import { env } from './config.js';
import cors from 'cors'
import { log } from 'console';

const app = express()

app.use(cors());
app.use(express.json());

app.listen(env.PORT, () => {
    console.log(`SignalForge Api is Running on ${env.PORT}`);

})