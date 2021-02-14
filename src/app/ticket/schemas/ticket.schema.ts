import { Term } from '@/app/term/schemas/term.schema';
import { User } from '@/app/user/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

type TicketDocument = Ticket & mongoose.Document;

@Schema({ collection: 'ticket' })
class Ticket {
  @Prop({ required: true, unique: true, type: String })
  ticketNo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Term.name })
  term: Term;

  public static readonly userRefName: string = 'user';

  public static readonly termRefName: string = 'term';
}

const TicketSchema = SchemaFactory.createForClass(Ticket);

export { TicketDocument, Ticket, TicketSchema };
