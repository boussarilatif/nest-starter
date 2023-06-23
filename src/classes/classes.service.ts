import { Injectable } from '@nestjs/common';
import { StudentsService } from 'src/students/students.service';

@Injectable()
export class ClassesService {
  constructor(private readonly studentsService: StudentsService) {
    console.log('[ClassesService] instance is created')
  }

  findAll(){
    return []
  }
}