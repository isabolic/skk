import { IsNotEmpty, MaxLength, IsString } from 'class-validator';

class LoginDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  readonly password: string;
}

export { LoginDto };
