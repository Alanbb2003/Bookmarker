import express from "express";
import bookmarksRouter from "./routes/bookmarks.js";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename,__dirname);

const app = express();
app.use(express.json());

app.use("/api/bookmarks",bookmarksRouter);

app.use(express.static(path.join(__dirname,"..","public")));

app.get("/health",(req,res)=> res.json({status:"ok"}));

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});



