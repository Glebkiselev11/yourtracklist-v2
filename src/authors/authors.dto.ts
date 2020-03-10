import { IsString } from 'class-validator';

export class AuthorsDTO {
  @IsString()
  name: string;

  @IsString()
  permalink: string;
}
