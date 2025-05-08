const express = require("express");
const morgan = require("morgan");
const color = require("colors");
// const path = require("path");

const cors = require("cors");
const db_connection = require("./src/config/db");
const { port } = require("./src/constant");
const blogRouter = require("./src/routes/blog.route");
// const doctorRouter = require("./src/routes/doctor.routes");
// const adminRouter = require("./src/routes/admin.routes");

//rest object
const app = express();

//middleware
app.use(cors());

// // Handle preflight requests for all routes
// app.options("*", cors());

// app.use((req, res, next) => {
//   console.log(`Incoming request from origin: ${req.headers.origin}`);
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/blog", blogRouter);
// app.use("/api/v1/doctor", doctorRouter);
// app.use("/api/v1/admin", adminRouter);

// //static files
// app.use(express.static(path.join(__dirname, "./../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./../client/dist/index.html"));
// });
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Dr. Appointment API</h1>");
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
    message: "Route not found",
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
