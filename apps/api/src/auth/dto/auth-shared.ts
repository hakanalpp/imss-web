import type { SISBRole } from "@imss/common";
import { ApiProperty } from "@nestjs/swagger";

export class UserDetailsObject {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty({
    enumName: "SISBRole",
    enum: ["STUDENT", "ACADEMICIAN", "INSTITUTE_MEMBER"],
  })
  role: SISBRole;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;
}
