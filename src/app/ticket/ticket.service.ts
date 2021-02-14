import { Term, TermDocument } from '@/app/term/schemas/term.schema';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transformer } from '@/app/util/transformer';
import { User, UserDocument } from '@/app/user/schemas/user.schema';
import { TicketDto } from './dto/ticket';
import { Ticket, TicketDocument } from './schemas/ticket.schema';
import { CommonService } from '@/app/common.service';

enum TICKET_LEVEL {
  SIMPLE,
  ALL,
}

@Injectable()
class TicketService implements CommonService<TicketDto> {
  constructor(
    @InjectModel(Ticket.name)
    private readonly ticketModel: Model<TicketDocument>,
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
    @InjectModel(Term.name)
    private readonly termModel: Model<TermDocument>,
  ) {}

  async buyTicket({ ticketNo, userId }): Promise<Ticket> {
    const ticketList = await this.ticketModel
      .find({
        ticketNo: ticketNo,
      })
      .exec();
    const user: User = await this.userModel.findById(userId).exec();

    const ticket = ticketList[0];
    if (!ticket) {
      throw new NotFoundException(
        `Ticket "${ticketNo}" was not found in the system.`,
      );
    }

    if (!user) {
      throw new NotFoundException(
        `User "${userId}" wa not found in the system.`,
      );
    }

    if (ticket.user) {
      throw new BadRequestException(
        `Ticket "${ticketNo}" was already purchased.`,
      );
    }

    ticket.user = user;

    return ticket.save();
  }

  async findAll(level = TICKET_LEVEL.SIMPLE): Promise<TicketDto[]> {
    const query = this.ticketModel.find();

    if (level === TICKET_LEVEL.SIMPLE) {
      query.populate(Ticket.userRefName).populate(Ticket.termRefName);
    } else {
      query.populate([
        {
          path: Ticket.termRefName,
          populate: {
            path: Term.carterRefName,
          },
        },
        {
          path: Ticket.userRefName,
        },
      ]);
    }
    const data = await query.exec();
    return Transformer.plainToClass(TicketDto, (data as unknown) as JSON);
  }

  async findById(id: string): Promise<TicketDto> {
    const data = await this.ticketModel
      .findById(id)
      .populate([
        {
          path: Ticket.termRefName,
          populate: {
            path: Term.carterRefName,
          },
        },
        {
          path: Ticket.userRefName,
        },
      ])
      .exec();
    return Transformer.plainToClass(TicketDto, (data as unknown) as JSON);
  }
}

export { TicketService, TICKET_LEVEL };
