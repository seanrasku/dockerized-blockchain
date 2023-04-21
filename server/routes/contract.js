const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.post("/contract", (req, res) => {
  try {
    const name = req.body.name.toLowerCase();
    let obj = {
      abi: "",
      bin: "",
    };
    fs.readdirSync(path.resolve(__dirname, "../compiled")).map((c) => {
      const l = c.toLowerCase();
      console.log(c);
      const split = l.split("_");

      if (split[1] === name) {
        if (split[3] === `${name}.abi`) {
          const file = fs.readFileSync(
            path.resolve(__dirname, `../compiled/${c}`),
            "utf8"
          );
          console.log(file);
          obj["abi"] = file;
          console.log(obj["abi"]);
        } else if (split[3] === `${name}.bin`) {
          const file2 = fs.readFileSync(
            path.resolve(__dirname, `../compiled/${c}`),
            "utf8"
          );
          obj["bin"] = file2;
        }

        if (obj["abi"] !== "" && obj["bin"] !== "") {
          res.json(obj);
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
