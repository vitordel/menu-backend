import { Module } from '@nestjs/common';

import { ServicesModule } from './../services/services.module';

import { ContentController } from './content.controller';
import { OrderController } from './order.controller';
import { RecipeController } from './recipe.controller';
import { UserController } from './user.controller';

@Module({
  imports: [ServicesModule],
  controllers: [
    ContentController,
    OrderController,
    RecipeController,
    UserController
  ],
  providers: [],
  exports: [],
})
export class ControllersModule { }
