import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, DeleteScenarioUseCase, FindOneScenarioUseCase, UpdateScenarioUseCase } from './use-case';
import { ListScenarioUseCase } from './use-case/list-sceario.use-case';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenarioUseCase: CreateScenarioUseCase,
   private readonly listScenarioUseCase: ListScenarioUseCase, 
   private readonly  updateScenarioUseCase: UpdateScenarioUseCase,
   private readonly  findoneScenarioUseCase: FindOneScenarioUseCase, 
   private readonly  DeleteScenarioUseCase: DeleteScenarioUseCase
  ) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute();

  }

  findOne(id: string) {
    return this.findoneScenarioUseCase.execute(id);
  }

  update(id: string, data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.DeleteScenarioUseCase.execute(id);
  }
}