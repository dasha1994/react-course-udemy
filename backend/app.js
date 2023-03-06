const bodyParser = require("body-parser");
const express = require("express");

const eventRoutes = require("./routes/events");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use(authRoutes);

app.use("/events", eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen(8080);

//{"events":[{"title":"A new event","image":"https://cdn.muenchen-p.de/fl_progressive,q_65/.imaging/stk/responsive/teaser300/dms/va-2016/muenchner-christkindlmarkt/christkindlmarkt-marienplat-logo-hp/document/christkindlmarkt-marienplat-logo-hp.jpg","date":"2022-10-01","description":"Some awesome event!","id":"2a42fcc4-ea21-4bdd-abf6-c40006dc66a9"}],"users":[{"email":"kozy.dasha@gmail.com","password":"$2a$12$rjmL7LEC8273d5zDZSxdsOtUf79Ei7IaD9.PDs4eFqwxJkXGurle2","id":"a8173863-0ebb-4d69-a01f-a33b4e2f8b2f"},{"email":"kozy.damsha@gmail.com","password":"$2a$12$RizQDYYO32CAygpEw6jp9uSvNWrbtkIb57mURtM3c6xXWgFL9OtNa","id":"53929c38-d3c9-4441-8072-b0405f53eabe"}]}
