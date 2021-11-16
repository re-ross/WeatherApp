require('dotenv').config();
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const { inRange, toUpper } = require("lodash");
const chalk = require("chalk");

const redisWrapper = require("./redis-wrapper");
const { getCachedValue, setCachedValue } = redisWrapper;

const ASCIIFolder = require("fold-to-ascii"); // for input sanitization.

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
const api_key = process.env.REACT_APP_WEATHER_KEY
const openWeatherMapURL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

app.get("/city-weather/:city", (req, res) => {
  const city = req.query.city;
  const pathCity = req.params.city;
  try {
    axios.get(openWeatherMapURL(pathCity)).then((apiResponse) => {
      const weatherResponse = apiResponse.data;
      console.log(
        chalk.green("weatherResponse successfully retrieved from the API ✅ ")
      );
      res.status(200).send(weatherResponse);
    });
  } catch (err) {
    res.status(500).send({ error: true, message: err.message });
  }
});

const fetchAndUpdateCache = async ({ key }, res) => {
 },;
