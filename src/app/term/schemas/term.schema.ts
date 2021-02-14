import { Carter } from '@/app/carter/schemas/carter.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

type TermDocument = Term & mongoose.Document;

@Schema({ collection: 'term' })
class Term {
  @Prop({ required: true, type: String })
  departureLocation: string;

  @Prop({ required: true, type: String })
  arrivalLocation: string;

  @Prop({ required: true, type: Date })
  departureDate: Date;

  @Prop({ required: true, type: Date })
  arrivalDate: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: Carter.name,
  })
  carter: Carter;

  public static readonly carterRefName: string = 'carter';
}

const TermSchema = SchemaFactory.createForClass(Term);

export { TermDocument, Term, TermSchema };
