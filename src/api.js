import axios from "axios";
const moment = require("moment");

const nasaAPI = axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod",
  params: { api_key: process.env.REACT_APP_apikey },
});

const fetchPics = (page) => {
  const params = {
    start_date: moment()
      .subtract(2 * page, "days")
      .format("YYYY-MM-DD"),
    end_date: moment()
      .subtract(2 * page - 2, "days")
      .format("YYYY-MM-DD"),
  };
  return nasaAPI.get("/", { params });
};

export { fetchPics };
