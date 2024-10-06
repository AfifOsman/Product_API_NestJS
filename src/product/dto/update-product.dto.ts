import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty()
  location: string;

  @ApiProperty()
  price: number;
}