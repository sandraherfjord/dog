import { Global, Module, Injectable } from '@nestjs/common';
import { PrismaClient } from '@dog/db';

@Injectable()
export class PrismaService extends PrismaClient {}

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
