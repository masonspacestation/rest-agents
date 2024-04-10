import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { RatSchema } from "../models/Rat.js";
import { LocationSchema } from "../models/Location.js";
import { MissionSchema } from "../models/Mission.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Rat = mongoose.model('Rat', RatSchema)
  Location = mongoose.model('Location', LocationSchema)
  Misson = mongoose.model('Misson', MissionSchema)
}

export const dbContext = new DbContext()
