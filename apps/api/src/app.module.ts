import { Module } from "@nestjs/common";
import { ThesisModule } from './thesis/thesis.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ThesisModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
