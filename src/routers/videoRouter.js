import express from "express";
import {watch, edit,upload,deleteVideo, getEdit, postEdit, getUpload, postUpload} from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
// videoRouter.get("/upload", getUpload);
// videoRouter.post("/upload",postUpload);
// videoRouter.get(`/:id(\\d+)`, see);
videoRouter.get("/:id", watch);
videoRouter.route("/:id/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id/edit", getEdit);
// videoRouter.post("/:id/edit",postEdit);
export default videoRouter;