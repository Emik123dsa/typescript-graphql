import "reflect-metadata";

import * as Bootstrap from "./@server/Bootstrap";

const init = new Bootstrap(); 

import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();

import { Request, Response } from "express";

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("*", (req: Request, res: Response) => {

  return res.status(200).json({
    "hello": req.query
  })
});

// app.listen(PORT, () => console.log(`Server is listening: ${PORT}`));

