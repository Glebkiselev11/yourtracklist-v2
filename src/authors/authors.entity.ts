import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('authors')
export class AuthorsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({
    type: 'varchar',
    length: 150,
    unique: true,
  })
  permalink: string

  @Column({
    type: 'varchar',
    length: 150,
    unique: false,
  })
  name: string
}
