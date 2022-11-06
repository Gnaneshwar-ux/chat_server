console.log(" ---server--- ");

const io = require("socket.io")(3000);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("command", (data) => {
    console.log("Iam ", data);
  });
});
