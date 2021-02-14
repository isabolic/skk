import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/app/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login';

@Injectable()
class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async getUserData(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user && user.password === pass) {
      const { username, _id } = user;
      return { user: username, userId: _id };
    }
    return null;
  }

  async login(user: LoginDto) {
    const data = await this.getUserData(user.username, user.password);

    if (!data) {
      throw new UnauthorizedException(`invalid username and password.`);
    }

    const payload = { username: data.username, sub: data.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

export { AuthService };
