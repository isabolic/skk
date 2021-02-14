import { Expose } from 'class-transformer';

class UserDto {
  @Expose({ name: '_id' })
  id: string;

  @Expose()
  username: string;
}

export { UserDto };
