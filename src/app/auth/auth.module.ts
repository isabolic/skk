import { Module } from '@nestjs/common';
import { UserModule } from '@/app/user/user.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

dotenv.config();
const { JWT_SECRET } = process.env;

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
class AuthModule {}

export { AuthModule };
