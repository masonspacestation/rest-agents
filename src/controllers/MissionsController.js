import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import { missionsService } from "../services/MissionsService.js";
import BaseController from "../utils/BaseController.js";




export class MissionsController extends BaseController {
  constructor() {
    super('api/missions')
    this.router
      .get('', this.getMissions)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createMission)
      .put('', this.updateMission)
  }

  async getMissions(request, response, next) {
    try {
      // const searchQuery = request.query
      const missions = await missionsService.getMissions()
      response.send(missions)
    } catch (error) {
      next(error)
    }
  }


  async createMission(request, response, next) {
    try {
      const missionData = request.body
      const mission = await missionsService.createMission(missionData)
      response.send(mission)
    } catch (error) {
      next(error)
    }
  }

  async updateMission(request, response, next) {
    const missionData = request.body
    const missionId = request.params.missionId
    const updatedMission = await missionsService.updateMission(missionData, missionId)
  }
}