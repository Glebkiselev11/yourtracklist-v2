import { Test, TestingModule } from '@nestjs/testing'
import { AuthorsController } from './authors.controller'
import { AuthorsService } from './authors.service'
import { AuthorsEntity } from './authors.entity'

describe('Author Controller', () => {
  let controller: AuthorsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorsController],
      providers: [AuthorsService],
      imports: [AuthorsEntity]
    }).compile()

    controller = module.get<AuthorsController>(AuthorsController)
    
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })


  describe('getAuthors: ', () => {

    it('should be defined', () => {
      expect(controller.getAuthors).toBeDefined()
    })

  })

  describe('getAuthor: ', () => {

    it('should be defined', () => {
      expect(controller.getAuthor).toBeDefined()
    })

  })

  describe('addAuthor: ', () => {

    it('should be defined', () => {
      expect(controller.addAuthor).toBeDefined()
    })

  })


  describe('deleteAuthor: ', () => {

    it('should be defined', () => {
      expect(controller.deleteAuthor).toBeDefined()
    })

  })



})
