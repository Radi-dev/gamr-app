import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:ffEKELKsFpBYcDcb8TUU@containers-us-west-54.railway.app:6626/railway?schema=public',
        },
      },
    });
  }
}
