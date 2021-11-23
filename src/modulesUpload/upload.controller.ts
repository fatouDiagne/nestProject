import {  Controller, Post,Body, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { FileInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./config";

//import { FileDto } from './dto/file.dto';
import * as path from 'path';


const pngFileFilter = (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (ext !== '.png') {
      req.fileValidationError = 'Invalid file type';
      return callback(new Error('Invalid file type'), false);
    }
    return callback(null, true);
  };




@Controller('upload')
export class UploadController {

    constructor(){}

    @Post()
    @UseInterceptors(FilesInterceptor('files',4,multerOptions))
  logFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    //console.log(fileDto);
    return 'Done';
  }





 /* @Post('uploadds')
@UseInterceptors(FileFieldsInterceptor([
  { name: 'avatar', maxCount: 1 },
  { name: 'background', maxCount: 1 },
],multerOptions))
  async  uploadFile(@UploadedFiles() files/*: { avatar?: Express.Multer.File[], background?: Express.Multer.File[] }) {
  
}*/











//un seul fichier
  /*  @Post()
    @UseInterceptors(FilesInterceptor('file',null,multerOptions))
    async uploadFile(@UploadedFiles() file) {
        console.log(file)
    }*/


    /*uploadSingle(@UploadedFile() file) {
        console.log(file);
    }*/


}