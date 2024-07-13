import express from "express";
import diaryService from "../services/diaryService";
import { toNewDiaryEntry } from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));
  if (diary) {
    res.send(diary);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  try{
    const entry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addEntry(entry);
    res.json(addedEntry);
  }
  catch(error: unknown){
    if(error instanceof Error){
      res.status(400).send({error: error.message});
    }    
  }
});

export default router;
