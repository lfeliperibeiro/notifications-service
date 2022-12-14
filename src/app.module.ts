import { Module } from '@nestjs/common';
import { HttpModule } from './infrastruture/http/http.module';
import { DatabaseModule } from './infrastruture/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
