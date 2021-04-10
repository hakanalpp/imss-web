import { SISBRole } from "@imss/common";
import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Form } from "./Form";

@Entity()
export class FormField {
    @PrimaryKey()
    id: number;
    @Property()
    name: string;
    @Property()
    type: string;
    @Property()
    receiverRole: SISBRole;
    @Property()
    stepNo: number;
    @ManyToOne(() => Form)
    formId: number;
}
