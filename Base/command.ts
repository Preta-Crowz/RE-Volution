import { Client, Message, ICacheAdapter } from '../../harmony/mod.ts';
import { Args } from 'https://deno.land/std@0.77.0/flags/mod.ts';

export interface ICommand {
  target: string[];
  // todo: check required permission
  // constructor(): void;
  run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>;
}