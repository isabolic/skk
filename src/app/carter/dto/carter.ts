import { TermDto } from '@/app/term/dto/term';
import { Expose, Type } from 'class-transformer';

class CarterDto {
  @Expose({ name: '_id' })
  id: string;

  @Expose()
  name: string;

  @Expose()
  @Type(() => TermDto)
  terms: TermDto[];
}

export { CarterDto };
