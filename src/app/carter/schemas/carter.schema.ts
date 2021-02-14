import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

type CarterDocument = Carter & mongoose.Document;

@Schema({ collection: 'carter' })
class Carter {
  @Prop({ required: true, type: String })
  name: string;
}

const CarterSchema = SchemaFactory.createForClass(Carter);

export { CarterDocument, Carter, CarterSchema };
