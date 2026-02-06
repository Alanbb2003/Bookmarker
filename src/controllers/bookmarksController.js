import * as Model from "../models/bookmarkModel.js";

export async function list(req,res) {
    try {
        const items = await Model.getAll();
        res.json(items);
    } catch (error) {
        console.error("Error fetching bookmark:",error);
        res.status(500).json({error:"Internal server error"});
    }
}

export async function create(req,res) {
    try {
        const {title,url} = req.body;
        if(!title||!url){
            return res.status(400).json({error:"Missing fields: title and url are required"})
        }
        const id = await Model.createBookmark({title, url});
        res.status(201).json({message:"Created",id});
    } catch (error) {
        console.error("Error creating bookmark:",err);
        res.status(400).json({error:"Internal server error"});
    }
}

export async function remove(req,res) {
    try {
        const id = req.params.id;
        const affected = await Model.deleteBookmarks(id);
        if(affected ===0) return res.status(400).json({error:"Bookmark not found"})
        res.json({message:"Deleted"});
    } catch (error) {
        console.error("Error deleting bookmark:", err);
        res.status(400).json({error:"Internal server error"});
    }
}