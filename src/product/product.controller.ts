import { Controller, Get, Post, Body, Query, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('product')
@ApiBearerAuth() // Add this to include Bearer token in Swagger UI
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProduct(@Query('productCode') productCode?: string, @Query('location') location?: string) {
    return this.productService.findAll(productCode, location);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put()
  updateProduct(@Query('productCode') productCode: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(productCode, updateProductDto);
  }

  @Delete()
  deleteProduct(@Query('productCode') productCode: string) {
    return this.productService.delete(productCode);
  }
}