import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { FaceRecognitionService } from './services/face-recognition.service';
import awsConfig from '../config/aws.config';
import { AuthModule } from '../auth/auth.module';
import { AwsConfigService } from '../common/config/aws.config.service';
import { PrismaModule } from '../database/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forFeature(awsConfig), AuthModule, PrismaModule],
  controllers: [SearchController],
  providers: [SearchService, FaceRecognitionService, AwsConfigService],
  exports: [SearchService, FaceRecognitionService],
})
export class SearchModule {}
