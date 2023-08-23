import { db } from '../../db.js'

export const getFav = (req,res) => {

    const q = "SELECT * FROM favourites WHERE userid = ?"

    
}