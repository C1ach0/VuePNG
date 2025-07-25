import { Module } from '@nestjs/common';
import { ImageController } from '../controllers/image.controller';
import { ImageService } from '../services/image.service';

@Module({
  imports: [],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}