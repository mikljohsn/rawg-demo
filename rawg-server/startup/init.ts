import express from 'express';
import dbConnectMysql from './dbConnection';
import cors from 'cors';

const init= (app: express.Application) => {
    
    app.use(cors());
    app.use(express.json());
    dbConnectMysql();
};

export default init;