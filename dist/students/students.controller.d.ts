import { StudentsService } from './students.service';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    findAll(): any[];
}
