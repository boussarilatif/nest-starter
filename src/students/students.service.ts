import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  constructor() {
    console.log('[StudentsService] instance is created')
  }

  findAll(){
    return []
  }
}