import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }*/

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.booksService.findOne(name);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }*/


  @Put(':name')
  update(@Param('name') name: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(name, updateBookDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.booksService.remove(name);
  }
}
