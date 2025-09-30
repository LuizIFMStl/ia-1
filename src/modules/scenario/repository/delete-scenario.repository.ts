import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class DeleteScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async DeleteScenario(id:string) {
    const scenario = await this.prisma.scenario.delete({
        where:{id},
    });
    return scenario;
  }
}