import { SISBUserResult } from "../../interfaces/StudentInformationSystemBridge";

export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  user: SISBUserResult["data"];
}
