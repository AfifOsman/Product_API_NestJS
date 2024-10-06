import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(productCode?: string, location?: string): Promise<Product[]> {
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (productCode) {
      queryBuilder.andWhere('product.productCode = :productCode', { productCode });
    }
    if (location) {
      queryBuilder.andWhere('product.location = :location', { location });
    }

    return queryBuilder.getMany();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async update(productCode: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { productCode } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    Object.assign(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async delete(productCode: string): Promise<void> {
    const result = await this.productRepository.delete({ productCode });
    if (result.affected === 0) {
      throw new NotFoundException('Product not found');
    }
  }
}