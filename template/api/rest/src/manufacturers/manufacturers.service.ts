import { Injectable } from '@nestjs/common';
import { Manufacturer } from './entities/manufacturer.entity';
import manufacturersJson from './manufacturers.json';
import { plainToClass } from 'class-transformer';
import Fuse from 'fuse.js';
import { GetTopManufacturersDto } from './dto/get-top-manufacturers.dto';
import {
  GetManufacturersDto,
  ManufacturerPaginator,
} from './dto/get-manufactures.dto';
import { paginate } from '../common/pagination/paginate';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';

const manufacturers = plainToClass(Manufacturer, manufacturersJson);

const options = {
  keys: ['type.slug'],
  threshold: 0.3,
};

const fuse = new Fuse(manufacturers, options);

@Injectable()
export class ManufacturersService {
  private manufacturers: Manufacturer[] = manufacturers;

  create(createManufactureDto: CreateManufacturerDto) {
    return this.manufacturers[0];
  }

  async getManufactures({
    limit,
    page,
    search,
  }: GetManufacturersDto): Promise<ManufacturerPaginator> {
    if (!page) page = 1;
    if (!limit) limit = 30;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let data: Manufacturer[] = this.manufacturers;
    if (search) {
      const parseSearchParams = search.split(';');
      for (const searchParam of parseSearchParams) {
        const [key, value] = searchParam.split(':');
        data = fuse.search(value)?.map(({ item }) => item);
      }
    }

    const results = data.slice(startIndex, endIndex);
    const url = `/manufacturers?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  async getTopManufactures({
    limit,
  }: GetTopManufacturersDto): Promise<Manufacturer[]> {
    return manufacturers.slice(0, limit);
  }

  async getManufacturesBySlug(slug: string): Promise<Manufacturer> {
    return this.manufacturers.find(
      (singleManufacture) => singleManufacture.slug === slug,
    );
  }

  update(id: number, updateManufacturesDto: UpdateManufacturerDto) {
    const manufacturer = this.manufacturers.find((p) => p.id === Number(id));

    // Update author
    manufacturer.is_approved = updateManufacturesDto.is_approved ?? true;

    return manufacturer;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
