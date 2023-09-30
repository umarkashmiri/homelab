import { Controller, Body, Get, Post, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserModel } from './models/user.model';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() userModel: CreateUserModel) {
        await this.userService.create(userModel);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
