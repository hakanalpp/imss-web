import { SISBRole } from "../../interfaces/StudentInformationSystemBridge";

export interface IFormDetailResponse {
  id: number;
  name: string;
  receiverRole: SISBRole;
  senderId: number;
}

export interface ISubmitFormResponse {
}

export interface IFormAnswerResponse extends IFormDetailResponse {
  fields: Object[];
}

export interface IFormResponse extends IFormDetailResponse {
  fields: Object[];
}

export interface ISubmitFormRequest {
  id: number;
  fields: Object[];
}
