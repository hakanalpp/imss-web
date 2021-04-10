import { SISBRole } from "@imss/common";

export abstract class FormDto {

    id: number;
    name: string;
    receiverRole: SISBRole;
    senderId: number;
}
