import { ISubmitFormRequest } from "@imss/common";
import { FormAnswerField } from "../model/FormAnswerField";
import { ApiProperty } from "@nestjs/swagger";
export class SubmitFormResultDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  fields: FormAnswerField[];
}

export class SubmitFormRequestDto implements ISubmitFormRequest {
  @ApiProperty()
  id: number;
  @ApiProperty()
  fields: FormAnswerField[];
}
