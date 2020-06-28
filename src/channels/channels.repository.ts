import { ChannelDto } from './interfaces/channels.dto';
import { Channel } from "./channels.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Channel)
export class ChannelRepository extends Repository<Channel> {
  createChannel = async (channelDto: ChannelDto) => {
    return await this.save(channelDto);
  };
}