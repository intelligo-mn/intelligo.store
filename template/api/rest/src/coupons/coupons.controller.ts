import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { GetCouponsDto } from './dto/get-coupons.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Controller('coupons')
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  createCoupon(@Body() createCouponDto: CreateCouponDto) {
    return this.couponsService.create(createCouponDto);
  }

  @Get()
  getCoupons(@Query() query: GetCouponsDto) {
    return this.couponsService.getCoupons(query);
  }

  @Get(':id')
  getCoupon(@Param('id') id: string) {
    return this.couponsService.getCoupon(+id);
  }

  @Get(':id/verify')
  verify(@Param('id') id: string) {
    return this.couponsService.getCoupon(+id);
  }

  @Post('verify')
  verifyCoupon(@Body('code') code: string) {
    return this.couponsService.verifyCoupon(code);
  }

  @Put(':id')
  updateCoupon(
    @Param('id') id: string,
    @Body() updateCouponDto: UpdateCouponDto,
  ) {
    return this.couponsService.update(+id, updateCouponDto);
  }

  @Delete(':id')
  deleteCoupon(@Param('id') id: string) {
    return this.couponsService.remove(+id);
  }
}
