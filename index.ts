import express from 'express';

const app = express();

const PORT = 3000;

app.get("/ping", (_req, res)=>{
    console.log("Someone pinged here");
    res.send("pong");
});

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING AT PORT ${PORT}`);
});