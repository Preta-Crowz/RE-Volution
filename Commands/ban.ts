import { Client, Message, ICacheAdapter, Member } from 'https://raw.githubusercontent.com/harmony-org/harmony/main/mod.ts';
import { Args } from 'https://deno.land/std@0.79.0/flags/mod.ts';
import { ICommand } from '../Base/command.ts';

export class Ban implements ICommand {
  target = [
    "ban",
    "rm"
  ];
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    if (message.guild === undefined) return;
    let reason:string = "r" in args ? args.r : "No reason was set";
    let del:number = "d" in args ? parseInt(args.d) : 0;
    let idList:string[] = [...message.mentions.users].map((v) => v[0]);
    let members:Member[] = [];
    for(let id of idList){
      let m = await message.guild.members.get(id);
      if (m === undefined) continue;
      members.push(m);
    }
    let count:number = 0;
    for(let curr of members){
      try{
        await curr.ban(reason, del??undefined);
        count++;
      } catch(e) {
        console.log(e);
      }
    }
    message.channel.send(`Banned members : ${count} / ${members.length}`)
  }
}