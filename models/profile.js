import mongoose from 'mongoose'
import User from './user.js'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  pronouns: {
    type: String,
    enum: ['He/Him/His', 'She/Her/Hers', 'They/Them/Theirs']
  },
  cd: Boolean,//true = cd, false = talent
  location: String,//where the user is based
  phoneNumber: Number,
  email: String,
  website: String,
  talentAccount: { type: Schema.Types.ObjectId, ref: 'ActorAccount'},
  cdAccount: { type: Schema.Types.ObjectId, ref: 'CDAccount'}
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
