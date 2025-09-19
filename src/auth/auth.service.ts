import { Body, Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    
    constructor(private prismaService: PrismaService){}

    async signup(@Body() body: SignUpDTO) {
        console.log(body);
        return body;
    }

    async signin(@Body() body: SignInDTO) {
        console.log(body);
        return body;
    }
}