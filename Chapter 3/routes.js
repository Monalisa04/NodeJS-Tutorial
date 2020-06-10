const fs = require("fs");

const routesHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];
  if (url === "/") {
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"></input></form></body>'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(body);
    });
    req.on("end", () => {
      const parsedBuffer = Buffer.concat(body).toString();
      console.log("parsedBuffer", parsedBuffer);
      const msg = parsedBuffer.split("=")[1];
      console.log("msg", msg);
      fs.writeFileSync("message.txt", msg);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  
  res.setHeader("Content-Type", "text/html");
  res.write("<head></head>");
  res.write("<title>My nodejs page</title>");
  res.write("<body>Hello from node js</body>");
  res.end();
};
module.exports = routesHandler;
