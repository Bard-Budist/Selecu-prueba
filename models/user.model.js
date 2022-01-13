import mongoose from '../database.js';

const { Schema } = mongoose;

// Model User
const UserSchema = new Schema({
  name: { type: String, required: [true, 'Missed name'] },
  email: { type: String, required: [true, 'Missed email'], unique: true },
  age: { type: String, required: [true, 'Missed age'], default: '' },
  permissions: [
    {
      route: String
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('Users', UserSchema);

export default User;
