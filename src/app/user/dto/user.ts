import { Expose } from 'class-transformer';

class UserDto {
  @Expose()
  username: string;
}

export { UserDto };
