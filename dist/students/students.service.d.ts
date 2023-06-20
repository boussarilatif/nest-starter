import { EmailService } from 'src/email/email.service';
export declare class StudentsService {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(): void;
    findAll(): any[];
}
