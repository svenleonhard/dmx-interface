import { ChannelsController } from './channels.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Channel } from './channels.entity';
import { ChannelRepository } from './channels.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Channel, ChannelRepository])],
    controllers: [ChannelsController],
})
export class ChannelsModule {}
