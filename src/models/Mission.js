import { Schema } from "mongoose";




export const MissionSchema = new Schema({
  codename: {},
  objective: {},
  year: {},
  locationId: {},
  ratId: {},
  isCompleted: {},
  location: { type: Schema.ObjectId, required: true, ref: 'Rat' },
  agent: { type: Schema.ObjectId, required: true, ref: 'Location' }


})