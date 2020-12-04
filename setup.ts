import { ensureFileSync, ensureDirSync } from "https://deno.land/std@0.79.0/fs/mod.ts";
import { getFiles } from "https://deno.land/x/getfiles@v1.0.0/mod.ts"
import { config } from './config.ts';

const files = [...getFiles("./Commands")]
  .map((f) => f.name).sort();
let content = "";
for (const f of files) {
  content += `export * from "../Commands/${f}";\n`;
}
ensureDirSync("./Data")
ensureFileSync("./Data/Commands.ts");
Deno.writeFileSync("./Data/Commands.ts", new TextEncoder().encode(content));
if (config.debug){
    ensureFileSync("./Data/debug.log");
    Deno.writeTextFile("./Data/debug.log", `Logging started at ${Date()}`);
}