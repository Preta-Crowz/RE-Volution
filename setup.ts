import { ensureFileSync } from "https://deno.land/std@0.79.0/fs/mod.ts";
import { getFiles } from "https://deno.land/x/getfiles@v1.0.0/mod.ts"

const files = [...getFiles("./Commands")]
  .map((f) => f.name).sort();
let content = "";
for (const f of files) {
  content += `export * from "../Commands/${f}";\n`;
}
ensureFileSync("./Data/Commands.ts");
Deno.writeFileSync("./Data/Commands.ts", new TextEncoder().encode(content));