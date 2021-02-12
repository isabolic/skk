import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transformer } from '@/app/util/transformer';
import { RegisterUserDto } from './dto/register.user';
import { UserDto } from './dto/user';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async create(registerUserDto: RegisterUserDto): Promise<UserDto> {
    const user = await new this.userModel(registerUserDto).save();
    return Transformer.plainToClass(UserDto, (user as unknown) as JSON);
  }

  async findAll(): Promise<UserDto[]> {
    const data = await this.userModel.find().exec();
    return Transformer.plainToClass(UserDto, (data as unknown) as JSON);
  }

  async clear(): Promise<User[]> {
    return this.userModel.deleteMany().exec();
  }
}

export { UserService };
