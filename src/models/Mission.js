import { Schema } from "mongoose";




export const MissionSchema = new Schema({
  codename: { type: String, required: true },
  objective: { type: String, required: true },
  year: { type: String, required: true },
  locationId: { type: Schema.ObjectId, required: true },
  ratId: { type: Schema.ObjectId, required: true },
  Completed: { type: Boolean, required: true },
  location: { type: Schema.ObjectId, required: true, ref: 'Rat' },
  agent: { type: Schema.ObjectId, required: true, ref: 'Location' }


})