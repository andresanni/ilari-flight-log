import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();

const PORT = 3000;

app.get("/ping", (_req, res)=>{
    console.log("Someone pinged here");
    res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING AT PORT ${PORT}`);
});