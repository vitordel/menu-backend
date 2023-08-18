import { Module } from '@nestjs/common';

import { OrderService } from './order.service';
import { RecipeService } from './recipe.service';
import { RepositoryModule } from 'src/repositories/repository.module';
import { ContentService } from './content.service';
import { UserService } from './user.service';

const providers = [
  ContentService,
  OrderService,
  RecipeService,
  UserService
];

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers,
  exports: providers,
})
export class ServicesModule { }
