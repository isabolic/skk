import { CommonController } from '@/app/common.controller';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.user';
import { UserDto } from './dto/user';
import { UserService } from './user.service';

@Controller('user')
class UserController extends CommonController<UserDto, UserService> {
  constructor(protected readonly service: UserService) {
    super(service);
  }

  @Post('register')
  async create(@Body() registerUserDto: RegisterUserDto): Promise<UserDto> {
    return await this.service.create(registerUserDto);
  }
}

export { UserController };
