import { ILoginRequest, ILoginResponse } from "@imss/common";
import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { UserDetailsObject } from "./auth-shared";

export class LoginRequest implements ILoginRequest {
  @ApiProperty()
  @IsEmail()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}

export class LoginResponse implements ILoginResponse {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  user: UserDetailsObject;
}
