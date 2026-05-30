const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const http = require("http");

const { Server } = require("socket.io");

const path = require("path");

const connectDB = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");

const authRoutes = require("./routes/authRoutes");

const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

connectDB();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {

  cors: {

    origin: "http://localhost:5173",

    methods: ["GET", "POST"],

  },
});

// SOCKET CONNECTION
io.on("connection", (socket) => {

  console.log("User Connected");

  // RECEIVE MESSAGE
  socket.on("send_message", (data) => {

    io.emit("receive_message", data);
  });

  // DISCONNECT
  socket.on("disconnect", () => {

    console.log("User Disconnected");
  });
});

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use("/api/contact", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {

  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});