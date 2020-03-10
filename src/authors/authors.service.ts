import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthorsEntity } from './authors.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorsDTO } from './authors.dto';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(AuthorsEntity)
    private authorsRepository: Repository<AuthorsEntity>,
  ) {}

  // Return all authors
  async getAuthors() {
    return await this.authorsRepository.find();
  }

  async getAuthor(permalink: string) {
    const author = await this.authorsRepository.findOne({
      where: { permalink },
    });
    if (!author) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return author;
  }

  async createAuthor(data: AuthorsDTO) {
    const author = await this.authorsRepository.create(data);
    await this.authorsRepository.save(author);
    return author;
  }

  async deleteAuthor(permalink: string) {
    // First checked if the author
    const author = await this.authorsRepository.findOne({
      where: { permalink },
    });
    if (!author) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    await this.authorsRepository.delete({ permalink });
    return author;
  }
}
