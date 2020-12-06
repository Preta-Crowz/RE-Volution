import { Client, Message, ICacheAdapter, Member, Args } from '../deps.ts';
import { ICommand } from '../Base/command.ts';

export class Kick implements ICommand {
  target = [
    "kick",
    "kill"
  ];
  args = {};
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    if (message.guild === undefined) return;
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
        await curr.kick();
        count++;
      } catch(e) {
        continue;
      }
    }
    message.channel.send(`Kicked members : ${count} / ${members.length}`)
  }
}