import express from "express";
import {join, login} from "../controllers/userController";
import { search, home} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join",join);
globalRouter.get("/login", login);

export default globalRouter;
