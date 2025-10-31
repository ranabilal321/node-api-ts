import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const limit = {
    limit: "50mb",
    extended: true
};

const APP_ENV = process.env["APP_ENV"] || "dev";
const APP_URL = process.env["APP_URL"] as string;
const SECRET = "NODE_API_SECRET_KEY";
const PROD_ENV = "prod";

const corsOptions= APP_ENV === PROD_ENV ? {} : {origin: [APP_URL], credentials: true};

export const bootstrap = express();

bootstrap.use(express.json(limit));

bootstrap.use(express.urlencoded(limit));

bootstrap.use(cors(corsOptions));

bootstrap.use(cookieParser(SECRET));

bootstrap.set("trust proxy", 1);
