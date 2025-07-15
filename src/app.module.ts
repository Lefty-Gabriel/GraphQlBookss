import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './nest/book/book.module';
import { BookService } from './book/book.service';
import { BookResolver } from './book/book.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    BookModule,
  ],
  providers: [BookService, BookResolver],
})
export class AppModule {}

