import { StudentsService } from 'src/students/students.service';
export declare class ClassesService {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findAll(): any[];
}
