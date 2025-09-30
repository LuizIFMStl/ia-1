import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateOptionDto } from 'src/modules/option/dto/update-option.dto';

@Injectable()
export class UpdateOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async UpadateOption(id:string, data:UpdateOptionDto) {
    const option = await this.prisma.option.update({
         where: { id },
      data: {
      name: data.name,
      description: data.description,
      scenario: {
        connect: { id: data.scenarioId }, 
      },
    },
  });
}
}