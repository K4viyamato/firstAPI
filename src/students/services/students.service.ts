import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { StudentsPostEntity } from '../models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentsPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentsPostEntity)
    private readonly studentsPostRepository: Repository<StudentsPostEntity>,
  ) {}

  createStudent(studentsPost: StudentsPost): Observable<StudentsPost> {
    return from(this.studentsPostRepository.save(studentsPost));
  }

  findAllStudents(): Observable<StudentsPost[]> {
    return from(this.studentsPostRepository.find());
  }

  findAStudent(id: number): Observable<StudentsPost> {
    return from(this.studentsPostRepository.findOne({ where: { id } }));
  }

  updateStudent(
    id: number,
    studentsPost: StudentsPost,
  ): Observable<UpdateResult> {
    return from(this.studentsPostRepository.update(id, studentsPost));
  }

  deleteAStudent(id: number): Observable<DeleteResult>{
    return from(this.studentsPostRepository.delete(id));
  }
}
