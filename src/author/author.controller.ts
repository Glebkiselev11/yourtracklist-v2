import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/author')
export class AuthorController {

  @Get(':permalink')
  getAuthor(@Param('permalink') permalink: string) {
    return permalink
  }


}
