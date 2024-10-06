"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const product_module_1 = require("./product/product.module");
const auth_middleware_1 = require("./middleware/auth.middleware");
const role_check_middleware_1 = require("./middleware/role-check.middleware");
const product_entity_1 = require("./product/product.entity");
const jwt_strategy_1 = require("./auth/jwt.strategy");
const auth_controller_1 = require("./auth/auth.controller");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes('*')
            .apply(role_check_middleware_1.RoleCheckMiddleware)
            .forRoutes({ path: 'product', method: common_1.RequestMethod.POST }, { path: 'product', method: common_1.RequestMethod.PUT }, { path: 'product', method: common_1.RequestMethod.DELETE });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'afadmin',
                database: 'MOTOR_INSURANCE_WEBSITE',
                entities: [product_entity_1.Product],
                synchronize: true,
            }),
            jwt_1.JwtModule.register({
                secret: 'secretKey',
                signOptions: { expiresIn: '60m' },
            }),
            product_module_1.ProductModule,
        ],
        providers: [jwt_strategy_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map