import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsEntity } from './authors.entity';
import { ValidationPipe } from '../shared/validation.pipe';
import { AuthorsDTO } from './authors.dto';

@Controller('api/authors')
export class AuthorsController {
  private logger = new Logger('AuthorsController');
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
  @UsePipes(new ValidationPipe())
  addAuthor(@Body() data: AuthorsDTO) {
    this.logger.log(JSON.stringify(data));
    return this.authorsService.createAuthor(data);
  }

  @Delete(':permalink')
  deleteAuthor(@Param('permalink') permalink: string) {
    return this.authorsService.deleteAuthor(permalink);
  }
}
