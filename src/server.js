import express from "express";

const PORT = 4000;

const app = express();


const privateMiddleware = (req, res , next) => {
    const url = req.url;
    if(url === "/protected") {
        return res.send("<h1>Not Allowed</h1>");
    }
    console.log("Allowed, you nay continue.");
    next();
}

const handleLogin = (req , res) => {
    return res.send({message : "Login here"});
};

const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge.");
}

app.use(privateMiddleware);

const routerLogger = (req, res, next) => {
    console.log("PATH",req.path);
    next();
};
const methodLogger =(req, res, next)=> {
    console.log("METHOD",req.method);
    next();
};
const home = (req, res) =>{
    console.log("I will respond.");
    res.send("hello");
} 
app.use(methodLogger, routerLogger);
app.get("/",  home);
app.get("/protected",handleProtected);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);