import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.user';
import { UserDto } from './dto/user';
import { UserService } from './user.service';

@Controller()
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/api/user/register')
  async create(@Body() registerUserDto: RegisterUserDto): Promise<UserDto> {
    return await this.userService.create(registerUserDto);
  }

  @Get('/api/user/clear')
  async clear() {
    return await this.userService.clear();
  }

  @Get('api/user')
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}

export { UserController };
