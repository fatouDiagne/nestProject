import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    //Strategie d'authentification local Passport avec 
    //lit en premier ce fonction
    constructor(private authService: AuthService){
        super();
    }
    //chercher user dans authservice
    //gérer par passport
    async validate(username: string, password: string):  Promise<any> {
        const user = await this.authService.validateUser(username, password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}