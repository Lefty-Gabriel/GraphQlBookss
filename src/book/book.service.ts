import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBookInput } from './dto/create-book.input';

const prisma = new PrismaClient();

@Injectable()
export class BookService {
  async findAll() {
    return prisma.book.findMany();
  }

  async findOne(id: number) {
    return prisma.book.findUnique({ where: { id } });
  }

  async create(createBookInput: CreateBookInput) {
    return prisma.book.create({ data: createBookInput });
  }
}
