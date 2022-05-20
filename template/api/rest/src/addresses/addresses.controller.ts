import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  createAddress(@Body() createAddressDto: CreateAddressDto) {
    return this.addressesService.create(createAddressDto);
  }

  @Get()
  addresses() {
    return this.addressesService.findAll();
  }

  @Get(':id')
  address(@Param('id') id: string) {
    return this.addressesService.findOne(+id);
  }

  @Put(':id')
  updateAddress(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.addressesService.update(+id, updateAddressDto);
  }

  @Delete(':id')
  deleteAddress(@Param('id') id: string) {
    return this.addressesService.remove(+id);
  }
}
