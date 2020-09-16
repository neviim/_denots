import { App } from './deps.ts';

const app = new App();

app.listen({ port: 3000 });
console.log('Server rodando em http://localhost:3000');