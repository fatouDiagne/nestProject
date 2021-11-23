import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

//aprés function auth.service on met a jour ce fichier en l'important
@Module({
    imports: [UsersModule,
              PassportModule,
              JwtModule.register({ secret: jwtConstants.secret,
                                    signOptions: {expiresIn: '120s'},
                                  }),
            ],
  providers: [AuthService, LocalStrategy/*, SessionSerializer*/],
  exports: [AuthService ],
})
export class AuthModule {}
