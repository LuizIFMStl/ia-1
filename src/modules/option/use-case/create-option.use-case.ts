import { Injectable, Logger } from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';
import { CreateOptionRepository } from '../repository';

@Injectable()
export class CreateOptionUseCase {
  constructor(
    private readonly createOptionRepository: CreateOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateOptionDto) {
    try {
      const option = await this.createOptionRepository.create(data);
      this.logger.log(`Option created: ${option.name}`);
      return option;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}