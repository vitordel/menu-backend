import { Injectable } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from '../core/dtos/order.dto';
import { Repository } from 'typeorm';
import { Order } from 'src/core/entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ) { }

  async finish(id: number) {
    return await this.orderRepository.update(id, { is_done: true });
  }

  async create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  async findAll() {
    return await this.orderRepository.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number) {
    return await this.orderRepository.findOne({ where: { id } });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return await this.orderRepository.delete(id);
  }
}
