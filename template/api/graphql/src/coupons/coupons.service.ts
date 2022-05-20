import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateCouponInput } from './dto/create-coupon.input';
import { UpdateCouponInput } from './dto/update-coupon.input';
import { Coupon } from './entities/coupon.entity';
import couponsJson from './coupons.json';
import Fuse from 'fuse.js';
import { GetCouponsArgs } from './dto/get-coupons.args';
import { paginate } from 'src/common/pagination/paginate';
import { GetCouponArgs } from './dto/get-coupon.args';
import { VerifyCouponResponse } from './dto/verify-coupon.input';
const coupons = plainToClass(Coupon, couponsJson);
const options = {
  keys: ['name'],
  threshold: 0.3,
};
const fuse = new Fuse(coupons, options);
@Injectable()
export class CouponsService {
  private coupons: Coupon[] = coupons;

  create(createCouponInput: CreateCouponInput) {
    return this.coupons[0];
  }

  getCoupons({ text, first, page }: GetCouponsArgs) {
    const startIndex = (page - 1) * first;
    const endIndex = page * first;
    let data: Coupon[] = this.coupons;
    if (text?.replace(/%/g, '')) {
      data = fuse.search(text)?.map(({ item }) => item);
    }

    const results = data.slice(startIndex, endIndex);
    return {
      data: results,
      paginatorInfo: paginate(data.length, page, first, results.length),
    };
  }

  getCoupon({ id, code }: GetCouponArgs): Coupon {
    if (id) {
      return this.coupons.find((p) => p.id === Number(id));
    }
    return this.coupons.find((p) => p.code === code);
  }
  update(id: number, updateCouponInput: UpdateCouponInput) {
    return this.coupons[0];
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }
  verifyCoupon(code: string): VerifyCouponResponse {
    return {
      is_valid: true,
      coupon: this.coupons[0],
    };
  }
}
