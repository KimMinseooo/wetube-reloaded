import express from "express";
import {watch, edit,upload,deleteVideo, getEdit, postEdit} from "../controllers/videoController";
const videoRouter = express.Router();

// videoRouter.get(`/:id(\\d+)`, see);
videoRouter.get("/:id", watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id/edit", getEdit);
// videoRouter.post("/:id/edit",postEdit);

export default videoRouter;