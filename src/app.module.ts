import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorsModule } from './authors/authors.module';
import { ReleasesModule } from './releases/releases.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // For env files 
    AuthorsModule, 
    ReleasesModule, 
    TypeOrmModule.forRoot()
  ]
})
export class AppModule {}
