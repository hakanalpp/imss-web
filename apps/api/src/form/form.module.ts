import { MikroORM } from '@mikro-orm/core';
import { Module } from '@nestjs/common';
import { OrmModule } from '../orm/orm.module';
import { FormController } from './form.controller';
import { FormService } from './form.service';

@Module({
  controllers: [FormController],
  providers: [FormService]
})
export class FormModule { }
