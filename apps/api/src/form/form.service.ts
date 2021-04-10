import { EntityRepository, GetRepository, Repository } from "@mikro-orm/core";
import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import { FormAnswerDetailDto, FormDetailDto } from "./dto/form-detail";
import { SubmitFormRequestDto, SubmitFormResultDto } from "./dto/submit-form";
import { Form } from "./model/Form";
import { FormAnswerField } from "./model/FormAnswerField";

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(FormAnswerField)
    private formRepository: EntityRepository<FormAnswerField>
  ) { }
  getForm(id: number): Promise<FormDetailDto> {
    return null;
  }

  getFormAnswer(id: number): Promise<FormAnswerDetailDto> {
    return null;
  }

  submitFormAnswer(submitForm: SubmitFormRequestDto): Promise<SubmitFormResultDto> {
    return null;
  }


  //   submit(form: SubmitFormDto): SubmitFormResultDto {
  //     let forms: FormAnswerField[] = form.fields;
  //     forms.forEach((form) => {
  //       this.formRepository.find(form);
  //     });
  //     return new SubmitFormDto();
  //   }

}
