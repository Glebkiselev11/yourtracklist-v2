import { Controller, Get, Query } from '@nestjs/common';

@Controller('api/releases')
export class ReleasesController {
  @Get()
  getReleases(
    @Query('limit') prodLimit: number = 4,
    @Query('author') prodAuthor: string,
    @Query('sort') prodSort: string = 'new',
    @Query('tags') prodTags: string,
  ) {
    const tags: string[] = prodTags.split(',');
    console.log(tags);

    return null;
  }
}
