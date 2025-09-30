
import { Logger, Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import * as UseCases from './use-case'
import * as Repositories from './repository'
import { SharedModule } from 'src/shared/shared.module';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [ScenarioController],
  providers: [ ScenarioService, Logger,  ...useCases, ...repositories],
})
export class ScenarioModule {}
