import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FixturesController } from './fixtures/fixtures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FixturesService } from './fixtures/fixtures.service';
import { ChannelsController } from './channels/channels.controller';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'dmx',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    ChannelsModule,
  ],
  controllers: [AppController, FixturesController],
  providers: [AppService, FixturesService],
})
export class AppModule {}
