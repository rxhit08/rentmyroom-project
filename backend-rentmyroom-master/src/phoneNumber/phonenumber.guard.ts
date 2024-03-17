// phone-number.guard.ts
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PhoneNumberGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request['user']);
    if (
      request['user'].role === 'user' ||
      request['user'].role === 'owner' ||
      request['user'].role === 'admin'
    ) {
      return true;
    }
    return false;
  }
}
