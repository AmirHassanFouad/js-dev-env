import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    // eslint-disable-next-line no-console
    return console.log(chalk.red(err));
  } else {
    // eslint-disable-next-line no-console
    console.log(chalk.green("Mock data generated"));
  }
});
