import { Controller, Get, Param, Post, Delete, Body } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsEntity } from './authors.entity';

@Controller('api/authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  getAuthors(): Promise<AuthorsEntity[]> {
    return this.authorsService.getAuthors();
  }

  @Get(':permalink')
  getAuthor(@Param('permalink') permalink: string): object {
    return this.authorsService.getAuthor(permalink);
  }

  @Post()
  addAuthor(@Body('name') name: string, @Body('permalink') permalink: string) {
    return this.authorsService.createAuthor({
      name,
      permalink,
    });
  }

  @Delete(':permalink')
  deleteAuthor(@Param('permalink') permalink: string) {
    return this.authorsService.deleteAuthor(permalink);
  }
}
