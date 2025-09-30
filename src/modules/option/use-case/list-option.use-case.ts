import { Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { ListOptionRepository } from "../repository/list-option.repository";




@Injectable()
export class ListOptionUseCase {
  constructor(
    private readonly listOptionRepository: ListOptionRepository,
    private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const option = await this.listOptionRepository.listOption();
            this.logger.log('Scenario list successfully', ListOptionUseCase.name);
            return option;
        } catch (err) {
        const error = new ServiceUnavailableException('error list Option', {
            cause: err,
            description:
            `Error on list post: ${err.message}` || 'Unknown error ocurred',
        });
        this.logger.error(error.message, error.stack);
        throw error;
    }
}
}
