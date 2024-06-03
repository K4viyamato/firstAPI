import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentsService } from '../services/students.service';
import { StudentsPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post()
  createStudent(@Body() studentPost: StudentsPost): Observable<StudentsPost> {
    return this.studentsService.createStudent(studentPost);
  }


  @Get()
  findAllStudents(): Observable<StudentsPost[]> {
    return this.studentsService.findAllStudents();
  }


  @Get(':id')
  findAStudent(@Param('id') id: number): Observable<StudentsPost> {
    return this.studentsService.findAStudent(id);
  }


  @Put(':id')
  updateStudent(
    @Param('id') id: number,
    @Body() studentPost: StudentsPost,
  ): Observable<UpdateResult> {
    return this.studentsService.updateStudent(id, studentPost);
  }

  @Delete(':id')
  deleteAStudent(@Param('id') id: number): Observable<DeleteResult> {
    return this.studentsService.deleteAStudent(id);
  }
}
