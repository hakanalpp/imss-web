import { Options } from "@mikro-orm/core";
import { Logger } from "@nestjs/common";

const logger = new Logger("MikroORM");

const config: Options = {
  entities: [],
  type: "mariadb",
  host: process.env.NX_DB_HOST,
  dbName: process.env.NX_DB_DATABASE,
  port: Number(process.env.NX_DB_PORT),
  user: process.env.NX_DB_USERNAME,
  password: process.env.NX_DB_PASSWORD,
  logger: logger.log.bind(logger),
};
export default config;
