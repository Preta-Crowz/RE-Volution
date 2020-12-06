import { Client, Message, ICacheAdapter, Args } from '../deps.ts';
import { ICommand } from '../Base/command.ts';

export class Parse implements ICommand {
  target = [
    "parse"
  ];
  args = {};
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(`Parsed args : ${JSON.stringify(args)}`);
  }
}