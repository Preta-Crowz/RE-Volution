import { Client, Message, ICacheAdapter } from 'https://raw.githubusercontent.com/harmony-org/harmony/main/mod.ts';
import { Args } from 'https://deno.land/std@0.79.0/flags/mod.ts';
import { ICommand } from '../Base/command.ts';

export class Parse implements ICommand {
  target = [
    "parse"
  ];
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(`Parsed args : ${JSON.stringify(args)}`);
  }
}