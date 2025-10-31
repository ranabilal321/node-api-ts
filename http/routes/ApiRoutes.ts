import {Router} from "express";

import {ApiController} from "@controllers/ApiController";

export const ApiRouter = Router();

ApiRouter.get("/", ApiController.healthCheck);