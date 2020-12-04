import { Client, Message, ICacheAdapter } from 'https://raw.githubusercontent.com/harmony-org/harmony/main/mod.ts';
import { Args } from 'https://deno.land/std@0.79.0/flags/mod.ts';
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