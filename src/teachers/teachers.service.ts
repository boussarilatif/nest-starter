import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class TeachersService {
  constructor(private readonly emailService: EmailService) {}

  sendEmail() {
    //Here we can use this.emailService to send email to specific student
  }
}