import {db} from "../db.js";

export async function getAll() {
    const [rows] = await db.query("SELECT id, title, url, created_at From bookmarks ORDER BY id DESC");
    return rows;
}

/** 
  *  @param {Object} payload
  *  @param {string} payload.title
  *  @param {string} payload.url
  */

export async function createBookmark({title,url}) {
    const [result] = await db.query("INSERT INTO bookmarks (title,url) VALUES (?,?)",[title,url]);
    return result.insertId;
}

/**
 * 
 * @param {number|string} id 
 * @returns {promise<number>} affectedRows
 */
export async function deleteBookmarks(id) {
    const[result] = await db.query("DELETE FROM bookmarks WHERE id = ?",[id]);
    return result.affectedRows;
}
