<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Product API Documentation

## Step by Step Guide

### 1. Install Required Packages

Run the following commands to install necessary dependencies:

- Swagger:
  ```bash
  $ npm install

  
## Project setup

```bash
$ npm install
```
## Create Product Module, Controller, and Service
- Create a module, controller, and service for handling Product API operations such as GET, POST, PUT, DELETE.

## Define DTOs (Data Transfer Objects)
- Create DTOs to validate the input data for each of the endpoints. These DTOs will ensure the structure of incoming requests.

## Configure Swagger to Generate API Documentation
- In main.ts, configure Swagger to automatically generate API documentation for your endpoints:
```bash
const config = new DocumentBuilder()
  .setTitle('Product API')
  .setDescription('The product API description')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
```
## Add Swagger Decorators to DTOs
- In app.module.ts, configure TypeORM as follows:
```bash
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'yourUsername',
  password: 'yourPassword',
  database: 'MOTOR_INSURANCE_WEBSITE',
  entities: [Product],
  synchronize: true,
}),
```
- Ensure you use the correct PostgreSQL username and password.
- Update app.module.ts to include the TypeORM configuration.
- Create the Product Entity to map to the PRODUCT table in PostgreSQL.
- Register the Product entity in the ProductModule

## Implement User Role Checking
- Configure JWT Strategy : Implement JWT authentication and role-based access control. Ensure that the correct secret key is used ('secretKey' in this case).
- We will create two middlewares:
- JWT Authentication Middleware: Ensures a valid JWT token is provided.
- Role Checking Middleware: Verifies if the authenticated user has the appropriate role (e.g., admin).
- Apply authentication middleware globally to ensure that all routes require authentication. Apply the role-checking middleware to specific routes (e.g., POST, PUT, DELETE for admin access).

## Generate JWT Tokens
- Create a simple login controller or generate tokens manually using jwt.io. Use the following JWT payload for testing:
- Admin : { "Username": "John Wick", "role": "admin" }
- User : { "Username": "John Doe", "role": "admin" }
- Ensure the token is signed with the secret key 'secretKey'.

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
- Visit http://localhost:3000/api to view the Swagger documentation and test the endpoints.
- Use /auth/login to obtain a JWT token for making authenticated API calls.
- Click the "Authorize" button in Swagger UI and enter your JWT token to authorize subsequent API requests.

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
