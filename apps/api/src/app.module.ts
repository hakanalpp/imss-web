import { Module } from "@nestjs/common";
import { ThesisModule } from "./thesis/thesis.module";
import { AuthModule } from "./auth/auth.module";
// import { OrmModule } from "./orm/orm.module";
import { FormModule } from "./form/form.module";
import { TssModule } from "./tss/tss.module";

@Module({
  imports: [ThesisModule, AuthModule, FormModule, TssModule /*, OrmModule */],
  controllers: [],
  providers: [],
})
export class AppModule {}
