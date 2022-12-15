import { Module } from '@nestjs/common';
import { HttpModule } from '@infrastructure/http/http.module';
import { DatabaseModule } from '@infrastructure/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
