import { Client, Message, ICacheAdapter } from 'https://raw.githubusercontent.com/harmony-org/harmony/main/mod.ts';
import { Args } from 'https://deno.land/std@0.79.0/flags/mod.ts';

export interface ICommand {
  target: string[];
  // todo: check required permission
  // constructor(): void;
  run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>;
}