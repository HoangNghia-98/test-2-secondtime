import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { from } from 'rxjs';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //typePaths: ['./**/*.graphql']
    }),
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
