import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateScenarioDto } from '../dto/update-scenario.dto';

@Injectable()
export class UpdateScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async UpadateScenario(id:string, data:UpdateScenarioDto) {
    const scenario = await this.prisma.scenario.update({
        where:{
            id
        },
        data
        });
    return scenario;
  }
}