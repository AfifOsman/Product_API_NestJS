import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProduct(productCode?: string, location?: string): Promise<import("./product.entity").Product[]>;
    createProduct(createProductDto: CreateProductDto): Promise<import("./product.entity").Product>;
    updateProduct(productCode: string, updateProductDto: UpdateProductDto): Promise<import("./product.entity").Product>;
    deleteProduct(productCode: string): Promise<void>;
}
