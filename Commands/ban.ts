import { Client, Message, ICacheAdapter, Member, Args } from '../deps.ts';
import { ICommand } from '../Base/command.ts';

export class Ban implements ICommand {
  target = [
    "ban",
    "rm"
  ];
  args = {
      "reason": "r",
      "days": "d"
  };
  async run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>{
    if (message.guild === undefined) return;
    console.dir(args)
    let reason:string = "reason" in args ? args.reason : "No reason was set";
    let del:number = "days" in args ? parseInt(args.days) : 0;
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
    message.channel.send(`Banned members : ${count} / ${members.length}\nReason : ${reason}`)
  }
}