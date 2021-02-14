import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Term, TermDocument } from '@/app/term/schemas/term.schema';
import { Transformer } from '@/app/util/transformer';
import { CarterDto } from './dto/carter';
import { Carter, CarterDocument } from './schemas/carter.schema';
import { CommonService } from '@/app/common.service';

@Injectable()
class CarterService implements CommonService<CarterDto> {
  constructor(
    @InjectModel(Carter.name)
    private readonly carterModel: Model<CarterDocument>,
    @InjectModel(Term.name)
    private readonly termModel: Model<TermDocument>,
  ) {}

  async findAll(): Promise<CarterDto[]> {
    const data = await this.carterModel.find().exec();
    return Transformer.plainToClass(CarterDto, (data as unknown) as JSON);
  }

  async findCarterTerm(id: string = null): Promise<CarterDto[]> {
    const carterList = await this.carterModel.find().exec();
    let data = [];

    for (const carter of carterList) {
      const termList = await this.termModel.find({ carter: carter.id });
      // TODO interface support
      data.push({
        _id: carter.id,
        name: carter.name,
        terms: termList,
      });
    }

    if (id) {
      data = data.filter((carter) => carter._id === id);
    }

    return Transformer.plainToClass(CarterDto, (data as unknown) as JSON);
  }

  async findById(id: string): Promise<CarterDto> {
    const data = await this.carterModel.findById(id).exec();
    return Transformer.plainToClass(CarterDto, (data as unknown) as JSON);
  }
}

export { CarterService };
