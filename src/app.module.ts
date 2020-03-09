import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorsController } from './authors/authors.controller';
import { ReleasesController } from './releases/releases.controller';
import { AuthorsModule } from './authors/authors.module';
import { ReleasesModule } from './releases/releases.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // For env files 
    AuthorsModule, 
    ReleasesModule, 
  ]
})
export class AppModule {}
