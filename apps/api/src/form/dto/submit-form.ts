import { ISubmitFormRequest, ISubmitFormResponse } from "@imss/common";
import { FormAnswerField } from "../model/FormAnswerField";
import { ApiProperty } from "@nestjs/swagger";
export class SubmitFormResultDto implements ISubmitFormResponse {
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

