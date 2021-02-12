import { IsEmail, IsNotEmpty, MaxLength, IsString } from 'class-validator';

class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly username: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50)
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly password: string;
}

export { RegisterUserDto };
