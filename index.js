const jsonServer=require("json-server");
const server =jsonServer.create();
const router=jsonServer.router("db.json");
const middleware=jsonServer.defaults();
const port=process.env.port || 3200;
const corse=require("cors");
// const middlewares = jsonServer.defaults({ noCors: true })

server.use(corse());
server.use(middleware);
server.use(router);
server.listen(port);