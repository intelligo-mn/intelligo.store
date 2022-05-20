import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon } from './entities/coupon.entity';
import couponsJson from './coupons.json';
import Fuse from 'fuse.js';
import { GetCouponsDto } from './dto/get-coupons.dto';
import { paginate } from 'src/common/pagination/paginate';

const coupons = plainToClass(Coupon, couponsJson);
const options = {
  keys: ['name'],
  threshold: 0.3,
};
const fuse = new Fuse(coupons, options);

@Injectable()
export class CouponsService {
  private coupons: Coupon[] = coupons;

  create(createCouponDto: CreateCouponDto) {
    return this.coupons[0];
  }

  getCoupons({ search, limit, page }: GetCouponsDto) {
    if (!page) page = 1;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const data: Coupon[] = this.coupons;
    // if (text?.replace(/%/g, '')) {
    //   data = fuse.search(text)?.map(({ item }) => item);
    // }

    const results = data.slice(startIndex, endIndex);
    const url = `/coupons?search=${search}&limit=${limit}`;
    return {
      data: results,
      ...paginate(data.length, page, limit, results.length, url),
    };
  }

  getCoupon(id: number): Coupon {
    return this.coupons.find((p) => p.id === id);
  }

  update(id: number, updateCouponDto: UpdateCouponDto) {
    return this.coupons[0];
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }

  verifyCoupon(code: string) {
    return {
      is_valid: true,
      coupon: {
        id: 9,
        code: code,
        description: null,
        image: {
          id: 925,
          original:
            'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/925/5x2x.png',
          thumbnail:
            'https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/925/conversions/5x2x-thumbnail.jpg',
        },
        type: 'fixed',
        amount: 5,
        active_from: '2021-03-28T05:46:42.000Z',
        expire_at: '2024-06-23T05:46:42.000Z',
        created_at: '2021-03-28T05:48:16.000000Z',
        updated_at: '2021-08-19T03:58:34.000000Z',
        deleted_at: null,
        is_valid: true,
      },
    };
  }
}
