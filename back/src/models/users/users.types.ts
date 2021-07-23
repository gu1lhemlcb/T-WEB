import { Document, Model } from "mongoose";

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
}
// export interface IUserDocument extends IUser, Document {
//     // sameLastName: (this: IUserDocument) => Promise<Document[]>;
// }
// export interface IUserModel extends Model<IUserDocument> {
//     findOneOrCreate: (
//         this: IUserModel,
//         {
//             firstName,
//             lastName,
//             email,
//             password,
//             username
//         }: { firstName: string; lastName: string; email: string; password: string; username: string; }
//     ) => Promise<IUserDocument>;
// }