import { EmailService } from 'src/email/email.service';
export declare class TeachersService {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendEmail(): void;
}
