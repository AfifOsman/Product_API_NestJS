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

## Step by step
1.Install Required Packages
  a)npm install @nestjs/swagger swagger-ui-express
  b)npm install @nestjs/typeorm typeorm pg
  c)npm install @nestjs/jwt @nestjs/passport passport passport-jwt
 
2.Create Product Module, Controller, and Service
3.Define DTOs (Data Transfer Objects)
4.Configure Swagger to generate API documentation in main.ts
5.To make the DTOs visible in Swagger, add decorators provided by @nestjs/swagger.
6.Connect to PostgreSQL with TypeORM
  a)Configure TypeORM to connect to the PostgreSQL database named MOTOR_INSURANCE_WEBSITE
  b)Makesure use the correct PostgreSQL username and password
  c)Update the app.module.ts to include the TypeORM configuration
  d)Create the Product Entity that maps to the PRODUCT table in the database
  e)Register Product Entity in Product Module
7.For user role checking
  a)Configure JWT Strategy
  b)Setup Authentication and Roles Middleware
    i.We will create two pieces of middleware:
      1.JWT Authentication Middleware: Ensures that a valid JWT is provided. (Please provide the correct secret key: for this task we only set it as ‘secretKey’)
      2.Role Checking Middleware: Verifies if the authenticated user has the necessary role.
  c)Apply Middleware to Routes
  d)We will apply the AuthMiddleware globally (so all routes require authentication) and apply the RoleCheckMiddleware only to certain routes (like POST, PUT, and DELETE for admin access).
  e)Configure Middleware in app.module.ts
  f)To generate the JWT tokens, we should create a simple login controller that verifies user credentials and returns a token. For this test, we only generate token from https://jwt.io/ . Use this format to generate JWT token. For admin { "Username": "John   Wick","role": “admin”}. For user  { "Username": "John Doe","role": “user”}. Again, please remember to provide the same secret key (‘secretKey’) or else you will not authenticate.
8.Test the API
  a)Once you've completed all these steps,run the program. Visit http://localhost:3000/api to access the Swagger documentation and test the endpoints directly from the UI.
  b)By using the /auth/login endpoint, we can obtain a JWT token, and use it to authenticate the API calls.
  c)Swagger UI will show a "Authorize" button. You can enter the JWT token there to authorize all subsequent requests.
  
## Project setup

```bash
$ npm install
```


## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

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
