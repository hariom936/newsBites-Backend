import "reflect-metadata";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from 'cors';
import compression from "compression";
import { setupEnv } from "./config/setupEnv";
import mongoose from "mongoose";
import dbConfig from "../src/config/database";
import config from "../src/config/config";
import express from "express";
// import "reflect-metadata";
import { useContainer } from "routing-controllers";
import { Container } from "typedi";

import { useExpressServer } from "routing-controllers";


import databaseConstants from "./constant/databaseConstant";
import morgan from 'morgan';
import path from "path";

async function start() {
  await setupEnv();

  try {
    if (!dbConfig.primary || !dbConfig.primary.url) {
      throw new Error("Database URL is not defined");
    }

    await mongoose.connect(dbConfig.primary.url, dbConfig.primary.options);
    console.log("DB Connected");

    const port = config.port;
    const app = express(); // Create an express app
    // set security HTTP headers
    app.use(
      helmet({
        xssFilter: true,
        xPoweredBy: true,
        contentSecurityPolicy: {
          directives: config.contentSecurityDirectives,
        },
      })
    );
    /// parse json request body
    app.use(express.json({ limit: databaseConstants.JSON_PAYLOAD_LIMIT }));
    // parse text request body
    app.use(express.text());
    // parse req cookies
    app.use(cookieParser());
    // parse urlencoded request body
    app.use(express.urlencoded({ extended: true }));
    // request body compression
    app.use(compression());
    // enable cors
    app.use(cors(config.corsOptions));
    app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

    useContainer(Container);
    // Set up controllers
    useExpressServer(app, {
      routePrefix: "/api", // optional but recommended
      controllers: [path.join(__dirname, "/controllers/v*/*Controller.{ts,js}")],
      middlewares: [path.join(__dirname, "/middlewares/**/*Middleware.{ts,js}")],

      classTransformer: false, // 🔥 VERY IMPORTANT FIX
      validation: false,       // optional (enable later if needed)
    });
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

start();
