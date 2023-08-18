import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/core/entities/order.entity';
import { Recipe } from 'src/core/entities/recipe.entity';
import { User } from 'src/core/entities/user.entity';
import { Repository } from 'typeorm';

const entities = [Recipe, Order, User];

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([...entities])],
  controllers: [],
  providers: [Repository],
  exports: [TypeOrmModule],
})
export class RepositoryModule { }
