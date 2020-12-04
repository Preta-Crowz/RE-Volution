import { Client, Message, ICacheAdapter, Args } from '../deps.ts';
import { ICommand } from '../Base/command.ts';

export class Ping implements ICommand {
  target = [
    "ping",
    "pong"
  ];
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(`Current Ping : ${client.ping}`);
  }
}