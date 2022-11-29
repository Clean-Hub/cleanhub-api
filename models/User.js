import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, minlength: 3, maxlength: 30 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 30 },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 300,
    },
    password: { type: String, minlength3, maxlength: 1024, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export default mongoose.model('User', UserSchema)
