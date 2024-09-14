import express from 'express';
import 'dotenv/config';
import cors from 'cors';
 
import addRota from './rotas.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

addRota(servidor);

servidor.listen(process.env.PORT, () => console.log(`api subida na porta ${process.env.PORT}`) );