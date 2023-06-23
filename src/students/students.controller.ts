import { Controller, Get } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {
    console.log('[StudentsController] instance is created')
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }
}