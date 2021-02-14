import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { CarterModule } from './carter/carter.module';
import { TermModule } from './term/term.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    TicketModule,
    CarterModule,
    TermModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
class AppModule {}

export { AppModule };
