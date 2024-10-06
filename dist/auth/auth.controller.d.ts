import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private jwtService;
    constructor(jwtService: JwtService);
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        message?: undefined;
    } | {
        message: string;
        access_token?: undefined;
    }>;
}
