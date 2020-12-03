import { Client, Message, ICacheAdapter } from 'https://deno.land/x/harmony@v0.9.1/mod.ts';
import { Args } from 'https://deno.land/std@0.77.0/flags/mod.ts';
import { ICommand } from '../Base/command.ts';

export class Kick implements ICommand {
  target = [
    "kick",
    "kill"
  ];
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    message.channel.send(JSON.stringify(message.mentions.channels.map((v) => [v.id])))
    // message.channel.send(JSON.stringify(message.mentions.map((v) => [typeof v])))
    // message.channel.send(`Found user : ${target.tag} `);
  }
}