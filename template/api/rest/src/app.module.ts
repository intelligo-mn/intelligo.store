import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { AttributesModule } from './attributes/attributes.module';
import { ShippingsModule } from './shippings/shippings.module';
import { TaxesModule } from './taxes/taxes.module';
import { TagsModule } from './tags/tags.module';
import { ShopsModule } from './shops/shops.module';
import { TypesModule } from './types/types.module';
import { WithdrawsModule } from './withdraws/withdraws.module';
import { UploadsModule } from './uploads/uploads.module';
import { SettingsModule } from './settings/settings.module';
import { CouponsModule } from './coupons/coupons.module';
import { AddressesModule } from './addresses/addresses.module';
import { ImportsModule } from './imports/imports.module';
import { AuthModule } from './auth/auth.module';
import { RefundsModule } from './refunds/refunds.module';
import { AuthorsModule } from './authors/authors.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { NewslettersModule } from './newsletters/newsletters.module';

@Module({
  imports: [
    UsersModule,
    CommonModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    AnalyticsModule,
    AttributesModule,
    ShippingsModule,
    TaxesModule,
    TagsModule,
    ShopsModule,
    TypesModule,
    WithdrawsModule,
    UploadsModule,
    SettingsModule,
    CouponsModule,
    AddressesModule,
    ImportsModule,
    AuthModule,
    RefundsModule,
    AuthorsModule,
    ManufacturersModule,
    NewslettersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
