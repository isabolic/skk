import { CarterDto } from '@/app/carter/dto/carter';
import { TermDto } from '@/app/term/dto/term';
import { UserDto } from '@/app/user/dto/user';
import { Default } from '@/app/util/default.decorator';
import { Expose, Type } from 'class-transformer';

class TicketDto {
  @Expose({ name: '_id' })
  id: string;

  @Expose()
  ticketNo: string;

  @Expose()
  @Type(() => UserDto)
  @Default(null)
  user: UserDto | null;

  @Expose()
  @Type(() => CarterDto)
  carter: CarterDto;

  @Expose()
  @Type(() => TermDto)
  term: TermDto;
}
export { TicketDto };
