import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  productCode: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  price: number;
}