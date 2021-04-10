import { EntityRepository, GetRepository, Repository } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { SubmitFormDto } from "./dto/SubmitFormDto";
import { SubmitFormResultDto } from "./dto/SubmitFormResultDto";
import { Form } from "./model/Form";
import { FormAnswerField } from "./model/FormAnswerField";

@Injectable()
export class FormService {
  // constructor(
  //   @InjectRepository(FormAnswerField)
  //   private formRepository: EntityRepository<FormAnswerField>
  // ) {}
  create(): string {
    return "create";
  }

  getAll(): string {
    return `getAll()`;
  }

  //   submit(form: SubmitFormDto): SubmitFormResultDto {
  //     let forms: FormAnswerField[] = form.fields;
  //     forms.forEach((form) => {
  //       this.formRepository.find(form);
  //     });
  //     return new SubmitFormDto();
  //   }

  updateOne(id: string): string {
    return `updateOne(${id})`;
  }
}
