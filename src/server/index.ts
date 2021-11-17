import express from "express";
import db from './config/config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(express.static('public'));


db.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`App listening on port: ${port}.`)
    });
});