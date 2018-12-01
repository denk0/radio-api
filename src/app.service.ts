import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Api service for <a target="_blank" href="https://chifir.online">chifir.online</a>';
  }
}
