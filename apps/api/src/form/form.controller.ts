import { Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiResponse, ApiBody } from "@nestjs/swagger";
import { FormAnswerDetailDto, FormDetailDto } from './dto/form-detail';
import { SubmitFormRequestDto, SubmitFormResultDto } from "./dto/submit-form";
import { FormService } from "./form.service";

@ApiTags("form")
@Controller("form")
export class FormController {

  constructor(
    private formService: FormService
  ) { }


  @Get("get-form:id")
  @ApiOperation({ summary: "Gets a form by given id", })
  @ApiResponse({
    status: 200,
    description: "Form information",
    type: FormDetailDto,
  })
  async get(@Param("id", ParseIntPipe) id: number): Promise<FormDetailDto> {
    return await this.formService.getForm(id);
    //return data;
  }

  @Get("get-form-answer:id")
  @ApiOperation({ summary: "Gets a form's answer by given id", })
  @ApiResponse({
    status: 200,
    description: "Form answer information",
    type: FormAnswerDetailDto,
  })
  async getAnswer(@Param("id", ParseIntPipe) id: number): Promise<FormAnswerDetailDto> {
    return await this.formService.getFormAnswer(id);
    //return data;
  }

  @Post("form-answer")
  @ApiOperation({ summary: "Adds a form answer to the form", })
  @ApiResponse({
    status: 200,
    description: "Push Form Answer",
    type: SubmitFormResultDto,
  })
  async addAnswer(form: SubmitFormRequestDto): Promise<SubmitFormResultDto> {
    return await this.formService.submitFormAnswer(form);
    //return data;
  }


}
//
//+ addAnswer(SubmitFormDTO): SubmitFormResultDTO
//+ getAnswer(int): FormAnswerDetailDTO
