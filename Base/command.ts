import { Client, Message, ICacheAdapter, Args } from '../deps.ts';

export interface ICommand {
  target: string[];
  args: Record<string, string | string[]>;
  // todo: check required permission
  // constructor(): void;
  run(args:Args, client:Client, message:Message, cache:ICacheAdapter): Promise<any>;
}