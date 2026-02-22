import { RegisterDTO } from "../interfaces/auth.types";
import { UserModel } from "../models/user.model";

export const AuthRepository = {
    findByEmail: async (email: string) => {
        return UserModel.findOne({ email }).select("+password");
    },

    createUser: async (payload: RegisterDTO) => {
        return UserModel.create(payload);
    }
};
