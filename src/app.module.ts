import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadModule } from './modulesUpload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [BooksModule,UploadModule,MongooseModule.forRoot('mongodb://localhost/test'),MulterModule.register({
    dest: '../uploads',
  }), AuthModule, UsersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
  