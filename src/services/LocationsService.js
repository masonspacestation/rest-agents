import { dbContext } from "../db/DbContext.js"




class LocationsService {
  async getLocations(searchQuery) {
    const locations = await dbContext.Location.find(searchQuery)
    return locations
  }

}


export const locationsService = new LocationsService()