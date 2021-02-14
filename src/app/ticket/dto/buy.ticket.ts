import { IsNotEmpty, MaxLength, IsString } from 'class-validator';

class BuyTicketDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  ticketNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  userId: string;
}

export { BuyTicketDto };
