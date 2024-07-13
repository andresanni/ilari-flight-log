import { NewDiaryEntry, Visibility, Weather } from "./types";

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (!("date" in object && "weather" in object && "visibility" in object)) {
    throw new Error("Some fields are missing");
  }

  const entry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: "comment" in object ? parseComment(object.comment) : undefined,
  };

  return entry;
};

//parsers
const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date " + date);
  }
  return date;
};

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather " + weather);
  }
  return weather;
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing weather " + visibility);
  }
  return visibility;
};

const parseComment = (comment: unknown): string | undefined => {
  if (comment === undefined) {
    return undefined;
  }
  if (!isString(comment)) {
    throw new Error("Incorrect or missing weather " + comment);
  }
  return comment;
};

//predicates
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (param: string): param is Weather => {
  return Object.values(Weather)
    .map((value) => value.toString())
    .includes(param);
};

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility)
    .map((value) => value.toString())
    .includes(param);
};
