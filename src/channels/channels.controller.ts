import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ChannelRepository } from './channels.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ChannelDto } from './interfaces/channels.dto';

@Controller('channels')
export class ChannelsController {

    constructor(
        @InjectRepository(ChannelRepository) private readonly channelRepository: ChannelRepository,
      ) {}

    @Get()
    getChannels() {
        return 'we get all Channels'
    }

    @Post()
    create(@Body() channelDto: ChannelDto) {
        return this.channelRepository.createChannel(channelDto)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the channel with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the channel with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the channel with the id ${id}`;
    }
}
