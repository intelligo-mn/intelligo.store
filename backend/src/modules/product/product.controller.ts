import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post as PostMethod,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Request } from "express";
import { HeaderUtil } from "src/core/header-util";
import { LoggingInterceptor } from "src/core/interceptors/logging.interceptor";
import { Page, PageRequest } from "src/domain/base/pagination.entity";
import { Roles, RolesGuard, RoleType } from "src/security";
import Product from "../../domain/product.entity";
import { ProductService } from "./product.service";

@Controller("api/products")
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiTags("products")
export class ProductController {
  logger = new Logger("ProductController");

  constructor(private readonly productService: ProductService) {}

  @Get("/")
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: "List all records",
    type: Product,
  })
  async getAll(@Req() req: Request): Promise<Product[]> {
    const pageRequest: PageRequest = new PageRequest(
      req.query.page,
      req.query.size,
      req.query.sort
    );
    const [results, count] = await this.productService.findAndCount({
      skip: +pageRequest.page * pageRequest.size,
      take: +pageRequest.size,
      order: pageRequest.sort.asOrder(),
    });
    HeaderUtil.addPaginationHeaders(
      req.res,
      new Page(results, count, pageRequest)
    );
    return results;
  }

  @Get("/:id")
  @Roles(RoleType.USER)
  @ApiResponse({
    status: 200,
    description: "The found record",
    type: Product,
  })
  async getOne(@Param("id") id: string): Promise<Product> {
    return await this.productService.findById(id);
  }

  @PostMethod("/")
  @Roles(RoleType.USER)
  @ApiOperation({ summary: "Create product" })
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
    type: Product,
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  async post(@Req() req: Request, @Body() product: Product): Promise<Product> {
    const created = await this.productService.save(product);
    HeaderUtil.addEntityCreatedHeaders(req.res, "Product", created.id);
    return created;
  }

  @Put("/")
  @Roles(RoleType.USER)
  @ApiOperation({ summary: "Update product" })
  @ApiResponse({
    status: 200,
    description: "The record has been successfully updated.",
    type: Product,
  })
  async put(@Req() req: Request, @Body() product: Product): Promise<Product> {
    HeaderUtil.addEntityCreatedHeaders(req.res, "Product", product.id);
    return await this.productService.update(product);
  }

  @Delete("/:id")
  @Roles(RoleType.USER)
  @ApiOperation({ summary: "Delete product" })
  @ApiResponse({
    status: 204,
    description: "The record has been successfully deleted.",
  })
  async remove(@Req() req: Request, @Param("id") id: string): Promise<Product> {
    HeaderUtil.addEntityDeletedHeaders(req.res, "Product", id);
    const toDelete = await this.productService.findById(id);
    return await this.productService.delete(toDelete);
  }
}
