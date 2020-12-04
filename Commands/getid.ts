import { Client, Message, ICacheAdapter, Args } from '../deps.ts';
import { ICommand } from '../Base/command.ts';

export class GetId implements ICommand {
  target = [
    "id",
    "top"
  ];
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(`User Mentions : ${JSON.stringify(message.mentions.users.map((v) => v.id))}
Channel Mentions : ${JSON.stringify(message.mentions.channels.map((v) => v.id))}
Role Mentions : ${JSON.stringify(message.mentions.roles.map((v) => v.id))}`)
  }
}