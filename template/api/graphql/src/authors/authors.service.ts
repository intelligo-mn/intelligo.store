import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { plainToClass } from 'class-transformer';
import authorsJson from './authors.json';
import { Author } from './entities/author.entity';
import Fuse from 'fuse.js';
import { paginate } from '../common/pagination/paginate';
import { AuthorPaginator, GetAuthorsArgs } from './dto/get-authors.args';
import { GetAuthorArgs } from './dto/get-author.args';

const authors = plainToClass(Author, authorsJson);

const options = {
  keys: ['name', 'slug'],
  threshold: 0.3,
};

const fuse = new Fuse(authors, options);

@Injectable()
export class AuthorsService {
  private authors: Author[] = authors;

  create(createAuthorInput: CreateAuthorInput) {
    return this.authors[0];
  }

  async getAuthors({
    text,
    first,
    page,
  }: GetAuthorsArgs): Promise<AuthorPaginator> {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Author[] = this.authors;

    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);

    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getAuthor({ id, slug }: GetAuthorArgs): Author {
    if (id) {
      return this.authors.find((p) => p.id === Number(id));
    }
    return this.authors.find((p) => p.slug === slug);
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    const author = this.authors.find((p) => p.id === Number(id));

    // Update author
    author.is_approved = updateAuthorInput.is_approved ?? true;

    return author;
  }

  remove(id: number) {
    return this.authors[0];
  }

  async topAuthors(limit): Promise<Author[]> {
    return this.authors.slice(0, limit);
  }
}
