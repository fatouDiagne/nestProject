import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as Passport from 'passport';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialilized: false,
      cookie: { maxAge: 3600000 },
    }),
  );


  await app.listen(3000);
}
bootstrap();
