import { CarterDto } from '@/app/carter/dto/carter';
import { Expose, Type } from 'class-transformer';

class TermDto {
  @Expose({ name: '_id' })
  id: string;

  @Expose()
  departureLocation: string;

  @Expose()
  arrivalLocation: string;

  @Expose()
  departureDate: Date;

  @Expose()
  arrivalDate: Date;

  @Expose()
  @Type(() => CarterDto)
  carter: CarterDto;
}

export { TermDto };
