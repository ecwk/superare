import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

import { Database } from "./types";

const dialect = new PostgresDialect({
  pool: new Pool({
    // Connection information derived from environment
    // See: https://node-postgres.com/features/connecting
    max: 10
  })
});

export const db = new Kysely<Database>({ dialect });
