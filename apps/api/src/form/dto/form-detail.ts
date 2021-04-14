import { FormAnswerField } from "../model/FormAnswerField";
import { IFormAnswerResponse, IFormResponse } from "@imss/common";
import { ApiProperty } from "@nestjs/swagger";
import { FormField } from "../model/FormField";

export class FormAnswerDetailDto implements IFormAnswerResponse {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  receiverRole: string;
  senderId: number;
  @ApiProperty()
  fields: FormAnswerField[];
}

export class FormDetailDto implements IFormResponse {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  receiverRole: string;
  @ApiProperty()
  senderId: number;
  @ApiProperty()
  fields: FormField[];
}
