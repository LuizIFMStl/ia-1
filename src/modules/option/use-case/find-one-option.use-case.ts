import { Injectable, Logger } from "@nestjs/common";
import { OptionReposiory } from "../repository";





@Injectable()
export class FindOneOptionUseCase {
    constructor(
        private readonly findoneOptionRepository: OptionReposiory,
        private readonly logger: Logger,
    )   {}

    async execute(id:string) {
        try {
            const option = await this.findoneOptionRepository.findOne(id);
            return option;

        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}






