import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/authors')
export class AuthorsController {

  @Get()
  getAllAuthors() : string {
    return 'all authors'
  }

  @Get(':permalink')
  getAuthor(@Param('permalink') permalink: string) : string {
    return `one author ${permalink}`
  }


}
