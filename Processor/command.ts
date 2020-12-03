import { ICommand } from '../Base/command.ts';
import * as importedCommands from '../Data/Commands.ts';
let rawCommands = new Map<string, any>(Object.entries({...importedCommands}))
export let Commands = new Map<string, ICommand>();
// console.dir(rawCommands);
for(var curr of rawCommands.keys()){
  // console.log(rawCommands.get(curr))
  let cmd:ICommand = new (rawCommands.get(curr))();
  for(var target of cmd.target){
    Commands.set(target, cmd);
  }
}