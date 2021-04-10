import { SISBRole } from "@imss/common";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Form {

    @PrimaryKey()
    id: number;
    @Property()
    name: string;
    @Property()
    senderRole: SISBRole;
    @Property()
    receiverRole: SISBRole;
    @Property()
    templateURL: string;
}
