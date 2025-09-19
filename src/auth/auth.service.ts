import { Body, Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { SignInDTO, SignUpDTO } from './dtos/auth';

@Injectable()
export class AuthService {
    
    async signup(@Body() body: SignUpDTO) {
        console.log(body);
        return body;
    }

    async signin(@Body() body: SignInDTO) {
        console.log(body);
        return body;
    }
}