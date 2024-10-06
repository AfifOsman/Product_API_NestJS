import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { RoleCheckMiddleware } from './middleware/role-check.middleware';
import { Product } from './product/product.entity';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'zsdfdsdfs', //replace the password
      database: 'MOTOR_INSURANCE_WEBSITE',
      entities: [Product],
      synchronize: true,
    }),
    JwtModule.register({
      secret: 'secretKey', // Replace with an env variable or a secure key
      signOptions: { expiresIn: '60m' },
    }),
    ProductModule,
  ],
  providers: [JwtStrategy],
  controllers: [AuthController],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // Apply authentication middleware globally (for all routes)
      .apply(AuthMiddleware)
      .forRoutes('*')
      // Apply role-check middleware only to admin routes
      .apply(RoleCheckMiddleware)
      .forRoutes(
        { path: 'product', method: RequestMethod.POST },
        { path: 'product', method: RequestMethod.PUT },
        { path: 'product', method: RequestMethod.DELETE },
      );
  }
}