import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';
import { log } from 'util';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(name: string): MiddlewareFunction {
    return (req, res, next) => {
      log(`[${name}] Request...`);
      log(req.body);
      next();
    };
  }
}
