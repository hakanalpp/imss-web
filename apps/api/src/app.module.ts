import { Module } from "@nestjs/common";
import { ThesisModule } from "./thesis/thesis.module";
import { AuthModule } from "./auth/auth.module";
// import { OrmModule } from "./orm/orm.module";

@Module({
  imports: [ThesisModule, AuthModule /*, OrmModule */],
  controllers: [],
  providers: [],
})
export class AppModule {}
