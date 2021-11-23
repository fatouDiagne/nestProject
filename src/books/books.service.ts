import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from 'src/schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>){}
  
  async create(createBookDto: CreateBookDto):Promise<Book> {
    return new this.bookModel(createBookDto).save();
  }

   async  findAll() {
    return this.bookModel.find();
  }

  async findOne(name: string) {
    return this.bookModel.findOne({ name });
  }

  async update(name: string, updateBookDto: UpdateBookDto) {
    return this.bookModel.updateOne({name}, {$set: { ...updateBookDto}});
  }

  async remove(name: string) {
    return this.bookModel.deleteOne({name});
  }
}
