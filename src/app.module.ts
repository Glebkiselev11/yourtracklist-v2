import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorsModule } from './authors/authors.module';
import { ReleasesModule } from './releases/releases.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  imports: [
    ConfigModule.forRoot(), // For env files 
    AuthorsModule, 
    ReleasesModule, 
    TypeOrmModule.forRoot()
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    }
  ]
})
export class AppModule {}
