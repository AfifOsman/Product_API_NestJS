import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(productCode?: string, location?: string): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(productCode: string, updateProductDto: UpdateProductDto): Promise<Product>;
    delete(productCode: string): Promise<void>;
}
