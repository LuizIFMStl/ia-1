import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, DeleteOptionUseCase, FindOneOptionUseCase, ListOptionUseCase, UpdateOptionUseCase } from './use-case';

@Injectable()
export class OptionService {
  constructor(
    private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listOptionUserCase: ListOptionUseCase,
    private readonly findoneOptionUseCase:  FindOneOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
    private readonly deleteOptionUseCase: DeleteOptionUseCase
  ) {}


  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUserCase.execute();
  }

  findOne(id: string) {
    return this.findoneOptionUseCase.execute(id);
  }

  update(id: string, data: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id,data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.execute(id);
  }
}