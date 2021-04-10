import { FormAnswerField } from "../model/FormAnswerField";

export abstract class SubmitFormResultDto {
  id: number;
  fields: FormAnswerField[];
}
