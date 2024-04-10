import { dbContext } from "../db/DbContext.js"




class RatsService {


  async getRats(searchQuery) {
    const rats = await dbContext.Rat.find(searchQuery)
    return rats
  }
}


export const ratsService = new RatsService