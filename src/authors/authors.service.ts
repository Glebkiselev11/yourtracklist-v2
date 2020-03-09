import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {

  private authors = [
    {
      permalink: "satanbeat",
      name: "SATANBEAT",
      tags: ['witch-house', 'ambient', 'drone'],
    },
    {
      permalink: "cat-soup",
      name: "cat soup",
      tags: ['sesh', 'ambient', 'hip-hop'],
    },
  ]

  // Return all authors
  getAuthors() { 
    return this.authors
  }

  getAuthorByPermalink(permalink :string) {
    return this.authors.find(author => author.permalink === permalink)
  }


}
