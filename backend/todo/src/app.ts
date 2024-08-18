import express from "express";
import { sql } from "kysely";

import { db } from "./database";
import { PORT } from "./config";

export const app = express();

export async function main() {
  if (process.env.NODE_ENV !== "production") {
    const dotenv = await import("dotenv");
    dotenv.config();
  }

  app.get("/health", async (req, res) => {
    let isDbConnected = false;

    const query = sql`SELECT 1`;
    try {
      await query.execute(db);
    } catch (error) {
      console.error(error);
      isDbConnected = false;
    }

    res.status(200).json({
      isDbConnected
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
