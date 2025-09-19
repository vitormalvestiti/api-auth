import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';

@Controller('auth')
export class AuthController {

    @Post('signup')
    async signup(@Body() body: SignUpDTO) { 
        console.log(body);

        return body;
    }

    @Post('signin')
    async signin(@Body() body: SignInDTO) { 
        console.log(body);

        return body;
    }



}
