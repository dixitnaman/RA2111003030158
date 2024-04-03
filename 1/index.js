const express = require("express");

const app = express();

const structure = {
  windowPrevState: [],
  windowCurrState: [],
  numbers: [],
  avg: 0.0,
};

app.get("/numbers/:number", async (req, res) => {
  console.log(structure);
  structure.windowPrevState = structure.windowCurrState;
  const token = req.headers.authorization.split(" ")[1];
  let url = "http://20.244.56.144/test/";
  const param = req.params.number;
  if (param == "e") {
    url += "even";
  } else if (param == "f") {
    url += "fibo";
  } else if (param == "p") {
    url += "primes";
  } else if (param == "F") {
    url += "rand";
  } else {
    return res.status(404).json({
      success: false,
      message: "parameter wrong",
    });
  }
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resss = await response.json();
  const nums = resss.numbers;
  const filterd = nums.filter((e) => {
    return !structure.windowPrevState.includes(e);
  });
  const structurePrev = [...structure.windowPrevState];
  for (const ans of filterd) {
    if (structurePrev.length == 10) {
      structurePrev.shift();
    }
    structurePrev.push(ans);
  }
  structure.windowCurrState = structurePrev;
  let sum = 0;
  for (const ans of structurePrev) {
    sum += ans;
  }
  const avg = sum / structurePrev.length;
  structure.numbers = nums;
  structure.avg = avg;
  return res.status(200).json(structure);
});

app.listen(8080, (req, res) => {
  console.log("server created");
});
