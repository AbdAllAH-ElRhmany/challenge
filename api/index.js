const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");
const hpp = require("hpp");

const announcementRouter = require("./routes/announcement");
const quizRouter = require("./routes/quiz");

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan());
app.use(xss());

// Limit requests from same IP at 1 hour
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests form this IP, please try again in an hour!",
});

app.use("/api", limiter);

app.use(
  hpp({
    whitelist: ["limit"],
  })
);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("DB connected Successfully"))
  .catch((err) => console.log(err));

app.use("/api/announcements", announcementRouter);
app.use("/api/quizzes", quizRouter);

app.listen(process.env.PORT, () => {
  console.log("App Running On Port 8000");
});
