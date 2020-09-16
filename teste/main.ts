import { serve } from "https://deno.land/std@0.69.0/http/server.ts";
//import { App } from "./deps.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ body: "Ping Pong\n" });
}