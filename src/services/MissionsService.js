import { dbContext } from "../db/DbContext.js"




class MissionsService {
  async updateMission(missionData, missionId) {
    const missionToUpdate = await dbContext.Misson.findById(missionId)
    if (!missionToUpdate) throw new Error(`Retrieval mission failed for id: ${missionId}`)

    missionToUpdate.completed = missionData.completed ?? missionToUpdate.completed
    await missionToUpdate.save()
    return missionToUpdate
  }


  async getLocationMissions(locId) {
    const missions = await dbContext.Misson.find({ locationId: locId }).populate('rat', 'callsign')
    return missions
  }
  async getMissions() {
    const missions = await dbContext.Misson.find().populate('rat', 'callsign').populate('location')
    return missions
  }


  async createMission(missionData) {
    const mission = await dbContext.Misson.create(missionData)
    await mission.populate('location')
    await mission.populate('rat', 'callsign')
    return mission
  }


  async getMyMissions(ratId) {
    const missions = await dbContext.Misson.find({ ratId: ratId }).populate('location')
    return missions
  }

}


export const missionsService = new MissionsService()