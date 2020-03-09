import { Test, TestingModule } from '@nestjs/testing'
import { AuthorsService } from './authors.service'

describe('AuthorsService', () => {
  let service: AuthorsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorsService],
    }).compile()

    service = module.get<AuthorsService>(AuthorsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })


  describe('getAuthors: ', () => {
    it('should be defined', () => {
      expect(service.getAuthors).toBeDefined()
    })
  })

  describe('getAuthorByPermalink: ', () => {
    it('should be defined', () => {
      expect(service.getAuthorByPermalink).toBeDefined()
    })
  })




})
