import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import cors from "cors";
import bodyParser from "body-parser";
import { Task } from "./src/tasks/tasks.entity";

// Instantiate express app
const app: Express = express();
dotenv.config();

// Parse request body
app.use(bodyParser.json());

// Use CORS install types as well
app.use(cors());

// Create Database Connection
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

// Define server port
const port = process.env.PORT;

// Create a default route
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
