export interface IFormDetailResponse {
  id: number;
  name: string;
  receiverRole: string;
  senderId: number;
}

export type ISubmitFormResponse = unknown;

export interface IFormAnswerResponse extends IFormDetailResponse {
  fields: unknown[];
}

export interface IFormResponse extends IFormDetailResponse {
  fields: unknown[];
}

export interface ISubmitFormRequest {
  id: number;
  fields: unknown[];
}
