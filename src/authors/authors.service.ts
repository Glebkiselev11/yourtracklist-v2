import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthorsEntity } from './authors.entity';
import { InjectRepository } from '@nestjs/typeorm';

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

  async createAuthor(data: object) {
    try {
      const author = await this.authorsRepository.create(data);
      await this.authorsRepository.save(author);
      return author;
    } catch (error) {
      console.log(error);
    }
  }

  async getAuthor(permalink: string) {
    return await this.authorsRepository.findOne({ where: { permalink } });
  }

  async deleteAuthor(permalink: string) {
    await this.authorsRepository.delete({ permalink });
    return { deleted: true };
  }
}
