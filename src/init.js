import "./db"; // db파일 자체를 import!!
import "./models/Video";
import app from "./server";

const PORT = 4000;


const handleListening = () => 
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);