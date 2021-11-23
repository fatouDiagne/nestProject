import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
//pour spécifier qu'on utilise la stratégie local
export class LocalAuthGuard extends AuthGuard('local') {
   
   /* async canActivate(context: ExecutionContext ) {
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();

        await super.logIn(request);
        return result;
    }*/

}  