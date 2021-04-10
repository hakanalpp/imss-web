import { FormAnswerField } from "../model/FormAnswerField";
import { FormDto } from "./FormDto";

export class FormAnswerDetailDto extends FormDto {
    fields: FormAnswerField[];
}
