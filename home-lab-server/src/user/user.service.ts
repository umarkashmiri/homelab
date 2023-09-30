import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserModel } from './models/user.model';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

    async create(user: CreateUserModel): Promise<User> {
        const createdUser = await this.userModel.create(user);
        return createdUser;
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedCat = await this.userModel
            .findByIdAndRemove({ _id: id })
            .exec();
        return deletedCat;
    }
}
