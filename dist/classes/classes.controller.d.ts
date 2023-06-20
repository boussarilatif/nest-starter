import { ClassesService } from './classes.service';
export declare class ClassesController {
    private classesService;
    constructor(classesService: ClassesService);
    findAll(): any[];
}
