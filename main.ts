import { Client, Message, Intents, DefaultCacheAdapter,
  RedisCacheAdapter, ICacheAdapter } from '../harmony/mod.ts';
import { Args } from 'https://deno.land/std@0.77.0/flags/mod.ts';

import { Parse } from './Util/parser.ts';
import { Commands } from './Processor/command.ts';

import { config } from './config.ts';
const client:Client = new Client();
const CacheStorage:ICacheAdapter = config.redisEnabled ?
  new RedisCacheAdapter(config.redis)
  : new DefaultCacheAdapter();

client.on('ready', () => {
  console.log(`Ready! User: ${client.user?.tag}`);
  client.debug('Ready', `Current timestamp : ${Date.now()}`)
  client.debug('Ready', Date());
});

client.on('messageCreate', async (msg: Message): Promise<void> => {
  if (msg.content.substr(0,2) !== "p!" || msg.author.bot) return;
  let parsed:Args = await CacheStorage.get('command', msg.content);
  if (parsed === undefined) {
    parsed = Parse(msg.content);
    await CacheStorage.set('command', msg.content, parsed);
    client.debug('Preprocessor', `New command parsed : ${msg.content}`);
  }

  let command:string = parsed._[0].toString().substr(2);
  let execute = Commands.get(command);
  if (execute !== undefined){
    client.debug('Preprocessor', `Found command for : ${command}`)
    execute.run(parsed, client, msg, CacheStorage);
  } else {
    client.debug('Preprocessor', `Unknown Command : ${command}`)
  }
});

if (config.debug) client.on('debug', console.debug)

client.connect(config.token, Intents.All);