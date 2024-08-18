import express from "express";

import { Database } from "./types";

export const app = express();

export function main() {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
