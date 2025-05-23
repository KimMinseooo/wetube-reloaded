import Video from "../models/Video";


export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render("home", {pageTitle: "Home", videos});
}
export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("watch", {pageTitle : `Watching` });
} 
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id-1];
    return res.render("edit", {pageTitle : `Editing`});
}
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
    const { title ,description, hashtags} = req.body;
    try{
        await Video.create({
            title,
            description,
            hashtags : hashtags.split(",").map((word)=> `#${word}`),
        });
        return res.redirect("/");
    } catch (error) {
        return res.render("upload", {
            pageTitle : "Upload Video",
            errorMessage : error._message,
        });
    }
    
}