import { Client, Message, ICacheAdapter } from 'https://deno.land/x/harmony@v0.9.1/mod.ts';
import { Args } from 'https://deno.land/std@0.77.0/flags/mod.ts';
import { ICommand } from '../Base/command.ts';

export class Ban implements ICommand {
  target = [
    "ban",
    "rm"
  ];
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(`Your tag is : \`${message.author.tag}\``);
  }
}