import { Controller, Get, Param, Post, Delete } from '@nestjs/common';
import {AuthorsService} from './authors.service'

@Controller('api/authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  getAuthors() :object[] {
    return this.authorsService.getAuthors()
  }

  @Get(':permalink')
  getAuthor(@Param('permalink') permalink: string) :object {
    return this.authorsService.getAuthorByPermalink(permalink)
  }

  @Post()
  addAuthor() :string {
    return `add author`
  }

  @Delete(':permalink')
  deleteAuthor(@Param('permalink') permalink: string) :string {
    return `delete author by permalink ${permalink}`
  }

}
