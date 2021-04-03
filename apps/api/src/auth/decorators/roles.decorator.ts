import { SISBRole } from "@imss/common";
import { SetMetadata } from "@nestjs/common";

export const ROLES_KEY = "roles";
export const Roles = (...roles: SISBRole[]) => SetMetadata(ROLES_KEY, roles);
