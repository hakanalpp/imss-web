import { FormField } from "../model/FormField";
import { FormDto } from "./FormDto";
export class FormDetailDto extends FormDto {
  fields: FormField[];
}
