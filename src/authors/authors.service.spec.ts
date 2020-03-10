import { Test, TestingModule } from '@nestjs/testing';
import { AuthorsService } from './authors.service';
import { AuthorsEntity } from './authors.entity';

describe('AuthorsService', () => {
  let service: AuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorsService],
      imports: [AuthorsEntity],
    }).compile();

    service = module.get<AuthorsService>(AuthorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAuthors: ', () => {
    it('should be defined', () => {
      expect(service.getAuthors).toBeDefined();
    });
  });

  describe('getAuthor: ', () => {
    it('should be defined', () => {
      expect(service.getAuthor).toBeDefined();
    });
  });
});
