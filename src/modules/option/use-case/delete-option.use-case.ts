import { Injectable, Logger } from '@nestjs/common';
import { DeleteOptionRepository } from '../repository';
import { Option } from '../entities/option.entity';

@Injectable()
export class DeleteOptionUseCase {
  constructor(
    private readonly deleteOptionRepository: DeleteOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id:string) {
    try {
      const option = await this.deleteOptionRepository.DeleteOption(id);
      this.logger.log(`Option created: ${Option.name}`);
      return option;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}