import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';

@Injectable()
export class DeleteOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async DeleteOption(id:string) {
    const option= await this.prisma.option.delete({
        where:{id},
    });
    return option;
  }
}