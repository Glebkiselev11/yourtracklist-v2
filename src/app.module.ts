import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthorController } from './author/author.controller';
import { ReleasesController } from './releases/releases.controller';

@Module({
  imports: [
    ConfigModule.forRoot(), // For env files 
  ],
  controllers: [AuthorController, ReleasesController],
})
export class AppModule {}
