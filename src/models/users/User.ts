import mongoose, { Schema } from 'mongoose'
import isEmail from 'validator/lib/isEmail'
import { IUser } from './users.types'

const UserSchema = new mongoose.Schema<IUser>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: [isEmail, 'Please provide a valid email address.'],
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 8
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    }
});

// UserSchema.statics.findOneOrCreate = findOneOrCreate;
// UserSchema.statics.findByAge = findByAge;

// UserSchema.methods.setLastUpdated = setLastUpdated;
// UserSchema.methods.sameLastName = sameLastName;
const User = mongoose.model<IUser>('User', UserSchema)

export default User
