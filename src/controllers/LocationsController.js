import { locationsService } from "../services/LocationsService.js";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";




export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
      .get('/:locationId/missions', this.getLocationMissions)

  }


  async getLocations(request, response, next) {
    try {
      const searchQuery = request.query
      const locations = await locationsService.getLocations(searchQuery)
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }


  async getLocationMissions(request, response, next) {
    try {
      const locId = request.params.locationId
      const missions = await missionsService.getLocationMissions(locId)
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }
}