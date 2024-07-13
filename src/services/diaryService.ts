import diaries from '../../data/diaries';
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from '../types';


const getEntries = (): DiaryEntry[]=>{    
    return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(diary=> {delete diary.comment; return diary;});
};

const findById = (id:number) : DiaryEntry | undefined=> {
    const entry = diaries.find(d => d.id === id);
    return entry;
};

const addEntry = (entry: NewDiaryEntry) : DiaryEntry => {
    
    const newDiaryEntry = {
        id: Math.max(...diaries.map(d=>d.id)) + 1,
        ...entry
    };

    diaries.push(newDiaryEntry);    
    return newDiaryEntry;
};

export default {getEntries, addEntry, getNonSensitiveEntries, findById};