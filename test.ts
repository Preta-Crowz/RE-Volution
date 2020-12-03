import { getFiles } from "https://deno.land/x/getfiles@v1.0.0/mod.ts"

const files = [...getFiles("./Commands")]
    .map((f) => f.name).sort();
let content = "";
for (const f of files) {
  content += `export * from "./Commands${f}";\n`;
}
Deno.writeFileSync("../Data/Commands.ts", new TextEncoder().encode(content));