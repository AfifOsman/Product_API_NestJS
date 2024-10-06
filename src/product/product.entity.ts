import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('PRODUCT') 
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Unique ID of the product' })
  id: number;

  @Column()
  @ApiProperty({ description: 'Code of the product' })
  productCode: string;

  @Column()
  @ApiProperty({ description: 'Location of the product' })
  location: string;

  @Column('decimal')
  @ApiProperty({ description: 'Price of the product' })
  price: number;
}