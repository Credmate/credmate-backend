import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SearchModule } from './search/search.module';
import { HealthModule } from './common/health/health.module';
import { BorrowerModule } from './borrower/borrower.module';
import { PaymentModule } from './payment/payment.module';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { LenderRequestModule } from './lender/lender-request.module';
import { CreditModule } from './credit/credit.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    PrismaModule,
    AuthModule,
    UserModule,
    SearchModule,
    HealthModule,
    BorrowerModule,
    PaymentModule,
    LenderRequestModule,
    CreditModule,
    ContractsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
