import { Request, Response} from "express";
import path from "path"

export async function renderIndex(req:Request, res: Response) {
    res.sendFile(path.join(__dirname,"../public/buser" ,"index.html"));
}