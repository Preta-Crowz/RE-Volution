import { Client, Message, ICacheAdapter, Args } from '../deps.ts';
import { ICommand } from '../Base/command.ts';

export class WhoAmI implements ICommand {
  target = [
    "whoami",
    "who"
  ];
  args = {};
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(`Your tag is : \`${message.author.tag}\``);
  }
}