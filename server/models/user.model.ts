import { Schema, model, Document } from 'mongoose';
import { Notification } from './notification.model';

export interface User extends Document {
  username: string;
  password: string;
  friends?: [User['_id']];
  notifications?: [Notification['_id']];
  since: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'UserSchema' }],
  notifications: [{ type: Schema.Types.ObjectId, ref: 'NotificationSchema' }],
  since: Date,
});

export const UserModel = model<User>('User', UserSchema);
