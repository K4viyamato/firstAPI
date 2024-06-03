import { Module } from '@nestjs/common';
import { StudentsService } from './services/students.service'
import { StudentsController } from './controller/students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsPostEntity } from './models/post.entity';

@Module({
    imports : [
        TypeOrmModule.forFeature([StudentsPostEntity])
    ],
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
