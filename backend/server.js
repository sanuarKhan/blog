const express = require("express");
const morgan = require("morgan");
const color = require("colors");
// const path = require("path");

const cors = require("cors");
const db_connection = require("./src/config/db");
const { port } = require("./src/constant");
const blogRouter = require("./src/routes/blog.route");
const userRouter = require("./src/routes/user.route");

//rest object
const app = express();

//middleware
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/admin", adminRouter);

app.get("/test", (req, res) => {
  res.send("<h1>Welcome to My Blog</h1>");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Not found: 404",
  });
});

//port
const PORT = port || 8080;

//listen
app.listen(PORT, () => {
  db_connection();
  console.log(
    `Server running in ${process.env.NODE_MODE} mode on port ${PORT}`.bgMagenta
      .dim.bold
  );
});
